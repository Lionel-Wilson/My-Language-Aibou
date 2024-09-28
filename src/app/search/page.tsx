"use client";
import Footer from "../components/footer";
import Link from "next/link";
import { Dictionary } from "./components/dictionary";
import { Thesaurus } from "./components/thesaurus";
import { SentenceAnalyser } from "./components/sentence-analyser";
import { MobileBottomNav } from "../components/mobile-bottom-nav";
import { useRef, useState } from "react";
import { wellKnownLanguages } from "./utils/constants";

export default function Page() {
  const [nativeLanguage, setNativeLanguage] = useState<string>(
    wellKnownLanguages[0]
  ); // Default to the first language in the list

  const handleNativeLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNativeLanguage(e.target.value);
  };

  const sentenceAnalyserRef = useRef<HTMLDivElement>(null);
  const dictionaryRef = useRef<HTMLDivElement>(null);
  const thesaurusRef = useRef<HTMLDivElement>(null);

  const [activeComponent, setActiveComponent] = useState<
    "SentenceAnalyser" | "Dictionary" | "Thesaurus"
  >("SentenceAnalyser");

  const scrollToSentenceAnalyser = () => {
    sentenceAnalyserRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDictionary = () => {
    dictionaryRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToThesaurus = () => {
    thesaurusRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="navbar bg-primary text-primary-content w-screen sm:w-full ">
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
          {/* Page content here */}
          {/*<div className="flex w-full flex-col lg:flex-row">
            <div className="card bg-base-300 rounded-none grid flex-grow place-items-center  py-28 xl:py-32">
              {activeComponent === "SentenceAnalyser" && <SentenceAnalyser />}
              {activeComponent === "Dictionary" && <Dictionary />}
            </div>
          </div>
          */}
          <div className="flex w-full flex-col md:my-12">
            <div className="md:pl-[118px] md:mb-12">
              <div className="label p-0 w-56 sm:w-72 md:w-96 md:mb-1 ">
                <span className="label-text text-xs min-[410px]:text-sm md:text-2xl md:font-bold">
                  Select your native language
                </span>
              </div>
              <select
                name="nativeLanguage"
                value={nativeLanguage}
                onChange={handleNativeLanguageChange} // Update state on change
                className="select select-primary w-full select-xs min-[410px]:select-sm max-w-xs sm:max-w-md md:h-10 rounded"
              >
                {wellKnownLanguages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:pl-[118px]">
              <h1 className="text-2xl font-bold">Sentence Analyser</h1>
            </div>
            <div
              className="card bg-base-900 rounded-none grid flex-grow place-items-center mb-16 xl:pt-2 "
              ref={sentenceAnalyserRef}
            >
              <SentenceAnalyser nativeLanguage={nativeLanguage} />
            </div>

            <div className="md:pl-[118px]">
              <h1 className="text-2xl font-bold">Word Dictionary</h1>
            </div>
            <div
              className="card bg-base-900 rounded-none grid flex-grow place-items-center xl:pt-2 xl:pb-32"
              ref={dictionaryRef}
            >
              <Dictionary nativeLanguage={nativeLanguage} />
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
