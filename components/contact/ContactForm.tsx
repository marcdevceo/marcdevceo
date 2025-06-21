/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { BlockContainer, BodyText, Button, Card, Modal, Subtitle } from "@/ui-framework";

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
    <BlockContainer padding="xl" className="max-w-xl mx-auto">
      <Card>
        <Subtitle align="center">Contact Form</Subtitle>

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

        {status === "success" && (
          <BodyText align="center" color="success">
            Thanks for reaching out! I'll be in touch soon.
          </BodyText>
        )}
        {status === "error" && (
          <BodyText align="center" color="danger">
            Something went wrong. Please try again later.
          </BodyText>
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
          <BodyText align="center" color="success">
            Thanks for reaching out! I’ll be in touch soon.
          </BodyText>
        )}
        {status === "error" && (
          <BodyText align="center" color="danger">
            Something went wrong. Please try again later.
          </BodyText>
        )}
      </Modal>
    </BlockContainer>
  );
}
