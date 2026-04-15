import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "INITIALIZING SECURE CONNECTION VIA PROXY_GATE...",
  "STATUS: CONNECTED (AES-256-GCM)",
  "LOADING CORE SECURITY PROTOCOLS...",
  "DECRYPTING PORTFOLIO DATABASE...",
  "SCANNING FOR INTRUSIONS... [CLEAN]",
  "BYPASSING PERIMETER FIREWALLS...",
  "EXTRACTING SOC ANALYST CREDENTIALS...",
  "ACCESS GRANTED. WELCOME, OPERATOR.",
];

export default function LoadingScreen() {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progressive log typing
    BOOT_LOGS.forEach((log, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
      }, index * 450);
    });

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 font-mono overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background terminal glow */}
      <div className="absolute inset-0 bg-neon-green/5 blur-3xl opacity-20 pointer-events-none" />

      <div className="w-full max-w-2xl text-left border border-white/10 bg-black p-8 rounded shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 text-xs text-white/20 select-none">
          SECURE_SESSION_ID: 0x{Math.random().toString(16).substr(2, 8).toUpperCase()}
        </div>

        <div className="flex gap-2 items-center mb-8 border-b border-white/5 pb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-alert-red animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-neon-cyan" />
            <div className="w-3 h-3 rounded-full bg-neon-green" />
          </div>
          <span className="text-white/40 text-sm ml-4 tracking-widest uppercase">
            System Boot Sequence
          </span>
        </div>

        <div className="space-y-2 mb-10 h-64 overflow-hidden">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              className="text-neon-green text-sm flex items-center gap-2 group-hover:text-neon-cyan transition-colors"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
            >
              <span className="opacity-40">[{new Date().toLocaleTimeString()}]</span>
              <span className="opacity-60">{i === logs.length - 1 ? ">" : "#"}</span>
              <span className="animate-typewriter overflow-hidden whitespace-nowrap">
                {log}
              </span>
              {i === logs.length - 1 && (
                <motion.span
                  className="w-2 h-4 bg-neon-green"
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs text-white/50 mb-1">
            <span className="tracking-[0.2em] font-mono">ENCRYPTING_SESSION</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden relative border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-green via-neon-cyan to-neon-green"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
              style={{
                boxShadow: "0 0 10px rgba(0, 255, 65, 0.5)",
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-white/10 text-[10px] tracking-widest font-mono select-none uppercase">
        © SYAL_DEFENSE_SOLUTIONS_CORP // V2.0.26
      </div>
    </motion.div>
  );
}
