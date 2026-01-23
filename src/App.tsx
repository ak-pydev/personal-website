import CardNav from './components/CardNav'
import DarkVeil from './components/DarkVeil'
import ProfileCard from './components/ProfileCard'
import cutout from './assets/cutout.png'
import { TextLoop } from './components/text-loop'
import { TextScramble } from './components/text-scramble'
import Introduction from './components/Introduction'
import MagicBento from './components/MagicBento'

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
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
        <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
          <DarkVeil
            hueShift={40}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.4}
            scanlineFrequency={0}
            warpAmount={0}
            resolutionScale={1}
          />
        </div>
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

        <div style={{
          position: 'absolute',
          top: '55%',
          left: '10%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <ProfileCard
            avatarUrl={cutout}
            name="Aaditya Khanal"
            title=""
            handle="aadityakhanal"
            status="Building cool things"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
            behindGlowEnabled={true}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            innerGradient="linear-gradient(145deg, #1A1A2E 0%, #16213E 100%)"
          />

          <div style={{ color: 'white', fontSize: '6rem', fontWeight: 'bold', display: 'flex', gap: '0.5rem' }}>
            <span>I am a</span>
            <TextLoop>
              <span>Data Scientist</span>
              <span>AI Researcher</span>
              <span>ML Engineer</span>
              <span>Data Engineer</span>
            </TextLoop>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          textAlign: 'center'
        }}>
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 0',
        gap: '2rem',
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#000'
      }}>
        <Introduction />
        <MagicBento />
      </div>
    </div>
  );
};

export default App;
