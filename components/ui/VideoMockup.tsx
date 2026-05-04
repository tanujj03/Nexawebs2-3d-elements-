"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "./cn";

type Props = {
  className?: string;
  videoSrc: string;
};

export function VideoMockup({ className, videoSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays immediately when loaded
    const handleCanPlay = () => {
      video.play().catch(() => {
        // Fallback for autoplay restrictions
      });
    };

    const handleError = (e: Event) => {
      console.error("Video error:", e);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -1.2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className={cn("relative", className)}
    >
      <div className="relative mx-auto max-w-md">
        {/* Premium monitor frame */}
        <div className="chrome-border glass rounded-[36px] p-2 ring-soft shadow-[0_56px_200px_rgba(0,0,0,.18),0_18px_70px_rgba(0,0,0,.10)]">
          <div className="rounded-[28px] bg-black p-1">
            <div className="relative overflow-hidden rounded-[24px] bg-black">
              {/* Video element */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-auto w-full object-cover"
                style={{ 
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  width: "100%",
                  height: "auto"
                }}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              
              {/* Screen reflection overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Monitor stand */}
        <div className="mx-auto mt-2 h-8 w-24 rounded-b-2xl bg-gradient-to-b from-zinc-200 to-zinc-300 shadow-lg" />
        
        {/* Base */}
        <div className="mx-auto mt-1 h-2 w-32 rounded-full bg-zinc-300 shadow-md" />

        {/* Floating decorative elements */}
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-[38%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.95),rgba(255,255,255,.25)_40%,rgba(32,182,255,.14)_75%,transparent)] opacity-80 shadow-premium ring-soft" />
        <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-44 rounded-[999px] bg-[linear-gradient(135deg,rgba(255,255,255,.7),rgba(255,255,255,.18),rgba(255,196,99,.12))] opacity-70 shadow-premium ring-soft" />
      </div>
    </motion.div>
  );
}
