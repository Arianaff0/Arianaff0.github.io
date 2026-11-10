import { useState } from "react";
import { Expand } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import foundations from "@/assets/IMG_1.jpeg";
import networks from "@/assets/IMG_2.jpeg";
import laplace from "@/assets/IMG_3.jpeg";
import predictions from "@/assets/IMG_4.jpeg";
import parameters from "@/assets/IMG_5.jpeg";

const boards = [
  { image: foundations, title: "Decision-making under uncertainty", caption: "Exploratory notes on Bayesian decision theory, Gaussian processes, and expected utility." },
  { image: networks, title: "Bayesian neural networks", caption: "Working notes connecting neural-network parameters, probability distributions, and uncertainty." },
  { image: laplace, title: "Laplace approximation", caption: "A whiteboard derivation exploring a local Gaussian approximation to the posterior." },
  { image: predictions, title: "From parameters to predictions", caption: "Exploring predictive uncertainty and the distinction between model uncertainty and observation noise." },
  { image: parameters, title: "Choosing what to model", caption: "Questions about parameter selection, computational tradeoffs, and approximation methods." },
];

export default function ThesisPreview() {
  const [selected, setSelected] = useState(2);
  const board = boards[selected];

  return (
    <article aria-labelledby="thesis-title" className="mb-10 overflow-hidden rounded-xl border border-border bg-card">
      <div className="grid lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">Research in progress</p>
            <span className="tech-tag">Thesis / In progress</span>
          </div>
          <h3 id="thesis-title" className="mt-5 text-2xl font-inter font-semibold tracking-tight md:text-3xl">Applied mathematics thesis</h3>
          <p className="mt-3 font-playfair text-xl italic text-primary">How certain is a model about its predictions?</p>
          <p className="mt-5 leading-relaxed text-muted-foreground">A glimpse into the ideas I am exploring for my applied mathematics thesis: probabilistic decision-making, Bayesian neural networks, and ways to reason about uncertainty in model predictions.</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">These whiteboard notes capture the process behind the work, from building intuition to working through approximations and computational tradeoffs.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="tech-tag">Bayesian methods</span>
            <span className="tech-tag">Uncertainty quantification</span>
            <span className="tech-tag">Laplace approximation</span>
          </div>
          <p className="mt-6 text-xs leading-6 text-muted-foreground">A research preview: exploratory notes and derivations as the thesis develops.</p>
        </div>
        <div className="min-w-0 border-t border-border bg-muted/25 p-4 sm:p-6 lg:border-l lg:border-t-0">
          <Dialog>
            <figure>
              <DialogTrigger asChild>
                <button type="button" className="group block w-full overflow-hidden rounded-md border border-border bg-background" aria-label={"Enlarge whiteboard: " + board.title}>
                  <img src={board.image} alt={board.caption} loading="lazy" className="mx-auto h-[340px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-[420px]" />
                </button>
              </DialogTrigger>
              <figcaption className="mt-4">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium" aria-live="polite">{selected + 1} / {boards.length} &mdash; {board.title}</p>
                  <DialogTrigger asChild>
                    <button type="button" className="inline-flex shrink-0 items-center gap-1.5 text-xs text-primary hover:underline"><Expand className="h-3.5 w-3.5" aria-hidden="true" /> Enlarge</button>
                  </DialogTrigger>
                </div>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{board.caption}</p>
              </figcaption>
            </figure>
            <DialogContent className="max-h-[92vh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto p-4 sm:p-6">
              <DialogHeader className="pr-6">
                <DialogTitle>{board.title}</DialogTitle>
                <DialogDescription>{board.caption} Exploratory thesis notes, work in progress.</DialogDescription>
              </DialogHeader>
              <img src={board.image} alt={board.caption} className="mx-auto h-auto w-full rounded-md" />
            </DialogContent>
          </Dialog>
          <div role="group" aria-label="Thesis whiteboard gallery" className="mt-4 grid grid-cols-5 gap-2">
            {boards.map((item, index) => (
              <button type="button" key={item.title} onClick={() => setSelected(index)} aria-label={"Show whiteboard " + (index + 1) + ": " + item.title} aria-pressed={selected === index} className={"overflow-hidden rounded border-2 bg-background transition-colors " + (selected === index ? "border-primary" : "border-transparent hover:border-border")}>
                <img src={item.image} alt="" loading="lazy" className="aspect-[3/4] w-full object-contain" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
