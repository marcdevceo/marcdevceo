/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { Container, SpacerY } from "@/components/ui/Spacer";
import Card from "@/components/ui/Card";
import { Subtitle, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);

  async function handleSubmit(formData: FormData) {
    try {
      const res = await sendEmail(formData);
      if (res.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setShowModal(true); // Show modal no matter what
    }
  }

  return (
    <Container padding="xl" className="max-w-xl mx-auto">
      <Card>
        <Subtitle align="center">Contact Form</Subtitle>
        <SpacerY size="md" />

        <form action={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-white text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-white text-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="p-3 rounded-md bg-white text-black"
          ></textarea>
          <Button type="submit">Send Message</Button>
        </form>

        <SpacerY size="md" />
        {status === "success" && (
          <Text align="center" color="success">
            Thanks for reaching out! I'll be in touch soon.
          </Text>
        )}
        {status === "error" && (
          <Text align="center" color="danger">
            Something went wrong. Please try again later.
          </Text>
        )}
      </Card>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setStatus("idle");
        }}
        title={status === "success" ? "Message Sent" : "Oops!"}
      >
        {status === "success" && (
          <Text align="center" color="success">
            Thanks for reaching out! I’ll be in touch soon.
          </Text>
        )}
        {status === "error" && (
          <Text align="center" color="danger">
            Something went wrong. Please try again later.
          </Text>
        )}
      </Modal>
    </Container>
  );
}
