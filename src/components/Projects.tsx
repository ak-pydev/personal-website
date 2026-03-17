import { WobbleCard } from "./wobble-card";
import { NoiseBackground } from "./noise-background";

export default function Projects() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-20 pb-72" id="projects">
            <div className="mb-10">
                <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
                <p className="text-gray-400 text-sm max-w-xl">A selection of research-driven and engineering projects. Full source available on GitHub.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full">
                {/* Project 1: Campus GPT */}
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-slate-800 min-h-[500px] lg:min-h-[400px] xl:min-h-[300px]">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-[10px] px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 font-mono uppercase tracking-wider">Multimodal RAG</span>
                            <span className="text-[10px] px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 font-mono uppercase tracking-wider">LLM</span>
                        </div>
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Campus GPT <span className="text-blue-300">— Multimodal University QA Agent</span>
                        </h2>
                        <div className="mt-4 text-left text-base/6 text-neutral-200">
                            <p className="mb-2"><span className="font-bold text-blue-200">Problem:</span> University students lack a unified interface for querying heterogeneous institutional knowledge (PDFs, web pages, FAQs) efficiently.</p>
                            <p className="mb-2"><span className="font-bold text-blue-200">Approach:</span> Built a multimodal RAG pipeline using FireCrawler for dynamic web ingestion, LangChain for orchestration, and Google Gemini for multimodal inference. Deployed via Streamlit with session-aware conversation state.</p>
                            <p className="mb-2"><span className="font-bold text-blue-200">Stack:</span> Python · LangChain · Google Gemini · FireCrawler · Chroma · Streamlit</p>
                        </div>
                        <div className="absolute bottom-4 right-4 z-20">
                            <a href="https://github.com/ak-pydev/Campus_GPT" target="_blank" rel="noopener noreferrer">
                                <NoiseBackground
                                    containerClassName="w-fit p-2 rounded-full mx-auto"
                                    gradientColors={[
                                        "rgb(99, 102, 241)",
                                        "rgb(139, 92, 246)",
                                        "rgb(59, 130, 246)",
                                    ]}
                                    noiseIntensity={0.2}
                                    speed={0.05}
                                >
                                    <button className="cursor-pointer rounded-full bg-black px-4 py-1.5 text-white font-bold text-xs shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95">
                                        View on GitHub →
                                    </button>
                                </NoiseBackground>
                            </a>
                        </div>
                    </div>
                </WobbleCard>

                {/* Project 2: ETL Pipeline */}
                <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-slate-900 min-h-[300px]">
                    <div className="h-full flex flex-col justify-between">
                        <div className="flex flex-wrap gap-1 mb-2">
                            <span className="text-[10px] px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 font-mono uppercase tracking-wider">Data Engineering</span>
                        </div>
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                            Real-Time ETL Pipeline
                        </h2>
                        <div className="mt-4 text-left text-sm text-neutral-200">
                            <p className="mb-2"><span className="font-bold text-emerald-200">Problem:</span> Streaming, cleaning, and storing high-frequency weather data at scale.</p>
                            <p className="mb-2"><span className="font-bold text-emerald-200">Approach:</span> Built end-to-end pipeline using Apache NiFi for ingestion, Kafka for streaming, and PySpark for distributed transformation.</p>
                            <p className="mb-2 text-xs text-emerald-100">NiFi · Kafka · PySpark · Python</p>
                        </div>
                        <div className="absolute bottom-4 right-4 z-20">
                            <a href="https://github.com/ak-pydev/ETL_Pipeline_Design" target="_blank" rel="noopener noreferrer">
                                <NoiseBackground
                                    containerClassName="w-fit p-2 rounded-full mx-auto"
                                    gradientColors={[
                                        "rgb(99, 102, 241)",
                                        "rgb(139, 92, 246)",
                                        "rgb(59, 130, 246)",
                                    ]}
                                    noiseIntensity={0.2}
                                    speed={0.05}
                                >
                                    <button className="cursor-pointer rounded-full bg-black px-4 py-1.5 text-white font-bold text-xs shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95">
                                        View on GitHub →
                                    </button>
                                </NoiseBackground>
                            </a>
                        </div>
                    </div>
                </WobbleCard>

                {/* Project 3: OmniSync */}
                <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-slate-800 min-h-[300px]">
                    <div className="max-w-2xl">
                        <div className="flex flex-wrap gap-1 mb-2">
                            <span className="text-[10px] px-2 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 font-mono uppercase tracking-wider">ML · Data Science</span>
                        </div>
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            OmniSync
                        </h2>
                        <div className="mt-4 text-left text-base/6 text-neutral-200">
                            <p className="mb-2"><span className="font-bold text-violet-200">Problem:</span> Orchestrating heterogeneous ML models and data sources into a unified, production-ready inference platform.</p>
                            <p className="mb-2"><span className="font-bold text-violet-200">Approach:</span> Designed a modular Python platform that bridges multiple data pipelines, model endpoints, and sync mechanisms with a clean abstraction layer.</p>
                            <p className="mb-2"><span className="font-bold text-violet-200">Stack:</span> Python · PyTorch · MLflow · Docker</p>
                        </div>
                        <div className="absolute bottom-4 right-4 z-20">
                            <a href="https://github.com/ak-pydev/OmniSync" target="_blank" rel="noopener noreferrer">
                                <NoiseBackground
                                    containerClassName="w-fit p-2 rounded-full mx-auto"
                                    gradientColors={[
                                        "rgb(99, 102, 241)",
                                        "rgb(139, 92, 246)",
                                        "rgb(59, 130, 246)",
                                    ]}
                                    noiseIntensity={0.2}
                                    speed={0.05}
                                >
                                    <button className="cursor-pointer rounded-full bg-black px-4 py-1.5 text-white font-bold text-xs shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95">
                                        View on GitHub →
                                    </button>
                                </NoiseBackground>
                            </a>
                        </div>
                    </div>
                </WobbleCard>
            </div>
            <div className="flex justify-center mt-12 w-full">
                <a href="https://github.com/ak-pydev" target="_blank" rel="noopener noreferrer">
                    <NoiseBackground
                        containerClassName="w-fit p-2 rounded-full mx-auto"
                        gradientColors={[
                            "rgb(99, 102, 241)",
                            "rgb(139, 92, 246)",
                            "rgb(59, 130, 246)",
                        ]}
                        speed={0.05}
                    >
                        <button className="h-full w-full cursor-pointer rounded-full bg-black px-8 py-3 text-white font-bold text-lg shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98">
                            View All on GitHub →
                        </button>
                    </NoiseBackground>
                </a>
            </div>
        </div>
    );
}
