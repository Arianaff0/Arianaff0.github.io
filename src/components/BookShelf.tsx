import React, { useEffect, useRef, useState } from "react";

export type Item = {
  id: string | number;
  src: string;
  title?: string;
  meta?: string;
};

export default function Bookshelf({
  items,
  initial = 0,
  radius = 220,
}: {
  items: Item[];
  initial?: number;
  radius?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const lastX = useRef(0);
  const rotateRef = useRef(0); // accumulated rotation
  const wheelTimeout = useRef<number | null>(null);

  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const count = Math.max(1, items.length);
  const angleStep = 360 / count;
  const [selected, setSelected] = useState<number>(initial);

  // snap so index is front-facing (0deg -> item 0)
  const snapToIndex = (idx: number) => {
    rotateRef.current = -idx * angleStep;
    setRotation(rotateRef.current);
    setSelected(((idx % count) + count) % count);
  };

  const snapNearest = () => {
    const normalized = ((-rotateRef.current % 360) + 360) % 360;
    const idx = Math.round(normalized / angleStep) % count;
    snapToIndex(idx);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.style.touchAction = "pan-y";

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      setIsDragging(true);
      lastX.current = e.clientX;
      try {
        (e.target as Element).setPointerCapture?.((e as any).pointerId);
      } catch {}
      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      const sensitivity = 0.35;
      rotateRef.current += dx * sensitivity;
      setRotation(rotateRef.current);
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setIsDragging(false);
      try {
        (e.target as Element).releasePointerCapture?.((e as any).pointerId);
      } catch {}
      snapNearest();
    };

    const onWheel = (ev: WheelEvent) => {
      const delta = ev.deltaX !== 0 ? ev.deltaX : ev.deltaY;
      const sensitivity = 0.5;
      rotateRef.current += delta * sensitivity;
      setRotation(rotateRef.current);

      if (wheelTimeout.current) window.clearTimeout(wheelTimeout.current);
      wheelTimeout.current = window.setTimeout(() => {
        snapNearest();
        wheelTimeout.current = null;
      }, 120);
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("wheel", onWheel);
      if (wheelTimeout.current) window.clearTimeout(wheelTimeout.current);
    };
  }, [angleStep, count]);

  // update selected while rotating so right-side text follows
  useEffect(() => {
    const normalized = ((-rotation % 360) + 360) % 360;
    const idx = Math.round(normalized / angleStep) % count;
    setSelected(((idx % count) + count) % count);
  }, [rotation, angleStep, count]);

  // initial snap
  useEffect(() => {
    snapToIndex(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <div
            ref={containerRef}
            className={`relative w-full h-72 md:h-80 lg:h-96 mx-auto ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ perspective: 1100 }}
          >
            <div className="absolute left-4 top-3 z-30 flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1 bg-white/8 px-2 py-1 rounded-sm backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l-4 4 4 4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l4 4-4 4" />
                </svg>
                <span>drag / scroll</span>
              </div>
            </div>

            <div
              className="absolute inset-0 left-0 right-0 top-0 flex items-center justify-center transform-gpu"
              style={{
                transformStyle: "preserve-3d",
                transition: isDragging ? "none" : "transform 420ms cubic-bezier(.2,.9,.2,1)",
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              {items.map((it, i) => {
                const theta = angleStep * i;
                const opacity = i === selected ? 1 : 0.8;
                const thumbW = 220;
                const thumbH = 140;
                return (
                  <button
                    key={it.id}
                    onClick={() => {
                      // snap clicked item to front
                      const targetIdx = i;
                      snapToIndex(targetIdx);
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 border-0 bg-transparent"
                    style={{
                      transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
                      transition: "transform 400ms ease, opacity 300ms",
                      opacity,
                      width: thumbW,
                      height: thumbH,
                    }}
                    aria-pressed={i === selected}
                  >
                    <img
                      src={it.src}
                      alt={it.title}
                      className="w-full h-full object-cover rounded-md shadow-lg"
                      style={{ display: "block", pointerEvents: "none" }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => snapToIndex(i)}
                className={`w-2 h-2 rounded-full ${i === selected ? "bg-foreground" : "bg-foreground/30"}`}
                aria-label={`Select ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <aside className="md:col-span-1">
          <div className="sticky top-24">
            <h3 className="text-lg font-inter font-semibold mb-2">{items[selected]?.title}</h3>
            <div className="text-xs text-muted-foreground mb-4">{items[selected]?.meta}</div>

            <div className="mb-2 text-sm text-muted-foreground">Description</div>
            <div
              contentEditable
              suppressContentEditableWarning
              className="min-h-[160px] p-3 rounded-md border border-border bg-muted/5 text-sm focus:outline-none"
            >
              {/* editable description area */}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}