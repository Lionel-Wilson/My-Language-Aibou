"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton(props: { Title: string }) {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="mr-4 sm:flex sm:justify-center ">
        <input
          type="submit"
          value={props.Title}
          className="btn btn-xs min-[410px]:btn-sm sm:btn-wide btn-primary rounded"
          disabled={pending}
        />
      </div>
      {/*{pending ? (
        <div className=" mt-5 sm:mt-10 flex justify-center">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      ) : null}*/}
    </>
  );
}
