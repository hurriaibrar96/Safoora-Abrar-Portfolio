import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Boxes,
  Eye,
  CheckCircle2,
  ShoppingCart,
  Plus,
  Minus,
  Sparkles,
  Smartphone,
  Scan,
  Navigation,
  MapPin,
  Compass,
  CheckSquare,
  Flame,
  RotateCw
} from 'lucide-react';

interface ProjectCardPreviewProps {
  projectId: string;
}

export const ProjectCardPreview: React.FC<ProjectCardPreviewProps> = ({ projectId }) => {
  // State for 3D Showcase
  const [wireframeMode, setWireframeMode] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  // State for FreshCart
  const [cartCount, setCartCount] = useState(2);
  const [isAdding, setIsAdding] = useState(false);

  // State for Campus Nav
  const [activeStep, setActiveStep] = useState(0);

  // State for Orbit Habit
  const [completedHabits, setCompletedHabits] = useState<number[]>([0, 1, 2]);

  // Rotate 3D model continuously
  useEffect(() => {
    if (projectId === '3d-model-showcase') {
      const interval = setInterval(() => {
        setRotationAngle((prev) => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [projectId]);

  // Cycle campus waypoints
  useEffect(() => {
    if (projectId === 'campus-navigation') {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 3);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [projectId]);

  const handleAddToCart = () => {
    setIsAdding(true);
    setCartCount((c) => c + 1);
    setTimeout(() => setIsAdding(false), 600);
  };

  const toggleHabit = (idx: number) => {
    setCompletedHabits((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // 1. 3D Model Showcase Preview
  if (projectId === '3d-model-showcase') {
    return (
      <div className="relative w-full h-44 sm:h-48 rounded-xl bg-gradient-to-br from-[#0c1836] via-[#102454] to-[#0a1329] border border-blue-500/30 overflow-hidden flex flex-col justify-between p-3 select-none">
        {/* Top HUD */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-950/70 border border-blue-400/30 text-[10px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>THREE.JS WEBGL RENDERER</span>
          </div>

          <button
            type="button"
            onClick={() => setWireframeMode(!wireframeMode)}
            className="px-2 py-0.5 rounded bg-blue-900/60 hover:bg-blue-800 border border-blue-400/40 text-[10px] font-mono text-blue-200 transition-colors flex items-center gap-1"
          >
            <RotateCw className="w-3 h-3 text-cyan-400" />
            <span>{wireframeMode ? 'Shaded' : 'Wireframe'}</span>
          </button>
        </div>

        {/* Center 3D Isometric Animated Visual */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0,transparent_70%)]" />

          {/* Rotating 3D Isometric Geometric Mesh */}
          <div
            className="relative w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-75"
            style={{
              transform: `perspective(600px) rotateX(55deg) rotateZ(${rotationAngle}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* 3D Cube Faces */}
            <div
              className={`absolute inset-0 border-2 ${
                wireframeMode ? 'border-cyan-400/80 bg-transparent' : 'border-blue-400 bg-blue-500/20'
              } rounded-lg shadow-lg shadow-cyan-500/30`}
              style={{ transform: 'translateZ(24px)' }}
            />
            <div
              className={`absolute inset-0 border-2 ${
                wireframeMode ? 'border-indigo-400/80 bg-transparent' : 'border-indigo-400 bg-indigo-500/20'
              } rounded-lg`}
              style={{ transform: 'translateZ(-24px)' }}
            />
            <div
              className="absolute inset-0 border border-dashed border-cyan-300/40 rounded-lg"
              style={{ transform: 'rotateY(90deg)' }}
            />
            <div
              className="absolute inset-0 border border-dashed border-cyan-300/40 rounded-lg"
              style={{ transform: 'rotateX(90deg)' }}
            />

            {/* Glowing vertices */}
            <span className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-md shadow-cyan-400"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-400"></span>
            <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-md shadow-indigo-400"></span>
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-md shadow-cyan-400"></span>
          </div>
        </div>

        {/* Bottom Telemetry HUD */}
        <div className="flex items-center justify-between text-[10px] font-mono text-blue-300/90 z-10 bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-500/30">
          <div className="flex items-center gap-3">
            <span>Rot: {rotationAngle}°</span>
            <span className="hidden sm:inline">Vertices: 1,420</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>60.0 FPS STABLE</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. FreshCart E-Commerce Animation Preview
  if (projectId === 'freshcart') {
    return (
      <div className="relative w-full h-44 sm:h-48 rounded-xl bg-gradient-to-br from-[#0a1a2f] via-[#0d2847] to-[#081526] border border-emerald-500/30 overflow-hidden flex flex-col justify-between p-3 select-none">
        {/* Top Header with live Cart indicator */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-400/30 text-[10px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>FULL-STACK STOREFRONT</span>
          </div>

          <motion.div
            animate={isAdding ? { scale: [1, 1.25, 1] } : {}}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500 text-stone-950 font-bold text-[11px] shadow-sm shadow-emerald-400/40"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Cart: {cartCount}</span>
          </motion.div>
        </div>

        {/* Center Interactive Product Card */}
        <div className="relative z-10 my-auto flex items-center justify-between bg-[#0e223d]/90 p-2.5 rounded-xl border border-emerald-400/30 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-inner">
              <span className="text-xl">🥑</span>
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Organic Hass Avocado</p>
              <p className="text-[10px] text-emerald-300 font-mono mt-0.5">$3.49 / item · In Stock</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-[11px] flex items-center gap-1 transition-all shadow-sm active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>

        {/* Bottom Status bar */}
        <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300/80 z-10 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
          <span>REST API: /api/checkout · 200 OK</span>
          <span className="text-white font-semibold">Subtotal: ${(cartCount * 3.49).toFixed(2)}</span>
        </div>
      </div>
    );
  }

  // 3. SuperiorXR Mobile HUD Preview
  if (projectId === 'superior-xr') {
    return (
      <div className="relative w-full h-44 sm:h-48 rounded-xl bg-gradient-to-br from-[#09152b] via-[#0d2248] to-[#071124] border border-cyan-500/30 overflow-hidden flex flex-col justify-between p-3 select-none">
        {/* Animated Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 h-16 w-full animate-scanline pointer-events-none" />

        {/* Top AR HUD */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-400/30 text-[10px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>XR SPATIAL VIEWFINDER</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 font-bold">6DoF TRACKING</span>
        </div>

        {/* Center Target Scanning Reticle */}
        <div className="relative my-auto flex flex-col items-center justify-center">
          <div className="relative w-24 h-24 border border-dashed border-cyan-400/40 rounded-xl flex items-center justify-center">
            {/* Corner Brackets */}
            <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></span>
            <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></span>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></span>

            {/* Pulsing crosshair */}
            <div className="w-8 h-8 rounded-full border border-cyan-300/80 flex items-center justify-center animate-ping"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-300 absolute"></div>
          </div>
          <span className="text-[10px] font-mono text-cyan-200 mt-1 font-bold">SPATIAL ANCHOR: LOCKED</span>
        </div>

        {/* Bottom Sensor Telemetry */}
        <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300/90 z-10 bg-cyan-950/70 px-2.5 py-1 rounded border border-cyan-500/20">
          <span>Depth: 1.48m</span>
          <span>Gyro: ±0.04°</span>
          <span className="text-emerald-400 font-bold">APK READY</span>
        </div>
      </div>
    );
  }

  // 4. Campus Navigation Map Preview
  if (projectId === 'campus-navigation') {
    const locations = [
      { name: 'Engineering Block', dist: '0m', active: activeStep === 0 },
      { name: 'Central Library', dist: '180m', active: activeStep === 1 },
      { name: 'AI Innovation Hub', dist: '320m', active: activeStep === 2 },
    ];

    return (
      <div className="relative w-full h-44 sm:h-48 rounded-xl bg-gradient-to-br from-[#0c1938] via-[#10275a] to-[#09132a] border border-amber-500/30 overflow-hidden flex flex-col justify-between p-3 select-none">
        {/* Top Header */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-950/70 border border-amber-400/30 text-[10px] font-mono text-amber-300">
            <Compass className="w-3 h-3 text-amber-400 animate-spin-slow" />
            <span>CAMPUS GEOSPATIAL MAP</span>
          </div>
          <span className="text-[10px] font-mono text-amber-300 font-bold">LIVE GPS ROUTE</span>
        </div>

        {/* Center Animated Path Grid */}
        <div className="relative my-auto px-2 py-1">
          <div className="flex items-center justify-between relative">
            {/* Connecting Route Line */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 -translate-y-1/2 bg-blue-900 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"
                animate={{
                  width: activeStep === 0 ? '20%' : activeStep === 1 ? '60%' : '100%',
                }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {locations.map((loc, idx) => (
              <div key={loc.name} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    loc.active
                      ? 'bg-amber-400 text-stone-950 shadow-md shadow-amber-400/50 scale-110 font-bold'
                      : idx < activeStep
                      ? 'bg-amber-600/80 text-white'
                      : 'bg-blue-950 text-blue-300 border border-blue-700'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-bold text-slate-200 mt-1 max-w-[70px] truncate text-center">
                  {loc.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Waypoint HUD */}
        <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/90 z-10 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-500/20">
          <span>Target: {locations[activeStep].name}</span>
          <span className="text-white font-bold">ETA: ~3 mins ({locations[activeStep].dist})</span>
        </div>
      </div>
    );
  }

  // 5. Orbit Habit Tracker Preview
  if (projectId === 'orbit-habit-tracker') {
    const habits = ['Morning Python Drill', 'Data Structures Practice', 'Web Architecture Review'];

    return (
      <div className="relative w-full h-44 sm:h-48 rounded-xl bg-gradient-to-br from-[#12193b] via-[#1a2356] to-[#0c122e] border border-rose-500/30 overflow-hidden flex flex-col justify-between p-3 select-none">
        {/* Top Header */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-950/70 border border-rose-400/30 text-[10px] font-mono text-rose-300">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
            <span>BEHAVIORAL ENGINE</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-stone-950 font-bold text-[10px] shadow-sm">
            <Flame className="w-3 h-3 text-stone-950" />
            <span>14-DAY STREAK</span>
          </div>
        </div>

        {/* Center Interactive Habit Checklist */}
        <div className="relative z-10 space-y-1.5 my-auto">
          {habits.map((habit, idx) => {
            const isDone = completedHabits.includes(idx);
            return (
              <button
                key={habit}
                type="button"
                onClick={() => toggleHabit(idx)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border text-xs transition-all ${
                  isDone
                    ? 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                    : 'bg-blue-950/40 border-blue-800 text-slate-300 hover:border-slate-600'
                }`}
              >
                <span className={`text-[11px] font-medium ${isDone ? 'line-through text-rose-300/80' : 'text-white'}`}>
                  {habit}
                </span>
                <CheckCircle2 className={`w-4 h-4 ${isDone ? 'text-rose-400' : 'text-slate-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Bottom Completion Metric */}
        <div className="flex items-center justify-between text-[10px] font-mono text-rose-300/90 z-10 bg-rose-950/60 px-2.5 py-1 rounded border border-rose-500/20">
          <span>Weekly Target: {completedHabits.length}/3 Completed</span>
          <span className="text-emerald-400 font-bold">{Math.round((completedHabits.length / 3) * 100)}% SCORE</span>
        </div>
      </div>
    );
  }

  return null;
};
