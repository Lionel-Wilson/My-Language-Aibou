"use client";

import { SubmitButton } from "@/app/components/submit-button";
import { wellKnownLanguages } from "../utils/constants";
import { useFormState } from "react-dom";
import { defineWord } from "../actions";
import { formatExpression } from "../utils/functions";

export function Dictionary() {
  const [wordDefinition, dictionaryAction] = useFormState(defineWord, {
    wordAnswer: "",
    error: null,
  });

  return (
    <>
      <div className=" bg-base-100 border-base-300 rounded-box p-6 max-w-xs sm:max-w-sm md:max-w-md">
        <form action={dictionaryAction}>
          <div>
            <label className="form-control">
              <div className="label sm:flex sm:justify-center">
                <span className="label-text text-xs min-[410px]:text-sm md:text-base">
                  See a word&apos;s definition in your native language
                </span>
              </div>
              <div className="sm:flex sm:justify-center">
                <label className="input input-bordered flex items-center gap-2 input-xs min-[410px]:input-sm 2xl:input-md w-full max-w-xs md:max-w-md">
                  <input
                    type="text"
                    name="word"
                    className="grow "
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
              <div className="mt-3 sm:mt-5 sm:flex sm:justify-center ">
                <button
                  className="btn btn-outline btn-xs min-[410px]:btn-sm "
                  type="reset"
                >
                  Clear Field
                </button>
              </div>

              <div className="flex justify-items-start sm:justify-center flex-wrap mt-2 sm:mt-5">
                {/*<div>
                          <div className="label w-56  sm:w-72">
                            <span className="label-text text-xs min-[410px]:text-sm md:text-base ">
                              Select tier (Determines detail)
                            </span>
                          </div>
                          <select
                            name="tier"
                            className="select select-primary select-xs min-[410px]:select-sm  w-full max-w-xs"
                          >
                            <option defaultValue="true" value="Premium">
                              Premium
                            </option>
                            <option value="Basic">Basic</option>
                          </select>
                        </div>*/}
                <div>
                  <div className="label w-56  sm:w-72">
                    <span className="label-text text-xs min-[410px]:text-sm md:text-base">
                      Select your native language
                    </span>
                  </div>
                  <select
                    name="nativeLanguage"
                    className="select select-primary select-xs min-[410px]:select-sm w-full max-w-xs"
                  >
                    {wellKnownLanguages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <SubmitButton Title="Define Word" />
            </label>
          </div>
        </form>
        <div>
          {wordDefinition?.wordAnswer ? (
            <div className="mt-10 text-xs min-[410px]:text-sm md:text-base bg-blue-100 p-2 rounded-md overflow-scroll overflow-x-hidden h-80">
              <p
                dangerouslySetInnerHTML={{
                  __html: formatExpression(wordDefinition.wordAnswer),
                }}
              />
            </div>
          ) : null}

          {wordDefinition?.error ? (
            <div className="mt-10 text-xs min-[410px]:text-sm text-red-600 flex justify-center">
              {wordDefinition.error}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
