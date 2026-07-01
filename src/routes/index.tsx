import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowUpRight,
  ArrowUp,
  Download,
  Calendar,
  Menu,
  X,
} from "lucide-react";
import {
  profile,
  jobs,
  otherProjects,
  skills,
  professionalSkills,
  languages,
  education,
} from "@/lib/cv-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Irina-Gabriela Teșcureanu — Front End Developer" },
      {
        name: "description",
        content:
          "Brutalist CV of Irina-Gabriela Teșcureanu, a Bucharest-based front end developer with 5+ years building web apps end to end.",
      },
      { property: "og:title", content: "Irina-Gabriela Teșcureanu — Front End Developer" },
      {
        property: "og:description",
        content:
          "Front end developer with 5+ years across discovery, architecture, build, and launch.",
      },
    ],
  }),
  component: Index,
});

const marqueeItems = [
  "FRONTEND",
  "REACT",
  "VUE",
  "TYPESCRIPT",
  "ARCHITECTURE",
  "UX",
  "CI/CD",
  "WEBRTC",
];

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

// Reveals every `.reveal` element as it scrolls into view. The hidden state
// lives behind the `js-reveal` class (added here), so the page degrades to
// fully visible when JS is unavailable or motion is reduced.
function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return () => root.classList.remove("js-reveal");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}

