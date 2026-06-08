import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, User, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — ICT Club CBE" },
      { name: "description", content: "Hackathons, bootcamps, workshops and conferences hosted by ICT Club CBE. The community gathers here." },
      { property: "og:title", content: "Events — ICT Club CBE" },
      { property: "og:description", content: "Hackathons, bootcamps and conferences. Find the next event." },
    ],
  }),
  component: Events,
});

const featured = {
  title: "AI for Africa Summit 2026",
  date: "December 15, 2026",
  venue: "CBE Main Auditorium, Dar es Salaam",
  speaker: "Dr. Sarah Mwakapuga + 12 industry leaders",
  desc: "A full-day summit on practical AI for African problems — keynotes, panels, hands-on labs and a startup showcase.",
  target: new Date("2026-12-15T09:00:00").getTime(),
};

const upcoming = [
  { date: "JAN 08", title: "48-Hour FinTech Hackathon", venue: "Innovation Hub", speaker: "Sponsored by CRDB Bank", tag: "Hackathon", color: "from-cyber to-indigo" },
  { date: "JAN 22", title: "Cloud Native Bootcamp", venue: "Online + Hybrid", speaker: "AWS Mentors", tag: "Bootcamp", color: "from-violet to-cyber" },
  { date: "FEB 05", title: "UI/UX Masterclass", venue: "Design Lab", speaker: "Lulu Mwangosi", tag: "Workshop", color: "from-warning to-violet" },
  { date: "FEB 19", title: "Cybersecurity CTF", venue: "Lab 3", speaker: "CyberShield TZ team", tag: "Competition", color: "from-danger to-violet" },
  { date: "MAR 02", title: "DevOps Friday Night", venue: "Innovation Hub", speaker: "Asha Kimario", tag: "Workshop", color: "from-success to-cyber" },
  { date: "MAR 16", title: "Pitch & Pizza", venue: "Auditorium 2", speaker: "Open mic startups", tag: "Pitch", color: "from-violet to-warning" },
];

const past = [
  { date: "NOV 10", title: "AI Hackathon 2025", venue: "Innovation Hub", attendees: "180+ participants" },
  { date: "OCT 22", title: "Women in Tech Panel", venue: "Auditorium 1", attendees: "240 attendees" },
  { date: "OCT 05", title: "Microsoft Azure Workshop", venue: "Lab 5", attendees: "95 students" },
];

function useCountdown(target: number) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    mins: Math.floor((diff / 60_000) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

function Events() {
  const c = useCountdown(featured.target);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Events"
        title="Where the community shows up"
        subtitle="Hackathons, bootcamps, workshops and fireside chats — your front-row seat to Tanzania's most active tech scene."
      />

      {/* Featured / Countdown */}
      <Section>
        <div className="relative rounded-3xl overflow-hidden bg-surface-elevated border border-border p-8 sm:p-12">
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-primary mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Featured Event
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">{featured.title}</h2>
              <p className="text-muted-foreground mb-5">{featured.desc}</p>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />{featured.date}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{featured.venue}</div>
                <div className="flex items-center gap-2"><User className="h-4 w-4 text-primary" />{featured.speaker}</div>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">Register Free</Button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Days", value: c.days },
                { label: "Hours", value: c.hours },
                { label: "Mins", value: c.mins },
                { label: "Secs", value: c.secs },
              ].map((u) => (
                <div key={u.label} className="bg-surface border border-border rounded-2xl p-4 text-center">
                  <div className="font-display text-3xl sm:text-5xl font-bold text-primary">{String(u.value).padStart(2, "0")}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{u.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Upcoming */}
      <Section eyebrow="Upcoming" title="What's next on the calendar.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcoming.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="h-32 bg-muted relative border-b border-border">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-background/80 border border-border text-[10px] font-semibold uppercase">{e.tag}</div>
                <div className="absolute bottom-3 left-3 bg-background border border-border rounded-xl px-3 py-2 text-center">
                  <div className="text-[10px] text-primary font-semibold">{e.date.split(" ")[0]}</div>
                  <div className="font-display text-2xl font-bold">{e.date.split(" ")[1]}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold mb-3">{e.title}</h3>
                <div className="space-y-1.5 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5"><MapPin className="h-3 w-3" />{e.venue}</div>
                  <div className="flex items-center gap-1.5"><User className="h-3 w-3" />{e.speaker}</div>
                </div>
                <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Register</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Past */}
      <Section eyebrow="Past Events" title="From the archives.">
        <div className="glass rounded-2xl divide-y divide-border/40">
          {past.map((p) => (
            <div key={p.title} className="flex items-center gap-4 sm:gap-6 p-5 hover:bg-muted/20 transition-colors">
              <div className="text-center w-16 shrink-0">
                <div className="text-[10px] text-primary font-semibold">{p.date.split(" ")[0]}</div>
                <div className="font-display text-2xl font-bold">{p.date.split(" ")[1]}</div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold mb-1">{p.title}</h4>
                <div className="text-xs text-muted-foreground flex items-center gap-3 flex-wrap">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{p.venue}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{p.attendees}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-primary hidden sm:inline-flex">View Recap</Button>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
