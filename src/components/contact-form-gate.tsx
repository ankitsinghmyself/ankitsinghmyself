"use client";

import ContactMailForm from "./contact-mail-form";

type ContactFormGateProps = {
  email: string;
};

const ContactFormGate = ({ email }: ContactFormGateProps) => {
  return <ContactMailForm email={email} />;
};

export default ContactFormGate;
