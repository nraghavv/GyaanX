import React from "react";
import { Mail, Phone, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/5 bg-zinc-950 px-4 py-12 pb-32 md:pb-12 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-col items-center justify-center gap-4 text-zinc-500">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">Built by <span className="text-white font-bold">N.Raghav</span> (1st yr)</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">8700445349</span>
          </div>
        </div>
        
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">
          Contact for any queries
        </p>
        
        <div className="mt-8 text-[10px] text-zinc-700 uppercase tracking-tighter">
          PPS Last Night Prep System &copy; 2026
        </div>
      </div>
    </footer>
  );
};

export default Footer;
