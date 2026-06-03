import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Target, Eye, Heart, Compass, Award, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import aboutVisual from "@/assets/about-visual.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ICT Club CBE" },
      { name: "description", content: "Our history, mission, vision and the roadmap for building Tanzania's strongest student tech community." },
      { property: "og:title", content: "About ICT Club CBE" },
      { property: "og:description", content: "History, mission, vision and the roadmap of CBE's premier ICT community." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Mission", desc: "Empower every CBE student with the technical skill, mindset and network to build technology that matters in Africa." },
  { icon: Eye, title: "Vision", desc: "To be the most influential student-led technology community on the continent by 2030." },
  { icon: Heart, title: "Core Values", desc: "Curiosity. Craft. Collaboration. Courage. Community. Five words. Lived every day." },
  { icon: Compass, title: "Objectives", desc: "Ship 500 student projects, host 100 events, place 200 alumni in elite tech roles by 2027." },
];

const timeline = [
  { year: "2018", title: "Founded", desc: "Started as a small study group of 12 students passionate about coding and entrepreneurship." },
  { year: "2020", title: "First Hackathon", desc: "Hosted CBE's first 24-hour hackathon — 80 participants, 12 demos, 1 winning fintech app." },
  { year: "2022", title: "Industry Partnerships", desc: "Signed MoUs with Microsoft, Vodacom and Smart Codes to mentor and recruit members." },
  { year: "2024", title: "500+ Members", desc: "Crossed 500 active members and launched the Innovation Hub for student startups." },
  { year: "2025", title: "Continental Reach", desc: "Three teams placed in top-10 at pan-African hackathons. First alumni joined Microsoft & Google." },
  { year: "2026", title: "1000+ & Beyond", desc: "Today: 1000+ members, 8 learning tracks, full LMS, and a digital community platform launching." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About the Club"
        title="Building Africa's next tech leaders"
        subtitle="From a study group of 12 to a community of 1000+ — here's the story, the structure, and the roadmap."
      />

      {/* Mission Visual Split */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-4">
              Our Story
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              A community engineered for <span className="text-gradient">excellence.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ICT Club CBE was founded in 2018 by a handful of students who believed the College of Business Education needed more than a curriculum — it needed a craft culture. Eight years on, we're the gravitational center for ambitious technologists at CBE.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We exist to bridge the gap between what's taught and what's needed. Every meeting, project and event is engineered to make our members irresistible to employers, investors and collaborators.
            </p>
            <div className="space-y-2.5">
              {["Student-led, faculty-supported", "Open-source by default", "Industry-mentored, peer-reviewed", "Inclusive across all CBE departments"].map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-aurora opacity-30 blur-3xl rounded-3xl" />
            <img src={aboutVisual} alt="ICT Club abstract visual" loading="lazy" width={1280} height={1024}
              className="relative rounded-3xl glass shadow-elevated w-full h-auto" />
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section eyebrow="What we stand for" title="Mission, vision, values." subtitle="">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:glow-primary transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-aurora flex items-center justify-center mb-4">
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section eyebrow="The Journey" title="Eight years. One mission." subtitle="">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber via-indigo to-violet -translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2 md:px-8">
                  <div className={`glass rounded-2xl p-6 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="font-display text-3xl font-bold text-gradient mb-1">{t.year}</div>
                    <h3 className="font-display text-lg font-semibold mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-aurora glow-primary ring-4 ring-background" />
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Achievements */}
      <Section eyebrow="Recognition" title="Things we've won.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Best Student Tech Community 2024", org: "Tanzania Tech Awards" },
            { title: "Top 5 Pan-African Hackathon Finalist", org: "AfricArena Summit 2025" },
            { title: "Excellence in Innovation", org: "Ministry of ICT, Tanzania" },
            { title: "Microsoft Student Partner Chapter of the Year", org: "Microsoft EA, 2025" },
            { title: "AWS Educate Featured Community", org: "AWS Africa" },
            { title: "Best CBE Student Organization", org: "CBE Senate, 3 years running" },
          ].map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 flex gap-4 items-start"
            >
              <Award className="h-8 w-8 text-warning shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">{a.title}</h4>
                <p className="text-xs text-muted-foreground">{a.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
