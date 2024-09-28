"use client";

import { SubmitButton } from "@/app/components/submit-button";
import { wellKnownLanguages } from "../utils/constants";
import { useFormState, useFormStatus } from "react-dom";
import { analyseExpression } from "../actions";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import { formatExpression } from "../utils/functions";
import { SA_Div } from "@/app/components/sentence-analyser-answer-div";

interface SentenceAnalyserProps {
  nativeLanguage: string; // Accept nativeLanguage as a prop
}

export function SentenceAnalyser({ nativeLanguage }: SentenceAnalyserProps) {
  const { pending } = useFormStatus(); // Use form status to track pending state

  const [expressionAnaylsis, expressionAnalysisAction] = useFormState(
    analyseExpression,
    {
      expressionAnswer: "",
      error: null,
    }
  );

  const [formattedExpression, setFormattedExpression] = useState<string>("");

  useEffect(() => {
    if (expressionAnaylsis?.expressionAnswer) {
      setFormattedExpression(expressionAnaylsis.expressionAnswer);
      //console.log(expressionAnaylsis.expressionAnswer);
    }
  }, [expressionAnaylsis?.expressionAnswer]);

  const handleClear = () => {
    setFormattedExpression(""); // Clear formattedExpression when reset button is clicked
  };

  return (
    <>
      <div className="bg-base-300 border-base-300 rounded p-1 w-34 sm:w-94 md:w-[90rem] md:h-96">
        <form
          action={(formData) => {
            formData.append("nativeLanguage", nativeLanguage); // Append nativeLanguage to formData
            expressionAnalysisAction(formData);
          }}
        >
          <div>
            <label className="form-control">
              <div className="label sm:flex  md:ml-6">
                <span className="label-text text-xs font-bold min-[410px]:text-sm md:text-lg ">
                  Paste the text you would like to understand below.
                </span>
              </div>
              <div className="sm:flex sm:justify-center ">
                <textarea
                  name="sentence"
                  className="textarea textarea-bordered textarea-xs min-[410px]:textarea-md sm:h-24 md:h-64 md:mr-5 md:w-[680px] md:text-base"
                  placeholder="Example - バカが 誰がてめえの言葉なんか信用するか                                                                                           Max 150 characters"
                ></textarea>
                <SA_Div formattedExpression={formattedExpression} />
              </div>
            </label>
            <div className="mt-3 sm:mt-5 sm:flex md:pl-7">
              <SubmitButton Title="Generate Explanation" />

              <button
                className="btn btn-outline btn-xs rounded min-[410px]:btn-sm "
                type="reset"
                onClick={handleClear}
              >
                Clear
              </button>

              {expressionAnaylsis?.error ? (
                <div className="text-base text-red-600 flex justify-center md:mt-1 md:ml-2">
                  {expressionAnaylsis.error}
                </div>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
