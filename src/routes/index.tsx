import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, Code2, Rocket, Users, Trophy, Calendar, Sparkles,
  Cpu, Cloud, Shield, Brain, Database, Smartphone, Network, Globe,
  Star, TrendingUp, Zap, Award, ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ICT Club CBE — Innovating Today, Leading Tomorrow" },
      { name: "description", content: "Join 1000+ student innovators at the College of Business Education's premier ICT community. Projects, events, learning tracks, and industry partnerships." },
      { property: "og:title", content: "ICT Club CBE — Tanzania's Premier Student Tech Community" },
      { property: "og:description", content: "Innovating Today, Leading Tomorrow. Discover projects, events, and a network of 1000+ future tech leaders." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "1000+", label: "Active Members", icon: Users },
  { value: "200+", label: "Projects Shipped", icon: Code2 },
  { value: "50+", label: "Events Hosted", icon: Calendar },
  { value: "30+", label: "Industry Partners", icon: Trophy },
];

const reasons = [
  { icon: Rocket, title: "Ship Real Products", desc: "Move beyond classroom theory — build, deploy and maintain real software used by real people." },
  { icon: Brain, title: "Learn from Mentors", desc: "Pair-programming and code reviews from senior students, faculty, and industry engineers." },
  { icon: Trophy, title: "Win Competitions", desc: "Represent CBE at national and continental hackathons, datathons, and pitch competitions." },
  { icon: Globe, title: "Build a Network", desc: "Connect with alumni placed at Google, Microsoft, Andela, Vodacom, and Tanzania's top startups." },
  { icon: Award, title: "Earn Certifications", desc: "Track your progress, collect verifiable skill badges, and graduate with a portfolio that hires you." },
  { icon: Zap, title: "Lead Innovation", desc: "Pitch a startup, lead a research squad, or mentor freshers — your initiative defines your role." },
];

const projects = [
  { title: "SmartCampus AI", category: "AI / ML", desc: "Computer-vision attendance & smart-classroom analytics for CBE lecture halls.", tech: ["Python", "TensorFlow", "FastAPI"] },
  { title: "Soko Connect", category: "Mobile App", desc: "Hyperlocal marketplace connecting Tanzanian SMEs with student talent and services.", tech: ["React Native", "Node", "Postgres"] },
  { title: "CyberShield TZ", category: "Cybersecurity", desc: "Open-source threat-intel dashboard tailored to East African financial institutions.", tech: ["Go", "Elastic", "Next.js"] },
];

const events = [
  { date: "DEC 15", title: "AI for Africa Summit", venue: "CBE Main Auditorium", tag: "Conference" },
  { date: "JAN 08", title: "48-Hour FinTech Hackathon", venue: "Innovation Hub", tag: "Hackathon" },
  { date: "JAN 22", title: "Cloud Native Bootcamp", venue: "Online + Hybrid", tag: "Bootcamp" },
];

const techs = [
  { name: "React", icon: Code2 }, { name: "Python", icon: Brain }, { name: "AWS", icon: Cloud },
  { name: "Cybersec", icon: Shield }, { name: "Mobile", icon: Smartphone }, { name: "IoT", icon: Cpu },
  { name: "Data", icon: Database }, { name: "Networks", icon: Network },
];

