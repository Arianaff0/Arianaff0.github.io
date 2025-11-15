interface LaptopFrameProps {
  imageSrc?: string;
  alt?: string;
}

const LaptopFrame = ({ imageSrc, alt = "Project screenshot" }: LaptopFrameProps) => {
  return (
    <div className="relative w-full">
      {/* Body */}
      <div className="relative bg-gray-700 border border-gray-600/50 rounded-2xl p-3 shadow-xl">
        {/* Top bar / bezel */}
        <div className="flex items-center gap-3 mb-3 px-2">
          <div className="w-10 h-5 rounded-md bg-gradient-to-b from-gray-600 to-gray-700 border border-gray-600/40 flex items-center px-2">
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-gray-300 to-gray-400 border border-gray-400/40 shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-gray-300 to-gray-400 border border-gray-400/40 shadow-sm ml-2" />
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-gray-300 to-gray-400 border border-gray-400/40 shadow-sm ml-2" />
          </div>
        </div>

        {/* Screen / bezel */}
        <div className="relative bg-neutral-900 rounded-lg overflow-hidden w-full border border-gray-800 shadow-[inset_0_-20px_40px_rgba(0,0,0,0.6)]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-auto object-contain bg-black block"
            />
          ) : (
            <div className="w-full bg-gray-800" />
          )}

          {/* subtle glass reflection */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/6 via-transparent to-transparent mix-blend-screen"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 w-1/3 h-1/3 rounded-br-full bg-white/3 blur-[6px] transform -translate-x-6 -translate-y-6"
          />
        </div>
      </div>

      {/* Base / stand */}
      <div
        className="relative mx-auto mt-2 rounded-b-xl bg-gray-600"
        style={{ width: "86%", height: 10 }}
      />
      <div
        className="relative mx-auto mt-1 bg-gray-500 rounded-md"
        style={{ width: "60%", height: 6 }}
      />
    </div>
  );
};

export default LaptopFrame;