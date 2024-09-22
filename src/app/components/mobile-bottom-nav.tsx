"use client";

import Link from "next/link";

interface MobileBottomNavProps {
  activeComponent: "SentenceAnalyser" | "Dictionary" | "Thesaurus";
  onShowSentenceAnalyser: () => void;
  onShowDictionary: () => void;
  onShowThesaurus: () => void;
  setActiveComponent: (
    component: "SentenceAnalyser" | "Dictionary" | "Thesaurus"
  ) => void;
}

export function MobileBottomNav({
  activeComponent,
  onShowSentenceAnalyser,
  onShowDictionary,
  onShowThesaurus,
  setActiveComponent,
}: MobileBottomNavProps) {
  return (
    <>
      {/* bottom nav*/}
      <div className="btm-nav lg:hidden">
        <Link href="/">
          <button className="text-primary" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>
        </Link>
        <button
          className={`text-primary ${
            activeComponent === "SentenceAnalyser" ? "active" : ""
          }`}
          onClick={() => {
            onShowSentenceAnalyser();
            setActiveComponent("SentenceAnalyser");
          }}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </button>
        <button
          className={`text-primary ${
            activeComponent === "Dictionary" ? "active" : ""
          }`}
          onClick={() => {
            onShowDictionary();
            setActiveComponent("Dictionary");
          }}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        </button>
        <button
          className={`text-primary ${
            activeComponent === "Thesaurus" ? "active" : ""
          }`}
          onClick={() => {
            onShowThesaurus();
            setActiveComponent("Thesaurus");
          }}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
