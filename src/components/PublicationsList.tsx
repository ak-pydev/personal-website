import { ExternalLink } from 'lucide-react';

interface Publication {
  index: number;
  authors: string;
  title: string;
  venue: string;
  year: number | string;
  links?: { label: string; href: string }[];
  status?: 'under-review';
}

const publications: Publication[] = [
  {
    index: 1,
    authors: 'A. Khanal, et al.',
    title: 'Emotion Classification with Human-in-the-Loop Verification',
    venue: 'AIBC 2025',
    year: 2025,
    links: [{ label: 'Scholar', href: 'https://scholar.google.com/citations?user=nF17wMAAAAAJ&hl=en' }],
  },
  {
    index: 2,
    authors: 'A. Khanal, et al.',
    title: 'AutoEyeFT: Continuous Learning for Drowsiness Detection',
    venue: 'AIBC 2025',
    year: 2025,
    links: [{ label: 'Scholar', href: 'https://scholar.google.com/citations?user=nF17wMAAAAAJ&hl=en' }],
  },
  {
    index: 3,
    authors: 'A. Khanal, et al.',
    title: 'Competitive Arousal and Overbidding Dynamics in Online Auctions',
    venue: 'MIPRO International Conference, Opatija, Croatia',
    year: 2024,
    links: [{ label: 'Scholar', href: 'https://scholar.google.com/citations?user=nF17wMAAAAAJ&hl=en' }],
  },
  {
    index: 4,
    authors: 'A. Khanal, et al.',
    title: 'Analyzing Human Dynamics via Auction Behavioral Dataset',
    venue: 'Workshop Paper',
    year: 2024,
    links: [{ label: 'Scholar', href: 'https://scholar.google.com/citations?user=nF17wMAAAAAJ&hl=en' }],
  },
  {
    index: 5,
    authors: 'A. Khanal, J. Zhou.',
    title: 'Severe Domain Shift in Skeleton-Based Action Recognition: A Study of Uncertainty Failure in Real-World Gym Environments',
    venue: 'IROS 2026',
    year: 2026,
    status: 'under-review',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2603.15574' }],
  },
];

const years = [...new Set(publications.filter(p => !p.status).map(p => p.year))].sort(
  (a, b) => Number(b) - Number(a)
);

const PublicationsList = () => {
  return (
    <section id="publications">
      {/* Section heading — blue */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-[3px] h-7 bg-blue-700 shrink-0" />
        <h2 className="text-base font-black uppercase tracking-[0.25em] text-[#111]">Publications</h2>
      </div>

      {years.map(year => (
        <div key={year} className="mb-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-stone-400 mb-5 pl-16">
            {year}
          </p>
          <div className="space-y-7">
            {publications
              .filter(p => p.year === year && !p.status)
              .map(pub => <PubEntry key={pub.index} pub={pub} />)}
          </div>
        </div>
      ))}

      {publications.some(p => p.status === 'under-review') && (
        <div className="mb-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-stone-400 mb-5 pl-16">
            Under Review
          </p>
          <div className="space-y-7">
            {publications
              .filter(p => p.status === 'under-review')
              .map(pub => <PubEntry key={pub.index} pub={pub} />)}
          </div>
        </div>
      )}
    </section>
  );
};

const PubEntry = ({ pub }: { pub: Publication }) => (
  <div className="flex gap-5 group">
    {/* Bold editorial number — blue */}
    <span className="text-4xl font-black text-blue-700 leading-none w-12 shrink-0 text-right tabular-nums">
      {String(pub.index).padStart(2, '0')}
    </span>

    <div className="flex-1 pt-1.5">
      <p className="text-lg font-bold text-[#111] leading-snug">
        {pub.title}
        {pub.status === 'under-review' && (
          <span className="ml-2 text-xs font-black uppercase tracking-[0.15em] px-1.5 py-0.5 bg-blue-700 text-white align-middle">
            Under Review
          </span>
        )}
      </p>
      <p className="text-sm text-stone-500 mt-1.5">
        {pub.authors} &nbsp;·&nbsp; <span className="font-bold">{pub.venue}</span>
      </p>
      {pub.links && pub.links.length > 0 && (
        <div className="flex gap-4 mt-2">
          {pub.links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-blue-700 hover:text-blue-900 transition-colors"
            >
              {l.label} <ExternalLink size={11} />
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default PublicationsList;
