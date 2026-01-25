import CardNav from './components/CardNav'
import DarkVeil from './components/DarkVeil'
import { TextLoop } from './components/text-loop'

import Introduction from './components/Introduction'
import MagicBento from './components/MagicBento'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import FooterSparkles from './components/FooterSparkles'
import Footer from './components/Footer'

import { useTheme } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'

const App = () => {
  const { theme } = useTheme()
  // Determine if we are effectively in dark mode. 
  // Simple check: if theme is 'dark' OR (theme is 'system' and system is dark).
  // For simplicity here, we assume if theme is not 'light', it's dark-ish preference, 
  // but strictly for the Nav styling we might want to check the actual rendered class.
  // The user asked specifically about "light mode".
  // If theme === 'light', use black text.

  const isLight = theme === 'light'

  // Nav bar items
  const items = [
    {
      label: "About",
      bgColor: "#ffffff",
      textColor: "#000",
      links: [
        { label: "Introduction", ariaLabel: "Introduction", href: "#" },
        { label: "Experience", ariaLabel: "Experience", href: "#" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#f5f5f5",
      textColor: "#000",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#" },
        { label: "Research", ariaLabel: "Research Work", href: "#" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#ebebeb",
      textColor: "#000",
      links: [
        { label: "X", ariaLabel: "X", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" },
        { label: "Github", ariaLabel: "Github", href: "#" },
        { label: "Google Scholar", ariaLabel: "Google Scholar", href: "#" },
        { label: "Bluesky", ariaLabel: "Bluesky", href: "#" },
        { label: "Kaggle", ariaLabel: "Kaggle", href: "#" }

      ]
    }
  ];
  // Navbar items end

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black overflow-x-hidden flex flex-col items-center transition-colors duration-300">
      {/* Mode Toggle - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ModeToggle />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-300 dark:filter-none filter invert">
        <DarkVeil
          hueShift={40}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.4}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
        {/* Gradient Overlay for "Blurred Mask" effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
      </div>

      {/* Navigation - Fixed Top */}
      <CardNav
        logoText="Aaditya Khanal"
        items={items}
        baseColor="transparent"
        menuColor={isLight ? "#000" : "#fff"}
        buttonBgColor={isLight ? "#000" : "#fff"}
        buttonTextColor={isLight ? "#fff" : "#000"}
        ease="power3.out"
        theme={isLight ? 'light' : 'dark'}
      />

      {/* Hero Section - Responsive Flex */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 min-h-screen w-full px-4 pt-24 pb-12 box-border">
        {/* Text Loop */}
        <div className="text-neutral-900 dark:text-white text-3xl md:text-5xl lg:text-7xl font-bold flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left z-20 transition-colors duration-300">
          <span>I am a</span>
          <TextLoop>
            <span>Data Scientist</span>
            <span>AI Researcher</span>
            <span>ML Engineer</span>
            <span>Data Engineer</span>
          </TextLoop>
        </div>
      </div>

      {/* Content Section - Bento Grid & Intro */}
      <div className="relative z-10 w-full flex flex-col items-center gap-12 pb-24 bg-white dark:bg-black px-4 transition-colors duration-300">
        <Introduction />
        <MagicBento />
        <WorkExperience />
        <FooterSparkles />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
