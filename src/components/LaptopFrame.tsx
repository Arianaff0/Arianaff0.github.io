interface LaptopFrameProps {
  imageSrc?: string;
  alt?: string;
}

const LaptopFrame = ({ imageSrc, alt = "Project screenshot" }: LaptopFrameProps) => (
  <div className="screenshot-frame">
    <div className="screenshot-toolbar" aria-hidden="true"><span /><span /><span /><div>Project preview</div></div>
    <div className="bg-card">
      {imageSrc ? <img src={imageSrc} alt={alt} loading="lazy" className="block h-auto w-full object-contain" /> : <div className="aspect-video bg-muted" />}
    </div>
  </div>
);

export default LaptopFrame;
