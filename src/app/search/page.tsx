"use client";
import { useFormState } from "react-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { analyseExpression, defineWord } from "./actions";
import Link from "next/link";

export default function Page() {
  const wellKnownLanguages = [
    "English",
    "Japanese",
    "Mandarin Chinese",
    "Yoruba",
    "French",
    "Hindi",
    "Spanish",
    "Standard Arabic",
    "Bengali",
    "Russian",
    "Portuguese",
    "Indonesian",
    "Urdu",
    "German",
    "Swahili",
    "Turkish",
    "Vietnamese",
    "Korean",
    "Italian",
    "Tamil",
    "Thai",
    "Filipino",
    "Dutch",
  ];

  // action is kinda enhanced version of
  // we are returning the an object with message key. set the initial
  const [wordDefinition, dictionaryAction] = useFormState(defineWord, {
    wordAnswer: "",
    error: null,
  });

  const [expressionAnaylsis, expressionAnalysisAction] = useFormState(
    analyseExpression,
    {
      expressionAnswer: "",
      error: null,
    }
  );

  function formatExpression(expression: string): string {
    return expression
      .replace(/ - /g, " • ") // Convert dashes to bullet points
      .replace(/\n/g, "<br>") // Line breaks
      .replace(/"/g, "&quot;") // Escape double quotes for HTML
      .replace(/'/g, "&#39;"); // Escape single quotes for HTML
  }

  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="navbar bg-primary text-primary-content w-screen sm:w-full ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 text-xl font-bold">
              My Language Aibou
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li className="font-bold">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-bold">
                  <Link href="/search">Language Analysis Hub</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Page content here */}
          <div className="min-[410px]:flex min-[410px]:justify-center ml-6 min-[360px]:ml-11 min-[375px]:ml-14 min-[390px]:ml-16 min-[410px]:ml-0 sm:ml-8 my-20 md:my-40">
            <div role="tablist" className="tabs tabs-lifted w-2/3">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Analyzer"
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6 max-w-xs sm:max-w-sm"
              >
                <form action={expressionAnalysisAction}>
                  <div>
                    <label className="form-control">
                      <div className="label sm:flex sm:justify-center">
                        <span className="label-text text-xs min-[410px]:text-sm">
                          Type a sentence to explore it&apos;s meaning
                        </span>
                      </div>
                      <div className="sm:flex sm:justify-center">
                        <textarea
                          name="phrase"
                          className="textarea textarea-bordered textarea-xs min-[410px]:textarea-md w-full max-w-xs sm:h-24 "
                          placeholder="Paste your phrase here..."
                        ></textarea>
                      </div>
                    </label>
                  </div>

                  <div className="flex flex-wrap justify-items-start sm:flex sm:justify-center mt-2">
                    <div>
                      <div className="label w-56 sm:w-72 ">
                        <span className="label-text text-xs min-[410px]:text-sm ">
                          Select tier (Determines response quality)
                        </span>
                      </div>
                      <select
                        name="tier"
                        className="select select-primary w-full select-xs min-[410px]:select-sm  max-w-xs  sm:max-w-md "
                      >
                        <option defaultValue="true" value="Basic">
                          Basic
                        </option>
                        <option value="Premium">Premium</option>
                      </select>
                    </div>
                    <div>
                      <div className="label w-56 sm:w-72">
                        <span className="label-text text-xs min-[410px]:text-sm">
                          Select your native language
                        </span>
                      </div>
                      <select
                        name="nativeLanguage"
                        className="select select-primary w-full select-xs min-[410px]:select-sm  max-w-xs  sm:max-w-md"
                      >
                        {wellKnownLanguages.map((lang) => (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-5 sm:flex sm:justify-center">
                    <input
                      type="submit"
                      value="Translate and Learn"
                      className="btn btn-xs min-[410px]:btn-sm sm:btn-wide btn-primary"
                    />
                  </div>
                </form>
                <div>
                  {expressionAnaylsis?.expressionAnswer ? (
                    <div className=" mt-5 sm:mt-10 text-xs min-[410px]:text-sm">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: formatExpression(
                            expressionAnaylsis.expressionAnswer
                          ),
                        }}
                      />
                    </div>
                  ) : null}
                  {expressionAnaylsis?.expressionAnswer ? (
                    <div className=" mt-5 sm:mt-10 text-xs min-[410px]:text-sm text-red-600">
                      {expressionAnaylsis.error}
                    </div>
                  ) : null}
                </div>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Dictionary"
                defaultChecked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6 max-w-xs sm:max-w-sm"
              >
                <form action={dictionaryAction}>
                  <div>
                    <label className="form-control">
                      <div className="label sm:flex sm:justify-center">
                        <span className="label-text text-xs min-[410px]:text-sm">
                          See a word&apos;s definition in your native language
                        </span>
                      </div>
                      <div className="sm:flex sm:justify-center">
                        <label className="input input-bordered flex items-center gap-2 input-xs min-[410px]:input-sm w-full max-w-xs">
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

                      <div className="flex justify-items-start sm:justify-center flex-wrap md:flex-nowrap mt-2 sm:mt-5">
                        <div>
                          <div className="label w-56  sm:w-72">
                            <span className="label-text text-xs min-[410px]:text-sm">
                              Select tier (Determines response quality)
                            </span>
                          </div>
                          <select
                            name="tier"
                            className="select select-primary select-xs min-[410px]:select-sm w-full max-w-xs"
                          >
                            <option defaultValue="true" value="Basic">
                              Basic
                            </option>
                            <option value="Premium">Premium</option>
                          </select>
                        </div>
                        <div>
                          <div className="label w-56  sm:w-72">
                            <span className="label-text text-xs min-[410px]:text-sm">
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
                      <div className="mt-5 sm:flex sm:justify-center">
                        <input
                          type="submit"
                          value="Define Word"
                          className="btn btn-xs min-[410px]:btn-sm sm:btn-wide btn-primary"
                        />
                      </div>
                    </label>
                  </div>
                </form>
                <div>
                  {wordDefinition?.wordAnswer ? (
                    <div className="mt-10 text-xs min-[410px]:text-sm">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: formatExpression(wordDefinition.wordAnswer),
                        }}
                      />
                    </div>
                  ) : null}

                  {wordDefinition?.error ? (
                    <div className="mt-10 text-xs min-[410px]:text-sm text-red-600">
                      {wordDefinition.error}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-primary text-primary-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/search">Language Analysis Hub</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
