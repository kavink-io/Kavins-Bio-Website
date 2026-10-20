import React, { useState, useEffect } from 'react';
import {
  Play,
  RotateCcw,
  Pause,
  Truck,
  CheckCircle2,
  Navigation,
  Clock,
  Sparkles,
  Radio,
  Heart,
  MessageSquare,
} from 'lucide-react';

/* -------------------------------------------------------------
   1. SmartBinX Interactive Simulation Component
------------------------------------------------------------- */
export const SmartBinSimulator: React.FC = () => {
  interface Bin {
    id: string;
    location: string;
    fill: number;
    status: 'Normal' | 'Warning' | 'Critical';
    isOptimalStop?: boolean;
  }

  const [bins, setBins] = useState<Bin[]>([
    { id: 'BIN-101', location: 'Campus Central Plaza', fill: 92, status: 'Critical' },
    { id: 'BIN-102', location: 'IT Dept Corridor', fill: 34, status: 'Normal' },
    { id: 'BIN-103', location: 'Cafeteria Wing A', fill: 87, status: 'Critical' },
    { id: 'BIN-104', location: 'Library Garden', fill: 18, status: 'Normal' },
    { id: 'BIN-105', location: 'Sports Complex', fill: 79, status: 'Critical' },
  ]);

  const [isOptimized, setIsOptimized] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);

  const runOptimization = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setBins((prev) =>
        prev.map((b) => ({
          ...b,
          isOptimalStop: b.fill >= 75,
        }))
      );
      setIsOptimized(true);
      setIsSimulating(false);
    }, 600);
  };

  const randomizeTelemetry = () => {
    setBins((prev) =>
      prev.map((b) => {
        const fill = Math.floor(Math.random() * 85) + 15;
        return {
          ...b,
          fill,
          status: fill >= 80 ? 'Critical' : fill >= 55 ? 'Warning' : 'Normal',
          isOptimalStop: false,
        };
      })
    );
    setIsOptimized(false);
  };

  return (
    <div className="bg-[#0b0d14] rounded-xl border border-white/10 p-4 sm:p-5 space-y-4">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h4 className="text-sm font-bold text-white">SmartBinX Telemetry & Route Simulation</h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={randomizeTelemetry}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono border border-white/10 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Generate New Telemetry</span>
          </button>
          <button
            onClick={runOptimization}
            disabled={isSimulating}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/30 transition-all disabled:opacity-50"
          >
            <Truck className="w-3.5 h-3.5" />
            <span>{isSimulating ? 'Optimizing...' : 'Run Route Optimizer'}</span>
          </button>
        </div>
      </div>

      {/* Simulated Bins Visual */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {bins.map((bin) => {
          const isCritical = bin.fill >= 80;
          const isWarning = bin.fill >= 55 && bin.fill < 80;

          return (
            <div
              key={bin.id}
              className={`p-3 rounded-lg border transition-all ${
                bin.isOptimalStop
                  ? 'bg-emerald-500/10 border-emerald-500 shadow-md shadow-emerald-500/10'
                  : 'bg-white/[0.03] border-white/5'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span>{bin.id}</span>
                {bin.isOptimalStop && (
                  <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Pick
                  </span>
                )}
              </div>

              {/* Fill Gauge */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 text-[10px] font-mono truncate mr-1">
                    {bin.location}
                  </span>
                  <span
                    className={`font-mono font-bold text-[11px] ${
                      isCritical ? 'text-rose-400' : isWarning ? 'text-amber-400' : 'text-emerald-400'
                    }`}
                  >
                    {bin.fill}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isCritical
                        ? 'bg-rose-500'
                        : isWarning
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}
                    style={{ width: `${bin.fill}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Optimization Results */}
      {isOptimized && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-300">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>
              <strong>Algorithmic Route Optimized:</strong> 3 overflow bins prioritized. Non-urgent bins bypassed.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-300">
            <span>Route Distance: <strong>-38% km</strong></span>
            <span>Est. Fuel Saved: <strong>~34%</strong></span>
          </div>
        </div>
      )}

      <p className="text-[11px] font-mono text-slate-500">
        * Software simulation demonstration: Emulates synthetic ultrasonic fill sensors and Dijkstra/TSP dynamic route sequencing.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------
   2. AmbuClear Interactive Corridor Simulation Component
------------------------------------------------------------- */
export const AmbuClearSimulator: React.FC = () => {
  const [priorityMode, setPriorityMode] = useState(false);
  const [eta, setEta] = useState(14);
  const progress = 25;

  useEffect(() => {
    if (priorityMode) {
      setEta(6);
    } else {
      setEta(14);
    }
  }, [priorityMode]);

  return (
    <div className="bg-[#0b0d14] rounded-xl border border-white/10 p-4 sm:p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <h4 className="text-sm font-bold text-white">AmbuClear Emergency Green Corridor Simulator</h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPriorityMode(!priorityMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              priorityMode
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'bg-white/10 text-slate-300 hover:text-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{priorityMode ? 'Corridor Active: GREEN WAVE' : 'Activate Priority Corridor'}</span>
          </button>
        </div>
      </div>

      {/* Highway / Junctions Visualization */}
      <div className="space-y-4">
        {/* Status readout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-2.5 rounded bg-white/[0.03] border border-white/5">
            <span className="text-[10px] font-mono text-slate-400">AMBULANCE STATUS</span>
            <div className="text-xs font-bold text-cyan-400 mt-0.5">Emergency Transit (Code Red)</div>
          </div>
          <div className="p-2.5 rounded bg-white/[0.03] border border-white/5">
            <span className="text-[10px] font-mono text-slate-400">ESTIMATED TIME TO HOSPITAL</span>
            <div className="text-xs font-bold text-white mt-0.5 font-mono">
              {eta} mins {priorityMode && <span className="text-emerald-400 text-[10px]">(-57% delay)</span>}
            </div>
          </div>
          <div className="p-2.5 rounded bg-white/[0.03] border border-white/5">
            <span className="text-[10px] font-mono text-slate-400">TRAFFIC SIGNAL STATE</span>
            <div className="text-xs font-bold mt-0.5">
              {priorityMode ? (
                <span className="text-emerald-400 font-mono">OVERRIDE: ALL SIGNALS GREEN</span>
              ) : (
                <span className="text-amber-400 font-mono">STANDARD CYCLE (Delays Present)</span>
              )}
            </div>
          </div>
        </div>

        {/* Junction Road Simulation */}
        <div className="relative p-4 rounded-xl bg-[#07080e] border border-white/5 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Incident Location</span>
            <span className="text-emerald-400 font-bold">General Hospital Trauma Care</span>
          </div>

          {/* Road Strip */}
          <div className="relative h-10 rounded-lg bg-[#141724] border border-white/10 flex items-center px-4 overflow-hidden">
            {/* Road divider dashed line */}
            <div className="absolute inset-x-0 h-0.5 border-t border-dashed border-white/20 top-1/2 -translate-y-1/2" />

            {/* Junction 1 */}
            <div className="absolute left-[25%] -translate-x-1/2 flex flex-col items-center">
              <span className={`w-3 h-3 rounded-full ${priorityMode ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
              <span className="text-[9px] font-mono text-slate-400 mt-1">Junction 1</span>
            </div>

            {/* Junction 2 */}
            <div className="absolute left-[55%] -translate-x-1/2 flex flex-col items-center">
              <span className={`w-3 h-3 rounded-full ${priorityMode ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-[9px] font-mono text-slate-400 mt-1">Junction 2</span>
            </div>

            {/* Junction 3 */}
            <div className="absolute left-[85%] -translate-x-1/2 flex flex-col items-center">
              <span className={`w-3 h-3 rounded-full ${priorityMode ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-400'}`} />
              <span className="text-[9px] font-mono text-slate-400 mt-1">Junction 3</span>
            </div>

            {/* Simulated Ambulance Vehicle */}
            <div
              className="absolute transition-all duration-700 flex items-center gap-1 bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 px-2 py-0.5 rounded text-[10px] font-mono z-10"
              style={{ left: `${priorityMode ? 75 : progress}%` }}
            >
              <Navigation className="w-3 h-3 text-cyan-400 rotate-90" />
              <span>Ambulance #108</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[11px] font-mono text-slate-500">
        * Concept & algorithmic simulation: Illustrates pre-emptive traffic signal clearance and corridor tracking to protect critical emergency response times.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------
   3. MindLink Interactive Pomodoro & Study Room Component
------------------------------------------------------------- */
export const MindLinkSimulator: React.FC = () => {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [roomType, setRoomType] = useState<'Deep Work' | 'DSA Grind' | 'AI & ML'>('Deep Work');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(25 * 60);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#0b0d14] rounded-xl border border-white/10 p-4 sm:p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
          <h4 className="text-sm font-bold text-white">MindLink Interactive Study Pod</h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-violet-300 font-mono">
          <Clock className="w-3.5 h-3.5" />
          <span>Pomodoro Productivity Engine</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Pomodoro Timer widget */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center space-y-3">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            Focus Session ({roomType})
          </span>
          <div className="text-4xl font-extrabold font-mono text-white tracking-widest bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
            {formatTime(seconds)}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTimer}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-md shadow-violet-600/30 transition-all"
            >
              {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isActive ? 'Pause' : 'Start Focus'}</span>
            </button>
            <button
              onClick={resetTimer}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs"
              title="Reset Timer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Anonymous Virtual Rooms */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-slate-400">Anonymous Study Rooms:</span>
          {[
            { name: 'Deep Work Pod', users: 14, topic: 'Algorithm Practice' },
            { name: 'DSA Grind Room', users: 9, topic: 'LeetCode & Trees' },
            { name: 'AI & ML Reading Group', users: 6, topic: 'Paper Summarization' },
          ].map((room) => (
            <div
              key={room.name}
              onClick={() => setRoomType(room.name.split(' ')[0] as any)}
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-violet-500/30 transition-all cursor-pointer flex items-center justify-between text-xs"
            >
              <div>
                <div className="font-semibold text-slate-200">{room.name}</div>
                <div className="text-[10px] text-slate-400 font-mono">{room.topic}</div>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>{room.users} online</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[11px] font-mono text-slate-500">
        * Interactive prototype: Demonstrates focus timer algorithms, anonymous room presence, and student productivity features.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------
   4. AR Restaurant Menu 3D Visualizer Simulation Component
------------------------------------------------------------- */
export const ARRestaurantSimulator: React.FC = () => {
  const [rotation, setRotation] = useState(45);
  const [selectedDish, setSelectedDish] = useState<'Truffle Burger' | 'Saffron Risotto' | 'Berry Tart'>('Truffle Burger');

  return (
    <div className="bg-[#0b0d14] rounded-xl border border-white/10 p-4 sm:p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <h4 className="text-sm font-bold text-white">AR Restaurant Menu Interactive 3D Model Inspection</h4>
        </div>
        <span className="text-xs text-amber-300 font-mono">Unity & Vuforia Concept</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* 3D Model Mockup Canvas */}
        <div className="sm:col-span-7 h-52 rounded-xl bg-gradient-to-b from-[#10121d] to-[#07080d] border border-white/10 flex flex-col items-center justify-center p-4 relative overflow-hidden">
          {/* Spatial Grid Floor */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          {/* Simulated 3D rotating object badge */}
          <div
            className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 shadow-2xl shadow-amber-500/30 flex flex-col items-center justify-center text-white font-bold p-3 text-center border-2 border-white/20 transition-transform duration-200"
            style={{ transform: `rotate(${rotation}deg) scale(1.05)` }}
          >
            <Sparkles className="w-6 h-6 mb-1 text-white animate-spin" />
            <span className="text-[10px] font-mono uppercase tracking-tighter">3D Asset</span>
          </div>

          {/* Interactive Rotation Slider */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
            <span className="text-[10px] font-mono text-slate-300">Rotate 3D:</span>
            <input
              type="range"
              min="0"
              max="360"
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <span className="text-[10px] font-mono text-amber-300">{rotation}&deg;</span>
          </div>
        </div>

        {/* Dish Info Card */}
        <div className="sm:col-span-5 space-y-3">
          <div className="flex gap-1.5">
            {(['Truffle Burger', 'Saffron Risotto', 'Berry Tart'] as const).map((dish) => (
              <button
                key={dish}
                onClick={() => setSelectedDish(dish)}
                className={`px-2 py-1 rounded text-[10px] font-mono transition-all ${
                  selectedDish === dish
                    ? 'bg-amber-500 text-black font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {dish.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex justify-between items-baseline">
              <h5 className="text-sm font-bold text-white">{selectedDish}</h5>
              <span className="text-xs font-mono font-bold text-amber-400">\$14.50</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Interactive 3D model with realistic texturing, portion sizing, and spatial AR anchor placement on dining tables.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 pt-1">
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">Spiciness: Low</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">480 kcal</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[11px] font-mono text-slate-500">
        * Interactive concept: Models Unity C# 3D inspection and Vuforia augmented reality target visualization.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------
   5. OneHood Community Board Simulation Component
------------------------------------------------------------- */
export const OneHoodSimulator: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState('Campus Zone A');
  const [likes, setLikes] = useState<Record<number, number>>({ 1: 12, 2: 7 });

  const handleLike = (id: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const samplePosts = [
    {
      id: 1,
      author: 'Hostel Resident #402',
      time: '15 mins ago',
      title: 'Study Group for DSA Exam tomorrow evening',
      content: 'Meeting at the Central Library 3rd floor discussion cubicle at 6 PM. Bringing past question papers!',
      tag: 'Study Group',
      zone: 'Campus Zone A',
    },
    {
      id: 2,
      author: 'Tech Club Secretary',
      time: '1 hour ago',
      title: 'Found: Blue USB Drive at Lab 4',
      content: 'Handed it over to the lab technician. Please verify the serial tag to claim.',
      tag: 'Lost & Found',
      zone: 'Tech Zone B',
    },
  ];

  return (
    <div className="bg-[#0b0d14] rounded-xl border border-white/10 p-4 sm:p-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <h4 className="text-sm font-bold text-white">OneHood Hyperlocal Community Board</h4>
        </div>
        <div className="flex items-center gap-2">
          {['Campus Zone A', 'Tech Zone B'].map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                selectedZone === zone
                  ? 'bg-blue-500 text-white font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {samplePosts
          .filter((p) => p.zone === selectedZone)
          .map((post) => (
          <div key={post.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">{post.author}</span>
              <span className="text-[10px] font-mono text-slate-400">{post.time}</span>
            </div>
            <h5 className="text-sm font-bold text-white">{post.title}</h5>
            <p className="text-xs text-slate-300">{post.content}</p>
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                #{post.tag}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>{likes[post.id]}</span>
                </button>
                <div className="flex items-center gap-1 text-slate-400">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Reply</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] font-mono text-slate-500">
        * Hyperlocal micro-messaging feed concept emphasizing zone privacy and community engagement.
      </p>
    </div>
  );
};
