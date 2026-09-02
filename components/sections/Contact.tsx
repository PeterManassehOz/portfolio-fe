"use client";

import { FormEvent, useEffect, useState } from "react";
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

  useEffect(() => {
    if (status !== "success" && status !== "error") {
      return;
    }

    const timer = setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

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
      className="relative isolate overflow-hidden border-t border-white/[0.06] py-28 sm:py-36"
    >
      {/* Atmospheric canvas */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blue atmosphere */}
        <div className="absolute left-[-18rem] top-[15%] h-[40rem] w-[40rem] rounded-full bg-blue-600/[0.045] blur-[160px]" />

        <div className="absolute right-[-16rem] bottom-[-5rem] h-[38rem] w-[38rem] rounded-full bg-indigo-600/[0.04] blur-[150px]" />

        {/* Canvas grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Orbital rings */}
        <div className="absolute -left-72 top-[22%] h-[42rem] w-[42rem] rounded-full border border-blue-400/[0.025]" />

        <div className="absolute -left-60 top-[28%] h-[34rem] w-[34rem] rounded-full border border-blue-400/[0.018]" />

        {/* Organic paint stroke */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[-17rem] top-[48%] h-28 w-[42rem] rotate-[7deg] rounded-[52%_48%_55%_45%/45%_58%_42%_55%] bg-blue-500/[0.045]"
        />

        {/* Small artistic marks */}
        <div className="absolute right-[12%] top-[18%] h-2 w-2 rounded-full bg-blue-400/40" />

        <div className="absolute right-[12.4%] top-[18%] h-8 w-px bg-blue-400/20" />

        <div className="absolute left-[8%] bottom-[16%] h-1.5 w-1.5 rounded-full bg-blue-400/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-blue-400/70">
              07
            </span>

            <span className="h-px w-12 bg-blue-500/40" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Start a conversation
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div>
              <div className="relative inline-block">
                <div className="absolute -inset-x-5 top-1/2 h-10 -translate-y-1/2 rounded-[50%] bg-blue-500/[0.07] blur-sm" />

                <p className="relative text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                  Get in touch
                </p>
              </div>

              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.3rem]">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                  useful.
                </span>
              </h2>
            </div>

            <div className="relative lg:pt-14">
              <span className="pointer-events-none absolute -right-2 -top-16 select-none font-mono text-[10rem] font-semibold leading-none text-blue-500/[0.025]">
                07
              </span>

              <p className="relative max-w-xl text-xl font-medium leading-9 tracking-[-0.02em] text-white/90 sm:text-2xl sm:leading-10">
                Have a project, product, or technical problem worth solving?
                Let&apos;s talk about it.
              </p>

              <p className="mt-6 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Whether you are building something new or improving something
                that already exists, I&apos;m open to thoughtful technical
                conversations and selected opportunities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact workspace */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-surface/40 p-7 sm:p-9"
          >
            {/* Decorative number */}
            <span className="pointer-events-none absolute -right-5 -top-7 select-none font-mono text-[9rem] font-semibold leading-none text-white/[0.025]">
              07
            </span>

            {/* Paint mark */}
            <div className="absolute -left-12 top-32 h-24 w-40 rotate-[-15deg] rounded-[48%_52%_45%_55%] bg-blue-500/[0.055]" />

            <div className="relative">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-400/70">
                Direct contact
              </p>

              <div className="mt-10 space-y-9">
                {/* Email */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </p>

                  <a
                    href="mailto:ozpetermanasseh@gmail.com"
                    className="mt-3 inline-block break-all text-base font-medium text-white transition-colors duration-300 hover:text-blue-400 sm:text-lg"
                  >
                    ozpetermanasseh@gmail.com
                  </a>
                </div>

                {/* Availability */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Availability
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />

                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>

                    <p className="text-sm font-medium text-white">
                      Available for selected opportunities
                    </p>
                  </div>
                </div>

                {/* Philosophy */}
                <div className="border-t border-white/[0.06] pt-8">
                  <p className="text-sm leading-7 text-muted">
                    Good software starts with understanding the problem. Tell
                    me what you&apos;re working on, and we can take it from
                    there.
                  </p>
                </div>
              </div>
            </div>

            {/* Corner detail */}
            <div className="absolute bottom-7 right-7 h-5 w-5 opacity-40">
              <span className="absolute right-0 top-0 h-px w-5 bg-blue-400/60" />
              <span className="absolute right-0 top-0 h-5 w-px bg-blue-400/60" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-background/60 p-6 backdrop-blur-xl sm:p-9"
            >
              {/* Form glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/[0.045] blur-[100px]" />

              {/* Form heading */}
              <div className="relative mb-9">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-400/70">
                  Send a message
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                  Tell me what you&apos;re building.
                </h3>
              </div>

              <div className="relative space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-[0.15em] text-white/70"
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
                    className="mt-3 w-full rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-muted-foreground hover:border-white/[0.12] focus:border-blue-500/50 focus:bg-blue-500/[0.025] focus:ring-1 focus:ring-blue-500/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-[0.15em] text-white/70"
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
                    className="mt-3 w-full rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-muted-foreground hover:border-white/[0.12] focus:border-blue-500/50 focus:bg-blue-500/[0.025] focus:ring-1 focus:ring-blue-500/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-[0.15em] text-white/70"
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
                    className="mt-3 w-full resize-none rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-sm leading-7 text-white outline-none transition-all duration-300 placeholder:text-muted-foreground hover:border-white/[0.12] focus:border-blue-500/50 focus:bg-blue-500/[0.025] focus:ring-1 focus:ring-blue-500/20"
                  />
                </div>

                {/* Status */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.08] px-5 py-4 text-sm leading-6 text-emerald-300"
                  >
                    Your message has been sent successfully. I&apos;ll get
                    back to you soon.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-red-500/20 bg-red-500/[0.08] px-5 py-4 text-sm leading-6 text-red-300"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-500 hover:bg-blue-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {/* Button shine */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">
                    {status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send message
                        <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            </form>
          </motion.div>
        </div>

        {/* Closing mark */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 flex origin-center items-center justify-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}