import ScrollLink from "@/components/ScrollLink";
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import LaptopFrame from "@/components/LaptopFrame";
import DeviceTable from "@/components/DeviceTable";
import EnterprisePortal from "@/components/EnterprisePortal";
import ThesisPreview from "@/components/ThesisPreview";
import { ArrowDown, ArrowUpRight, Mail, Linkedin } from "lucide-react";
import homePageVideo from "@/assets/Home page.mp4";
import resumePdf from "@/assets/resume.pdf";
import netconview from "@/assets/netconview.png";
import webinfra from "@/assets/webinfra.png";
import marketMakingSimulator from "@/assets/Screenshot 2026-11-09 201331.png";
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
    {
      id: 3,
      title: "Market-Making Simulator",
      year: "2026",
      tech: "C++, Google Test",
      status: "In progress",
      description: "An ongoing C++ project exploring market-making simulation, with a strong focus on software design patterns and testing with Google Test. I am using this project to deepen my approach to structuring maintainable, extensible software. The interface brings together simulation configuration, quoting controls, market information, portfolio metrics, and executed trades.",
      image: marketMakingSimulator,
    },
    { id: 1, title: "Infrastructure Knowledge Assistant", year: "2025", tech: "Python, Streamlit, Hugging Face", description: "An AI-powered semantic search chatbot that helps the Web Infrastructure team find relevant documentation and resolve service ticket issues more efficiently.", image: webinfra },
    { id: 2, title: "NetconView", year: "2025", tech: "C#, ASP.NET MVC, HTML, CSS", description: "A web application that enables authorized users to perform Web Infrastructure Windows operations independently, reducing the need to submit routine service tickets.", image: netconview },
  ];



  return (
    <div className="min-h-screen">
      <ScrollLink href="#development" className="skip-link">Skip to selected work</ScrollLink>
      <Navigation />
      
      <header id="top" className="hero-section">
        <div className="hero-video" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={homePageVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className={`hero-copy container relative z-10 mx-auto px-6 text-center transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="eyebrow">Development / Design / Mathematics</p>
          <h1>Ariana Feng<span className="text-primary">.</span></h1>
          <p className="hero-statement">A creative eye. <em>An analytical mind.</em></p>
          <p className="hero-description">Art came first, then numbers and code. I bring visual storytelling and mathematical thinking to full-stack development, building thoughtful tools for real problems.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ScrollLink className="button-primary" href="#development">Explore my work <ArrowDown className="h-4 w-4" aria-hidden="true" /></ScrollLink>
            <a className="button-secondary" href={resumePdf} target="_blank" rel="noopener noreferrer">View resume <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
        <ScrollLink className="hero-scroll" href="#development">Scroll to discover <ArrowDown className="h-3 w-3" aria-hidden="true" /></ScrollLink>
      </header>

      {/* Development Section */}
      <main id="content">
      <section id="development" className="section-space bg-background">
        <div className="container mx-auto px-6">
          <div className="section-heading"><div><p className="eyebrow">01 / Building useful things</p><h2>Development</h2></div><p>Enterprise tools, simulations, and experiments. A selection of work across the stack.</p></div>
          
          <div className="space-y-16 md:space-y-24">
            <EnterprisePortal />
            {developmentProjects.map((project) => (
              <article key={project.id} className="project-row grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <LaptopFrame imageSrc={project.image} alt={project.title} />
                <div>
                  <div>
                    {project.status && (
                      <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1 text-xs font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground" aria-hidden="true" />
                        {project.status}
                      </span>
                    )}
                    <h3 className="mb-4 text-2xl font-inter font-semibold tracking-tight md:text-3xl">{project.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-6">
                      <span>{project.year}</span>
                      <span aria-hidden="true">/</span>
                      <span>{project.tech}</span>
                    </div>
                    <p className="text-lg leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </article>
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
      <section id="design" className="section-space border-y border-border bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="section-heading"><div><p className="eyebrow">02 / A visual practice</p><h2>Design & art</h2></div><p>From digital storytelling to work made by hand. An exploration of form, texture, and identity.</p></div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              key="clubsweek"
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
              key="snow"
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

      <section id="mathematics" className="section-space">
        <div className="container mx-auto px-6">
          <div className="section-heading"><div><p className="eyebrow">03 / Thinking in systems</p><h2>Mathematics</h2></div><p>The analytical foundation behind how I model problems, recognize patterns, and build solutions.</p></div>
          <ThesisPreview />
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <article className="research-card">
              <p className="eyebrow">Applied analysis</p>
              <h3 className="mt-4 text-2xl font-inter font-semibold tracking-tight">Canadian Household Savings & Investment Behavior</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">An analysis of household savings and investment behavior using regression models to forecast savings contributions.</p>
              <div className="mt-6 flex flex-wrap gap-2"><span className="tech-tag">Elastic Net</span><span className="tech-tag">XGBoost</span><span className="tech-tag">Regression analysis</span></div>
              <a className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary" href="mailto:arianafeng07@gmail.com?subject=Mathematics%20report%20request">Request the report or past assignments <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </article>
            <div className="coursework">
              <h3 className="mb-6 text-lg font-inter font-semibold">Undergraduate coursework</h3>
              {[
                { title: "Foundations & analysis", courses: "Multivariable Calculus I & II, Linear Algebra I & II, Real Analysis, Complex Variables" },
                { title: "Statistics & computation", courses: "Statistics I & II, Computer Algebra, Optimization Methods, Cryptography" },
                { title: "Models & dynamics", courses: "Math Biology, Nonlinear Dynamics, Ordinary Differential Equations, Financial Modelling" },
              ].map((group) => (
                <div key={group.title} className="border-t border-border py-5">
                  <h4 className="mb-2 text-sm font-inter font-semibold text-primary">{group.title}</h4>
                  <p className="text-sm leading-7 text-muted-foreground">{group.courses}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer id="contact" className="contact-section">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div><p className="eyebrow">04 / Start a conversation</p><h2>Let's make<br /><em>something thoughtful.</em></h2></div>
            <div className="md:pb-2"><p className="mb-6 max-w-md leading-relaxed">Have a project in mind, an opportunity to share, or a question about my work? I'd love to hear from you.</p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:arianafeng07@gmail.com" className="button-primary"><Mail className="h-4 w-4" aria-hidden="true" /> Get in touch</a>
                <a href="https://www.linkedin.com/in/ariana-feng-89054025b/" target="_blank" rel="noopener noreferrer" className="button-secondary"><Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom"><span>&copy; {new Date().getFullYear()} Ariana Feng</span><span>Development. Design. Mathematics.</span><ScrollLink href="#top">Back to top &uarr;</ScrollLink></div>
        </div>
      </footer>
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
    <figure className="art-card group overflow-hidden rounded-lg border border-border bg-card">
      {/* fixed aspect container so grid aligns and whitespace is minimized */}
      <div className="w-full aspect-square bg-muted/40 flex items-center justify-center overflow-hidden">
        {videoSrc ? (
          <video
            ref={ref}
            src={videoSrc}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            autoPlay
            loop
            playsInline
            muted={muted}
            preload="metadata"
          />
        ) : imageSrc ? (
          // keeps full image visible, no cropping
          <img src={imageSrc} alt={title} loading="lazy" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
        ) : (
          <div className="w-full h-full bg-secondary" />
        )}
      </div>

{/* hover overlay: absolutely positioned so it consumes no layout space */}
      <figcaption className="p-4">
        <div className="w-full">
          <div className="text-sm font-inter font-semibold">{title}</div>
          <div className="text-xs mt-2 leading-relaxed text-muted-foreground">{medium} &middot; {year}</div>
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
