import { Timeline } from "./timeline";

export default function WorkExperience() {
    const data = [
        {
            title: "May 2025 – Present",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        National Science Foundation (NAIRR) AI Gym Buddy | Student Researcher
                    </h3>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-300 text-base">
                        <li>
                            Developing real-time perception pipelines with sub-50ms inference at 30+ FPS.
                        </li>
                        <li>
                            Streamlining large-scale video dataset management through automated experiment tracking with MLflow.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "August 2024 – May 2025",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Human-Computer Interaction Lab, NKU | Student Researcher
                    </h3>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-300 text-base">
                        <li>
                            Spearheading automated feature extraction for 10,000+ records, which reduced research turnaround by 60%.
                        </li>
                        <li>
                            Co-authored and presented peer-reviewed research at the MIPRO International Conference.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "January 2024 – December 2024",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Computer Vision & Autonomy Safety Systems (AutoEye) | Student Researcher
                    </h3>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-300 text-base">
                        <li>
                            Built distributed pipelines using PySpark to process autonomous vehicle logs at 30 FPS.
                        </li>
                        <li>
                            Implemented real-time monitoring for accuracy drift, cutting debugging time by 40%.
                        </li>
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
