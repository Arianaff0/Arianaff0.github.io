import React from "react";
import LaptopFrame from "./LaptopFrame";

export type Device = {
  id: string | number;
  image?: string;
  title?: string;
  caption?: string;
  size?: "large" | "medium" | "long";
  offset?: number;
};

export type DeviceTableProps = {
  devices: Device[];
};

const sizeClasses: Record<Device["size"], string> = {
  large: "w-[30%] md:w-[30%]",
  medium: "w-[20%] md:w-[20%]",
  long: "w-[28%] md:w-[28%]",
};

export default function DeviceTable({ devices }: DeviceTableProps) {
  return (
    <section className="w-full mt-12 mb-32 relative">
      {/* subtle curved table (muted grey) */}
      <svg
        className="absolute inset-x-0 -bottom-2 w-full h-36 pointer-events-none"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,64 C240,140 480,140 720,100 C960,60 1200,80 1440,100 L1440,160 L0,160 Z"
          fill="rgba(224,224,226,0.96)"
        />
      </svg>

      <div className="relative z-10 px-6">
        <div className="max-w-[1200px] mx-auto flex items-end justify-between gap-6">
          {devices.map((d) => {
            const cls = sizeClasses[d.size ?? "medium"];
            // default negative offset to lift devices onto the curve; can be overridden per-device
            const offset = d.offset ?? -48;
            return (
              <div
                key={d.id}
                className={`${cls} flex flex-col items-center`}
                style={{ marginBottom: `${offset}px` }}
              >
                <div className="w-full">
                  <LaptopFrame imageSrc={d.image} alt={d.title} />
                </div>

                {/* text at the bottom */}
                <div className="w-full mt-3 text-center">
                  {d.title && <div className="text-sm font-inter font-semibold">{d.title}</div>}
                  {d.caption && <div className="text-xs text-muted-foreground mt-1 px-2">{d.caption}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}