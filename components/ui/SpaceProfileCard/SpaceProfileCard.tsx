"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface SpaceProfileCardProps {
  avatarUrl: string;
}

const SpaceProfileCard: React.FC<SpaceProfileCardProps> = ({ avatarUrl }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(200, 210, 240, 0.15) 0%, transparent 50%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    glow.style.background = "transparent";
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={cardRef}
      className="group relative w-[370px] h-[370px] rounded-full cursor-pointer transition-transform duration-300 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Clean circular avatar */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10"
        style={{
          boxShadow: "0 0 40px rgba(100,120,200,0.1)",
        }}
      >
        <Image
          src={avatarUrl}
          alt="Profile"
          fill
          className="object-cover object-top"
          style={{ filter: "brightness(0.7) contrast(1.1) saturate(0.8)" }}
          sizes="370px"
          priority
        />
        {/* Dark space tint overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-900/20 via-transparent to-indigo-950/40" />

        {/* Hover stars overlay */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          {[
            { top: "12%", left: "18%", size: 8, delay: 0 },
            { top: "8%", left: "55%", size: 6, delay: 0.15 },
            { top: "22%", left: "78%", size: 10, delay: 0.3 },
            { top: "45%", left: "10%", size: 7, delay: 0.1 },
            { top: "60%", left: "85%", size: 9, delay: 0.25 },
            { top: "75%", left: "25%", size: 6, delay: 0.4 },
            { top: "82%", left: "65%", size: 8, delay: 0.05 },
            { top: "35%", left: "40%", size: 5, delay: 0.35 },
            { top: "50%", left: "60%", size: 7, delay: 0.2 },
            { top: "18%", left: "38%", size: 6, delay: 0.45 },
          ].map((star, i) => (
            <div
              key={i}
              className="absolute opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out"
              style={{
                top: star.top,
                left: star.left,
                transitionDelay: `${star.delay}s`,
                filter: `drop-shadow(0 0 ${star.size / 2}px rgba(180,200,255,0.8))`,
              }}
            >
              <svg
                width={star.size}
                height={star.size}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/90 animate-[star-twinkle_2s_ease-in-out_infinite]"
                style={{ animationDelay: `${star.delay * 2}s` }}
              >
                <path d="M12 0l3.09 8.26L24 9.27l-6.91 5.52L19.09 24 12 18.9 4.91 24l1.91-9.21L0 9.27l8.91-1.01z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Interactive glow */}
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-full pointer-events-none transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default React.memo(SpaceProfileCard);
