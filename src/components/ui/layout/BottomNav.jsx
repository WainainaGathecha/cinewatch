import { NavLink } from "react-router-dom";
import { Clapperboard, Search, Bookmark, User  } from "lucide-react";

const tabs = [
    {to: "/", label: "Home", icon: Clapperboard},
    {to: "/search", label: "Search", icon: Search},
    // {to: "/my-list", label: "My List", icon: Bookmark},
    // {to: "/profile", label: "Profile", icon: User},
];

export default function BottomNavBar() {
    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex justify-around items-center px-4 py-2">
            {tabs.map(({ to, label, icon: Icon }) => (
                <NavLink 
                    key={to}
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) => 
                        `flex flex-col items-center justify-center gap-1 transition-all duration-200 active:scale-90 ${isActive ? "text-primary" : "text-on-surface-variant"
                        }`
                    } 
                >
                <Icon size={22} />
                <span className="text-xs">{label}</span>
                </NavLink>
            ))}
        </nav>
    );
}