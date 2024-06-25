import React from "react";
import { Title } from "./headings";

const Contact = () => {
  return (
    <section className="max-content-width">
      <Title>Contact Me</Title>

      <div className="text-gray-700 dark:text-white/80 mt-4">
        <p className="font-semibold">
          Email:{" "}
          <a
            className="underline font-normal text-[#4183C4]"
            href="mailto:jaedonaspurlock@outlook.com"
          >
            jaedonaspurlock@outlook.com
          </a>
          <br />
          Phone: <span className="font-normal">+1 (760) 450 - 3906</span>
          <br /> <br />
        </p>
        Or through this form,
      </div>

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 px-4 rounded-md border border-border transition-all"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-md border border-border p-4 transition-all"
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
        />

        <button className="border border-border w-fit px-12 p-2 rounded-lg hover:bg-secondary-foreground/10 dark:hover:bg-secondary-foreground/10 bg-neutral-50 dark:bg-primary-foreground transition-all text-foreground/80">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
