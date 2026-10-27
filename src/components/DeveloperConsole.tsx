import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Code2, Cpu, Copy, Check, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const DeveloperConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'spec' | 'terminal' | 'stats'>('spec');
  const [copied, setCopied] = useState(false);
  const [cmdInput, setCmdInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'SafooraOS [Version 2026.10] - IT & Software Developer Console',
    'Type "help" or click quick commands below:',
  ]);

  const devSnippet = `# safoora_spec.py - Software Development & GBOB Outreach
from dataclasses import dataclass
from typing import List

@dataclass
class SoftwareDeveloper:
    name: str = "${PERSONAL_INFO.name}"
    title: str = "${PERSONAL_INFO.title}"
    sub_title: str = "${PERSONAL_INFO.subTitle}"
    degree: str = "BS Information Engineering & Technology"
    university: str = "Superior University, Lahore"
    specialization: List[str] = (
        "Software Development",
        "GBOB Specialist (Guest Blogging & Outreach)",
        "Full-Stack Web Engineering"
    )
    email: str = "${PERSONAL_INFO.email}"
    business_platform: str = "${PERSONAL_INFO.businessUrl}"
    business_entity: str = "SuperiorXR Solutions"
    verified_credentials: int = 6
    
    def deploy_solution(self, requirements: str):
        """Builds production web applications & executes outreach strategy."""
        return {
            "status": "Production-Ready",
            "stack": ["React", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS"],
            "business": "SuperiorXR Solutions (Explore the Business)",
            "outreach": "GBOB High-Authority Partnerships & Domain Authority Growth",
            "security": "Audited with Content Security Policy & XSS mitigations"
        }

developer = SoftwareDeveloper()
print(f"Status: {developer.name} is available for Software Development & GBOB roles.")`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(devSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleRunCommand = (commandText: string) => {
    const cmd = commandText.trim().toLowerCase();
    const newHistory = [...terminalHistory, `$ ${commandText}`];

    switch (cmd) {
      case 'help':
        newHistory.push(
          'Available commands:',
          '  projects    - List live business web platforms and production repositories',
          '  skills      - Inspect Software Engineering and GBOB Outreach stack',
          '  business    - Inspect SuperiorXR Solutions details and explore business',
          '  contact     - View primary email and direct channels',
          '  status      - Display current availability and verified credentials',
          '  clear       - Clear terminal window'
        );
        break;
      case 'business':
        newHistory.push(
          '★ Business Platform: SuperiorXR Solutions',
          `  Explore the Business: ${PERSONAL_INFO.businessUrl}`,
          '  Focus: Extended-Reality, Spatial Web Technologies, Client Solutions',
          '  Deployment: Production Vercel Edge Cloud'
        );
        break;
      case 'projects':
        newHistory.push(
          `• SuperiorXR Solutions (Explore Business) -> ${PERSONAL_INFO.businessUrl}`,
          '• 3D-Model-Showcase (Three.js/WebGL) -> https://formae-frontend.vercel.app',
          '• FreshCart (Full-Stack E-Commerce) -> https://freshcart-store-eight.vercel.app',
          '• Campus Navigation (Geospatial) -> https://superior-campus.vercel.app',
          '• Orbit Habit Tracker (Web App) -> https://orbit-habit-tracker-six.vercel.app'
        );
        break;
      case 'skills':
        newHistory.push(
          '[Software Dev] React, TypeScript, JavaScript, HTML5/CSS3, Tailwind CSS',
          '[GBOB Outreach] Guest Blogging, Outreach Business, High-Authority Links, Content Strategy',
          '[Backend & DB] Node.js, Express, REST APIs, MySQL, PostgreSQL, Git & GitHub'
        );
        break;
      case 'contact':
        newHistory.push(
          `Email: ${PERSONAL_INFO.email}`,
          `Phone: ${PERSONAL_INFO.phone}`,
          `LinkedIn: ${PERSONAL_INFO.linkedin}`,
          `Business: ${PERSONAL_INFO.businessUrl}`
        );
        break;
      case 'status':
        newHistory.push(
          '● Status: AVAILABLE for Software Developer & GBOB Specialist roles',
          '● 6 Verified Certificates on file (NexaSecure, Khizex, Alkhidmat)',
          '● Expected Graduation: 2027 (Superior University)'
        );
        break;
      case 'clear':
        setTerminalHistory(['Terminal cleared. Type "help" for options.']);
        setCmdInput('');
        return;
      default:
        newHistory.push(`Command not recognized: "${commandText}". Type "help" for available commands.`);
    }

    setTerminalHistory(newHistory);
    setCmdInput('');
  };

  return (
    <div className="w-full rounded-2xl border border-stone-800 bg-[#18181b] text-stone-100 shadow-xl overflow-hidden font-mono text-xs">
      {/* macOS / IDE Title Bar */}
      <div className="px-4 py-3 bg-[#27272a] border-b border-stone-800 flex items-center justify-between">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
          <span className="ml-2 text-stone-400 text-[11px] font-sans font-medium flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>safoora-core — zsh</span>
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-[#18181b] p-1 rounded-lg border border-stone-800">
          <button
            type="button"
            onClick={() => setActiveTab('spec')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
              activeTab === 'spec'
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3 h-3 text-cyan-300" />
            <span>developer.py</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
              activeTab === 'terminal'
                ? 'bg-emerald-600 text-white font-semibold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3 h-3 text-emerald-300" />
            <span>terminal</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('stats')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
              activeTab === 'stats'
                ? 'bg-cyan-600 text-white font-semibold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>metrics</span>
          </button>
        </div>
      </div>

      {/* Main Console Viewport */}
      <div className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto leading-relaxed select-text">
        <AnimatePresence mode="wait">
          {activeTab === 'spec' && (
            <motion.div
              key="spec"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-1 font-mono text-[11.5px] sm:text-xs"
            >
              <div className="text-stone-500">// Information Engineering &amp; Software Architecture Spec</div>
              <div>
                <span className="text-rose-400 font-bold">from</span> <span className="text-stone-200">dataclasses</span>{' '}
                <span className="text-rose-400 font-bold">import</span> <span className="text-yellow-300">dataclass</span>
              </div>
              <div className="py-1">
                <span className="text-yellow-400">@dataclass</span>
                <br />
                <span className="text-blue-400 font-bold">class</span>{' '}
                <span className="text-emerald-400 font-bold">SoftwareDeveloper</span>:
              </div>
              <div className="pl-4 space-y-0.5">
                <div>
                  <span className="text-stone-300">name:</span> <span className="text-blue-300">str</span> ={' '}
                  <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>
                </div>
                <div>
                  <span className="text-stone-300">role:</span> <span className="text-blue-300">str</span> ={' '}
                  <span className="text-emerald-300">"{PERSONAL_INFO.title}"</span>
                </div>
                <div>
                  <span className="text-stone-300">sub_role:</span> <span className="text-blue-300">str</span> ={' '}
                  <span className="text-cyan-300">"{PERSONAL_INFO.subTitle}"</span>
                </div>
                <div>
                  <span className="text-stone-300">university:</span> <span className="text-blue-300">str</span> ={' '}
                  <span className="text-emerald-300">"Superior University, Lahore"</span>
                </div>
                <div>
                  <span className="text-stone-300">business_link:</span> <span className="text-blue-300">str</span> ={' '}
                  <span className="text-amber-300 underline">"{PERSONAL_INFO.businessUrl}"</span>
                </div>
                <div>
                  <span className="text-stone-300">primary_focus:</span> <span className="text-yellow-300">list</span> = [
                </div>
                <div className="pl-4 text-emerald-300">
                  "Software Development",<br />
                  "GBOB Specialist (Guest Blogging &amp; Outreach)",<br />
                  "Full-Stack Web Engineering"
                </div>
                <div>]</div>
                <div>
                  <span className="text-stone-300">email:</span> <span className="text-blue-300">str</span> ={' '}
                  <span className="text-cyan-300 underline">"{PERSONAL_INFO.email}"</span>
                </div>
                <div>
                  <span className="text-stone-300">verified_credentials:</span> <span className="text-yellow-300">int</span> ={' '}
                  <span className="text-cyan-400 font-bold">6</span>
                </div>
              </div>
              <div className="pt-2 text-stone-400">
                <span className="text-blue-400 font-bold">def</span>{' '}
                <span className="text-yellow-300">get_status</span>():
                <br />
                <span className="pl-4 text-rose-400">return</span>{' '}
                <span className="text-emerald-300">"Ready for Software Development &amp; GBOB Specialist Roles"</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'terminal' && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col h-full justify-between"
            >
              <div className="space-y-1.5 overflow-y-auto pr-1">
                {terminalHistory.map((line, i) => (
                  <div
                    key={i}
                    className={`${
                      line.startsWith('$')
                        ? 'text-yellow-300 font-bold'
                        : line.startsWith('•') || line.startsWith('★')
                        ? 'text-cyan-300'
                        : line.startsWith('●')
                        ? 'text-emerald-400'
                        : line.startsWith('[')
                        ? 'text-blue-300'
                        : 'text-stone-300'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Terminal command input */}
              <div className="mt-3 pt-2 border-t border-stone-800 flex items-center gap-2">
                <span className="text-emerald-400 font-bold select-none">&gt;</span>
                <input
                  type="text"
                  value={cmdInput}
                  onChange={(e) => setCmdInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && cmdInput.trim()) {
                      handleRunCommand(cmdInput);
                    }
                  }}
                  placeholder="Type 'help', 'business', 'projects', 'skills'..."
                  className="bg-transparent border-0 text-white placeholder-stone-600 focus:outline-hidden w-full text-xs font-mono"
                  aria-label="Terminal command prompt"
                />
                <button
                  type="button"
                  onClick={() => cmdInput.trim() && handleRunCommand(cmdInput)}
                  className="p-1 text-stone-400 hover:text-white"
                  title="Execute command"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'stats' && (
            <motion.div
              key="stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-3 text-xs"
            >
              <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Primary Role</span>
                <span className="text-white font-bold text-sm">Software Developer</span>
                <span className="text-cyan-400 text-[11px] block mt-1">Full-Stack Web Systems</span>
              </div>
              <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Specialization</span>
                <span className="text-white font-bold text-sm">GBOB Specialist</span>
                <span className="text-cyan-400 text-[11px] block mt-1">Guest Blogging &amp; Outreach</span>
              </div>
              <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Explore the Business</span>
                <a
                  href={PERSONAL_INFO.businessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-bold hover:underline block truncate"
                >
                  SuperiorXR Solutions
                </a>
                <span className="text-emerald-400 text-[11px] block mt-1">Live Vercel Platform</span>
              </div>
              <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Verified Credentials</span>
                <span className="text-white font-bold text-sm">6 Certificates</span>
                <span className="text-emerald-400 text-[11px] block mt-1">NexaSecure, Khizex, Alkhidmat</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer bar with quick buttons & copy action */}
      <div className="px-4 py-2 bg-[#202024] border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-stone-500 font-semibold hidden sm:inline">Quick commands:</span>
          {['help', 'business', 'projects', 'skills', 'status'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => {
                setActiveTab('terminal');
                handleRunCommand(cmd);
              }}
              className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopyCode}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors shrink-0 ml-2"
          title="Copy developer specification snippet"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-stone-400" />
              <span>Copy Spec</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
