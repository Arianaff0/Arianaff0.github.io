import LaptopFrame from "./LaptopFrame";

export type Device = {
  id: string | number;
  image?: string;
  title?: string;
  caption?: string;
  size?: "large" | "medium" | "long";
  offset?: number;
};
export type DeviceTableProps = { devices: Device[] };

export default function DeviceTable({ devices }: DeviceTableProps) {
  return (
    <section aria-labelledby="collaborations-title" className="pb-20 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-10">
          <div><p className="eyebrow">Learning through collaboration</p><h2 id="collaborations-title" className="mt-3 text-2xl font-inter font-semibold tracking-tight">Team projects & hackathons</h2></div>
          <p className="text-sm text-muted-foreground">Different teams. Shared curiosity.</p>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {devices.map((device) => (
            <article key={device.id}>
              <LaptopFrame imageSrc={device.image} alt={device.title} />
              <h3 className="mt-4 text-sm font-inter font-semibold leading-6">{device.title}</h3>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">{device.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
