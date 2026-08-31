"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

import { submitContactForm } from "@/services/contact.service";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContactForm(formData);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your message. Please try again.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative border-t border-border bg-surface/30 py-28 sm:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-[5%] bottom-[10%] h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Get in touch
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-muted sm:text-lg">
              Have a project, product, or technical problem you&apos;d like to
              discuss? Send me a message and I&apos;ll get back to you.
            </p>

            {/* Direct contact */}
            <div className="mt-10 space-y-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </p>

                <a
                  href="mailto:ozpetermanasseh@gmail.com"
                  className="mt-2 inline-block text-sm font-medium text-white transition-colors hover:text-blue-400"
                >
                  ozpetermanasseh@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Availability
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  Available for selected opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-background/60 p-6 sm:p-8"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Tell me a little about your project or what you'd like to discuss..."
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-muted-foreground focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
                  />
                </div>

                {/* Status */}
                {status === "success" && (
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                    Your message has been sent successfully. I&apos;ll get
                    back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {errorMessage}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}