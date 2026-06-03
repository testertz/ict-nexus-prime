import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ICT Club CBE" },
      { name: "description", content: "Reach out to ICT Club CBE — partnerships, sponsorships, speaking, media or general inquiries." },
      { property: "og:title", content: "Contact — ICT Club CBE" },
      { property: "og:description", content: "Get in touch with ICT Club CBE." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Partnerships, sponsorships, speaking opportunities, media — or just to say hi. We reply fast."
      />

      <Section>
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "ictclub@cbe.ac.tz", sub: "Replies within 24h" },
              { icon: Phone, label: "Phone", value: "+255 700 000 000", sub: "Mon–Fri, 9am–5pm EAT" },
              { icon: MapPin, label: "Visit", value: "Innovation Hub, CBE Campus", sub: "Dar es Salaam, Tanzania" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-5 flex gap-4 items-start hover:glow-primary transition-all">
                <div className="h-11 w-11 rounded-xl bg-aurora flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.label}</div>
                  <div className="font-semibold mb-0.5">{c.value}</div>
                  <div className="text-xs text-muted-foreground">{c.sub}</div>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Follow Us</div>
              <div className="flex gap-2">
                {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:text-primary hover:glow-primary transition-all">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="lg:col-span-3 glass-strong rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-sm text-muted-foreground">Fill the form and we'll get back to you shortly.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Your name</label>
                <Input placeholder="Full name" className="bg-transparent border-border/50" />
              </div>
              <div>
                <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Email</label>
                <Input type="email" placeholder="you@example.com" className="bg-transparent border-border/50" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Subject</label>
              <Input placeholder="What's this about?" className="bg-transparent border-border/50" />
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Message</label>
              <textarea
                rows={6}
                placeholder="Tell us a bit more..."
                className="w-full rounded-md bg-transparent border border-border/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button className="w-full sm:w-auto bg-aurora text-primary-foreground font-semibold h-11 px-8">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </Section>

      {/* Map placeholder */}
      <Section>
        <div className="glass rounded-3xl overflow-hidden h-80 relative">
          <div className="absolute inset-0 bg-aurora opacity-20" />
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-strong rounded-2xl px-6 py-5 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">CBE Innovation Hub</div>
              <div className="text-xs text-muted-foreground">Bibi Titi Mohammed Rd, Dar es Salaam</div>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
