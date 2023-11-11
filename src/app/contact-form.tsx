"use client";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzblqpgg");
  console.log(
    "🪵 [contact-form.tsx:6] ~ token ~ \x1b[0;32mstate\x1b[0m = ",
    state,
  );
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
            className="mb-3 block w-full appearance-none rounded border bg-[#ABBBB4]/40 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="question"
          >
            Question
          </label>
          <textarea
            className="focus:border-gray-3000 block w-full appearance-none rounded border border-gray-200 bg-[#ABBBB4]/40 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="question"
            name="question"
            placeholder="Your question..."
            required
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-red-500">
          <ValidationError className="error" errors={state.errors} />
        </div>
        <button
          className="mt-4 rounded bg-[#DAA520]/70 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-[#DAA520]"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
