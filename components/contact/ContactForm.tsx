"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-stone-light bg-white/60 p-8 text-center">
        <p className="font-display text-xl text-ink mb-2">Message sent</p>
        <p className="text-charcoal/80 text-sm">
          Thanks for reaching out — Beth will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-charcoal mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-stone-light bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-charcoal mb-1.5">
            Phone <span className="text-stone">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-stone-light bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-charcoal mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-stone-light bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-charcoal mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-stone-light bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          placeholder="Tell Beth a bit about what you're looking for..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-gold hover:bg-gold-dark transition-colors text-ink font-medium px-7 py-3 rounded-full text-sm disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
