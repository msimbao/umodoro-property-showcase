import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  TrendingUp,
  Camera,
  Wrench,
  Share2,
  MessageCircle,
  Mail,
  Phone,
  Star,
  Play,
  ArrowDown,
  X,
  Compass,
  Facebook,
  ThumbsUp,
  MessageSquare,
  Zap,
} from "lucide-react";
import luxuryImg from "@/assets/luxury-guest-house.jpg";
import deluxImg from "@/assets/delux-rental.png";
import old1 from "@/assets/old-1.jpg";
import old2 from "@/assets/old-2.jpg";
import old3 from "@/assets/old-3.jpg";
import old4 from "@/assets/old-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Umodoro Tours — Interactive Property Tours in Zambia" },
      {
        name: "description",
        content:
          "Get more bookings with premium interactive property tours. Designed for WhatsApp, Airbnb, Booking.com and your website.",
      },
      { property: "og:title", content: "Umodoro Tours — Interactive Property Tours" },
      {
        property: "og:description",
        content:
          "Show guests exactly what they're booking. Stand out, build trust, get more bookings.",
      },
    ],
  }),
  component: Index,
});

const DEMO_URL = "https://msimbao.github.io/tourdemos/umodoro-demo-3/app-files/index.html";
const PHONE = "+260956180824";
const PHONE_DIGITS = "260956180824";
const EMAIL = "umodoro@gmail.com";
const WHATSAPP_URL = `https://wa.me/${PHONE_DIGITS}`;

const openDemoModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  }
};

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Umodoro<span className="gold-text">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#why" className="hover:text-white transition">Why Us</a>
          <a href="#tours" className="hover:text-white transition">Tours</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#how" className="hover:text-white transition">How It Works</a>
        </nav>
        <button
          type="button"
          onClick={openDemoModal}
          className="rounded-full border border-[var(--gold)] bg-[var(--gold)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] transition hover:bg-transparent hover:text-[var(--gold)]"
        >
          Book Demo
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <Nav />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pt-40">
        <div className="flex flex-col justify-center">
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Let Guests{" "}
            <span className="gold-text italic">Explore</span> Your Property Before They Book.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Immersive virtual tours designed for WhatsApp, Facebook, Airbnb,
            Booking.com, and your website.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openDemoModal}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-[var(--ink)] shadow-[var(--shadow-gold)] transition hover:scale-[1.02]"
            >
              Book My Free Demo
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a
              href="#tours"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
            >
              <Play className="h-4 w-4" />
              View Example Tours
            </a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/70 sm:grid-cols-4">
            {["Mobile Friendly", "Share Anywhere", "Any Website", "Hosted By Umodoro"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--gold)]" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--gold)]/30 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[var(--shadow-luxe)]">
            <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-[var(--gold)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--ink)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--ink)]" />
              Live Demo Tour
            </div>
            <iframe
              src={DEMO_URL}
              title="Live virtual property tour demo"
              className="aspect-[4/5] w-full lg:aspect-[3/4]"
              loading="eager"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyOffer() {
  return (
    <section className="relative overflow-hidden bg-[var(--charcoal)] py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">
              <Zap className="h-3 w-3" /> What We Do
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              We Build Virtual Tours You Can{" "}
              <span className="gold-text italic">Post Instantly</span> To Social Media.
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
              One link. Share it on WhatsApp, Facebook, Instagram, Airbnb, and your website — and watch engagement climb.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openDemoModal}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-semibold text-[var(--ink)] shadow-[var(--shadow-gold)] transition hover:scale-[1.02]"
              >
                Book My Free Demo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <a
                href="#tours"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                See Live Tours
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "3×", label: "More social media engagement" },
              { num: "24/7", label: "Always-on virtual open house" },
              { num: "1 link", label: "Works everywhere instantly" },
              { num: "60s", label: "To share with every guest" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center"
              >
                <div
                  className="font-stat text-4xl font-bold tracking-tight md:text-5xl"
                  style={{
                    background: "var(--gradient-gold)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {s.num}
                </div>
                <p className="mt-2 text-xs leading-snug text-white/65">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const cards = [
    {
      icon: Star,
      title: "Stand Out",
      body: "Most listings use photos. Few offer interactive tours.",
    },
    {
      icon: ShieldCheck,
      title: "Build Trust",
      body: "Guests can explore every room before they book.",
    },
    {
      icon: TrendingUp,
      title: "Get More Inquiries",
      body: "Immersive listings keep visitors engaged longer.",
    },
  ];
  return (
    <section id="why" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
            The Umodoro Edge
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Why Properties Choose Umodoro
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-card p-10 transition hover:border-[var(--gold)] hover:shadow-[var(--shadow-luxe)]"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] opacity-0 transition group-hover:opacity-100"
                style={{ background: "var(--gradient-gold)" }}
              />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--gold)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--muted-foreground)]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="bg-[var(--secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-center font-display text-4xl font-bold tracking-tight md:text-5xl">
          From This<span className="text-[var(--muted-foreground)]">...</span>
        </h2>
        <div className="mt-16 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
          {/* Old Way: stacked angled Facebook post cards */}
          <div className="relative mx-auto h-[440px] w-full max-w-sm">
            <p className="absolute -top-2 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--border)] bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Just another social media post
            </p>
            {[
              { img: old1, name: "Lusaka Stays", time: "2h", rot: "-rotate-[10deg] -translate-x-10 translate-y-6", z: "z-10" },
              { img: old2, name: "Cozy Rooms ZM", time: "5h", rot: "rotate-[7deg] translate-x-8 translate-y-2", z: "z-20" },
              { img: old3, name: "Apartments Lusaka", time: "1d", rot: "-rotate-[4deg] -translate-x-4 -translate-y-2", z: "z-30" },
              { img: old4, name: "Lodge Bookings", time: "3d", rot: "rotate-[3deg] translate-x-2 -translate-y-6", z: "z-[35]" },
            ].map((c, i) => (
              <div
                key={i}
                className={`absolute inset-0 mx-auto h-[360px] w-[280px] overflow-hidden rounded-xl border border-[var(--border)] bg-white text-[var(--ink)] shadow-xl ${c.rot} ${c.z}`}
              >
                {/* FB header */}
                <div className="flex items-center gap-2 px-3 py-2">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1877F2] text-white">
                    <Facebook className="h-5 w-5 fill-white" strokeWidth={0} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-semibold leading-tight">{c.name}</div>
                    <div className="text-[9px] text-gray-500">{c.time} · 🌍</div>
                  </div>
                  <div className="text-gray-400 text-lg leading-none">⋯</div>
                </div>
                <div className="px-3 pb-2 text-[10px] text-gray-700 leading-snug">
                  New listing available! DM for bookings 📞
                </div>
                <img
                  src={c.img}
                  alt=""
                  width={512}
                  height={512}
                  className="h-[210px] w-full object-cover"
                  loading="lazy"
                />
                {/* FB reactions */}
                <div className="flex items-center justify-between border-t border-gray-100 px-3 py-2 text-[10px] text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-[#1877F2] text-white text-[8px]">👍</span>
                    <span>12</span>
                  </div>
                  <div>2 comments</div>
                </div>
                <div className="grid grid-cols-3 border-t border-gray-100 text-[10px] text-gray-600">
                  <div className="flex items-center justify-center gap-1 py-1.5">
                    <ThumbsUp className="h-3 w-3" /> Like
                  </div>
                  <div className="flex items-center justify-center gap-1 py-1.5">
                    <MessageSquare className="h-3 w-3" /> Comment
                  </div>
                  <div className="flex items-center justify-center gap-1 py-1.5">
                    <Share2 className="h-3 w-3" /> Share
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-0 left-1/2 z-40 -translate-x-1/2 translate-y-6 rounded-full bg-card/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)] backdrop-blur">
              Just another social post
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className="grid h-16 w-16 place-items-center rounded-full text-[var(--ink)] shadow-[var(--shadow-gold)] md:rotate-[-90deg]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <ArrowDown className="h-6 w-6" />
            </div>
          </div>

          {/* Umodoro Way: 360 tour visual */}
          <div className="relative mx-auto h-[360px] w-full max-w-sm">
            <p className="absolute -top-2 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
              The Umodoro Way
            </p>
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-[var(--ink)] shadow-[var(--shadow-luxe)]">
              <img
                src={luxuryImg}
                alt="Interactive 360 tour"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
              <button
                type="button"
                onClick={openDemoModal}
                className="group absolute inset-0 flex flex-col items-center justify-center text-white"
                aria-label="Start tour"
              >
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur transition group-hover:scale-105 group-hover:bg-[var(--gold)] group-hover:border-[var(--gold)] group-hover:text-[var(--ink)]"
                >
                  <Compass className="h-9 w-9" strokeWidth={1.5} />
                </span>
                <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em]">
                  360° Tour
                </span>
                <span className="mt-2 font-display text-2xl font-semibold">
                  Start Tour
                </span>
              </button>
            </div>
            <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 translate-y-4 rounded-full bg-[var(--ink)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
              Step inside, instantly
            </div>
          </div>
        </div>
        <p className="mt-14 text-center font-display text-3xl font-bold tracking-tight md:text-4xl">
          Turn Browsers Into <span className="gold-text">Guests</span>.
        </p>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { num: "95%", label: "of travellers and buyers begin online." },
    { num: "3×", label: "more engagement than traditional listings." },
    { num: "24/7", label: "open house available anytime." },
  ];
  return (
    <section className="bg-[var(--ink)] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
            Industry Standard
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Already Standard Worldwide.
            <br />
            <span className="gold-text italic">Now Available In Zambia.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur transition hover:border-[var(--gold)]/50"
            >
              <div
                className="font-stat text-7xl font-bold tracking-tight"
                style={{
                  background: "var(--gradient-gold)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {s.num}
              </div>
              <p className="mt-4 text-base text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-center text-base text-white/60">
          Virtual property tours have become standard across North America and
          Europe. Umodoro Tours is bringing this proven marketing tool to Zambia.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const tours = [
    {
      img: luxuryImg,
      title: "Luxury Guest House",
      url: "https://msimbao.github.io/tourdemos/umodoro-demo-2/app-files/index.html",
    },
    {
      img: deluxImg,
      title: "Delux Rental",
      url: "https://msimbao.github.io/tourdemos/umodoro-demo-1/app-files/index.html",
    },
  ];
  return (
    <section id="tours" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
              Demo Gallery
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Explore More Tours
            </h2>
          </div>

        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tours.map((t) => (
            <a
              key={t.title}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-[var(--ink)] shadow-[var(--shadow-luxe)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="font-display text-2xl font-semibold">{t.title}</h3>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--gold)] bg-[var(--gold)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] transition group-hover:bg-transparent group-hover:text-[var(--gold)]">
                  Open Tour
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Camera, title: "We Visit", body: "We capture your property." },
    { icon: Wrench, title: "We Build", body: "We create your interactive property tour." },
    {
      icon: Share2,
      title: "You Share",
      body: "Use it on WhatsApp, Facebook, Airbnb, Booking.com, and your website.",
    },
  ];
  return (
    <section id="how" className="bg-[var(--secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
            How It Works
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Simple Process
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl bg-card p-10 text-center"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full border border-[var(--gold)] bg-background px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--gold)]">
                Step {i + 1}
              </div>
              <div className="mx-auto mt-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--gold)]">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-[var(--muted-foreground)]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Less Than The Value Of A <span className="gold-text italic">Single Booking</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Free Demo */}
          <div className="relative rounded-2xl border border-[var(--border)] bg-card p-8">
            <div className="absolute -top-3 left-8 rounded-full bg-[var(--ink)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              Most Popular
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Free Demo
            </p>
            <div className="mt-4 font-display text-5xl font-bold">FREE</div>
            <p className="mt-4 text-[var(--muted-foreground)]">
              We visit your property and create a sample tour. No obligation.
            </p>
            <button
              type="button"
              onClick={openDemoModal}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-[var(--ink)] bg-[var(--ink)] py-3.5 text-sm font-semibold text-white transition hover:bg-transparent hover:text-[var(--ink)]"
            >
              Book Free Demo
            </button>
          </div>

          {/* Professional - highlighted */}
          <div className="relative overflow-hidden rounded-2xl bg-[var(--ink)] p-8 text-white shadow-[var(--shadow-luxe)] lg:-mt-6 lg:pb-12">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: "var(--gradient-gold)" }}
            />
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              Professional Property Tour
            </p>
            <div className="mt-4">
              <span className="font-display text-5xl font-bold">K4,500</span>
              <span className="ml-2 text-sm text-white/60">once-off</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {[
                "Full property tour",
                "Mobile friendly",
                "Professional hosting",
                "Unlimited sharing",
                "Website embedding",
                "WhatsApp-ready links",
                "Social media ready",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
                  {t}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={openDemoModal}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--gold)] py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:scale-[1.01]"
            >
              Get Started
            </button>
            <p className="mt-4 text-center text-xs text-white/60">
              One extra booking can pay for the entire tour.
            </p>
          </div>

          {/* Hosting */}
          <div className="rounded-2xl border border-[var(--border)] bg-card p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Hosting & Maintenance
            </p>
            <div className="mt-4">
              <span className="font-display text-5xl font-bold">K1,500</span>
              <span className="ml-2 text-sm text-[var(--muted-foreground)]">/year</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[var(--muted-foreground)]">
              {[
                "Secure hosting",
                "Link maintenance",
                "Compatibility updates",
                "Minor photo updates",
                "Continued access",
                "Fast support",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyNow() {
  const items = [
    "Guests compare multiple listings.",
    "Photos alone are no longer enough.",
    "Interactive tours create confidence.",
    "Confidence leads to more inquiries.",
  ];
  return (
    <section className="bg-[var(--secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-bold tracking-tight md:text-5xl">
          Don't Let Great Properties Look <span className="italic text-[var(--muted-foreground)]">Ordinary</span> Online
        </h2>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <div
              key={t}
              className="rounded-2xl border border-[var(--border)] bg-card p-6"
            >
              <div className="font-display text-3xl font-bold text-[var(--gold)]">
                0{i + 1}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[var(--ink)] py-28 text-white md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
          Your Next Booking Starts Here
        </p>
        <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Ready To Showcase Your Property{" "}
          <span className="gold-text italic">Like Never Before?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          Book your free demo and see how an interactive property tour can help
          your property stand out online.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={openDemoModal}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-9 py-4 text-sm font-semibold text-[var(--ink)] shadow-[var(--shadow-gold)] transition hover:scale-[1.02]"
          >
            Book My Free Demo
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-9 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
        <p className="mt-8 text-sm text-white/50">
          No obligation. If you don't see the value, you pay nothing.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t border-white/10 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[2fr_1fr] lg:px-10">
        <div>
          <div className="font-display text-2xl font-bold">
            Umodoro<span className="gold-text">.</span>
          </div>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
            Interactive Virtual Property Tours
          </p>
          <p className="mt-5 max-w-md text-sm text-white/60">
            Helping properties stand out, build trust, and get more bookings.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Contact</p>
          <div className="mt-4 space-y-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-[var(--gold)]"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-[var(--gold)]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-[var(--gold)]"
            >
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-8 text-xs text-white/40 lg:px-10">
        © {new Date().getFullYear()} Umodoro Tours. All rights reserved.
      </div>
    </footer>
  );
}

function DemoModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", property: "", message: "" });

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-demo-modal", handler);
    return () => window.removeEventListener("open-demo-modal", handler);
  }, []);

  if (!open) return null;

  const close = () => setOpen(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Demo Request — ${form.name || "New lead"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProperty: ${form.property}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-card p-7 shadow-[var(--shadow-luxe)] sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-[var(--muted-foreground)] hover:bg-[var(--secondary)]"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
          Free Demo
        </p>
        <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">
          Book Your Free Demo
        </h3>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Tell us about your property and we'll be in touch within 24 hours.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Name
            </label>
            <input
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-lg border border-[var(--border)] bg-background px-4 py-2.5 text-sm outline-none focus:border-[var(--gold)]"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Email
              </label>
              <input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-lg border border-[var(--border)] bg-background px-4 py-2.5 text-sm outline-none focus:border-[var(--gold)]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Property Type
              </label>
              <input
                maxLength={100}
                placeholder="Guest house, Airbnb…"
                value={form.property}
                onChange={(e) => setForm({ ...form, property: e.target.value })}
                className="mt-1 w-full rounded-lg border border-[var(--border)] bg-background px-4 py-2.5 text-sm outline-none focus:border-[var(--gold)]"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Message
            </label>
            <textarea
              rows={3}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-lg border border-[var(--border)] bg-background px-4 py-2.5 text-sm outline-none focus:border-[var(--gold)]"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ink)] py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--charcoal)]"
          >
            <Mail className="h-4 w-4" />
            Send via Email
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
          <span className="h-px flex-1 bg-[var(--border)]" />
          Or reach us directly
          <span className="h-px flex-1 bg-[var(--border)]" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:scale-[1.01]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold text-foreground transition hover:border-[var(--gold)]"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}


function Index() {
  return (
    <main className="bg-background">
      <Hero />
      <KeyOffer />
      <WhyUs />
      <BeforeAfter />
      <Stats />
      <Gallery />
      <HowItWorks />
      <Pricing />
      <WhyNow />
      <FinalCTA />
      <Footer />
      <DemoModal />
    </main>
  );
}
