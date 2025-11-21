"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { Atom } from "lucide-react";

const CHIP_WIDTH = 120;
const CHIP_HEIGHT = 40;
const GRAVITY = 180;
const WALL_DAMPING = 0.92;
const FRICTION = 0.998;
const MIN_SPEED = 60;
const MAX_SPEED = 160;

type ChipState = {
  id: string;
  label: string;
  gradient: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
};

const baseChipConfigs = [
  {
    id: "next",
    label: "Next.js",
    gradient: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.5))",
    vx: 55,
    vy: 42,
  },
  {
    id: "ts",
    label: "TypeScript",
    gradient: "linear-gradient(135deg, rgba(125,211,252,0.85), rgba(59,130,246,0.45))",
    vx: -60,
    vy: 48,
  },
  {
    id: "webrtc",
    label: "WebRTC",
    gradient: "linear-gradient(135deg, rgba(110,231,183,0.85), rgba(6,182,212,0.45))",
    vx: 58,
    vy: -52,
  },
  {
    id: "prisma",
    label: "Prisma",
    gradient: "linear-gradient(135deg, rgba(196,181,253,0.8), rgba(232,121,249,0.35))",
    vx: -50,
    vy: -46,
  },
];

export function PhysicsPlayground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chips, setChips] = useState<ChipState[]>(() =>
    baseChipConfigs.map((chip, idx) => ({
      ...chip,
      x: 40 + idx * 70,
      y: 20 + (idx % 2) * 60,
      vx: chip.vx,
      vy: chip.vy,
      rotation: 0,
    }))
  );

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();

    const step = (time: number) => {
      const deltaSeconds = Math.min((time - lastTime) / 1000, 0.033);
      lastTime = time;

      setChips((prev) => {
        const container = containerRef.current;
        if (!container) return prev;

        const bounds = {
          width: container.clientWidth,
          height: container.clientHeight,
        };

        const updated = prev.map((chip) => {
          let nextVx = chip.vx * FRICTION + (Math.random() - 0.5) * 6;
          nextVx = injectEnergy(clampVelocity(nextVx, MAX_SPEED), MIN_SPEED);

          let nextVy = chip.vy + (GRAVITY - 40) * deltaSeconds;
          nextVy += (Math.random() - 0.5) * 8;
          nextVy = clampVelocity(nextVy, MAX_SPEED);
          let nextX = chip.x + nextVx * deltaSeconds;
          let nextY = chip.y + nextVy * deltaSeconds;
          let nextRotation = chip.rotation + nextVx * deltaSeconds * 0.08;

          if (nextX <= 0) {
            nextX = 0;
            nextVx = injectEnergy(Math.abs(nextVx) * WALL_DAMPING, MIN_SPEED);
          } else if (nextX + CHIP_WIDTH >= bounds.width) {
            nextX = bounds.width - CHIP_WIDTH;
            nextVx = injectEnergy(-Math.abs(nextVx) * WALL_DAMPING, MIN_SPEED);
          }

          if (nextY <= 0) {
            nextY = 0;
            nextVy = injectEnergy(Math.abs(nextVy) * WALL_DAMPING, MIN_SPEED);
          } else if (nextY + CHIP_HEIGHT >= bounds.height) {
            nextY = bounds.height - CHIP_HEIGHT;
            nextVy = injectEnergy(-Math.abs(nextVy) * WALL_DAMPING, MIN_SPEED);
          }

          return {
            ...chip,
            x: nextX,
            y: nextY,
            vx: nextVx,
            vy: nextVy,
            rotation: nextRotation,
          };
        });

        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const a = updated[i];
            const b = updated[j];

            const overlapX = a.x < b.x + CHIP_WIDTH && a.x + CHIP_WIDTH > b.x;
            const overlapY = a.y < b.y + CHIP_HEIGHT && a.y + CHIP_HEIGHT > b.y;

            if (overlapX && overlapY) {
              const tempVx = updated[i].vx;
              const tempVy = updated[i].vy;
              updated[i].vx = injectEnergy(b.vx * WALL_DAMPING, MIN_SPEED);
              updated[i].vy = injectEnergy(b.vy * WALL_DAMPING, MIN_SPEED);
              updated[j].vx = injectEnergy(tempVx * WALL_DAMPING, MIN_SPEED);
              updated[j].vy = injectEnergy(tempVy * WALL_DAMPING, MIN_SPEED);

              if (a.x < b.x) {
                updated[i].x = Math.max(0, a.x - 2);
                updated[j].x = Math.min(bounds.width - CHIP_WIDTH, b.x + 2);
              } else {
                updated[i].x = Math.min(bounds.width - CHIP_WIDTH, a.x + 2);
                updated[j].x = Math.max(0, b.x - 2);
              }

              if (a.y < b.y) {
                updated[i].y = Math.max(0, a.y - 2);
                updated[j].y = Math.min(bounds.height - CHIP_HEIGHT, b.y + 2);
              } else {
                updated[i].y = Math.min(bounds.height - CHIP_HEIGHT, a.y + 2);
                updated[j].y = Math.max(0, b.y - 2);
              }
            }
          }
        }

        return updated;
      });

      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="glass-panel subtle-border flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-6 text-white">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/20">
          <Atom className="h-6 w-6 text-emerald-300" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Physics loop</p>
          <p className="text-lg font-semibold">Motion-driven systems playground</p>
        </div>
      </div>

      <p className="text-sm text-white/75">
        Tech stack tiles bounce inside a contained field to mimic constrained compute surfaces where
        workloads collide, exchange energy, and stay inside the sandbox like rigid bodies.
      </p>

      <div
        ref={containerRef}
        className="relative mt-2 h-36 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-black/30"
      >
        <motion.div
          className="absolute inset-0 opacity-50 blur-3xl"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.25), transparent 50%), radial-gradient(circle at 80% 30%, rgba(14,165,233,0.25), transparent 50%)",
          }}
        />

        {chips.map((chip, index) => (
          <motion.div
            key={chip.id}
            className="absolute flex h-10 w-[7.5rem] items-center justify-center rounded-xl border border-white/10 px-3 text-sm font-semibold text-white shadow-glow"
            style={{
              transform: `translate(${chip.x}px, ${chip.y}px) rotate(${chip.rotation}deg)`,
              backgroundImage: chip.gradient,
            }}
            animate={{ opacity: [0.85, 1, 0.9] }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            {chip.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function injectEnergy(value: number, min: number) {
  if (Math.abs(value) < min) {
    return (value >= 0 ? 1 : -1) * min;
  }
  return value;
}

function clampVelocity(value: number, max: number) {
  const sign = value >= 0 ? 1 : -1;
  return Math.min(Math.abs(value), max) * sign;
}

