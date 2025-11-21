"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, SendHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { heroContent } from "@/data/portfolio";

const formEndpoint =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "https://formspree.io/f/xvglddzl";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("subject", "New portfolio message");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section id="contact" className="space-y-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Get in touch
        </p>
        <h2 className="section-heading">Let’s collaborate</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel space-y-4 rounded-3xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Input required name="name" placeholder="Full name" />
          <Input
            required
            name="email"
            type="email"
            placeholder="Work email"
          />
          <Textarea name="message" required placeholder="Project details" />
          <Button type="submit" className="w-full" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
            {status !== "sending" && <SendHorizontal className="h-4 w-4" />}
          </Button>
          <StatusBanner status={status} />
        </motion.form>
        <motion.div
          className="glass-panel rounded-3xl border border-white/10 p-6 text-white/80"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            title="Gmail"
            value={heroContent.contact.email}
            href={`mailto:${heroContent.contact.email}`}
            accent="crimson"
          />
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            title="Phone"
            value={heroContent.contact.phone}
            href={`tel:${heroContent.contact.phone}`}
            accent="violet"
          />
          <ContactCard
            icon={<SendHorizontal className="h-5 w-5" />}
            title="LinkedIn"
            value="DMs open"
            href={heroContent.contact.linkedin}
            accent="cyan"
          />
        </motion.div>
      </div>
    </section>
  );
}

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
  accent: "violet" | "cyan" | "crimson";
};

const accentClasses: Record<ContactCardProps["accent"], string> = {
  violet: "from-indigo-500/80 via-purple-500/80 to-fuchsia-500/70",
  cyan: "from-sky-500/80 via-cyan-500/80 to-emerald-400/80",
  crimson: "from-rose-500/80 via-orange-500/80 to-amber-400/80",
};

function ContactCard({ icon, title, value, href, accent }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {title}
        </p>
        <p className="text-white">{value}</p>
      </div>
      <div
        className={`rounded-full border border-white/20 bg-gradient-to-br ${accentClasses[accent]} p-2.5 text-white shadow-[0_0_18px_rgba(15,23,42,0.45)] transition group-hover:scale-110 group-hover:border-white/40`}
      >
        {icon}
      </div>
    </a>
  );
}

type StatusBannerProps = {
  status: "idle" | "sending" | "sent" | "error";
};

function StatusBanner({ status }: StatusBannerProps) {
  if (status === "idle") return null;

  const copy =
    status === "sending"
      ? "Routing your message…"
      : status === "sent"
        ? "Message delivered! Check your inbox for my reply."
        : "Something went wrong. Email me directly via the links on the right.";

  const accent = status === "error" ? "text-rose-300" : "text-emerald-300";

  return (
    <p className={`text-center text-sm ${accent}`} role="status">
      {copy}
    </p>
  );
}

