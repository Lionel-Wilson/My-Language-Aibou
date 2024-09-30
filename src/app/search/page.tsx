"use client";
import Footer from "../components/footer";
import Link from "next/link";
import { Dictionary } from "./components/dictionary";
import { SentenceAnalyser } from "./components/sentence-analyser";
import { useEffect, useRef, useState } from "react";
import { wellKnownLanguages } from "./utils/constants";
import Cookies from "js-cookie"; // Import js-cookie to handle cookies

export default function Page() {
  const [nativeLanguage, setNativeLanguage] = useState<string>(
    wellKnownLanguages[0],
  ); // Default to the first language in the list

  const [activeComponent, setActiveComponent] = useState<
    "SentenceAnalyser" | "Dictionary"
  >("SentenceAnalyser"); // Default to SentenceAnalyser

  // Handlers for toggling between components
  const showSentenceAnalyser = () => {
    setActiveComponent("SentenceAnalyser");
  };

  const showDictionary = () => {
    setActiveComponent("Dictionary");
  };

  // Function to handle changes to the nativeLanguage
  const handleNativeLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = e.target.value;
    setNativeLanguage(selectedLanguage);
    Cookies.set("nativeLanguage", selectedLanguage, { expires: 365 }); // Set cookie with 1 year expiration
  };

  // Read cookie when the component mounts to set initial nativeLanguage
  useEffect(() => {
    const savedLanguage = Cookies.get("nativeLanguage"); // Get the value of the cookie
    if (savedLanguage) {
      setNativeLanguage(savedLanguage); // If cookie exists, set nativeLanguage state to its value
    }
  }, []);

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-screen bg-primary text-primary-content sm:w-full">
            <div className="flex-none 2xl:hidden">
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
            <div className="hidden flex-none 2xl:block">
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

          <div className="flex w-full flex-col md:my-12">
            {/* Page content here */}
            <div
              id="select-native-language-container"
              className="md:mb-6 md:pl-1 lg:mb-12"
            >
              <div className="label mx-2 sm:w-72 md:mb-1 md:min-w-96">
                <span className="label-text text-base font-bold min-[390px]:text-lg md:text-2xl">
                  Select your native language
                </span>
              </div>
              <div className="ml-3">
                <select
                  name="nativeLanguage"
                  value={nativeLanguage}
                  onChange={handleNativeLanguageChange} // Update state on change
                  className="select select-primary select-xs w-full max-w-64 rounded min-[390px]:select-sm md:select-md sm:max-w-md md:h-10"
                >
                  {wellKnownLanguages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div id="sentence-analyser-containter" className="hidden md:block">
              <div className="md:pl-3">
                <h1 className="hidden text-2xl font-bold md:block">
                  Sentence Analyser
                </h1>
              </div>
              <div className="bg-base-900 card grid flex-grow place-items-center rounded-none md:mb-16 md:rounded xl:pt-2">
                <SentenceAnalyser nativeLanguage={nativeLanguage} />
              </div>
            </div>

            <div id="dictionary-containter" className="hidden md:block">
              <div className="md:pl-3">
                <h1 className="hidden text-2xl font-bold md:block">
                  Word Dictionary
                </h1>
              </div>
              <div className="bg-base-900 card grid flex-grow place-items-center rounded-none md:rounded xl:pb-32 xl:pt-2">
                <Dictionary nativeLanguage={nativeLanguage} />
              </div>
            </div>

            <div
              id="mobile-tool-toggle-containter"
              className="my-2 ml-3 md:hidden"
            >
              <div className="join">
                <button
                  onClick={showSentenceAnalyser}
                  className={`w-30 join-item btn-sm flex-wrap text-start text-xs min-[390px]:btn ${
                    activeComponent === "SentenceAnalyser"
                      ? "btn-primary btn-active text-white min-[390px]:text-white"
                      : ""
                  }`}
                >
                  <span className="material-symbols-outlined hidden min-[390px]:block">
                    text_snippet
                  </span>
                  <span>Sentence Analyzer</span>
                </button>
                <button
                  onClick={showDictionary}
                  className={`w-30 join-item btn-sm flex-wrap text-start text-xs min-[390px]:btn ${
                    activeComponent === "Dictionary"
                      ? "btn-primary btn-active text-white min-[390px]:text-white"
                      : ""
                  }`}
                >
                  <span className="material-symbols-outlined hidden min-[390px]:block">
                    dictionary
                  </span>
                  <span>Word Dictionary</span>
                </button>
              </div>
            </div>

            <div id="mobile-components" className="md:hidden">
              {/* Conditionally render the components */}
              {activeComponent === "SentenceAnalyser" && (
                <div id="sentence-analyser-containter">
                  <div className="md:pl-[118px]">
                    <h1 className="hidden text-2xl font-bold md:block">
                      Sentence Analyser
                    </h1>
                  </div>
                  <div className="bg-base-900 card grid flex-grow place-items-center rounded-none md:mb-16 xl:pt-2">
                    <SentenceAnalyser nativeLanguage={nativeLanguage} />
                  </div>
                </div>
              )}

              {activeComponent === "Dictionary" && (
                <div id="dictionary-containter">
                  <div className="md:pl-[118px]">
                    <h1 className="hidden text-2xl font-bold md:block">
                      Word Dictionary
                    </h1>
                  </div>
                  <div className="bg-base-900 card grid flex-grow place-items-center rounded-none xl:pb-32 xl:pt-2">
                    <Dictionary nativeLanguage={nativeLanguage} />
                  </div>
                </div>
              )}
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
          <ul className="menu min-h-full w-80 bg-primary p-4 text-primary-content">
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
