import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Campus GPT',
    tags: ['Multi-Agent RAG', 'LLM', 'Fine-Tuning'],
    description:
      'Autonomous multi-agent AI system for NKU using CrewAI — an Ingestion Agent organises university knowledge (web pages, PDFs, FAQs via crawl4ai) and a Student Advisor Agent answers queries grounded in ChromaDB. Includes fine-tuning of Llama 3.1 on campus-specific dialect.',
    stack: 'Python · CrewAI · crawl4ai · ChromaDB · Ollama / Llama 3.x · uv',
    href: 'https://github.com/ak-pydev/Campus_GPT',
  },
  {
    name: 'LLM Sentiment Analysis Pipeline',
    tags: ['Data Engineering', 'MLOps'],
    description:
      'End-to-end streaming pipeline for LLM app review analysis. Kafka producer/consumer handles ingestion, PySpark computes batch aggregates, PostgreSQL stores results — all orchestrated with Airflow and Docker Compose.',
    stack: 'Python · Kafka · PySpark · PostgreSQL · Airflow · Docker Compose',
    href: 'https://github.com/ak-pydev/llm-apps-sentiment-analysis',
  },
  {
    name: 'Episodic Memory for VLA Models',
    tags: ['In Progress', 'Robotics', 'VLA'],
    description:
      'Ongoing research into differentiable episodic memory for long-horizon robot manipulation with VLA models. Related to ongoing work on uncertainty estimation and HITL verification for real-time exercise coaching.',
    stack: 'Python · PyTorch · VLA Models',
    href: 'https://github.com/ak-pydev/episodic-memory-vla',
  },
  {
    name: 'Real-Time ETL Pipeline',
    tags: ['Data Engineering', 'Streaming'],
    description:
      'Streaming ETL for high-frequency weather data. Kafka producer publishes raw CSV rows to a weather_raw topic; PySpark consumes, cleans, and writes results. Full local cluster via Docker Compose.',
    stack: 'Python · Kafka · PySpark · Docker Compose',
    href: 'https://github.com/ak-pydev/ETL_Pipeline_Design',
  },
  {
    name: 'Kafka Stock Market Streaming',
    tags: ['Streaming'],
    description:
      'Real-time data streaming demonstrating Kafka producer/consumer patterns for stock market data. Streams historical stock CSV records through Kafka topics for live consumption.',
    stack: 'Python · Apache Kafka · Jupyter',
    href: 'https://github.com/ak-pydev/kafka_stock_market_data_streaming',
  },
  {
    name: 'Forest Fire Prediction',
    tags: ['ML', 'Flask'],
    description:
      'ML web application predicting forest fire occurrence in Algerian regions using Ridge Regression on environmental sensor data. Deployed as a Flask API with demo UI.',
    stack: 'Python · Scikit-learn · Ridge Regression · Flask',
    href: 'https://github.com/ak-pydev/ForestFirePrediction',
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="space-y-14">
      {/* Active Research — emerald */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-[3px] h-7 bg-emerald-600 shrink-0" />
          <h2 className="text-base font-black uppercase tracking-[0.25em] text-[#111]">Research</h2>
        </div>
        <div className="space-y-4">
          <ResearchEntry
            title="AI Gym Buddy"
            subtitle="NSF NAIRR · Northern Kentucky University"
            period="May 2025 – Present"
            points={[
              'Real-time VLA perception pipeline achieving sub-50ms inference at 30+ FPS.',
              'Automated experiment tracking using MLflow across large-scale video datasets.',
              'Submitted to IROS 2026 (with J. Zhou): "Severe Domain Shift in Skeleton-Based Action Recognition: A Study of Uncertainty Failure in Real-World Gym Environments." arXiv:2603.15574.',
              'Ongoing: VLA models with uncertainty estimation and HITL verification for real-time exercise coaching.',
            ]}
          />
          <ResearchEntry
            title="AutoEye — CV & Autonomy Safety"
            subtitle="Northern Kentucky University"
            period="Aug 2024 – Present"
            points={[
              'Distributed pipelines processing autonomous vehicle logs at 30 FPS using PySpark.',
              'Reduced debugging time by 40% via real-time monitoring of accuracy drift and distribution shifts.',
              'Co-authored two papers at AIBC 2025 on HITL continuous learning for drowsiness detection and emotion classification.',
            ]}
          />
          <ResearchEntry
            title="Human-Computer Interaction Lab"
            subtitle="Northern Kentucky University"
            period="Jan 2024 – Jul 2024"
            points={[
              'Automated feature extraction for 10,000+ auction records, reducing research turnaround by 60%.',
              'Co-authored paper on overbidding dynamics at MIPRO International Conference, Opatija, Croatia.',
            ]}
          />
        </div>
      </div>

      {/* Projects — emerald */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-[3px] h-7 bg-emerald-600 shrink-0" />
          <h2 className="text-base font-black uppercase tracking-[0.25em] text-[#111]">Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map(p => (
            <div
              key={p.name}
              className="bg-white border-t-[3px] border-emerald-600 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-black text-[#111] leading-tight">{p.name}</h3>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-emerald-600 hover:text-emerald-800 transition-colors mt-0.5"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map(t => (
                  <span
                    key={t}
                    className="text-xs font-black uppercase tracking-[0.1em] px-2 py-1 bg-emerald-50 text-emerald-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-3">{p.description}</p>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide">{p.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearchEntry = ({
  title,
  subtitle,
  period,
  points,
}: {
  title: string;
  subtitle: string;
  period: string;
  points: string[];
}) => (
  <div className="bg-white p-6 border-l-[3px] border-emerald-600">
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
      <h3 className="text-lg font-black text-[#111]">{title}</h3>
      <span className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400 shrink-0">
        {period}
      </span>
    </div>
    <p className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-600 mb-4">{subtitle}</p>
    <ul className="space-y-2">
      {points.map((pt, i) => (
        <li key={i} className="text-base text-stone-600 flex gap-3 leading-relaxed">
          <span className="text-emerald-500 shrink-0 font-black mt-0.5">—</span>
          <span>{pt}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ResearchSection;
