"use client";

import { SubmitButton } from "@/app/components/submit-button";
import { wellKnownLanguages } from "../utils/constants";
import { useFormState } from "react-dom";
import { analyseExpression } from "../actions";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import { formatExpression } from "../utils/functions";

export function SentenceAnalyser() {
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
      console.log(expressionAnaylsis.expressionAnswer);
    }
  }, [expressionAnaylsis?.expressionAnswer]);

  return (
    <>
      <div className="bg-base-100 border-base-300 rounded-box p-6 max-w-xs sm:max-w-sm md:max-w-md">
        <form action={expressionAnalysisAction}>
          <div>
            <label className="form-control">
              <div className="label sm:flex sm:justify-center">
                <span className="label-text text-xs min-[410px]:text-sm md:text-base">
                  Explore the Meaning of a Sentence from Any Language
                </span>
              </div>
              <div className="sm:flex sm:justify-center">
                <textarea
                  name="sentence"
                  className="textarea textarea-bordered textarea-xs min-[410px]:textarea-md w-full max-w-xs md:max-w-md sm:h-24"
                  placeholder="Paste your sentence here..."
                ></textarea>
              </div>
            </label>
            <div className="mt-3 sm:mt-5 sm:flex sm:justify-center">
              <button
                className="btn btn-outline btn-xs min-[410px]:btn-sm"
                type="reset"
              >
                Clear Field
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-items-start sm:flex sm:justify-center mt-2">
            <div>
              <div className="label w-56 sm:w-72">
                <span className="label-text text-xs min-[410px]:text-sm md:text-base">
                  Select your native language
                </span>
              </div>
              <select
                name="nativeLanguage"
                className="select select-primary w-full select-xs min-[410px]:select-sm max-w-xs sm:max-w-md"
              >
                {wellKnownLanguages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <SubmitButton Title="Translate and Learn" />

          <div>
            {formattedExpression ? (
              <div
                id="sentence-answer"
                className="mt-5 sm:mt-10 text-xs min-[410px]:text-sm md:text-base bg-blue-100 p-2 rounded-md"
              >
                <p>
                  <Markdown>{formattedExpression}</Markdown>
                </p>
              </div>
            ) : null}
            {expressionAnaylsis?.error ? (
              <div className="mt-5 sm:mt-10 text-xs min-[410px]:text-sm text-red-600 flex justify-center">
                {expressionAnaylsis.error}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
}
