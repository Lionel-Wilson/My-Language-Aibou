"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton(props: { Title: string }) {
  const { pending } = useFormStatus();

  return (
    <>
      <input
        type="submit"
        value={props.Title}
        className="btn btn-primary btn-xs min-w-60 grow rounded text-xs font-light text-white min-[390px]:btn-sm sm:btn-wide min-[390px]:min-w-72"
        disabled={pending}
      />
    </>
  );
}
