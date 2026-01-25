

export default function Footer() {
    return (
        <footer className="w-full py-10 bg-black text-neutral-400 flex flex-col items-center justify-center gap-4 border-t border-neutral-900">
            <div className="text-center text-sm md:text-base">
                <p>&copy; 2026 Aaditya Khanal. All rights reserved.</p>
                <p className="text-neutral-600 mt-1 text-xs md:text-sm">
                    Built with React, Vite, Tailwind & Framer Motion
                </p>
            </div>
        </footer>
    );
}
