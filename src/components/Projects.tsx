import { WobbleCard } from "./wobble-card";
import { NoiseBackground } from "./noise-background";

export default function Projects() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-20 pb-72">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full">
                {/* Project 1: Multimodal RAG */}
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-pink-800 min-h-[500px] lg:min-h-[400px] xl:min-h-[300px]">
                    <div className="max-w-4xl">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Multimodal RAG Knowledge Platform <span className="text-pink-200">(Text, Image, Video)</span>
                        </h2>
                        <div className="mt-4 text-left  text-base/6 text-neutral-200">
                            <p className="mb-2"><span className="font-bold text-pink-100">Why:</span> Creating a unified interface that allows users to query heterogeneous data types (video, text, and images) simultaneously while maintaining secure access.</p>
                            <p className="mb-2"><span className="font-bold text-pink-100">How:</span> Designed vector-based retrieval pipelines integrating multimodal embeddings with serverless APIs. Implemented secure, role-based access control using JWT and Supabase Auth.</p>
                            <p className="mb-2"><span className="font-bold text-pink-100">Tech Stack:</span> Next.js, TypeScript, ReactBits, Supabase, AWS Lambda, Vercel.</p>
                            <p className="text-sm italic text-pink-100 mt-2">Impact: Delivered a production-ready application with full CI/CD automation for rapid releases.</p>
                        </div>
                        <div className="absolute bottom-4 right-4 z-20">
                            <NoiseBackground
                                containerClassName="w-fit p-2 rounded-full mx-auto"
                                gradientColors={[
                                    "rgb(255, 100, 150)",
                                    "rgb(100, 150, 255)",
                                    "rgb(255, 200, 100)",
                                ]}
                                noiseIntensity={0.2}
                                speed={0.05}
                            >
                                <button className="cursor-pointer rounded-full bg-black px-4 py-1.5 text-white font-bold text-xs shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95">
                                    View Project &rarr;
                                </button>
                            </NoiseBackground>
                        </div>
                    </div>
                </WobbleCard>

                {/* Project 2: Multi-Agent Researcher */}
                <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-900 min-h-[300px]">
                    <div className="h-full flex flex-col justify-between">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                            Multi-Agent Autonomous Researcher
                        </h2>
                        <div className="mt-4 text-left text-sm text-neutral-200">
                            <p className="mb-2"><span className="font-bold text-blue-200">Why:</span> Coordinating multiple LLM agents to autonomously plan, search, and critique technical topics.</p>
                            <p className="mb-2"><span className="font-bold text-blue-200">How:</span> Built orchestration interface in Next.js. Engineered task queues with Supabase/Firebase.</p>
                            <p className="mb-2 text-xs text-blue-100">Next.js, React, Supabase, Firebase, GCP Cloud Run.</p>
                        </div>
                        <div className="absolute bottom-4 right-4 z-20">
                            <NoiseBackground
                                containerClassName="w-fit p-2 rounded-full mx-auto"
                                gradientColors={[
                                    "rgb(255, 100, 150)",
                                    "rgb(100, 150, 255)",
                                    "rgb(255, 200, 100)",
                                ]}
                                noiseIntensity={0.2}
                                speed={0.05}
                            >
                                <button className="cursor-pointer rounded-full bg-black px-4 py-1.5 text-white font-bold text-xs shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95">
                                    View Project &rarr;
                                </button>
                            </NoiseBackground>
                        </div>
                    </div>
                </WobbleCard>

                {/* Project 3: Video-to-Action */}
                <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-purple-900 min-h-[300px]">
                    <div className="max-w-2xl">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Multimodal Video-to-Action Pipeline
                        </h2>
                        <div className="mt-4 text-left text-base/6 text-neutral-200">
                            <p className="mb-2"><span className="font-bold text-purple-200">Why:</span> Converting user-uploaded video into structured, actionable data.</p>
                            <p className="mb-2"><span className="font-bold text-purple-200">How:</span> React + Vite frontend with real-time status. Serverless backend APIs to extract events via AWS.</p>
                            <p className="mb-2"><span className="font-bold text-purple-200">Tech:</span> React, Vite, Firebase Auth, AWS (S3 & Lambda).</p>
                            <p className="text-sm italic text-purple-100 mt-2">Impact: Scalable media handler with asynchronous processing for low-latency results.</p>
                        </div>
                        <div className="absolute bottom-4 right-4 z-20">
                            <NoiseBackground
                                containerClassName="w-fit p-2 rounded-full mx-auto"
                                gradientColors={[
                                    "rgb(255, 100, 150)",
                                    "rgb(100, 150, 255)",
                                    "rgb(255, 200, 100)",
                                ]}
                                noiseIntensity={0.2}
                                speed={0.05}
                            >
                                <button className="cursor-pointer rounded-full bg-black px-4 py-1.5 text-white font-bold text-xs shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95">
                                    View Project &rarr;
                                </button>
                            </NoiseBackground>
                        </div>
                    </div>
                </WobbleCard>
            </div>
            <div className="flex justify-center mt-12 w-full">
                <NoiseBackground
                    containerClassName="w-fit p-2 rounded-full mx-auto"
                    gradientColors={[
                        "rgb(255, 100, 150)",
                        "rgb(100, 150, 255)",
                        "rgb(255, 200, 100)",
                    ]}
                    speed={0.05}
                >
                    <button className="h-full w-full cursor-pointer rounded-full bg-black px-8 py-3 text-white font-bold text-lg shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98">
                        View All Projects &rarr;
                    </button>
                </NoiseBackground>
            </div>
        </div>
    );
}
