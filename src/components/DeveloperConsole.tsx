import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Code2, Cpu, Copy, Check, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const DeveloperConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'terminal' | 'stats'>('python');
  const [copied, setCopied] = useState(false);
  const [cmdInput, setCmdInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'SafooraOS [Version 2026.10] - IT & Software Developer Console',
    'Type "help" or click quick commands below:',
  ]);

  const pythonSnippet = `# safoora_spec.py - Information Engineering & AI Architecture
from dataclasses import dataclass
from typing import List

@dataclass
class SoftwareDeveloper:
    name: str = "${PERSONAL_INFO.name}"
    title: str = "${PERSONAL_INFO.title}"
    degree: str = "BS Information Engineering & Technology"
    university: str = "Superior University, Lahore"
    specialization: List[str] = (
        "Python & AI Development",
        "Full-Stack Web Engineering"
    )
    email: str = "${PERSONAL_INFO.email}"
    verified_credentials: int = 6
    
    def deploy_solution(self, requirements: str):
        """Builds production web and AI architectures."""
        return {
            "status": "Production-Ready",
            "stack": ["Python", "FastAPI", "React", "Node.js", "Three.js"],
            "architecture": "Modular, performant & responsive"
        }

developer = SoftwareDeveloper()
print(f"Status: {developer.name} is available for engineering roles.")`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(pythonSnippet);
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
          '  projects    - List production repositories and live links',
          '  skills      - Inspect Python, AI, and full-stack stack',
          '  contact     - View primary email and direct channels',
          '  status      - Display current availability and credentials',
          '  clear       - Clear terminal window'
        );
        break;
      case 'projects':
        newHistory.push(
          '• 3D-Model-Showcase (Three.js/WebGL) -> formae-frontend.vercel.app',
          '• FreshCart (Full-Stack E-Commerce) -> freshcart-store-eight.vercel.app',
          '• SuperiorXR (Mobile XR APK) -> github.com/hurriaibrar96/SuperiorXR-apk',
          '• Campus Navigation (Geospatial) -> superior-campus.vercel.app',
          '• Orbit Habit Tracker (Web App) -> orbit-habit-tracker-six.vercel.app'
        );
        break;
      case 'skills':
        newHistory.push(
          '[AI/ML] Python, Machine Learning, Prompt Engineering, FastAPI',
          '[Frontend] React, TypeScript, JavaScript, Tailwind CSS, Three.js',
          '[Backend & DB] Node.js, Express, MySQL, PostgreSQL, REST APIs'
        );
        break;
      case 'contact':
        newHistory.push(
          `Email: ${PERSONAL_INFO.email}`,
          `Phone: ${PERSONAL_INFO.phone}`,
          `LinkedIn: ${PERSONAL_INFO.linkedin}`
        );
        break;
      case 'status':
        newHistory.push(
          '● Status: AVAILABLE for Software Developer & AI Engineering roles',
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
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>safoora-core — zsh</span>
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-[#18181b] p-1 rounded-lg border border-stone-800">
          <button
            type="button"
            onClick={() => setActiveTab('python')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
              activeTab === 'python'
                ? 'bg-violet-600 text-white font-semibold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3 h-3 text-amber-300" />
            <span>safoora.py</span>
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
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3 text-sky-300" />
            <span>metrics.json</span>
          </button>
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={handleCopyCode}
          className="p-1 text-stone-400 hover:text-white hover:bg-stone-700/50 rounded transition-colors"
          title="Copy Python Code"
          aria-label="Copy Python Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code / Terminal Content Area */}
      <div className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto leading-relaxed select-text">
        <AnimatePresence mode="wait">
          {activeTab === 'python' && (
            <motion.div
              key="python"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-1 font-mono text-[11.5px] sm:text-xs"
            >
              <div className="text-stone-500">// Information Engineering &amp; Python AI Spec</div>
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
                  <span className="text-stone-300">university:</span> <span className="text-blue-300">str</span> ={' '}
                  <span className="text-emerald-300">"Superior University, Lahore"</span>
                </div>
                <div>
                  <span className="text-stone-300">degree:</span> <span className="text-blue-300">str</span> ={' '}
                  <span className="text-emerald-300">"BS Information Engineering &amp; Tech (2023-2027)"</span>
                </div>
                <div>
                  <span className="text-stone-300">primary_focus:</span> <span className="text-yellow-300">list</span> = [
                </div>
                <div className="pl-4 text-emerald-300">
                  "Python &amp; AI Development",<br />
                  "Full-Stack Web Engineering",<br />
                  "Digital Marketing (Interest)"
                </div>
                <div>]</div>
                <div>
                  <span className="text-stone-300">email:</span> <span className="text-blue-300">str</span> ={' '}
                  <span className="text-amber-300 underline">"{PERSONAL_INFO.email}"</span>
                </div>
                <div>
                  <span className="text-stone-300">credentials:</span> <span className="text-yellow-300">int</span> ={' '}
                  <span className="text-violet-400 font-bold">6</span>
                </div>
              </div>
              <div className="pt-2 text-stone-400">
                <span className="text-blue-400 font-bold">def</span>{' '}
                <span className="text-yellow-300">get_status</span>():
                <br />
                <span className="pl-4 text-rose-400">return</span>{' '}
                <span className="text-emerald-300">"Ready for Software Development &amp; AI Roles"</span>
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
                        : line.startsWith('•')
                        ? 'text-emerald-400'
                        : line.startsWith('●')
                        ? 'text-teal-300 font-semibold'
                        : 'text-stone-300'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Terminal Quick Pill Buttons */}
              <div className="pt-3 border-t border-stone-800">
                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                  <span className="text-[10px] text-stone-500 uppercase">Run:</span>
                  {['projects', 'skills', 'contact', 'status', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      onClick={() => handleRunCommand(cmd)}
                      className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-[10px] font-mono transition-colors"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (cmdInput.trim()) handleRunCommand(cmdInput);
                  }}
                  className="flex items-center gap-2 bg-[#27272a] px-2.5 py-1.5 rounded-lg border border-stone-700"
                >
                  <span className="text-emerald-400 font-bold">$</span>
                  <input
                    type="text"
                    value={cmdInput}
                    onChange={(e) => setCmdInput(e.target.value)}
                    placeholder="Type command (e.g. projects, skills, contact)..."
                    className="flex-1 bg-transparent text-white placeholder-stone-500 text-xs focus:outline-hidden font-mono"
                  />
                  <button type="submit" className="text-stone-400 hover:text-white" aria-label="Execute command">
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activeTab === 'stats' && (
            <motion.div
              key="stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-1 font-mono text-[11.5px] sm:text-xs text-stone-300"
            >
              <div>{'{'}</div>
              <div className="pl-4 space-y-0.5">
                <div>
                  <span className="text-blue-300">"candidate"</span>: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                </div>
                <div>
                  <span className="text-blue-300">"target_role"</span>: <span className="text-emerald-300">"Software Developer"</span>,
                </div>
                <div>
                  <span className="text-blue-300">"core_specializations"</span>: [
                  <div className="pl-4 text-emerald-300">
                    "Python &amp; AI Development",<br />
                    "Full-Stack Web Architecture"
                  </div>
                  ],
                </div>
                <div>
                  <span className="text-blue-300">"academic_status"</span>: <span className="text-emerald-300">"Active BS IET Student @ Superior University"</span>,
                </div>
                <div>
                  <span className="text-blue-300">"total_repositories"</span>: <span className="text-amber-400">5</span>,
                </div>
                <div>
                  <span className="text-blue-300">"verified_credentials"</span>: <span className="text-amber-400">6</span>,
                </div>
                <div>
                  <span className="text-blue-300">"internship_experience"</span>: [
                  <div className="pl-4 text-emerald-300">
                    "NexaSecure Tech (Python AI Development Intern)",<br />
                    "Khizex (Full Stack Intern)"
                  </div>
                  ],
                </div>
                <div>
                  <span className="text-blue-300">"open_to_work"</span>: <span className="text-emerald-400 font-bold">true</span>
                </div>
              </div>
              <div>{'}'}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer bar */}
      <div className="px-4 py-2 bg-[#27272a] border-t border-stone-800 text-[10px] text-stone-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Python 3.12 · React 19 · Vite 8</span>
        </div>
        <div className="flex items-center gap-3">
          <span>UTF-8</span>
          <span>git:(main)</span>
        </div>
      </div>
    </div>
  );
};
