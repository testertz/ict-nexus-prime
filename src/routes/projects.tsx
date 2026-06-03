import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Search, Github, ExternalLink, TrendingUp, Code2, Smartphone, Brain, Shield, Network, Database, Cloud, Cpu } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ICT Club CBE" },
      { name: "description", content: "Explore 200+ open-source projects built by ICT Club CBE members — from AI and fintech to cybersecurity and IoT." },
      { property: "og:title", content: "Projects — ICT Club CBE" },
      { property: "og:description", content: "Open-source projects shipped by Tanzania's most active student tech community." },
    ],
  }),
  component: Projects,
});

const categories = [
  { name: "All", icon: Code2 },
  { name: "Web", icon: Code2 },
  { name: "Mobile", icon: Smartphone },
  { name: "AI / ML", icon: Brain },
  { name: "Cybersecurity", icon: Shield },
  { name: "Networking", icon: Network },
  { name: "Data Science", icon: Database },
  { name: "Cloud", icon: Cloud },
  { name: "IoT", icon: Cpu },
];

const allProjects = [
  { title: "SmartCampus AI", category: "AI / ML", desc: "Computer-vision attendance and analytics for CBE classrooms.", tech: ["Python", "TensorFlow", "FastAPI"], members: 6, trending: true, color: "from-cyber to-indigo" },
  { title: "Soko Connect", category: "Mobile", desc: "Hyperlocal marketplace for Tanzanian SMEs.", tech: ["React Native", "Node", "Postgres"], members: 5, trending: true, color: "from-violet to-indigo" },
  { title: "CyberShield TZ", category: "Cybersecurity", desc: "Threat-intel dashboard for East African fintechs.", tech: ["Go", "Elastic", "Next.js"], members: 4, trending: false, color: "from-success to-cyber" },
  { title: "CBE Learn", category: "Web", desc: "LMS for the College built on top of TanStack Start.", tech: ["TS", "TanStack", "Tailwind"], members: 7, trending: true, color: "from-cyber to-violet" },
  { title: "FarmIoT", category: "IoT", desc: "Soil & weather sensors with LoRa + a Flutter dashboard.", tech: ["C++", "LoRa", "Flutter"], members: 5, trending: false, color: "from-success to-warning" },
  { title: "DalaDalaGo", category: "Mobile", desc: "Real-time public transport tracker for Dar es Salaam.", tech: ["Flutter", "Firebase", "Maps"], members: 4, trending: true, color: "from-warning to-violet" },
  { title: "Swahili LLM Lab", category: "AI / ML", desc: "Fine-tuning open-source LLMs on Swahili corpora.", tech: ["PyTorch", "HF", "CUDA"], members: 8, trending: true, color: "from-violet to-cyber" },
  { title: "CloudOps CBE", category: "Cloud", desc: "Internal IaC platform for student-deployed services.", tech: ["Terraform", "AWS", "Go"], members: 3, trending: false, color: "from-cyber to-success" },
  { title: "PenTest Toolkit", category: "Cybersecurity", desc: "Educational pentesting framework with a teaching mode.", tech: ["Python", "Rust", "CLI"], members: 5, trending: false, color: "from-danger to-violet" },
];

function Projects() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = allProjects.filter(p =>
    (active === "All" || p.category === active) &&
    (p.title.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projects Showcase"
        title="200+ shipped. All open source."
        subtitle="Search, filter and explore everything our members have built. Each project is real, deployed, and welcomes contributors."
      />

      <Section>
        {/* Controls */}
        <div className="glass rounded-2xl p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, tech, descriptions..."
                className="pl-9 bg-transparent border-border/50"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.name}
                onClick={() => setActive(c.name)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  active === c.name
                    ? "bg-aurora text-primary-foreground glow-primary"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                <c.icon className="h-3.5 w-3.5" />
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-elevated transition-all"
            >
              <div className={`relative h-40 bg-gradient-to-br ${p.color} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <Code2 className="absolute inset-0 m-auto h-14 w-14 text-primary-foreground/70 group-hover:scale-110 transition-transform" />
                <div className="absolute top-3 left-3 px-2 py-1 rounded-md glass text-[10px] font-semibold uppercase">{p.category}</div>
                {p.trending && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-warning/90 text-warning-foreground text-[10px] font-bold uppercase flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> Trending
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-1.5">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-muted/50 border border-border/50 font-medium">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">{p.members} contributors</span>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" className="h-7 px-2 hover:bg-muted/40"><Github className="h-3.5 w-3.5" /></Button>
                    <Button size="sm" variant="ghost" className="h-7 px-2 hover:bg-muted/40"><ExternalLink className="h-3.5 w-3.5" /></Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No projects match your search.</div>
        )}
      </Section>
    </SiteLayout>
  );
}
