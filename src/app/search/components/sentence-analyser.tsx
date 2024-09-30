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
    },
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
      <div className="w-screen border-base-300 bg-base-300 p-1 pb-14 md:h-96 md:max-w-screen-2xl md:rounded">
        <form
          action={(formData) => {
            formData.append("nativeLanguage", nativeLanguage); // Append nativeLanguage to formData
            expressionAnalysisAction(formData);
          }}
        >
          <div id="form-container">
            <label className="form-control">
              <div className="label md:ml-1">
                <span className="label-text text-xs font-bold md:text-lg">
                  Paste the sentence you would like to understand
                </span>
              </div>

              <div className="mb-2 flex pl-1 sm:justify-center md:flex md:justify-evenly">
                <textarea
                  name="sentence"
                  className="textarea textarea-bordered textarea-xs h-16 min-w-[19rem] flex-grow min-[390px]:min-w-[23rem] sm:h-20 md:mr-5 md:h-64 md:w-[41.5rem] md:flex-grow-0 md:text-sm lg:text-base"
                  placeholder="Example - バカが 誰がてめえの言葉なんか信用するか                                                                                           Max 100 characters"
                ></textarea>

                <div
                  id="ipad-and-above-sentence-analyser-answer-container"
                  className="hidden md:block"
                >
                  <SA_Div formattedExpression={formattedExpression} />
                </div>

                {expressionAnaylsis?.error ? (
                  <div className="mb-2 text-xs font-bold text-red-600 md:ml-2 md:mt-1 md:hidden md:text-base">
                    {expressionAnaylsis.error}
                  </div>
                ) : null}
              </div>

              <div
                id="mobile-sentence-analyser-button-container"
                className="mb-2 flex pl-1 md:hidden"
              >
                <SubmitButton Title="Generate Explanation" />
                <button
                  className="btn btn-outline btn-xs ml-4 rounded min-[390px]:btn-sm"
                  type="reset"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>

              <div
                id="mobile-sentence-analyser-answer-container"
                className="md:hidden"
              >
                <SA_Div formattedExpression={formattedExpression} />
              </div>
            </label>

            <div className="mt-3 hidden sm:flex md:mt-0 md:block md:pl-1">
              {expressionAnaylsis?.error ? (
                <div className="text-base text-red-600 md:mb-1 md:ml-2">
                  {expressionAnaylsis.error}
                </div>
              ) : null}
              <SubmitButton Title="Generate Explanation" />

              <button
                className="btn btn-outline btn-xs rounded min-[390px]:btn-sm md:ml-4"
                type="reset"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
