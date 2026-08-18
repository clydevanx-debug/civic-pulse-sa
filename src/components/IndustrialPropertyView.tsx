import React, { useState } from "react";
import { 
  Wrench, 
  Truck, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Clock, 
  FileText,
  Building2,
  HardHat,
  Camera
} from "lucide-react";

export const IndustrialPropertyView = () => {
  const [activeTab, setActiveTab] = useState<"faults" | "anpr" | "sheq">("faults");

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 shadow-2xl">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-400" />
            <h1 className="text-2xl font-bold tracking-tight text-white">Industrial Property Portal</h1>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Tenant Maintenance Faults, Loading Bay ANPR & Yard Access, Workplace SHEQ Reporting
          </p>
        </div>
        <div className="bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-slate-300">Park Manager On Duty</span>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-950 p-1.5 rounded-lg border border-slate-800">
        <button
          onClick={() => setActiveTab("faults")}
          className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === "faults"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          <Wrench className="w-4 h-4" />
          Tenant Maintenance Faults
        </button>
        <button
          onClick={() => setActiveTab("anpr")}
          className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === "anpr"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          <Truck className="w-4 h-4" />
          Loading Bay ANPR & Access
        </button>
        <button
          onClick={() => setActiveTab("sheq")}
          className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === "sheq"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          Workplace SHEQ Hazards
        </button>
      </div>

      {/* Section 1: Tenant Maintenance Faults */}
      {activeTab === "faults" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" /> Log Maintenance Issue
              </h3>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Unit / Unit No.</label>
                <input 
                  type="text" 
                  placeholder="e.g. Unit 4B - Warehouse A" 
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Fault Category</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500">
                  <option>Roller Shutter Door Mechanical Failure</option>
                  <option>Dock Leveller Hydraulics</option>
                  <option>High-Bay Lighting / Electrical Substation</option>
                  <option>Plumbing / Trade Effluent Drainage</option>
                  <option>Perimeter Fence / Automated Gate Fault</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Description & Priority</label>
                <textarea 
                  rows={3} 
                  placeholder="Describe operational impact on logistics..." 
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded text-sm transition">
                Submit Maintenance Ticket
              </button>
            </div>

            <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" /> Active Maintenance Requests
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase">HIGH PRIORITY</span>
                    <p className="text-sm font-medium text-white">Roller Shutter Door #2 Jammed</p>
                    <p className="text-xs text-slate-400">Unit 12 • Assigned to Facilities Engineering</p>
                  </div>
                  <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">In Progress</span>
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase">ROUTINE</span>
                    <p className="text-sm font-medium text-white">High-Bay LED Fitting Replacement</p>
                    <p className="text-xs text-slate-400">Unit 3 • Scheduled Maintenance</p>
                  </div>
                  <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section 2: Loading Bay ANPR & Yard Access */}
      {activeTab === "anpr" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-center">
              <p className="text-xs text-slate-400">Vehicles in Yard</p>
              <p className="text-3xl font-bold text-emerald-400 mt-1">18</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-center">
              <p className="text-xs text-slate-400">Loading Bays Occupied</p>
              <p className="text-3xl font-bold text-blue-400 mt-1">6 / 8</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-center">
              <p className="text-xs text-slate-400">ANPR Flagged Vehicles</p>
              <p className="text-3xl font-bold text-rose-400 mt-1">1</p>
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-400" /> Live ANPR Gate Log & Vehicle Verification
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-900 text-xs text-slate-400 uppercase">
                  <tr>
                    <th className="p-3">Time</th>
                    <th className="p-3">Registration Plate</th>
                    <th className="p-3">Vehicle Type</th>
                    <th className="p-3">Dest. Bay</th>
                    <th className="p-3">Driver Verification</th>
                    <th className="p-3">Gate Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="p-3 text-xs">10:14 AM</td>
                    <td className="p-3 font-mono font-bold text-white">ND 849-201</td>
                    <td className="p-3">Heavy Freight (Interlink)</td>
                    <td className="p-3">Bay 03</td>
                    <td className="p-3"><span className="text-emerald-400 font-medium">Verified Driver ID</span></td>
                    <td className="p-3"><span className="px-2 py-1 bg-emerald-950 text-emerald-300 rounded text-xs">Access Granted</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 text-xs">09:58 AM</td>
                    <td className="p-3 font-mono font-bold text-white">KZN 431-GP</td>
                    <td className="p-3">Rigid 8-Tonner</td>
                    <td className="p-3">Bay 01</td>
                    <td className="p-3"><span className="text-amber-400 font-medium">Pre-Booking Checked</span></td>
                    <td className="p-3"><span className="px-2 py-1 bg-emerald-950 text-emerald-300 rounded text-xs">Access Granted</span></td>
                  </tr>
                  <tr className="bg-rose-950/20">
                    <td className="p-3 text-xs">09:32 AM</td>
                    <td className="p-3 font-mono font-bold text-rose-300">NP 112-998</td>
                    <td className="p-3">Unscheduled Light Commercial</td>
                    <td className="p-3">N/A</td>
                    <td className="p-3"><span className="text-rose-400 font-medium">Unrecognized Plate</span></td>
                    <td className="p-3"><span className="px-2 py-1 bg-rose-900 text-rose-200 rounded text-xs">Held at Security Gate</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Section 3: Workplace SHEQ Hazard Reporting */}
      {activeTab === "sheq" && (
        <div className="space-y-6">
          <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <HardHat className="w-5 h-5 text-amber-400" /> Workplace Safety, Health, Environment & Quality (SHEQ) Incident Log
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Hazard Classification</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500">
                  <option>Fire Hazard / Obstructed Escape Route</option>
                  <option>Chemical / Fuel Spill in Yard</option>
                  <option>Structural Overhead Crane / Gantry Risk</option>
                  <option>Electrical Distribution Board Isolation</option>
                  <option>Forklift Traffic Hazard / Speeding</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Location within Park</label>
                <input 
                  type="text" 
                  placeholder="e.g. Loading Dock B / Transformer Room" 
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-slate-400 block mb-1">Risk Description & Corrective Action Required</label>
                <textarea 
                  rows={3} 
                  placeholder="Describe immediate hazard, root cause, and containment required..." 
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button className="bg-amber-600 hover:bg-amber-500 text-white font-medium py-2 px-6 rounded text-sm transition flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Raise Immediate SHEQ Flash Alert
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustrialPropertyView;
