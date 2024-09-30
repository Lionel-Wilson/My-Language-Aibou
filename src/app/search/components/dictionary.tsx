"use client";

import { SubmitButton } from "@/app/components/submit-button";
import { wellKnownLanguages } from "../utils/constants";
import { useFormState } from "react-dom";
import { defineWord, getSynonyms } from "../actions";
import { formatExpression } from "../utils/functions";
import { DictionaryAnswerDiv } from "@/app/components/dictionary-answer-div";
import { useEffect, useState } from "react";

interface DictionaryProps {
  nativeLanguage: string; // Accept nativeLanguage as a prop
}

export function Dictionary({ nativeLanguage }: DictionaryProps) {
  const [wordDefinition, dictionaryAction] = useFormState(defineWord, {
    wordAnswer: "",
    error: null,
  });

  const [wordSynonyms, thesaurusAction] = useFormState(getSynonyms, {
    wordAnswer: "",
    error: null,
  });

  const [Definition, setDefinition] = useState<string>("");
  const [Synonyms, setSynonym] = useState<string>("");

  useEffect(() => {
    if (wordDefinition?.wordAnswer) {
      setDefinition(wordDefinition.wordAnswer);
    }
    if (wordSynonyms?.wordAnswer) {
      setSynonym(wordSynonyms.wordAnswer);
    }
  }, [wordDefinition?.wordAnswer, wordSynonyms?.wordAnswer]);

  const handleClear = () => {
    setDefinition("");
    setSynonym("");
  };

  return (
    <>
      <div className="w-screen rounded border-base-300 bg-base-300 p-1 pb-10 md:h-[28rem] md:max-w-screen-2xl">
        <form
          action={(formData) => {
            formData.append("nativeLanguage", nativeLanguage); // Append nativeLanguage to formData
            dictionaryAction(formData);
            thesaurusAction(formData);
          }}
        >
          <div>
            <label className="form-control">
              <div className="label pl-2 sm:flex lg:pl-9">
                <span className="label-text text-xs font-bold min-[390px]:text-sm md:text-lg">
                  Search for a word&apos;s definition
                </span>
              </div>

              <div
                id="search-bar-container"
                className="mb-3 flex flex-row pl-1"
              >
                <label className="input input-xs input-bordered flex w-64 grow items-center gap-2 min-[390px]:input-sm md:input-md">
                  <input
                    type="text"
                    name="word"
                    className="grow"
                    placeholder="Example - バカ"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <button
                  className="btn btn-outline btn-xs ml-4 rounded min-[390px]:btn-sm md:ml-3 md:mt-2"
                  type="reset"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>

              <div className="pl-1">
                <DictionaryAnswerDiv
                  wordDefinition={Definition}
                  wordSynonyms={Synonyms}
                />
              </div>
            </label>
            <div className="sm:flex lg:mt-2 lg:pl-7">
              {wordDefinition?.error ? (
                <div className="flex justify-center text-base text-red-600 md:ml-2 md:mt-1">
                  {wordDefinition.error}
                </div>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
