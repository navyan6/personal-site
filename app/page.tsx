"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import EdgeDecorations from "./components/EdgeDecorations";
import ScrollReveal from "./components/ScrollReveal";
import { BLOG_POSTS } from "./data/blog";

const CURRENT_INTERESTED = [
  "AI for molecular discovery and advancement in medicines",
  "Human interpretable AI",
  "Clinical AI",
  "AI agent orchestration",
];

const CURRENT_READING = [
  "The Maniac by Benjamin Labatut",
  "This American Woman by Zarna Garg",
  "Epidemiology news through the CDC and substack",
];

const CURRENT_WATCHING_AND_LISTENING = [
  "Watching Delhi Crime and Money Heist",
  "Listening to Laufey, Flipturn, and Rebounder",
];

// Blog orbs – all pastel pink
const BLOG_ORB_STYLE = {
  bg: "linear-gradient(135deg, #f8d7da 0%, #f4c2c2 50%, #fce4e6 100%)",
  shadow: "0 12px 40px -12px rgba(248,215,218,0.5)",
};

const ORB_SPIN_DURATION_MS = 600;

export default function Home() {
  const [openPostId, setOpenPostId] = useState<string | null>(null);
  const [spinningId, setSpinningId] = useState<string | null>(null);
  const [bubblePositions, setBubblePositions] = useState<Record<string, { x: number; y: number }>>(() => {
    const init: Record<string, { x: number; y: number }> = {};
    const colGap = 300;
    const rowGap = 160;
    const startX = 40;
    const startY = 40;
    BLOG_POSTS.forEach((post, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      init[post.id] = { x: startX + col * colGap, y: startY + row * rowGap };
    });
    return init;
  });
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, startX: 0, startY: 0 });
  const blogContainerRef = useRef<HTMLDivElement>(null);

  const handleBubbleMouseDown = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      setDraggingId(id);
      setDragStart({
        x: bubblePositions[id]?.x ?? 0,
        y: bubblePositions[id]?.y ?? 0,
        startX: e.clientX,
        startY: e.clientY,
      });
    },
    [bubblePositions]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!draggingId || !blogContainerRef.current) return;
      const rect = blogContainerRef.current.getBoundingClientRect();
      const dx = e.clientX - dragStart.startX;
      const dy = e.clientY - dragStart.startY;
      const maxX = Math.max(0, rect.width - 260);
      const maxY = Math.max(0, rect.height - 120);
      setBubblePositions((prev) => ({
        ...prev,
        [draggingId]: {
          x: Math.max(0, Math.min(maxX, dragStart.x + dx)),
          y: Math.max(0, Math.min(maxY, dragStart.y + dy)),
        },
      }));
    },
    [draggingId, dragStart]
  );

  const handleBubbleMouseUp = useCallback(
    (id: string) => {
      if (draggingId === id) {
        const pos = bubblePositions[id];
        const startPos = { x: dragStart.x, y: dragStart.y };
        const moved = pos && (Math.abs(pos.x - startPos.x) > 5 || Math.abs(pos.y - startPos.y) > 5);
        if (!moved) setSpinningId(id);
        setDraggingId(null);
      }
    },
    [draggingId, bubblePositions, dragStart]
  );

  useEffect(() => {
    if (!spinningId) return;
    const t = setTimeout(() => {
      setOpenPostId(spinningId);
      setSpinningId(null);
    }, ORB_SPIN_DURATION_MS);
    return () => clearTimeout(t);
  }, [spinningId]);

  const handleGlobalMouseUp = useCallback(() => setDraggingId(null), []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [handleMouseMove, handleGlobalMouseUp]);

  return (
    <div className="min-h-screen overflow-y-auto">
      <EdgeDecorations />

      {/* Hero + Contact */}
      <section id="hero" className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center pt-6 pb-10">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-coral drop-shadow-[0_2px_20px_rgba(224,122,122,0.25)] animate-fade-in">
          NAVYA NORI
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          I&apos;m a CS student at Georgia Tech, broadly interested in machine learning, interpretable & safe AI, and AI for healthcare.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-coral">
          <a href="mailto:nnori3@gatech.edu" className="font-medium hover:text-sage transition-colors underline underline-offset-2">
            nnori3@gatech.edu
          </a>
          <a
            href="https://www.linkedin.com/in/navya-nori-95438534a"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-sage transition-colors underline underline-offset-2"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Three boxes - bigger */}
      <section className="py-16 px-6">
        <ScrollReveal delay={100}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="box-float rounded-2xl bg-sage/15 border-2 border-sage/40 p-8 transition-all duration-300 cursor-default">
              <h3 className="font-heading text-2xl font-semibold text-sage-dark mb-5">Currently interested in</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                {CURRENT_INTERESTED.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sage mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="box-float rounded-2xl bg-sage/15 border-2 border-sage/40 p-8 transition-all duration-300 cursor-default">
              <h3 className="font-heading text-2xl font-semibold text-sage-dark mb-5">Currently reading</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                {CURRENT_READING.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sage mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="box-float rounded-2xl bg-sage/15 border-2 border-sage/40 p-8 transition-all duration-300 cursor-default">
              <h3 className="font-heading text-2xl font-semibold text-sage-dark mb-5">Currently watching and listening to</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                {CURRENT_WATCHING_AND_LISTENING.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sage mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Projects - colored cards */}
      <section id="projects" className="py-20 px-6">
        <ScrollReveal>
          <h2 className="font-heading text-4xl font-bold text-gray-800 text-center mb-4">Project Archive</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Currently interested in safe AI & AI for molecular discovery. Previously worked on AI-based solutions for various diseases in an effort to make healthcare more equitable. Check out my work below!
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
          {[
            {
              title: "Multi-Agent Reinforcement Learning for Faithful Chain-of-Thought",
              img: "/project6.jpg",
              back: (
                <>
                  - Currently working on this with the AI Safety Initiative at Georgia Tech. <br />
                  - Building a simple multi-agent RL environment where agents must coordinate using chain-of-thought–style reasoning. <br />
                  - Introducing incentives where agents rely on or evaluate each other&apos;s reasoning. <br />
                  - Testing whether faithfulness improves when scaling model size, number of agents, or model class. <br />
                </>
              ),
            },
            {
              title: "ML-Based Virtual Screening for Biodegradable Polyesters",
              img: "/project1.jpg",
              back: (
                <>
                  - Developed a machine learning model to screen AI-generated polymers for biodegradable polyesters. <br />
                  - Accepted for the Symposium on Democratizing AI in Materials Science at MRS 2024 (Boston). <br />
                  - Top 10% at Georgia Science and Engineering Fair; Top 10 at Georgia Junior Science and Humanities Symposium. <br />
                  <a href="https://www.scirp.org/journal/paperinformation?paperid=135410" className="text-sage underline font-medium" target="_blank" rel="noopener noreferrer">Read Paper</a>
                </>
              ),
            },
            {
              title: "AI-based System to Predict High-Risk Pregnancies",
              img: "/project2.jpg",
              back: (
                <>
                  - Investigated factors contributing to high-risk pregnancy; built ML model for risk score. <br />
                  - Compared linear regression, tree-based models, and neural networks. <br />
                  - Presented at 2023 Emory Southeastern Pediatric Research Conference. <br />
                  <a href="https://drive.google.com/file/d/1fiTjIG2zItXHmOg3MzMWM8jyIt9VGoLl/view?usp=sharing" className="text-sage underline font-medium" target="_blank" rel="noopener noreferrer">Read Paper</a>
                </>
              ),
            },
            {
              title: "MediCast: Model & App to Predict and Prevent Hospital Readmissions",
              img: "/project3.jpg",
              back: (
                <>
                  - Predicting hospital readmission risk using ML. <br />
                  - Georgia Science and Engineering Fair Pinnacle Award 1st place (State). <br />
                  - Congressional App Challenge 2nd place (GA 6th district). <br />
                  - GASTC 1st place Mobile Applications. <br />
                  <a href="https://drive.google.com/file/d/1ye8ETj37gKOBUYQ-E16Ril4G1f1vobK8/view?usp=sharing" className="text-sage underline font-medium" target="_blank" rel="noopener noreferrer">View Slides</a>
                </>
              ),
            },
            {
              title: "SupportED: Emotional and Physiological Analysis of Anorexia Warning Signs",
              img: "/project4.jpg",
              back: (
                <>
                  - AI-based sentiment analysis on Instagram captions for Anorexia Nervosa indicators. <br />
                  - Physiological monitoring: carbohydrate starvation and gut microbiome. <br />
                  - Presented at 2023 Emory Southeastern Pediatric Research Conference. <br />
                  <a href="https://drive.google.com/file/d/129odrIA77rdhNqRDpQ-bPLHPxnA0rtD1/view?usp=sharing" className="text-sage underline font-medium" target="_blank" rel="noopener noreferrer">View Poster</a>
                </>
              ),
            },
            {
              title: "Intellidose: Model & App to Calculate Personalized Antibiotic Dosages",
              img: "/project5.jpg",
              back: (
                <>
                  - ML models to compute MIC for personalized antibiotic dosages. <br />
                  - Mobile app for clinicians to input patient/infection info and get personalized dosage. <br />
                  - GASTC 1st place Mobile Applications. <br />
                  <a href="https://drive.google.com/file/d/1C5Ojl1_h9lkNH-cWkrpMtvEtB9wRi0ey/view?usp=sharing" className="text-sage underline font-medium" target="_blank" rel="noopener noreferrer">View Slides</a>
                </>
              ),
            },
          ].map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div className="group perspective">
                <div className="relative w-full max-w-sm mx-auto h-96 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
                  <div className="absolute w-full h-full bg-sage/10 border-2 border-sage/30 text-gray-800 flex flex-col items-center justify-start backface-hidden p-4 shadow-lg rounded-xl">
                    <h3 className="font-heading text-lg font-bold mb-4 text-sage-dark">{project.title}</h3>
                    <img src={project.img} alt="" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  <div className="absolute w-full h-full bg-coral/10 border-2 border-coral/30 text-gray-800 flex flex-col items-start justify-center rotate-y-180 backface-hidden p-4 shadow-lg rounded-xl">
                    <p className="text-sm leading-relaxed">{project.back}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Blog – floating orbs: drag to rearrange, click to read */}
      <section id="blog" className="py-24 px-6 pb-32 relative overflow-hidden">
        {/* Soft gradient atmosphere */}
        <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sage/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 bg-[#b8a9c9]/10 rounded-full blur-3xl" />
        </div>
        <ScrollReveal>
          <h2 className="font-heading text-4xl font-bold text-gray-800 text-center mb-3">Blog</h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-16 text-lg">
            This is more or less a stream of consciousness as I unpack my ideas. Feel free to read, agree, disagree, or reach out.
          </p>
        </ScrollReveal>
        <div
          ref={blogContainerRef}
          className="relative max-w-[980px] mx-auto min-h-[680px]"
        >
          {BLOG_POSTS.map((post, index) => {
            const pos = bubblePositions[post.id] ?? { x: 0, y: 0 };
            const isDragging = draggingId === post.id;
            const style = BLOG_ORB_STYLE;
            const rotation = (index % 5) - 2;
            const isSpinning = spinningId === post.id;
            return (
              <button
                key={post.id}
                type="button"
                onMouseDown={(e) => handleBubbleMouseDown(e, post.id)}
                onMouseUp={() => handleBubbleMouseUp(post.id)}
                className={`absolute text-left rounded-2xl py-5 px-6 w-[260px] font-medium transition-all duration-200 select-none border border-white/30 ${
                  isDragging ? "cursor-grabbing z-20 ring-2 ring-gray-300/50" : isSpinning ? "cursor-default z-20" : "cursor-grab hover:border-white/50 hover:shadow-xl"
                } ${isSpinning ? "orb-spin-open" : ""}`}
                style={{
                  left: pos.x,
                  top: pos.y,
                  background: style.bg,
                  boxShadow: isDragging ? "0 24px 48px -12px rgba(0,0,0,0.2)" : style.shadow,
                  transform: isSpinning ? undefined : `rotate(${rotation}deg) scale(${isDragging ? 1.05 : 1})`,
                  ["--orb-rotate" as string]: `${rotation}deg`,
                }}
              >
                <span className="font-heading block text-gray-800/95 text-[15px] leading-snug">{post.title}</span>
                <span className="block text-xs text-gray-600/90 mt-2 font-sans">{post.date}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Modal for full post */}
      {openPostId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setOpenPostId(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Blog post"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const post = BLOG_POSTS.find((p) => p.id === openPostId);
              if (!post) return null;
              return (
                <>
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <h3 className="font-heading text-2xl font-bold text-gray-800">{post.title}</h3>
                    <button
                      type="button"
                      onClick={() => setOpenPostId(null)}
                      className="shrink-0 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
                      aria-label="Close"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">{post.date}</p>
                  <div className="text-gray-700 space-y-4">
                    {post.content.map((paragraph, i) => (
                      <p key={i} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
