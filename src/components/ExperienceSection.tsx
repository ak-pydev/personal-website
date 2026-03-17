interface Role {
  title: string;
  org: string;
  period: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    title: 'Student Researcher — AI Gym Buddy',
    org: 'National Science Foundation (NAIRR) · NKU',
    period: 'May 2025 – Present',
    bullets: [
      'Built real-time perception pipelines achieving sub-50ms inference at 30+ FPS.',
      'Automated experiment tracking using MLflow for large-scale video datasets.',
      'Authored IROS 2026 submission on skeleton-based action recognition and uncertainty failure.',
    ],
  },
  {
    title: 'Student Researcher — AutoEye',
    org: 'Computer Vision & Autonomy Safety · NKU',
    period: 'Aug 2024 – Present',
    bullets: [
      'Distributed PySpark pipelines processing autonomous vehicle logs at 30 FPS.',
      'Reduced debugging time by 40% via real-time accuracy drift monitoring.',
      'Co-authored two AIBC 2025 papers on HITL continuous learning.',
    ],
  },
  {
    title: 'Student Researcher — HCI Lab',
    org: 'Human-Computer Interaction Lab · NKU',
    period: 'Jan 2024 – Jul 2024',
    bullets: [
      'Automated feature extraction for 10,000+ auction records — 60% faster turnaround.',
      'Co-authored paper on overbidding dynamics at MIPRO 2024, Opatija, Croatia.',
    ],
  },
  {
    title: 'Data Science Extern',
    org: 'Beats by Dre',
    period: 'Summer 2024',
    bullets: [
      'Large-scale sentiment analysis on customer feedback using Python and Google Gemini 1.5 Pro.',
      'Delivered product perception insights to cross-functional data teams.',
    ],
  },
];

const certs = [
  'Chapter Lead — Google Developer Groups (GDG), NKU',
  'Oracle Cloud Infrastructure 2024 Gen AI Certified Professional',
  'Microsoft Azure AI Fundamentals',
  'NVIDIA Fundamentals of Deep Learning',
  'Fidelity Hackathon 2025 · VictorHacks 2026',
];

const ExperienceSection = () => {
  return (
    <section id="experience">
      {/* Section heading — violet */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-[3px] h-7 bg-violet-600 shrink-0" />
        <h2 className="text-base font-black uppercase tracking-[0.25em] text-[#111]">Experience</h2>
      </div>

      <div className="space-y-4">
        {roles.map((role, i) => (
          <div
            key={i}
            className="bg-white p-6 border-l-[3px] border-[#D5D1C8] hover:border-violet-600 transition-colors group"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-lg font-black text-[#111] group-hover:text-violet-600 transition-colors">
                {role.title}
              </h3>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400 shrink-0">
                {role.period}
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-violet-600 mb-4">
              {role.org}
            </p>
            <ul className="space-y-2">
              {role.bullets.map((b, j) => (
                <li key={j} className="text-base text-stone-600 flex gap-3 leading-relaxed">
                  <span className="text-violet-400 font-black shrink-0 mt-0.5">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Credentials — violet top border */}
      <div className="mt-4 bg-white border-t-[3px] border-violet-600 p-6">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-stone-400 mb-4">
          Certifications &amp; Leadership
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certs.map(c => (
            <p key={c} className="text-base text-stone-600 flex gap-3 leading-relaxed">
              <span className="text-violet-600 font-black shrink-0">✓</span>
              {c}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
