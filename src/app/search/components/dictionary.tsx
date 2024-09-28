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
      <div className="bg-base-300 border-base-300 rounded p-1 w-34 sm:w-94 md:w-[90rem] md:h-[28rem]">
        <form
          action={(formData) => {
            formData.append("nativeLanguage", nativeLanguage); // Append nativeLanguage to formData
            dictionaryAction(formData);
            thesaurusAction(formData);
          }}
        >
          <div>
            <label className="form-control">
              <div className="pl-9 label sm:flex  ">
                <span className="label-text text-xs font-bold min-[410px]:text-sm md:text-lg ">
                  Search for a word's definition
                </span>
              </div>
              <div>
                <div className="pl-9 mb-3 flex flex-row">
                  <label className="input input-bordered input-md w-full max-w-xs flex items-center gap-2">
                    <input
                      type="text"
                      name="word"
                      className="grow "
                      placeholder="Example - バカ"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </label>
                  <button
                    className="btn btn-outline btn-xs ml-3 mt-2 rounded min-[410px]:btn-sm "
                    type="reset"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
                <div>
                  <DictionaryAnswerDiv
                    wordDefinition={Definition}
                    wordSynonyms={Synonyms}
                  />
                </div>
              </div>
            </label>
            <div className="mt-2 sm:flex md:pl-7">
              {wordDefinition?.error ? (
                <div className="text-base text-red-600 flex justify-center md:mt-1 md:ml-2">
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
