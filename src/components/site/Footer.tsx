import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="h-10 w-10 rounded-xl bg-aurora flex items-center justify-center glow-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display text-lg font-bold">ICT CLUB <span className="text-gradient">CBE</span></div>
                <div className="text-xs text-muted-foreground">Innovating Today, Leading Tomorrow</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm mb-5">
              The premier technology community at the College of Business Education — empowering the next generation of African innovators, engineers, and entrepreneurs.
            </p>
            <div className="flex gap-2">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:glow-primary transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/team" className="hover:text-primary">Executive Team</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link to="/events" className="hover:text-primary">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Community</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/membership" className="hover:text-primary">Join Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><a href="#" className="hover:text-primary">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-display font-semibold text-sm mb-4">Newsletter</h4>
            <p className="text-xs text-muted-foreground mb-3">Get monthly updates on events & projects.</p>
            <form className="flex gap-2">
              <Input placeholder="you@cbe.ac.tz" className="glass border-glass-border text-sm" />
              <Button size="icon" className="bg-aurora shrink-0"><Send className="h-4 w-4" /></Button>
            </form>
            <div className="mt-5 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" />ictclub@cbe.ac.tz</div>
              <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" />+255 700 000 000</div>
              <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" />CBE Campus, Dar es Salaam</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ICT Club CBE. All rights reserved.</p>
          <p>Built with <span className="text-primary">▲</span> by the ICT Club Tech Team</p>
        </div>
      </div>
    </footer>
  );
}
