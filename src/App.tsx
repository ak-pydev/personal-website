import CardNav from './components/CardNav'
import DarkVeil from './components/DarkVeil'
import { TextLoop } from './components/text-loop'

import Introduction from './components/Introduction'
import PortfolioBento from './components/PortfolioBento'
import WorkExperience from './components/WorkExperience'

const App = () => {
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
        { label: "Email", ariaLabel: "Email us", href: "#" },
        { label: "X", ariaLabel: "X", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" }
      ]
    }
  ];
  // Navbar items end

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden flex flex-col items-center">
      {/* Background - Fixed */}
      <div className="fixed inset-0 z-0 pointer-events-none">
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
        menuColor="#fff"
        buttonBgColor="#fff"
        buttonTextColor="#000"
        ease="power3.out"
        theme="dark"
      />

      {/* Hero Section - Responsive Flex */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 min-h-screen w-full px-4 pt-24 pb-12 box-border">
        {/* Text Loop */}
        <div className="text-white text-3xl md:text-5xl lg:text-7xl font-bold flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-center md:text-left z-20">
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
      <div className="relative z-10 w-full flex flex-col items-center gap-12 pb-24 bg-black px-4">
        <Introduction />
        <PortfolioBento />
        <WorkExperience />
      </div>
    </div>
  );
};

export default App;
