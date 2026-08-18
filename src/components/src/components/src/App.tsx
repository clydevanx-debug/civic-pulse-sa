import React, { useState } from "react";
import Navbar from "./components/Navbar";
import IndustrialPropertyView from "./components/IndustrialPropertyView";

export function App() {
  const [activeRole, setActiveRole] = useState<"citizen" | "control_room" | "industrial">("industrial");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Navigation Header with 3-Way Role Toggle */}
      <Navbar activeRole={activeRole} onRoleChange={setActiveRole} />

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
        {activeRole === "industrial" && <IndustrialPropertyView />}

        {activeRole === "citizen" && (
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl text-center space-y-2">
            <h2 className="text-xl font-bold text-white">Citizen Portal</h2>
            <p className="text-slate-400 text-sm">FICA Verification, Utilities, and Incident Reporting.</p>
          </div>
        )}

        {activeRole === "control_room" && (
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl text-center space-y-2">
            <h2 className="text-xl font-bold text-white">Control Room Dashboard</h2>
            <p className="text-slate-400 text-sm">Live Dispatch Queue and Responder Map Logs.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
