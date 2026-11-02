"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  Copy,
  Check,
  Github,
  MapPin,
  Send,
  MessageSquare,
  Sparkles,
  Info,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [mailtoTriggered, setMailtoTriggered] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const onSubmit = (data: ContactFormData) => {
    // Construct prefilled mailto URL with formatted body
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${data.subject}`
    )}&body=${encodeURIComponent(
      `Hello Anupam,\n\nMy name is ${data.name} (${data.email}).\n\n${data.message}\n\nBest regards,\n${data.name}`
    )}`;

    window.location.href = mailtoUrl;
    setMailtoTriggered(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[#DCE5DF] bg-[#F1F4F2]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D1FAE5] border border-[#DCE5DF] text-[#0F766E] font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-base text-[#6B7280] leading-relaxed">
            I&apos;m open to connecting with developers, collaborating on interesting projects, and exploring opportunities to build useful software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts & Verified Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <div className="rounded-3xl border border-[#DCE5DF] hover:border-[#0F766E] bg-white p-6 space-y-4 shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] border border-[#DCE5DF] flex items-center justify-center text-[#0F766E]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <span className="text-sm font-bold text-white">
                      neelanupam2002@gmail.com
                    </span>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-surface-elevated border border-white/10 hover:border-[#F8E769]/40 text-xs font-medium text-slate-300 hover:text-[#F8E769] transition-all cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] border border-[#0F766E] text-white text-xs font-semibold transition-colors"
              >
                <span>Open in Email App</span>
              </a>
            </div>

            {/* GitHub Profile Card */}
            <a
              href={siteConfig.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[#DCE5DF] bg-white p-6 flex items-center justify-between shadow-sm transition-all duration-300 hover:border-[#0F766E] group block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-obsidian-850 border border-white/10 flex items-center justify-center text-slate-200 group-hover:text-violet-300 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    GitHub Profile
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-violet-200 transition-colors">
                    {siteConfig.github.username}
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono text-flutter-sky group-hover:underline">
                github.com/{siteConfig.github.username} ↗
              </span>
            </a>

            {/* Location Card */}
            <div className="rounded-3xl border border-[#DCE5DF] bg-white p-6 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Location & Availability
                </span>
                <span className="text-sm font-bold text-white">
                  {siteConfig.location}
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">
                  Timezone: GMT+6 (Bangladesh Standard Time)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Mailto Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#DCE5DF] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <MessageSquare className="w-4 h-4 text-violet-400" />
              <h3 className="text-base font-bold text-white">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-850 border border-white/10 focus:border-violet-500 focus:outline-hidden text-sm text-white placeholder-slate-500 transition-colors"
                  />
                  {errors.name && (
                    <span className="text-rose-400 text-xs mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-850 border border-white/10 focus:border-violet-500 focus:outline-hidden text-sm text-white placeholder-slate-500 transition-colors"
                  />
                  {errors.email && (
                    <span className="text-rose-400 text-xs mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  placeholder="Collaboration on Flutter mobile app"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-850 border border-white/10 focus:border-violet-500 focus:outline-hidden text-sm text-white placeholder-slate-500 transition-colors"
                />
                {errors.subject && (
                  <span className="text-rose-400 text-xs mt-1 block">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Hi Anupam, I'd like to discuss a Flutter project..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-850 border border-white/10 focus:border-violet-500 focus:outline-hidden text-sm text-white placeholder-slate-500 transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-rose-400 text-xs mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Launch Email with Message</span>
              </button>
            </form>

            {mailtoTriggered && (
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-2.5 text-xs text-emerald-300 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  Your email client has been opened with your message prefilled to{" "}
                  <strong>{siteConfig.email}</strong>. Simply review and click send!
                </p>
              </div>
            )}

            <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-400 font-mono">
              <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
              <span>
                Note: Submissions open your local mail client securely. No unverified third-party form proxy is used.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