const partners = ["Microsoft", "Google", "AWS", "Vodacom", "CRDB", "Andela", "Smart Codes", "TADB"];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-24 pt-32 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        {/* floating orbs */}
        <div className="absolute top-32 left-10 h-72 w-72 rounded-full bg-cyber/30 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-violet/30 blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-indigo/20 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium mb-7"
          >
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-foreground">Now accepting 2026 cohort applications</span>
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-6"
          >
            Innovating Today, <br />
            <span className="text-gradient animate-gradient">Leading Tomorrow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10"
          >
            The premier ICT community at the College of Business Education — building Africa's next generation of engineers, designers and tech entrepreneurs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-20"
          >
            <Button asChild size="lg" className="bg-aurora text-primary-foreground font-semibold h-12 px-7 glow-primary hover:glow-violet transition-all">
              <Link to="/membership">Join ICT Club <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass h-12 px-7 border-glass-border hover:bg-muted/40">
              <Link to="/projects">Explore Projects</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 sm:p-6 text-left hover:glow-primary transition-all group">
                <s.icon className="h-5 w-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN */}
      <Section eyebrow="Why Join Us" title="Built for builders, not bystanders." subtitle="ICT Club CBE is where curious students become shipping engineers. Six reasons our members outperform.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all relative overflow-hidden"
            >
              <div className="relative h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section eyebrow="Featured Projects" title="Things our members built last semester." subtitle="From AI-powered campus systems to fintech for East Africa — these are shipped, public, and open-source.">
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="h-44 bg-muted relative overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="h-16 w-16 text-primary/60 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md glass text-[10px] font-semibold uppercase tracking-wider">{p.category}</div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-muted/50 border border-border/50 text-muted-foreground font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" className="glass border-glass-border">
            <Link to="/projects">View all projects <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* UPCOMING EVENTS */}
      <Section eyebrow="Upcoming Events" title="Where the community shows up." subtitle="Hackathons, workshops, fireside chats with industry leaders, and Friday-night build sessions.">
        <div className="grid md:grid-cols-3 gap-5">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:glow-primary transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-center">
                  <div className="text-xs text-primary font-semibold">{e.date.split(" ")[0]}</div>
                  <div className="font-display text-3xl font-bold">{e.date.split(" ")[1]}</div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-md bg-accent/20 text-accent font-semibold uppercase tracking-wider">{e.tag}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{e.venue}</p>
              <Button asChild variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent hover:text-primary">
                <Link to="/events">Register <ArrowRight className="h-3.5 w-3.5" /></Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TECHS */}
      <Section eyebrow="Technologies We Learn" title="Modern stack. Real-world tools." subtitle="">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {techs.map((t) => (
            <div key={t.name} className="glass rounded-xl p-5 flex flex-col items-center gap-2 hover:glow-primary hover:-translate-y-1 transition-all">
              <t.icon className="h-7 w-7 text-primary" />
              <span className="text-xs font-medium">{t.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* SUCCESS STORIES */}
      <Section eyebrow="Success Stories" title="Members who made it." subtitle="">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Amina Hassan", role: "Software Engineer, Microsoft", quote: "ICT Club taught me how to ship. The peer code reviews alone were worth more than any course." },
            { name: "Joseph Mwema", role: "Founder, PaySwift", quote: "Met my co-founders at a club hackathon. Three years later we're serving 40,000 Tanzanian merchants." },
            { name: "Grace Komba", role: "ML Engineer, Andela", quote: "The mentorship and project portfolio I built here got me 4 job offers before graduating." },
          ].map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-warning text-warning" />)}
              </div>
              <p className="text-sm text-foreground/90 mb-5 leading-relaxed">"{s.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className="h-10 w-10 rounded-full bg-aurora flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {s.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PARTNERS */}
      <Section eyebrow="Industry Partners" title="Backed by the best." subtitle="">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {partners.map((p) => (
            <div key={p} className="glass rounded-xl py-6 text-center font-display font-semibold text-muted-foreground hover:text-foreground transition-colors">
              {p}
            </div>
          ))}
        </div>
      </Section>

      {/* COMMUNITY IMPACT */}
      <Section eyebrow="Community Impact" title="More than a club. A movement." subtitle="">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: TrendingUp, value: "12+", label: "Startups launched by alumni" },
            { icon: Users, value: "500+", label: "Students upskilled in 2025" },
            { icon: Sparkles, value: "8", label: "Award-winning hackathon projects" },
          ].map((c) => (
            <div key={c.label} className="glass rounded-2xl p-8 text-center">
              <c.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="font-display text-5xl font-bold text-gradient mb-2">{c.value}</div>
              <div className="text-sm text-muted-foreground">{c.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative rounded-3xl overflow-hidden glass-strong p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-aurora opacity-20" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyber/40 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet/40 blur-3xl" />
          <div className="relative">
            <Sparkles className="h-10 w-10 text-primary mx-auto mb-5 animate-pulse" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">Ready to build the future?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Applications close end of semester. Join 1000+ students already shipping the next generation of African tech.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-aurora text-primary-foreground font-semibold h-12 px-8 glow-primary">
                <Link to="/membership">Apply Now <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass h-12 px-8 border-glass-border">
                <Link to="/contact">Talk to a Leader</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
