import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import LaptopFrame from "@/components/LaptopFrame";
import DeviceTable from "@/components/DeviceTable";
import { Mail, Linkedin, Github } from "lucide-react";
import homePageVideo from "@/assets/Home page.mp4";
import resumePdf from "@/assets/resume.pdf";
import netconview from "@/assets/netconview.png";
import webinfra from "@/assets/webinfra.png";
import icecreamtycoon from "@/assets/icecream_tycoon.png";
import asl from "@/assets/asl.png";
import shehacks from "@/assets/shehacks.png";
import hacks from "@/assets/hacks.png";
import promoVid from "@/assets/Final PROMO VID - mp4 file.mp4";
import climbingposter from "@/assets/poster.jpg";
import climbingcard from "@/assets/business-card.jpg";
import thanksgiving from "@/assets/Thanksgiving.mp4";
import clubsweek from "@/assets/clubsweek.gif";
import pursuit from "@/assets/Pursuit.png";
import stickersheet1 from "@/assets/stickersheet1.jpg";
import stickersheet2 from "@/assets/stickersheet2.jpg";
import stickersheet3 from "@/assets/stickersheet3.jpg";
import stickersheet4 from "@/assets/stickersheet4.jpg";
import snow from "@/assets/snow.jpg";
import charcoal from "@/assets/charcoal.jpg";
import guy1 from "@/assets/guy1.jpg";
import guy2 from "@/assets/guy2.jpg";
import guy3 from "@/assets/guy3.jpg";
import openheart from "@/assets/openheart.mp4";
import bland from "@/assets/bland.jpg";
import drapes from "@/assets/drapes.jpg";
import garden from "@/assets/garden.jpg";
import logo from "@/assets/logo.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const developmentProjects = [
    { id: 1, title: "Chatbot", year: "2025", tech: "Python, Streamlit, Huggingface", description: "An AI Semantic search chatbot that streamlines how Web Infrastructure team find information and resolve service ticket issues, enabling faster access to relevant documentation.", image: webinfra },
    { id: 2, title: "NetconView - Web Application", year: "2025", tech: "C# MVC .NET, CSS, HTML", description: "Enabling a permitted userbase to perform Web Infrastructure Windows operations independently - eliminates some service ticket submissions.", image: netconview },
  ];

  const designProjects = [
    { id: 1, title: "Brand Identity", year: "2024", medium: "Digital" },
    { id: 2, title: "UI/UX Design", year: "2024", medium: "Digital" },
    { id: 3, title: "Abstract Composition", year: "2024", medium: "Oil on Canvas" },
    { id: 4, title: "Geometric Dreams", year: "2024", medium: "Digital" },
    { id: 5, title: "Organic Forms", year: "2024", medium: "Mixed Media" },
    { id: 6, title: "Color Study", year: "2023", medium: "Acrylic" },
  ];

  const mathProjects = [
    { id: 1, title: "Graph Theory Research", date: "2024", topic: "Network Analysis" },
    { id: 2, title: "Calculus Visualization", date: "2024", topic: "Interactive Plots" },
    { id: 3, title: "Number Theory Proof", date: "2024", topic: "Prime Numbers" },
    { id: 4, title: "Linear Algebra Study", date: "2023", topic: "Matrix Operations" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={homePageVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/40" />
        </div>

        {/* Content */}
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-inter font-bold mb-6 animate-fade-in">
            Ariana Feng
          </h1>
          <p className="text-xl md:text-2xl font-inter text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Art came first, then numbers and code. My name is Ariana Feng, and I combine visual storytelling, full-stack development, and problem-solving to build products that are beautiful, functional, and memorable.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/90 text-black text-sm font-medium shadow-sm hover:bg-white transition"
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Development Section */}
      <section id="development" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-inter font-bold mb-16">Development</h2>
          
          <div className="space-y-24">
            {developmentProjects.map((project) => (
              <div key={project.id} className="grid md:grid-cols-2 gap-12 items-center">
                <LaptopFrame imageSrc={project.image} alt={project.title} />
                <div>
                  <div>
                    <h3 className="text-3xl font-inter font-semibold mb-4">{project.title}</h3>
                    <div className="flex gap-3 text-sm text-muted-foreground mb-6">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.tech}</span>
                    </div>
                    <p className="text-lg leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curved table with multiple laptops */}
      <DeviceTable
        devices={[
          { id: 1, image: asl, title: "ASL Fingerspelling Website", size: "large", caption: "Group Project: UI/UX designer", offset: -36 },
          { id: 2, image: icecreamtycoon, title: "Educational Kids Game", size: "medium", caption: "Group Project: Worked on Mainscreen class and sprite design", offset: -56 },
          { id: 3, image: hacks, title: "Wellness Mobile App", size: "medium", caption: "Hackathon: Product designer and made ppt slides", offset: -52 },
          { id: 4, image: shehacks, title: "SheTribe, Site Made for Women by Women", size: "long", caption: "Hackathon: Set up website dashboard and Menu Items, fullstack", offset: -44 },
        ]}
      />

      {/* Design Section */}
      <section id="design" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-inter font-bold mb-16">Design</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {/* Promo video as first item in the collage */}
            <DesignCard
              key="promo"
              videoSrc={promoVid}
              title="WCC Promo Video"
              medium="Blender, iMovie, Photoshop"
              year="2023"
            />

            <DesignCard
              key="poster.jpg"
              imageSrc={climbingposter}
              title="WCC Promo Poster"
              medium="Advertising Design"
              year="2023"
            />

            <DesignCard
              key="business-card.jpg"
              imageSrc={climbingcard}
              title="WCC Business Card"
              medium="Advertising Design"
              year="2023"
            />

            <DesignCard
              key="thanksgiving"
              videoSrc={thanksgiving}
              title="WCC Thanksgiving IG Reel"
              medium="Blender"
              year="2023"
            />

            
            <DesignCard
              key="promo"
              imageSrc={clubsweek}
              title="Clubs Week IG Post"
              medium="Blender, Canva"
              year="2023"
            />

            {/* sticker design*/}
            <DesignCard
              key="sticker1"
              imageSrc={pursuit}
              title="Pursuit"
              medium="Digital on Vinyl Sticker Paper: Blender, Photoshop, Fujifilm XT-4 Photography"
              year="May, 2022"
            />

            <DesignCard
              key="stickersheet1"
              imageSrc={stickersheet1}
              title="Pursuit Stickersheet Design"
              medium="Digital on Vinyl Sticker Paper"
              year="May, 2022"
            />

            <DesignCard
              key="stickersheet3"
              imageSrc={stickersheet3}
              title="Pursuit Stickersheet Design"
              medium="Digital on Vinyl Sticker Paper"
              year="May, 2022"
            />

            <DesignCard
              key="stickersheet2"
              imageSrc={stickersheet2}
              title="Pursuit Stickersheet Design"
              medium="Digital on Vinyl Sticker Paper"
              year="May, 2022"
            />

            
            <DesignCard
              key="stickersheet4"
              imageSrc={stickersheet4}
              title="Pursuit Stickersheet Design"
              medium="Digital on Vinyl Sticker Paper"
              year="May, 2022"
            />

            <DesignCard
              key="charcoal"
              imageSrc={charcoal}
              title="Lumber"
              medium="Charcoal on Paper"
              year="October, 2018"
            />

            <DesignCard
              key="charcoal"
              imageSrc={snow}
              title="Snow"
              medium="Pencil Crayon on Paper"
              year="January, 2019"
            />

            <DesignCard
              key="guy1"
              imageSrc={guy1}
              title="Routine: Consume"
              medium="Clay Sculpture"
              year="January, 2022"
            />

            <DesignCard
              key="guy2"
              imageSrc={guy2}
              title="Routine: Rest"
              medium="Clay Sculpture"
              year="January, 2022"
            />

            <DesignCard
              key="guy3"
              imageSrc={guy3}
              title="Routine: Chase"
              medium="Clay Sculpture"
              year="January, 2022"
            />

            <DesignCard
              key="openheart"
              videoSrc={openheart}
              title="Open Heart"
              medium="Group Project: Installation"
              year="March, 2022"
            />

            <DesignCard
              key="drapes"
              imageSrc={drapes}
              title="Light Study: Drapes"
              medium="Soft Pastel on Paper"
              year="2022"
            />

            <DesignCard
              key="bland"
              imageSrc={bland}
              title="Bland"
              medium="Mixed Media on Canvas"
              year="2022"
            />

            <DesignCard
              key="garden"
              imageSrc={garden}
              title="New Summer, New Start"
              medium="Watercolor"
              year="June, 2020"
            />

            <DesignCard
              key="logo"
              imageSrc={logo}
              title="Personal Brand Logo"
              medium="Adobe Illustrator"
              year="2017"
            />



          </div>
        </div>
      </section>

      {/* Mathematics Section */}
      <section id="mathematics" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-inter font-bold mb-16">Mathematics</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            <p> Courses taken at undergraduate level: Multivariable Calculus I, II, Linear Algebra I, II, Real Analysis, Statistics I, Complex Variables, Differential Equations, Financial
Modelling, Optimization Methods, Cryptography. Wrote a Canadian Household Savings & Investment Behavior Analysis report using regression models (Elastic 
Net, XGBoost) to forecast savings contributions. 
</p>
<p></p>
<p></p>
<p></p>
            <p>Please email for past assignments and analysis report</p>
            {/* {mathProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer overflow-hidden">
                <div className="aspect-square bg-accent transition-transform duration-300 group-hover:scale-105" />
                <div className="p-3">
                  <h3 className="font-inter font-semibold mb-1">{project.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {project.date} • {project.topic}
                  </p>
                </div>
              </div>
            ))} */}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-inter font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Interested in collaborating or just want to say hello? I'd love to hear from you.
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:arianafeng07@gmail.com" className="flex items-center gap-2 hover:text-ballet-pink transition-colors">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/ariana-feng-89054025b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ballet-pink transition-colors">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ballet-pink transition-colors">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">© 2025 Ariana Feng. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};


// Design card used for images or video in the collage
const DesignCard = ({
  imageSrc,
  videoSrc,
  title,
  medium,
  year,
}: {
  imageSrc?: string;
  videoSrc?: string;
  title?: string;
  medium?: string;
  year?: string;
}) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (ref.current) ref.current.muted = muted;
  }, [muted]);

  return (
    <figure className="relative group overflow-hidden rounded-sm bg-gray-100">
      {/* fixed aspect container so grid aligns and whitespace is minimized */}
      <div className="w-full aspect-square bg-black flex items-center justify-center">
        {videoSrc ? (
          <video
            ref={ref}
            src={videoSrc}
            className="w-full h-full object-contain"
            autoPlay
            loop
            playsInline
            muted={muted}
            preload="auto"
          />
        ) : imageSrc ? (
          // keeps full image visible, no cropping
          <img src={imageSrc} alt={title} className="w-full h-full object-contain" />
        ) : (
          <div className="w-full h-full bg-secondary" />
        )}
      </div>

{/* hover overlay: absolutely positioned so it consumes no layout space */}
      <figcaption className="absolute inset-0 flex items-end p-4 pointer-events-none">
        <div className="w-full opacity-0 group-hover:opacity-100 transition bg-black/45 text-white p-3 rounded-sm pointer-events-auto">
          <div className="text-sm font-inter font-semibold">{title}</div>
          <div className="text-xs mt-1">{medium} • {year}</div>
          {videoSrc && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMuted((m) => !m);
              }}
              className="mt-2 bg-white/90 text-black px-2 py-1 text-xs rounded"
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? "Unmute" : "Mute"}
            </button>
          )}
        </div>
      </figcaption>
    </figure>
  );
};

export default Home;
