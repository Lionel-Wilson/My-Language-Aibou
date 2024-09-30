"use client";

import { useFormStatus } from "react-dom";
import Markdown from "react-markdown";

export function DictionaryAnswerDiv(props: {
  wordDefinition: string;
  wordSynonyms: string;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <div className="sm:flex sm:justify-center md:flex md:justify-evenly">
          <div className="textarea textarea-bordered textarea-xs mb-2 flex h-44 min-w-[19rem] items-center justify-center min-[390px]:h-52 min-[390px]:min-w-[23rem] sm:h-24 md:mr-5 md:h-72 md:w-[41.5rem]">
            <span className="loading loading-ring loading-lg text-primary"></span>
          </div>

          <div className="textarea textarea-bordered textarea-xs flex h-44 min-w-[19rem] items-center justify-center min-[390px]:h-44 min-[390px]:min-w-[23rem] sm:h-24 md:h-72 md:w-[41.5rem]">
            <span className="loading loading-ring loading-lg text-primary"></span>
          </div>
        </div>
      ) : !pending && !props.wordDefinition ? (
        <div className="sm:flex sm:justify-center md:flex md:justify-evenly">
          <div className="textarea textarea-bordered textarea-xs mb-2 h-44 min-w-[19rem] overflow-scroll overflow-x-hidden min-[390px]:h-52 min-[390px]:min-w-[23rem] sm:h-24 md:mr-5 md:h-72 md:w-[41.5rem]">
            <p className="text-neutral-400 md:text-sm lg:text-base">
              The word &apos;バカ&apos; (baka) in Japanese is a colloquial term
              that means &quot;fool&quot; or &quot;idiot.&quot; It is often used
              to describe someone who is acting foolishly or making poor
              decisions. It can be used both playfully among friends or more
              harshly to insult someone, depending on the context and tone.
              <br></br>
              Here are two example sentences using &apos;バカ&apos;:
              <br></br>
              1. 彼は宿題を忘れて、先生にバカと言われた。
              <br></br>• He forgot his homework and was called an idiot by the
              teacher.
              <br></br>
              2. バカなことをしないでください。
              <br></br>• Please don&apos;t do anything foolish.
              <br></br>
              <br></br>
              In these examples, &apos;バカ&apos; is used to describe someone
              acting foolishly or making a mistake.
            </p>
          </div>
          <div className="textarea textarea-bordered textarea-xs h-44 min-w-[19rem] overflow-scroll overflow-x-hidden min-[390px]:h-44 min-[390px]:min-w-[23rem] sm:h-24 md:h-72 md:w-[41.5rem]">
            <p className="text-neutral-400 md:text-sm lg:text-base">
              Here are some simple synonyms for the Japanese word
              &apos;バカ&apos; (baka), which means &quot;fool&quot; or
              &quot;idiot&quot;:
              <br></br>
              <br></br>
              1. アホ (aho)
              <br></br>
              2. 愚か者 (orokamono)
              <br></br>
              3. 馬鹿者 (bakamono)
              <br></br>
              4. 間抜け (manuke)
              <br></br>
              5. ドジ (doji)
              <br></br>
              <br></br>
              These words are often used in a casual or informal context and can
              vary in their level of rudeness.
            </p>
          </div>
        </div>
      ) : (
        <div className="sm:flex sm:justify-center md:flex md:justify-evenly">
          <div
            id="word-definition-container"
            className="textarea textarea-bordered textarea-xs mb-2 h-44 min-w-[19rem] overflow-scroll overflow-x-hidden min-[390px]:h-52 min-[390px]:min-w-[23rem] sm:h-24 md:mr-5 md:h-72 md:w-[41.5rem]"
          >
            <p className="md:text-sm lg:text-base">
              <Markdown>{props.wordDefinition}</Markdown>
            </p>
          </div>
          <div
            id="synonyms-container"
            className="textarea textarea-bordered textarea-xs h-44 min-w-[19rem] overflow-scroll overflow-x-hidden min-[390px]:h-44 min-[390px]:min-w-[23rem] sm:h-24 md:h-72 md:w-[41.5rem]"
          >
            <p className="md:text-sm lg:text-base">
              <Markdown>{props.wordSynonyms}</Markdown>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
