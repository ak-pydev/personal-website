import CardNav from './components/CardNav'
import DarkVeil from './components/DarkVeil'
import ProfileCard from './components/ProfileCard'
import profileImg from './assets/cutout.png'


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
      label: "Contact",
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
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
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

      <div style={{ position: 'absolute', top: '55%', left: '10%', transform: 'translateY(-50%)', zIndex: 10 }}>
        <ProfileCard
          name="Aaditya Khanal"
          title="Data Engineer"
          handle="aaditycodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl={profileImg}
          iconUrl="https://icon2.cleanpng.com/20180603/fqa/kisspng-web-components-logo-24-computer-icon-5b14a1f93abda4.3822672915280788412406.jpg"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
          behindGlowEnabled
          behindGlowColor="rgba(125, 190, 255, 0.8)"
          innerGradient="linear-gradient(145deg, rgba(96, 73, 110, 0.55) 0%, rgba(113, 196, 255, 0.27) 100%)"
        />
      </div>
    </div>
  );
};

export default App;
