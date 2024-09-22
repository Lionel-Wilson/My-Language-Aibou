"use client";
import Footer from "../components/footer";
import Link from "next/link";
import { Dictionary } from "./components/dictionary";
import { Thesaurus } from "./components/thesaurus";
import { SentenceAnalyser } from "./components/sentence-analyser";
import { MobileBottomNav } from "../components/mobile-bottom-nav";
import { useRef, useState } from "react";

export default function Page() {
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

          {/*<div className="flex w-full flex-col lg:flex-row">
            <div className="card bg-base-300 rounded-none grid flex-grow place-items-center  py-28 xl:py-32">
              {activeComponent === "SentenceAnalyser" && <SentenceAnalyser />}
              {activeComponent === "Dictionary" && <Dictionary />}
            </div>
          </div>
          */}
          <div className="flex w-full flex-col lg:flex-row">
            <div
              className="card bg-base-300 rounded-none grid flex-grow place-items-center  py-28 xl:py-32"
              ref={sentenceAnalyserRef}
            >
              <SentenceAnalyser />
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div
              className="card bg-base-300 rounded-none grid flex-grow place-items-center  py-28 xl:py-32"
              ref={dictionaryRef}
            >
              <Dictionary />
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div
              className="card bg-base-300 rounded-none grid flex-grow place-items-center  py-28 xl:py-32"
              ref={thesaurusRef}
            >
              <Thesaurus />
            </div>
          </div>

          <MobileBottomNav
            activeComponent={activeComponent}
            onShowSentenceAnalyser={scrollToSentenceAnalyser}
            onShowDictionary={scrollToDictionary}
            onShowThesaurus={scrollToThesaurus}
            setActiveComponent={setActiveComponent}
          />
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
