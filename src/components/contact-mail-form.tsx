"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

type ContactMailFormProps = {
  email: string;
};

const ContactMailForm = ({ email }: ContactMailFormProps) => {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    <motion.form
      className="grid gap-4"
      initial="hidden"
      onSubmit={handleSubmit}
      viewport={viewport}
      variants={staggerContainer(0.04, 0.08)}
      whileInView="visible"
    >
      <motion.div variants={fadeUp()}>
        <input
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          className="neo-input"
        />
      </motion.div>
      <motion.div variants={fadeUp()}>
        <input
          required
          type="email"
          value={senderEmail}
          onChange={(event) => setSenderEmail(event.target.value)}
          placeholder="Email address"
          className="neo-input"
        />
      </motion.div>
      <motion.div variants={fadeUp()}>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your message"
          className="neo-input neo-input-textarea"
        />
      </motion.div>
      <motion.button
        type="submit"
        className="neo-button-primary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition"
        variants={fadeUp()}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        Get in touch
      </motion.button>
    </motion.form>
  );
};

export default ContactMailForm;
