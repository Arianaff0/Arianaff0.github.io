import ScrollLink from "@/components/ScrollLink";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { id: "development", label: "Development" },
  { id: "design", label: "Design" },
  { id: "mathematics", label: "Mathematics" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav aria-label="Main navigation" className="site-nav">
      <div className="container mx-auto px-6">
        <div className="flex min-h-20 items-center justify-between gap-6">
          <ScrollLink href="#top" onClick={() => setOpen(false)} className="wordmark" aria-label="Ariana Feng, back to top">ariana feng<span>.</span></ScrollLink>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => <ScrollLink key={link.id} href={`#${link.id}`} className="nav-link">{link.label}{link.id === "contact" && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}</ScrollLink>)}
          </div>
          <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="rounded-md border border-border p-2 md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && <div id="mobile-navigation" className="grid gap-1 border-t border-border pb-4 pt-3 md:hidden">{links.map((link) => <ScrollLink key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 text-sm hover:bg-muted">{link.label}</ScrollLink>)}</div>}
      </div>
    </nav>
  );
};

export default Navigation;
