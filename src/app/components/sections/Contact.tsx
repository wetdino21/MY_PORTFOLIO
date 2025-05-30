"use client";
import React from "react";
import { Label } from "@/components/ui/contact-label";
import { Input } from "@/components/ui/contact-input";
import { Textarea } from "@/components/ui/contact-textarea";
import { cn } from "@/lib/utils";

import {
  pacifico,
  roboto_mono,
  roboto_condensed,
} from "../../../styles/fonts";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const fullName = [firstname, lastname].filter(Boolean).join(" ");
    const mailTo = "michael.bacalso21@gmail.com";
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      mailTo
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${fullName}\n\n${message}`
    )}`;

    window.open(gmailURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className={`min-h-screen text-center py-20 ${roboto_mono.className}`}
    >
      <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
      <p className="mb-10">
        Feel free to send me a message. I would love to hear from you!
      </p>

      <div className="text-start shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Let's Get in Touch
        </h2>
        {/* <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          I’ll get back to you as soon as possible.
        </p> */}

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" name="firstname" placeholder="John" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name (Optional)</Label>
              <Input id="lastname" name="lastname" placeholder="Doe" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Work Opportunity"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              className="min-h-[100px] resize-y w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-white"
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Next &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </section>
  );
};

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);

export default Contact;
