import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with JanJa about your business challenge, digital project, or automation idea.",
};

export default function ContactPage() {
  return <ContactForm />;
}
