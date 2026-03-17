import { Timeline } from "./timeline";

export default function WorkExperience() {
    const data = [
        {
            title: "May 2025 – Present",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                        AI Gym Buddy — Student Researcher
                    </h3>
                    <p className="text-indigo-300 text-sm mb-3">National Science Foundation (NSF / NAIRR) · Northern Kentucky University</p>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-300 text-base">
                        <li>
                            Built real-time perception pipelines achieving sub-50ms inference at 30+ FPS, enabling live feedback in production-style systems.
                        </li>
                        <li>
                            Automated experiment tracking and metadata management using MLflow for large-scale video datasets.
                        </li>
                        <li>
                            Authored and submitted an IROS 2026 paper on Vision-Language-Action (VLA) models with uncertainty estimation and human-in-the-loop verification.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "August 2024 – Present",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                        AutoEye — Student Researcher
                    </h3>
                    <p className="text-indigo-300 text-sm mb-3">Computer Vision & Autonomy Safety Systems · Northern Kentucky University</p>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-300 text-base">
                        <li>
                            Developed distributed pipelines processing autonomous vehicle logs at 30 FPS using PySpark.
                        </li>
                        <li>
                            Reduced debugging time by 40% through real-time monitoring of accuracy drift and distribution shifts.
                        </li>
                        <li>
                            Co-authored two peer-reviewed papers accepted at AIBC 2025 on human-in-the-loop continuous learning for drowsiness detection and emotion classification.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "January 2024 – July 2024",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                        Human-Computer Interaction Lab — Student Researcher
                    </h3>
                    <p className="text-indigo-300 text-sm mb-3">Northern Kentucky University</p>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-300 text-base">
                        <li>
                            Reduced research turnaround time by 60% through automated feature extraction for 10,000+ auction records.
                        </li>
                        <li>
                            Co-authored a peer-reviewed paper on overbidding dynamics presented at MIPRO International Conference (Opatija, Croatia, 2024).
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Summer 2024",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                        Data Science Extern
                    </h3>
                    <p className="text-indigo-300 text-sm mb-3">Beats by Dre</p>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-300 text-base">
                        <li>
                            Performed large-scale sentiment analysis on customer feedback using Python and Google Gemini 1.5 Pro.
                        </li>
                        <li>
                            Delivered actionable insights on product perception trends to cross-functional data teams.
                        </li>
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full" id="experience">
            <Timeline data={data} />
        </div>
    );
}
