"use client";
import { useFormState } from "react-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { analyseExpression, defineWord } from "./actions";
import Link from "next/link";

export default function Page() {
  // action is kinda enhanced version of
  // we are returning the an object with message key. set the initial
  const [wordDefinition, dictionaryAction] = useFormState(defineWord, {
    wordAnswer: "",
  });
  const [expressionAnaylsis, expressionAnalysisAction] = useFormState(
    analyseExpression,
    {
      expressionAnswer: "",
    }
  );

  // Function to format the API response into paragraphs
  const formatApiResponse = (text: string) => {
    // Split the response into meaningful sections
    const sections = text.split(/\.(?!\d)/); // Split by periods that are not followed by a digit

    return sections.map((section, index) => (
      <p key={index} className="mb-4">
        {section.trim()}.
      </p>
    ));
  };

  const formatWordDefinition = (text: string) => {
    const paragraphs = text.split("\n\n");
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith("Example sentences:")) {
        const sentences = paragraph.split("\n").slice(1); // Split by lines and remove the first line
        return (
          <div key={index}>
            <p>Example sentences:</p>
            <ul className="list-disc pl-5">
              {sentences.map((sentence, idx) => (
                <li key={idx}>{sentence.replace(/^\d+\.\s*/, "")}</li> // Remove leading number and period
              ))}
            </ul>
          </div>
        );
      } else if (paragraph.startsWith("Dictionary form:")) {
        const forms = paragraph.split("\n").slice(1); // Split by lines and remove the first line
        return (
          <div key={index}>
            <p>Dictionary form:</p>
            <ul className="list-disc pl-5">
              {forms.map((form, idx) => (
                <li key={idx}>{form.replace(/^\-\s*/, "")}</li> // Remove leading dash and space
              ))}
            </ul>
          </div>
        );
      } else {
        return <p key={index}>{paragraph}</p>;
      }
    });
  };

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
          <div className="  min-[410px]:flex min-[410px]:justify-center ml-6 min-[360px]:ml-11 min-[375px]:ml-14 min-[390px]:ml-16 min-[410px]:ml-0 my-20 sm:my-20 md:my-40">
            <div role="tablist" className="tabs tabs-lifted  sm:tabs-lg  w-2/3">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label="Analyzer"
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6 max-w-xs"
              >
                <form action={expressionAnalysisAction}>
                  <div>
                    <label className="form-control">
                      <div className="label">
                        <span className="label-text text-xs min-[410px]:text-sm">
                          Type a Sentence to Explore Its Meaning and Grammar
                        </span>
                      </div>
                      <textarea
                        name="phrase"
                        className="textarea textarea-bordered textarea-xs min-[410px]:textarea-md w-full max-w-xs sm:h-24 "
                        placeholder="Paste your phrase here..."
                      ></textarea>
                      <div className="label"></div>
                    </label>
                  </div>

                  <div className="flex flex-wrap justify-items-start">
                    <div>
                      <div className="label w-56">
                        <span className="label-text text-xs min-[410px]:text-sm">
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
                      <div className="label w-56">
                        <span className="label-text text-xs min-[410px]:text-sm">
                          Select your native language
                        </span>
                      </div>
                      <select
                        name="nativeLanguage"
                        className="select select-primary w-full select-xs min-[410px]:select-sm  max-w-xs  sm:max-w-md"
                      >
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option defaultValue="true" value="English">
                          English
                        </option>
                        <option value="Mandarin">Mandarin</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Patois">Patois</option>
                      </select>
                    </div>
                    <div>
                      <div className="label">
                        <span className="label-text text-xs min-[410px]:text-sm">
                          Select your target language (Must match phrase
                          language)
                        </span>
                      </div>
                      <select
                        name="targetLanguage"
                        className="select select-primary w-full select-xs min-[410px]:select-sm max-w-xs sm:max-w-lg"
                      >
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option defaultValue="true" value="English">
                          English
                        </option>
                        <option value="Mandarin">Mandarin</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Patois">Patois</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-5">
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
                      {formatApiResponse(expressionAnaylsis.expressionAnswer)}
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
                className="tab-content bg-base-100 border-base-300 rounded-box p-6 max-w-xs"
              >
                <form action={dictionaryAction}>
                  <div>
                    <label className="form-control">
                      <div className="label">
                        <span className="label-text text-xs min-[410px]:text-sm">
                          See a word&apos;s definition in your native language
                        </span>
                      </div>
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
                      <div className="flex justify-items-start flex-wrap sm:flex-nowrap mt-2 sm:mt-5">
                        <div>
                          <div className="label w-56">
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
                          <div className="label w-56">
                            <span className="label-text text-xs min-[410px]:text-sm">
                              Select your native language
                            </span>
                          </div>
                          <select
                            name="nativeLanguage"
                            className="select select-primary select-xs min-[410px]:select-sm w-full max-w-xs"
                          >
                            <option value="Japanese">Japanese</option>
                            <option defaultValue="true" value="Korean">
                              Korean
                            </option>
                            <option value="English">English</option>
                            <option value="Mandarin">Mandarin</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="Patois">Patois</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-5">
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
                      {formatWordDefinition(wordDefinition.wordAnswer)}
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
