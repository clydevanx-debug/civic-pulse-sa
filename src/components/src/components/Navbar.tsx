import React from "react";
import { User, Shield, Building2 } from "lucide-react";

interface NavbarProps {
  activeRole: "citizen" | "control_room" | "industrial";
  onRoleChange: (role: "citizen" | "control_room" | "industrial") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRole, onRoleChange }) => {
  return (
    <header className="w-full bg-slate-950 border-b border-slate-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg text-white font-bold text-xl">
          CP
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-wide">CivicPulse SA</h1>
          <p className="text-xs text-slate-400">Verified Identity & Municipal Services Network</p>
        </div>
      </div>

      {/* Role Toggle Controls */}
      <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
        <button
          onClick={() => onRoleChange("citizen")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeRole === "citizen"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <User className="w-4 h-4" />
          Citizen
        </button>

        <button
          onClick={() => onRoleChange("control_room")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeRole === "control_room"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Shield className="w-4 h-4" />
          Control Room
        </button>

        <button
          onClick={() => onRoleChange("industrial")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeRole === "industrial"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Building2 className="w-4 h-4" />
          Industrial Property View
        </button>
      </div>
    </header>
  );
};

export default Navbar;
