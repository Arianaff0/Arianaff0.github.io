import { useState } from "react";
import { Expand } from "lucide-react";
import LaptopFrame from "@/components/LaptopFrame";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import signIn from "@/assets/ui1.png";
import dashboard from "@/assets/ui2.png";
import accomplishments from "@/assets/ui3.png";
import requests from "@/assets/u14.png";
import progress from "@/assets/ui5.png";
import executive from "@/assets/ui6.png";
import exportReport from "@/assets/ui7.png";

const screens = [
  { image: dashboard, title: "Platform dashboard", description: "A central overview of accessible platforms, teams, and review queues." },
  { image: signIn, title: "Sign in", description: "The portal entry point with Windows credential and SSO sign-in options." },
  { image: accomplishments, title: "Team accomplishments", description: "Approved team accomplishments organized with team, category, and timeline views." },
  { image: requests, title: "Accomplishment requests", description: "A shared view of submissions, review status, categories, summaries, and impact." },
  { image: progress, title: "Approval progress", description: "Submission details, staged review progress, and a discussion area for feedback." },
  { image: executive, title: "Executive overview", description: "Monthly accomplishment summaries across organizational groups with reporting options." },
  { image: exportReport, title: "Report export", description: "A printable accomplishment report ready to save as a PDF." },
];

const EnterprisePortal = () => {
  const [selected, setSelected] = useState(0);
  const screen = screens[selected];

  return (
    <article aria-labelledby="enterprise-portal-title" className="featured-project space-y-8">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <Dialog>
          <div className="min-w-0 space-y-4">
            <DialogTrigger asChild>
              <button type="button" className="block w-full rounded-2xl text-left transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4" aria-label={"Enlarge " + screen.title + " screenshot"}>
                <LaptopFrame imageSrc={screen.image} alt={screen.title + ": " + screen.description} />
              </button>
            </DialogTrigger>
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <p className="text-muted-foreground" aria-live="polite">{selected + 1} / {screens.length} &mdash; {screen.title}</p>
              <DialogTrigger asChild>
                <button type="button" className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <Expand className="h-4 w-4" aria-hidden="true" /> Enlarge screenshot
                </button>
              </DialogTrigger>
            </div>
          </div>
          <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto p-4 sm:p-6">
            <DialogHeader className="pr-6">
              <DialogTitle>{screen.title}</DialogTitle>
              <DialogDescription>{screen.description}</DialogDescription>
            </DialogHeader>
            <img src={screen.image} alt={screen.title + ": " + screen.description} className="h-auto w-full rounded-md" />
          </DialogContent>
        </Dialog>

        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Featured project / Summer 2026</p>
          <h3 id="enterprise-portal-title" className="mb-5 text-3xl font-inter font-semibold md:text-4xl">Enterprise Accomplishment Portal</h3>
          <ul aria-label="Technology stack" className="mb-6 flex flex-wrap gap-2">
            {["React", "Node.js", "Python", "SQL Server"].map((technology) => (
              <li key={technology} className="rounded-full border border-border bg-muted/20 px-3 py-1 text-sm">{technology}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A full-stack web application I worked on during summer 2026 to centralize accomplishment reporting across multiple organizational groups. The portal brings team submissions, review workflows, and executive reporting into one shared workspace.
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
            <li>Organize team accomplishments and track submissions through manager and SMT review.</li>
            <li>Give leadership a consolidated view of accomplishments across groups and reporting periods.</li>
            <li>Support report sharing with CSV and PDF export options.</li>
          </ul>
        </div>
      </div>

      <div role="group" aria-label="Project screenshots" className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {screens.map((item, index) => (
          <button key={item.title} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={"group min-w-0 overflow-hidden rounded-lg border-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " + (selected === index ? "border-foreground bg-muted/30" : "border-border hover:border-muted-foreground")}>
            <div className="aspect-[16/11] overflow-hidden bg-muted/20">
              <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-contain transition-transform group-hover:scale-105" />
            </div>
            <span className="block px-3 py-2 text-xs font-medium leading-relaxed">{item.title}</span>
          </button>
        ))}
      </div>
    </article>
  );
};

export default EnterprisePortal;