// Staggers the transition of sibling items so a list/grid cascades in.
function revealDelay(index: number, step = 80): CSSProperties {
  return { transitionDelay: `${index * step}ms` };
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-ink bg-background/90 backdrop-blur">
      <div className="flex items-center justify-between px-5 py-3">
        <span className="font-display text-lg">IGT.</span>
        <nav className="hidden gap-6 font-mono text-lg uppercase sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/Resume_Irina_Tescureanu.pdf"
            download
            className="btn-brutal brutal-border inline-flex items-center gap-1 bg-card px-3 py-1 font-mono text-xs uppercase hover:bg-accent hover:text-accent-foreground"
          >
            <Download className="h-3 w-3" /> CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn-brutal brutal-border bg-primary px-3 py-1 font-mono text-xs uppercase text-primary-foreground"
          >
            Hire me
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn-brutal brutal-border relative inline-flex h-8 w-8 items-center justify-center overflow-hidden bg-card sm:hidden"
          >
            <X
              className={`absolute h-4 w-4 transition-all duration-200 motion-reduce:transition-none ${
                open ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"
              }`}
            />
            <Menu
              className={`absolute h-4 w-4 transition-all duration-200 motion-reduce:transition-none ${
                open ? "-rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none sm:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          className="flex flex-col overflow-hidden border-ink font-mono text-lg uppercase [border-top-width:0] data-[open=true]:[border-top-width:3px]"
          data-open={open}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={open ? revealDelay(i, 50) : undefined}
              className={`border-b border-border px-5 py-3 transition-all duration-200 ease-out hover:bg-accent hover:text-accent-foreground motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="btn-brutal brutal-border fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function SectionLabel({ no, title }: { no: string; title: string }) {
  return (
    <div className="reveal mb-10 flex items-end gap-4 border-b-[3px] border-ink pb-4">
      <span className="font-mono text-sm text-primary">[{no}]</span>
      <h2 className="text-2xl leading-none sm:text-4xl">{title}</h2>
    </div>
  );
}

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen grid-paper">
      {/* Top bar */}
      <Header />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden px-5 py-14 md:grid-cols-[1.4fr_1fr] md:py-20">
        <div className="reveal">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">
            Front End Developer · {profile.location}
          </p>
          <h1 className="break-words text-[clamp(2.75rem,12vw,4rem)] sm:text-7xl md:text-8xl">
            Teșcureanu
            <br />
            <span className="text-primary">Irina</span>
            <span className="text-accent">-</span>Gabriela
          </h1>
          <p className="mt-8 max-w-full border-l-[3px] border-primary pl-4 text-base text-muted-foreground sm:max-w-xl sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-brutal brutal-border inline-flex items-center gap-2 bg-primary px-4 py-2 font-mono text-xs uppercase text-primary-foreground"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-brutal brutal-border inline-flex items-center gap-2 bg-card px-4 py-2 font-mono text-xs uppercase hover:bg-accent hover:text-accent-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Brutalist identity card (replaces the missing hero image) */}
        <div className="reveal brutal-border bg-card" style={revealDelay(1, 120)}>
          <div className="flex items-center justify-between border-b-[3px] border-ink bg-primary px-4 py-2 font-mono text-xs uppercase text-primary-foreground">
            <span>ID / 1997</span>
            <span>FE.DEV</span>
          </div>
          <div className="px-6 py-8">
            <img
              src="/irina-photo.jpg"
              alt={`${profile.name} portrait`}
              className="brutal-border aspect-square w-full object-cover"
            />
            <dl className="mt-6 space-y-2 font-mono text-xs uppercase">
              <div className="flex justify-between border-b border-border pb-1">
                <dt className="text-muted-foreground">Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-1">
                <dt className="text-muted-foreground">DOB</dt>
                <dd>{profile.dob}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-1">
                <dt className="text-muted-foreground">Experience</dt>
                <dd>5+ years</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="text-primary">Open to work</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y-[3px] border-ink bg-primary py-3 text-primary-foreground">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
          ].map((item, i) => (
            <span
              key={i}
              className="mx-6 font-mono text-sm font-semibold uppercase tracking-widest"
            >
              ✱ {item}
            </span>
          ))}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionLabel no="01" title="Work" />
        <div className="space-y-6">
          {jobs.map((job, i) => (
            <article
              key={job.index}
              className="reveal brutal-border bg-card p-6 md:p-8"
              style={revealDelay(i)}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase text-muted-foreground">
                <span className="text-primary">[{job.index}]</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {job.period}
                </span>
              </div>
              <h3 className="mt-4 text-2xl leading-tight sm:text-3xl">{job.title}</h3>
              <p className="mt-1 font-mono text-sm text-primary">{job.company}</p>
              {job.url && (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-brutal brutal-border mt-4 inline-flex items-center gap-1 bg-card px-3 py-1 font-mono text-xs uppercase hover:bg-accent hover:text-accent-foreground"
                >
                  Visit <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
              <p className="mt-4 flex max-w-3xl gap-3 text-sm text-muted-foreground">
                <span aria-hidden className="mt-1 select-none text-transparent">
                  ▸
                </span>
                <span>{job.context}</span>
              </p>
              <ul className="mt-5 space-y-2">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="mt-1 text-accent">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tools.map((t) => (
                  <span
                    key={t}
                    className="border-2 border-ink bg-accent px-2 py-1 font-mono text-[11px] font-semibold uppercase text-accent-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionLabel no="02" title="Projects" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((p, i) => (
            <article
              key={p.name}
              className="reveal brutal-border flex flex-col bg-card p-6"
              style={revealDelay(i)}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg leading-tight">{p.name}</h3>
                {p.url && <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />}
              </div>
              <p className="mt-1 font-mono text-xs uppercase text-muted-foreground">{p.period}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="font-mono text-[11px] uppercase text-accent">
                    #{t}
                  </span>
                ))}
              </div>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-brutal brutal-border mt-4 inline-flex items-center gap-1 self-start bg-card px-3 py-1 font-mono text-xs uppercase hover:bg-accent hover:text-accent-foreground"
                >
                  Visit <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionLabel no="03" title="About" />
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Skills */}
          <div className="reveal brutal-border bg-card p-6 md:p-8">
            <h3 className="font-mono text-sm uppercase text-primary">Skills</h3>
            <div className="mt-6 space-y-5">
              {skills.map((s) => (
                <div key={s.group}>
                  <p className="font-mono text-xs uppercase text-muted-foreground">{s.group}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="border border-border px-2 py-1 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths + Languages + Education */}
          <div className="space-y-6">
            <div className="reveal brutal-border bg-card p-6" style={revealDelay(1)}>
              <h3 className="font-mono text-sm uppercase text-primary">Strengths</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {professionalSkills.map((s) => (
                  <span key={s} className="border border-border px-2 py-1 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="reveal brutal-border bg-card p-6" style={revealDelay(2)}>
              <h3 className="font-mono text-sm uppercase text-primary">Languages</h3>
              <ul className="mt-4 space-y-2">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex justify-between border-b border-border pb-2 text-sm"
                  >
                    <span>{l.name}</span>
                    <span className="font-mono text-xs uppercase text-muted-foreground">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal brutal-border bg-card p-6" style={revealDelay(3)}>
              <h3 className="font-mono text-sm uppercase text-primary">Education</h3>
              <ul className="mt-4 space-y-4">
                {education.map((e) => (
                  <li key={e.school}>
                    <p className="text-sm">{e.school}</p>
                    <p className="text-sm text-muted-foreground">{e.detail}</p>
                    <p className="font-mono text-xs uppercase text-muted-foreground">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionLabel no="04" title="Contact" />
        <div className="reveal brutal-border bg-primary p-8 text-primary-foreground md:p-12">
          <p className="font-display text-3xl leading-tight sm:text-5xl">
            Let's build something solid.
          </p>
          <div className="mt-8 grid gap-4 font-mono text-sm sm:grid-cols-2">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:underline">
              <Mail className="h-5 w-5" /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 hover:underline"
            >
              <Phone className="h-5 w-5" /> {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <span className="flex items-center gap-3">
              <MapPin className="h-5 w-5" /> {profile.location}
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-[3px] border-ink px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with TanStack Start · Brutalist edition</span>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
