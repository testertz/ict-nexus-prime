import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, Sparkles, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — ICT Club CBE" },
      { name: "description", content: "Join 1000+ CBE student innovators. Four tiers, transparent benefits, and a community designed for builders." },
      { property: "og:title", content: "Join ICT Club CBE" },
      { property: "og:description", content: "Four membership tiers. One thriving community." },
    ],
  }),
  component: Membership,
});

const tiers = [
  {
    name: "Student Member", price: "Free", desc: "For all CBE students — your entry into the community.",
    perks: ["Access to weekly meetups", "Discord & WhatsApp community", "Open events & workshops", "Member directory access"],
    cta: "Apply Free", featured: false,
  },
  {
    name: "Active Member", price: "TZS 10K", per: "/semester", desc: "For students contributing to projects and events.",
    perks: ["Everything in Student", "Project team assignments", "Skill certifications", "Mentor pairing", "Member-only workshops"],
    cta: "Become Active", featured: true,
  },
  {
    name: "Executive Member", price: "By election", desc: "Elected leaders running club operations.",
    perks: ["All Active benefits", "Leadership development", "Industry speaker access", "Conference sponsorships", "Voting rights"],
    cta: "Run for Office", featured: false,
  },
  {
    name: "Alumni Member", price: "TZS 50K", per: "/year", desc: "For graduates staying connected to the network.",
    perks: ["Lifetime alumni network", "Hiring & referrals board", "Mentor a student", "Alumni events", "Annual conference"],
    cta: "Stay Connected", featured: false,
  },
];

const benefits = [
  "Hands-on project experience that beats your CV",
  "Direct mentorship from industry engineers",
  "Free access to industry tooling (GitHub, AWS, JetBrains)",
  "Priority invites to closed hackathons",
  "Referrals to our 30+ partner companies",
  "A peer group of 1000+ ambitious students",
];

function Membership() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Membership"
        title="Find your tier. Find your tribe."
        subtitle="Membership is open to all CBE students. Pick the tier that matches your ambition — and grow from there."
      />

      {/* Benefits */}
      <Section eyebrow="Member Benefits" title="What you actually get.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-5 flex gap-3 items-start hover:glow-primary transition-all"
            >
              <div className="h-8 w-8 rounded-lg bg-aurora flex items-center justify-center shrink-0">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
              <p className="text-sm">{b}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tiers */}
      <Section eyebrow="Membership Tiers" title="Four ways to belong.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                t.featured ? "glass-strong shadow-elevated glow-primary" : "glass"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-aurora text-primary-foreground text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" /> Most Popular
                </div>
              )}
              <div className="font-display text-base font-semibold mb-1">{t.name}</div>
              <div className="text-xs text-muted-foreground mb-4">{t.desc}</div>
              <div className="mb-5">
                <span className="font-display text-4xl font-bold text-gradient">{t.price}</span>
                {t.per && <span className="text-xs text-muted-foreground">{t.per}</span>}
              </div>
              <ul className="space-y-2 text-sm mb-6 flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <Button className={t.featured ? "bg-aurora text-primary-foreground font-semibold" : ""} variant={t.featured ? "default" : "outline"}>
                {t.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Join Form */}
      <Section eyebrow="Join the Club" title="Submit your application.">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-muted-foreground mb-6">
              We process applications weekly. You'll hear back within 5 business days with onboarding details and your member portal access.
            </p>
            <div className="space-y-4">
              {[
                { n: "01", t: "Submit your application", d: "Two minutes. We just need the basics." },
                { n: "02", t: "Quick interest chat", d: "5-minute call with an executive to align expectations." },
                { n: "03", t: "Onboarding", d: "Welcome kit, Discord invite, and your first project team." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="font-display text-2xl font-bold text-gradient w-10">{s.n}</div>
                  <div>
                    <div className="font-semibold mb-0.5">{s.t}</div>
                    <div className="text-sm text-muted-foreground">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="glass-strong rounded-2xl p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium mb-1.5 block text-muted-foreground">First name</label>
                <Input placeholder="Amani" className="bg-transparent border-border/50" />
              </div>
              <div>
                <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Last name</label>
                <Input placeholder="Mushi" className="bg-transparent border-border/50" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">CBE Email</label>
              <Input type="email" placeholder="you@cbe.ac.tz" className="bg-transparent border-border/50" />
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Program & Year</label>
              <Input placeholder="BBA Computing — Year 2" className="bg-transparent border-border/50" />
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Why ICT Club?</label>
              <textarea
                rows={3}
                placeholder="Tell us in one paragraph what you want to build."
                className="w-full rounded-md bg-transparent border border-border/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button className="w-full bg-aurora text-primary-foreground font-semibold h-11">
              <Sparkles className="h-4 w-4" /> Submit Application
            </Button>
          </form>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Common questions.">
        <Accordion type="single" collapsible className="glass rounded-2xl p-2">
          {[
            { q: "Do I need to know how to code?", a: "No. We welcome students of all levels — including total beginners. We have learning tracks designed for first-time coders." },
            { q: "How much time should I commit?", a: "Active members typically commit 4–6 hours per week. Student members can attend just the events they want." },
            { q: "Can non-Computing students join?", a: "Absolutely. Some of our strongest members come from Accounting, Marketing and Business programs." },
            { q: "Is there a selection process?", a: "Student membership is open. Active and Executive tiers involve a short interview to ensure mutual fit." },
            { q: "What's the membership fee for?", a: "Fees cover event logistics, certifications, swag and partial scholarships for hackathon travel." },
          ].map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/40 last:border-0">
              <AccordionTrigger className="px-4 hover:no-underline font-semibold text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="px-4 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </SiteLayout>
  );
}
