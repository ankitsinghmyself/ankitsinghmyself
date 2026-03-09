"use client";

import { FormEvent } from "react";

type ContactMailFormProps = {
  email: string;
};

const ContactMailForm = ({ email }: ContactMailFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const senderEmail = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = `Portfolio enquiry from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div>
        <input
          required
          name="name"
          type="text"
          placeholder="Your name"
          className="neo-input"
        />
      </div>
      <div>
        <input
          required
          name="email"
          type="email"
          placeholder="Email address"
          className="neo-input"
        />
      </div>
      <div>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Write your message"
          className="neo-input neo-input-textarea"
        />
      </div>
      <button
        type="submit"
        className="neo-button-primary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
      >
        Get in touch
      </button>
    </form>
  );
};

export default ContactMailForm;
