"use client";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzblqpgg");
  if (state.succeeded) {
    return (
      <p className="text-gray-900">
        Thanks for contacting us! We will get back to you as soon as possible
      </p>
    );
  }

  return (
    <form className="mx-auto mt-10 w-full max-w-md" onSubmit={handleSubmit}>
      <div className="-mx-3 mb-6 flex flex-col">
        <div className="mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="question"
          >
            Question
          </label>
          <textarea
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="question"
            name="question"
            placeholder="Your question..."
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-4 rounded bg-[#DAA520]/70 px-4 py-2 font-bold text-white hover:bg-[#DAA520]"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
