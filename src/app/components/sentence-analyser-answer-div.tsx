"use client";

import { useFormStatus } from "react-dom";
import Markdown from "react-markdown";

export function SA_Div(props: { formattedExpression: string }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <div className="textarea textarea-bordered textarea-xs flex min-h-52 min-w-[19rem] items-center justify-center min-[390px]:h-80 min-[390px]:max-h-96 min-[390px]:min-w-[23rem] min-[390px]:max-w-2xl sm:h-24 md:h-64 md:max-w-[41.5rem]">
          <span className="loading loading-ring loading-lg text-primary"></span>
        </div>
      ) : !pending && !props.formattedExpression ? (
        <div className="textarea textarea-bordered textarea-xs min-h-52 min-w-[19rem] overflow-scroll overflow-x-hidden min-[390px]:h-80 min-[390px]:max-h-96 min-[390px]:min-w-[23rem] min-[390px]:max-w-2xl sm:h-24 sm:max-w-96 md:h-64 md:max-w-[41.5rem]">
          <p className="text-neutral-400 md:text-sm lg:text-base">
            The sentence &apos;バカが 誰がてめえの言葉なんか信用するか&apos; is
            a Japanese expression that can be translated to English as &apos;You
            fool, who would ever trust your words?&apos; Let&apos;s break down
            the meaning and grammar used in this sentence:
            <br></br>
            <br></br>
            バカが (Baka ga): &apos;バカ&apos; (baka) means &apos;fool&apos; or
            &apos;idiot.&apos; The particle &apos;が&apos; (ga) is used here to
            emphasize the subject, in this case, &apos;fool.&apos; It can be
            seen as an exclamatory particle in this context, adding emphasis and
            emotion.
            <br></br>
            誰が (Dare ga):
            <br></br>
            &quot;誰&quot; means &quot;who.&quot; &quot;が&quot; is the subject
            marker. Together, &quot;誰が&quot; means &quot;who (would).&quot;
            てめえの (Temee no):
            <br></br>
            <br></br>
            &quot;てめえ&quot; is a very informal and rude way to say
            &quot;you.&quot; &quot;の&quot; is a possessive particle, meaning
            &quot;your.&quot; &quot;てめえの&quot; translates to
            &quot;your&quot; in a very rude manner. 言葉 (Kotoba):
            <br></br>
            <br></br>
            &quot;言葉&quot; means &quot;words&quot; or &quot;speech.&quot;
            なんか (Nanka):
            <br></br>
            <br></br>
            &quot;なんか&quot; is a colloquial particle that adds a dismissive
            or derogatory nuance. It can mean &quot;such as&quot; or
            &quot;like&quot; but often conveys a sense of disdain. 信用する
            (Shin&apos;yō suru):
            <br></br>
            &quot;信用する&quot; means &quot;to trust&quot; or &quot;to
            believe.&quot; か (Ka):
            <br></br>
            <br></br>
            &quot;か&quot; is a question particle, turning the sentence into a
            rhetorical question. Putting it all together, the sentence can be
            translated as: &quot;You idiot! Who would trust (or believe) your
            words?&quot;
            <br></br>
            <br></br>
            The grammar and vocabulary used here are very informal and rude,
            indicating strong emotions like anger or disdain. The rhetorical
            question format implies that no one would trust the person&apos;s
            words, emphasizing disbelief and contempt.
          </p>
        </div>
      ) : (
        <div
          id="sentence-answer"
          className="textarea textarea-bordered textarea-xs min-h-52 min-w-[19rem] overflow-scroll overflow-x-hidden min-[390px]:h-80 min-[390px]:max-h-96 min-[390px]:min-w-[23rem] min-[390px]:max-w-2xl sm:h-24 md:h-64 md:max-w-[41.5rem]"
        >
          <p className="md:text-sm lg:text-base">
            <Markdown>{props.formattedExpression}</Markdown>
          </p>
        </div>
      )}
    </>
  );
}
