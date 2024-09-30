"use client";

import { SubmitButton } from "@/app/components/submit-button";
import { wellKnownLanguages } from "../utils/constants";
import { useFormState } from "react-dom";
import { getSynonyms } from "../actions";
import { formatExpression } from "../utils/functions";

export function Thesaurus() {
  const [wordSynonyms, thesaurusAction] = useFormState(getSynonyms, {
    wordAnswer: "",
    error: null,
  });

  return (
    <>
      <div className="max-w-xs rounded-box border-base-300 bg-base-100 p-6 sm:max-w-sm md:max-w-md">
        <form action={thesaurusAction}>
          <div>
            <label className="form-control">
              <div className="label sm:flex sm:justify-center">
                <span className="label-text text-xs min-[390px]:text-sm md:text-base">
                  Find easier words with the same meaning in your target
                  language, explained in your own language.
                </span>
              </div>
              <div className="sm:flex sm:justify-center">
                <label className="input input-xs input-bordered flex w-full max-w-xs items-center gap-2 min-[390px]:input-sm 2xl:input-md md:max-w-md">
                  <input
                    type="text"
                    name="word"
                    className="grow"
                    placeholder="Search"
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
              </div>
              <div className="mt-3 sm:mt-5 sm:flex sm:justify-center">
                <button
                  className="btn btn-outline btn-xs min-[390px]:btn-sm"
                  type="reset"
                >
                  Clear Field
                </button>
              </div>

              <div className="mt-2 flex flex-wrap justify-items-start sm:mt-5 sm:justify-center">
                {/*<div>
                          <div className="label w-56  sm:w-72">
                            <span className="label-text text-xs min-[390px]:text-sm md:text-base ">
                              Select tier (Determines detail)
                            </span>
                          </div>
                          <select
                            name="tier"
                            className="select select-primary select-xs min-[390px]:select-sm  w-full max-w-xs"
                          >
                            <option defaultValue="true" value="Premium">
                              Premium
                            </option>
                            <option value="Basic">Basic</option>
                          </select>
                        </div>*/}
                <div>
                  <div className="label w-56 sm:w-72">
                    <span className="label-text text-xs min-[390px]:text-sm md:text-base">
                      Select your native language
                    </span>
                  </div>
                  <select
                    name="nativeLanguage"
                    className="select select-primary select-xs w-full max-w-xs min-[390px]:select-sm"
                  >
                    {wellKnownLanguages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <SubmitButton Title="Generate Synonyms" />
            </label>
          </div>
        </form>
        <div>
          {wordSynonyms?.wordAnswer ? (
            <div className="mt-10 h-80 overflow-scroll overflow-x-hidden rounded-md bg-blue-100 p-2 text-xs min-[390px]:text-sm md:text-base">
              <p
                dangerouslySetInnerHTML={{
                  __html: formatExpression(wordSynonyms.wordAnswer),
                }}
              />
            </div>
          ) : null}

          {wordSynonyms?.error ? (
            <div className="mt-10 flex justify-center text-xs text-red-600 min-[390px]:text-sm">
              {wordSynonyms.error}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
