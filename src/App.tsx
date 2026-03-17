import NavBar from './components/NavBar';
import Profile from './components/Profile';
import PublicationsList from './components/PublicationsList';
import ResearchSection from './components/ResearchSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F4F1EA]">
      {/* Bold orange stripe pinned to very top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-orange-600 z-50" />

      <NavBar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left sidebar */}
          <aside className="lg:w-60 xl:w-64 shrink-0">
            <div className="lg:sticky lg:top-16 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
              <div className="pt-10 pb-6">
                <Profile />
              </div>
            </div>
          </aside>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-[#D5D1C8] self-stretch" />

          {/* Main content */}
          <div className="flex-1 min-w-0 pt-10 pb-12 space-y-16">
            <PublicationsList />
            <ResearchSection />
            <ExperienceSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
