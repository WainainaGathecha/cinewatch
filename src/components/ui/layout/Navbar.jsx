import {Menu, CircleUserRound } from  "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
            <div className="flex justify-between items-center px-4 h-16 w-full max-w-7xl mx-auto">
                <button className="text-primary hover:opacity-80 active:scale-95 transition-all duration-200">
                    <Menu size={24} />
                </button>

                <h1 className="font-display text-2xl tracking-tighter text-primary">
                    Cinewatch
                </h1>

                <button className="text-primary hover:opacity-80 active:scale-95 transition-all duration-200">
                    <CircleUserRound size={24} />
                </button>

            </div>
        </header>
    )
}