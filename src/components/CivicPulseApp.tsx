import React, { useState } from 'react';
import { Shield, AlertTriangle, Radio, Camera, MapPin, Send, CheckCircle2, Users, Bell, FileText, Truck, MessageSquare, ArrowUpRight } from 'lucide-react';

interface IncidentReport {
  id: string;
  category: 'Fire' | 'Infrastructure / Robot' | 'Crime / BOLO' | 'Vehicle Accident (MVA)';
  description: string;
  location: string;
  timestamp: string;
  status: 'Pending Verification' | 'Dispatched' | 'Resolved' | 'Escalated to Municipality';
  reporter: string;
  reportsCount: number;
}

interface WatchMessage {
  id: string;
  author: string;
  role: 'Patrol Lead' | 'Resident' | 'Watch Admin';
  message: string;
  timestamp: string;
  area: string;
}

export const CivicPulseApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'report' | 'stream' | 'neighborhood' | 'bolos'>('report');
  
  // Incident Form State
  const [category, setCategory] = useState<'Fire' | 'Infrastructure / Robot' | 'Crime / BOLO' | 'Vehicle Accident (MVA)'>('Fire');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('Newlands East, Main Road Intersection (GPS Auto-Tagged)');
  const [submitted, setSubmitted] = useState(false);

  // Neighbourhood Chat State
  const [chatMessages, setChatMessages] = useState<WatchMessage[]>([
    {
      id: 'MSG-1',
      author: 'Sipho M.',
      role: 'Patrol Lead',
      message: 'Patrol Unit Alpha patrolling Section 3. All clear along Phoenix Highway, but note streetlights out near the sports ground.',
      timestamp: '10 mins ago',
      area: 'Newlands East - Section 3'
    },
    {
      id: 'MSG-2',
      author: 'Clyde Van X',
      role: 'Watch Admin',
      message: 'Received report of suspicious vehicle parked near school entrance. Patrollers please keep eyes open.',
      timestamp: '25 mins ago',
      area: 'Newlands East - Main'
    }
  ]);
  const [newMsg, setNewMsg] = useState('');

  // Live Incident Stream State
  const [incidents, setIncidents] = useState<IncidentReport[]>([
    {
      id: 'INC-8821',
      category: 'Vehicle Accident (MVA)',
      description: 'Two vehicles collided, heavy obstruction on roadway, 2 patients requiring medical assistance.',
      location: 'N2 Highway Northbound, near Effingham off-ramp',
      timestamp: '5 mins ago',
      status: 'Dispatched',
      reporter: 'Verified Resident',
      reportsCount: 3
    },
    {
      id: 'INC-8822',
      category: 'Infrastructure / Robot',
      description: 'Traffic lights completely offline causing severe bottleneck.',
      location: 'Alignment Road & South Coast Junction',
      timestamp: '14 mins ago',
      status: 'Pending Verification',
      reporter: 'Verified Patroller',
      reportsCount: 5
    }
  ]);

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) return;

    const newIncident: IncidentReport = {
      id: `INC-${Math.floor(1000 + Math.random() * 9000)}`,
      category,
      description,
      location,
      timestamp: 'Just now',
      status: 'Pending Verification',
      reporter: 'Verified Profile',
      reportsCount: 1
    };

    setIncidents([newIncident, ...incidents]);
    setSubmitted(true);
    setDescription('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;

    const messageObj: WatchMessage = {
      id: `MSG-${Date.now()}`,
      author: 'Clyde Van X',
      role: 'Watch Admin',
      message: newMsg,
      timestamp: 'Just now',
      area: 'Newlands East'
    };

    setChatMessages([messageObj, ...chatMessages]);
    setNewMsg('');
  };

  const handleEscalateIncident = (id: string) => {
    setIncidents(incidents.map(inc => {
      if (inc.id === id) {
        return { ...inc, status: 'Escalated to Municipality' };
      }
      return inc;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Header Navigation */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500/10 p-2 rounded-xl border border-amber-500/20">
            <Shield className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide flex items-center gap-2">
              CivicPulse SA <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30">Control Grid</span>
            </h1>
            <p className="text-xs text-slate-400">Secure Community Reporting & Municipal Dispatch Network</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-sm overflow-x-auto max-w-full">
          <button 
            onClick={() => setActiveTab('report')}
            className={`px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${activeTab === 'report' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Report Incident
          </button>
          <button 
            onClick={() => setActiveTab('stream')}
            className={`px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${activeTab === 'stream' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Live Stream & Dispatch
          </button>
          <button 
            onClick={() => setActiveTab('neighborhood')}
            className={`px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${activeTab === 'neighborhood' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Neighbourhood Watch
          </button>
          <button 
            onClick={() => setActiveTab('bolos')}
            className={`px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${activeTab === 'bolos' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Active BOLOs
          </button>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 p-6 max-w-6xl w-full mx-auto">
        
        {/* TAB 1: REPORT INCIDENT */}
        {activeTab === 'report' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Camera className="text-amber-500 w-5 h-5" /> Secure Incident Submission
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Submissions are cryptographically tied to your verified identity profile to ensure accuracy and eliminate hoax reports.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Incident Successfully Broadcasted & Logged</p>
                    <p className="text-xs text-emerald-400/80">Metadata (GPS & timestamp) attached. Local municipal/RTI control room notified.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmitReport} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Select Incident Category</label>
                  <select 
                    value={category}
                    onChange={(e: any) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-amber-500"
                  >
                    <option value="Fire">🔥 Fire Emergency</option>
                    <option value="Vehicle Accident (MVA)">🚗 Vehicle Accident (MVA)</option>
                    <option value="Infrastructure / Robot">🚥 Broken Traffic Light / Infrastructure</option>
                    <option value="Crime / BOLO">🚨 Suspicious Activity / Crime in Progress</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Location (Auto-Tagged Geolocation)</label>
                  <div className="flex items-center gap-2 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                    <input 
                      type="text" 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-transparent outline-none text-sm text-slate-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Description & Details</label>
                  <textarea 
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide details (e.g., number of vehicles involved, suspect description, or hazard scale)..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-slate-200 outline-none focus:border-amber-500 text-sm"
                    required
                  />
                </div>

                <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 text-center bg-slate-950/50 hover:border-amber-500/50 transition-all cursor-pointer">
                  <Camera className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-300">Tap to Capture Photo or Upload Evidence</p>
                  <p className="text-xs text-slate-500 mt-1">Automatic timestamp & cryptographic verification active</p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Broadcast & Escalate Report
                </button>
              </form>
            </div>

            {/* Sidebar Info Card */}
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" /> Identity Protection
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Your identity is secured via verified credentials. Hoax submissions trigger permanent account blacklisting to ensure control rooms only handle genuine emergencies.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-cyan-400" /> Auto-Cluster Threshold
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When 3 or more independent verified users report the same incident, the system automatically escalates it into a high-priority regional broadcast.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LIVE STREAM & DISPATCH */}
        {activeTab === 'stream' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Truck className="text-amber-500" /> Municipal & RTI Dispatch Stream
                </h2>
                <p className="text-slate-400 text-sm">Real-time tracking of active community and highway incidents.</p>
              </div>
              <span className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1.5 rounded-full border border-emerald-500/20 font-medium">
                <Radio className="w-3.5 h-3.5 animate-pulse" /> Live Feed Synced
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {incidents.map((inc) => (
                <div key={inc.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700">{inc.id}</span>
                      <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs px-2.5 py-0.5 rounded font-semibold">{inc.category}</span>
                      <span className="text-xs text-slate-500">• {inc.timestamp}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">{inc.description}</h3>
                    <p className="text-sm text-slate-400 flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-slate-500" /> {inc.location}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300">
                      Reports: <strong>{inc.reportsCount} Verified</strong>
                    </span>
                    <span className={`text-xs font-semibold px-3.5 py-1.5 rounded-full ${
                      inc.status === 'Dispatched' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                      inc.status === 'Escalated to Municipality' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {inc.status}
                    </span>
                    {inc.status === 'Pending Verification' && (
                      <button 
                        onClick={() => handleEscalateIncident(inc.id)}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all"
                      >
                        Escalate <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: NEIGHBOURHOOD WATCH */}
        {activeTab === 'neighborhood' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Users className="text-amber-500" /> Newlands East Neighbourhood Watch Hub
                </h2>
                <p className="text-slate-400 text-sm">Secure channel for authorized patrollers and community leads.</p>
              </div>
              <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs px-3 py-1.5 rounded-full font-medium">
                Admin Mode: Active
              </span>
            </div>

            {/* Chat Box Feed */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-200 text-sm">{msg.author}</span>
                        <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                          {msg.role}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">{msg.timestamp}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{msg.message}</p>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {msg.area}
                    </p>
                  </div>
                ))}
              </div>

              {/* Message Input Form */}
              <form onSubmit={handleSendChat} className="flex gap-3 pt-2 border-t border-slate-800">
                <input 
                  type="text"
                  value={newMsg}
                  onChange={(e) => setNewMsg(e.target.value)}
                  placeholder="Post update to watch group or log patrol observation..."
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-amber-500 text-sm"
                />
                <button 
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 text-sm shadow-lg"
                >
                  <Send className="w-4 h-4" /> Broadcast
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 4: ACTIVE BOLOS */}
        {activeTab === 'bolos' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
            <Bell className="w-12 h-12 text-red-500 mx-auto animate-bounce" />
            <h2 className="text-2xl font-bold">Geofenced BOLO Watchlist</h2>
            <p className="text-slate-400 max-w-lg mx-auto text-sm">
              Active lookouts for stolen vehicles and suspects. Alerts are radius-filtered to avoid notification fatigue while empowering local response teams.
            </p>
            <div className="pt-4">
              <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 px-6 py-2.5 rounded-xl font-medium text-sm transition-all">
                View Active Stolen Vehicle Alerts (0 Active in 3km)
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
