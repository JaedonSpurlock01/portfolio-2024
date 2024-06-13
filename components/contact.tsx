import React from "react";
import { Title } from "./headings";

const Contact = () => {
  return (
    <section className="max-content-width">
      <Title>Contact Me</Title>

      <p className="text-gray-700 dark:text-white/80 mt-4">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jaedonaspurlock@outlook.com">
          jaedonaspurlock@outlook.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 px-4 rounded-md border border-neutral-300 transition-all"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-md border border-neutral-300 p-4 transition-all"
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
        />

        <button className="border w-fit px-12 p-2 rounded-lg hover:bg-neutral-700 bg-neutral-600 transition-all text-neutral-100">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
