"use client";

import { useFormStatus } from "react-dom";
import Markdown from "react-markdown";

export function SA_Div(props: { formattedExpression: string }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && !props.formattedExpression ? (
        <div className="textarea textarea-bordered flex justify-center items-center textarea-xs min-[410px]:textarea-md sm:h-24 md:h-64 md:w-[680px]">
          <span className="loading loading-ring loading-lg text-primary"></span>
        </div>
      ) : !pending && !props.formattedExpression ? (
        <div className="overflow-scroll overflow-x-hidden textarea textarea-bordered textarea-xs min-[410px]:textarea-md sm:h-24 md:h-64 md:w-[680px]">
          <p className="text-neutral-400">
            The sentence 'バカが 誰がてめえの言葉なんか信用するか' is a Japanese
            expression that can be translated to English as 'You fool, who would
            ever trust your words?' Let's break down the meaning and grammar
            used in this sentence:
            <br></br>
            <br></br>
            バカが (Baka ga): 'バカ' (baka) means 'fool' or 'idiot.' The
            particle 'が' (ga) is used here to emphasize the subject, in this
            case, 'fool.' It can be seen as an exclamatory particle in this
            context, adding emphasis and emotion.
            <br></br>
            誰が (Dare ga):
            <br></br>
            "誰" means "who." "が" is the subject marker. Together, "誰が" means
            "who (would)." てめえの (Temee no):
            <br></br>
            <br></br>
            "てめえ" is a very informal and rude way to say "you." "の" is a
            possessive particle, meaning "your." "てめえの" translates to "your"
            in a very rude manner. 言葉 (Kotoba):
            <br></br>
            <br></br>
            "言葉" means "words" or "speech." なんか (Nanka):
            <br></br>
            <br></br>
            "なんか" is a colloquial particle that adds a dismissive or
            derogatory nuance. It can mean "such as" or "like" but often conveys
            a sense of disdain. 信用する (Shin'yō suru):
            <br></br>
            "信用する" means "to trust" or "to believe." か (Ka):
            <br></br>
            <br></br>
            "か" is a question particle, turning the sentence into a rhetorical
            question. Putting it all together, the sentence can be translated
            as: "You idiot! Who would trust (or believe) your words?"
            <br></br>
            The grammar and vocabulary used here are very informal and rude,
            indicating strong emotions like anger or disdain. The rhetorical
            question format implies that no one would trust the person's words,
            emphasizing disbelief and contempt.
          </p>
        </div>
      ) : (
        <div
          id="sentence-answer"
          className="overflow-scroll overflow-x-hidden textarea textarea-bordered textarea-xs min-[410px]:textarea-md sm:h-24 md:h-64 md:w-[680px]"
        >
          <p className="md:text-base">
            <Markdown>{props.formattedExpression}</Markdown>
          </p>
        </div>
      )}
    </>
  );
}
