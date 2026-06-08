import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Executive Team — ICT Club CBE" },
      { name: "description", content: "Meet the executive team leading ICT Club CBE — eight students shaping Tanzania's premier tech community." },
      { property: "og:title", content: "Executive Team — ICT Club CBE" },
      { property: "og:description", content: "Eight students. One mission. Meet the leadership of ICT Club CBE." },
    ],
  }),
  component: Team,
});

const team = [
  { role: "Chairperson", name: "Neema Mwakalinga", bio: "Final-year Computer Science. Builds AI products and leads with empathy.", skills: ["Leadership", "Python", "Product"], gradient: "from-cyber to-indigo" },
  { role: "Vice Chairperson", name: "Daniel Mushi", bio: "Backend engineer obsessed with distributed systems and clean architecture.", skills: ["Go", "Kubernetes", "PostgreSQL"], gradient: "from-indigo to-violet" },
  { role: "Secretary", name: "Halima Said", bio: "Operations-minded technologist. Keeps every project on schedule.", skills: ["Notion", "PM", "Writing"], gradient: "from-violet to-cyber" },
  { role: "Treasurer", name: "Emmanuel Lyimo", bio: "BBA + self-taught dev. Runs the books, ships the dashboards.", skills: ["Finance", "React", "Excel"], gradient: "from-success to-cyber" },
  { role: "Technical Lead", name: "Asha Kimario", bio: "Full-stack engineer and the club's de-facto mentor for every fresh recruit.", skills: ["TypeScript", "Node", "AWS"], gradient: "from-warning to-indigo" },
  { role: "Innovation Lead", name: "Brian Otieno", bio: "Three-time hackathon winner. Runs the Innovation Hub and pitch programs.", skills: ["AI", "Pitching", "Strategy"], gradient: "from-cyber to-success" },
  { role: "Events Coordinator", name: "Tumaini Mrope", bio: "Has produced 30+ events. Owns the calendar, owns the room.", skills: ["Events", "Logistics", "Speaking"], gradient: "from-violet to-warning" },
  { role: "Media Coordinator", name: "Lulu Mwangosi", bio: "Designer-developer hybrid. Behind every reel and rebrand.", skills: ["Design", "Figma", "Video"], gradient: "from-indigo to-cyber" },
];

function Team() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Executive Team"
        title="The people behind the mission"
        subtitle="Eight elected students who run the day-to-day of ICT Club CBE. Reach out — they reply."
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="relative">
                <div className="h-20 w-20 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-2xl mb-4">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{m.role}</div>
                <h3 className="font-display text-lg font-semibold mb-2">{m.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{m.bio}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {m.skills.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-muted/50 border border-border/50 text-muted-foreground font-medium">{s}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <div className="flex gap-1.5">
                    {[Github, Linkedin, Twitter].map((Icon, k) => (
                      <a key={k} href="#" aria-label="social" className="h-7 w-7 rounded-md glass flex items-center justify-center hover:text-primary transition-colors">
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                  <Button size="sm" variant="ghost" className="h-7 px-2 text-xs text-primary hover:bg-primary/10">
                    <Mail className="h-3 w-3" /> Contact
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
