const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-inter font-bold hover:text-ballet-pink transition-colors"
          >
            Portfolio
          </button>
          
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection('development')}
              className="text-sm hover:text-ballet-pink transition-colors"
            >
              Development
            </button>
            <button
              onClick={() => scrollToSection('design')}
              className="text-sm hover:text-ballet-pink transition-colors"
            >
              Design
            </button>
            <button
              onClick={() => scrollToSection('mathematics')}
              className="text-sm hover:text-ballet-pink transition-colors"
            >
              Mathematics
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm hover:text-ballet-pink transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
