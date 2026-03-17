import { MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar, SiKaggle } from 'react-icons/si';
import profileImg from '../assets/profile.JPEG';

const interests = [
  'Human-in-the-Loop AI',
  'Uncertainty Estimation',
  'Vision-Language-Action',
  'Safe & Interpretable ML',
  'Computer Vision',
];

const stack = [
  { label: 'ML / AI', value: 'PyTorch · HuggingFace · Scikit-learn · LangChain · OpenAI' },
  { label: 'MLOps', value: 'MLflow · Airflow · Docker · Kubernetes · Jenkins' },
  { label: 'Data', value: 'Kafka · Spark · PostgreSQL · MongoDB · Pinecone · Chroma' },
  { label: 'Cloud', value: 'AWS · Azure · GCP' },
  { label: 'Lang', value: 'Python · R · Java · JavaScript' },
];

const socialLinks = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=nF17wMAAAAAJ&hl=en', icon: SiGooglescholar },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-khanalaaditya/', icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/ak-pydev', icon: FaGithub },
  { label: 'Kaggle', href: 'https://www.kaggle.com/aadityaiscoding', icon: SiKaggle },
  { label: 'aadityakhanal26@gmail.com', href: 'mailto:aadityakhanal26@gmail.com', icon: FaEnvelope },
];

const Profile = () => {
  return (
    <div id="about" className="flex flex-col">
      {/* Orange top rule */}
      <div className="h-[3px] bg-orange-600 mb-7" />

      {/* Photo */}
      <img
        src={profileImg}
        alt="Aaditya Khanal"
        className="w-36 h-36 object-cover mb-6"
        style={{ filter: 'grayscale(15%)' }}
      />

      {/* Name */}
      <h1 className="text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-1">
        Aaditya<br />Khanal
      </h1>

      {/* Role */}
      <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mt-3 mb-5">
        ML Researcher · PhD Applicant
      </p>

      {/* Affiliation */}
      <div className="border-l-[3px] border-orange-600 pl-4 mb-7 space-y-1">
        <p className="text-sm font-bold text-[#111]">Northern Kentucky University</p>
        <p className="text-sm text-stone-600">B.S. Data Science &amp; Business Analytics</p>
        <p className="text-sm text-stone-500">Minor: Applied Statistics</p>
        <p className="text-sm text-stone-500">GPA 3.74 / 4.0 · Expected May 2026</p>
        <p className="text-sm text-stone-500 flex items-center gap-1.5 mt-1">
          <MapPin size={12} />
          Cincinnati, OH · Open to Relocation
        </p>
      </div>

      {/* Research interests */}
      <div className="mb-7">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-stone-400 mb-3">
          Research Interests
        </p>
        <div className="flex flex-wrap gap-2">
          {interests.map(i => (
            <span
              key={i}
              className="text-xs font-black uppercase tracking-wide px-2.5 py-1.5 bg-orange-600 text-white"
            >
              {i}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-px bg-[#D5D1C8] mb-7">
        {[
          { value: '4', label: 'Pubs' },
          { value: '1', label: 'Review' },
          { value: '2+', label: 'Years' },
        ].map(s => (
          <div key={s.label} className="bg-white p-4 text-center">
            <div className="text-3xl font-black text-[#111]">{s.value}</div>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="mb-7">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-stone-400 mb-3">Links</p>
        <div className="flex flex-col gap-2">
          {socialLinks.map(l => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors group"
              >
                <span className="w-7 h-7 bg-[#F4F1EA] border border-[#D5D1C8] flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors">
                  <Icon size={14} className="text-stone-600 group-hover:text-white transition-colors" />
                </span>
                <span className="truncate">{l.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Stack */}
      <div className="border-t border-[#D5D1C8] pt-5">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-stone-400 mb-3">Stack</p>
        <div className="space-y-2.5">
          {stack.map(s => (
            <p key={s.label} className="text-sm text-stone-600 leading-relaxed">
              <span className="font-black text-orange-600 uppercase">{s.label} — </span>
              {s.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
