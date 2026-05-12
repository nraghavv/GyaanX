import React from "react";
import { Zap, Moon, Home, Flame, BookOpen, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Last Night", path: "/last-night", icon: Flame, color: "text-orange-500" },
    { name: "Rapid Revision", path: "/rapid-revision", icon: Zap, color: "text-yellow-400" },
    { name: "MCQ Mode", path: "/mcq", icon: BookOpen },
    { name: "Templates", path: "/templates", icon: FileText },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-lg md:top-0 md:bottom-auto">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-16">
        <Link to="/" className="hidden items-center gap-2 md:flex">
          <Moon className="h-6 w-6 text-indigo-500" />
          <span className="text-xl font-bold tracking-tight text-white">PPS<span className="text-indigo-500">LastNight</span></span>
        </Link>

        <div className="flex w-full items-center justify-around gap-2 md:w-auto md:justify-end">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg px-3 py-1 transition-all md:flex-row md:px-4 md:py-2",
                location.pathname === item.path
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <item.icon className={cn("h-5 w-5", item.color)} />
              <span className="text-[10px] font-medium md:text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
