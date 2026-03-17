const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/ak-pydev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-khanalaaditya/' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=nF17wMAAAAAJ&hl=en' },
  { label: 'Kaggle', href: 'https://www.kaggle.com/aadityaiscoding' },
  { label: 'Email', href: 'mailto:aadityakhanal26@gmail.com' },
];

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="h-[3px] bg-orange-600" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          {/* Name block */}
          <div>
            <p className="text-4xl font-black tracking-[0.05em] uppercase leading-none text-white">
              Aaditya<br />Khanal
            </p>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 mt-3">
              ML Researcher · PhD Applicant
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-xs font-black uppercase tracking-[0.2em] text-stone-500 hover:text-orange-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-4 flex flex-col sm:flex-row justify-between gap-1">
          <p className="text-xs text-stone-600 uppercase tracking-widest">© 2026 Aaditya Khanal</p>
          <p className="text-xs text-stone-700 uppercase tracking-widest">Northern Kentucky University</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
