"use client";

import React from 'react';

export default function DeepBookCustomHub() {
  const projects = [
    { name: "Lotus Finance", type: "Trading Strategies", link: "https://lotusfinance.io/explore-pools", logo: "/logos/lotus.png" },
    { name: "DeepTrade", type: "DEX", link: "https://deeptrade.io/trade/SUI_USDC", logo: "/logos/deeptrade.png" },
    { name: "Axelar", type: "Interoperability Platform", link: "https://www.axelar.network/", logo: "/logos/axelar.png" },
    { name: "Aftermath Finance", type: "DEX", link: "https://aftermath.finance/?ref=blog.sui.io", logo: "/logos/aftermath.png" },
    { name: "Cetus", type: "DEX", link: "https://www.cetus.zone/", logo: "/logos/cetus.png" },
    { name: "Flowx", type: "DEX", link: "https://flowx.finance/", logo: "/logos/flowx.png" },
    { name: "Hop", type: "DEX", link: "https://hop.ag/", logo: "/logos/hop.png" },
    { name: "Turbos Finance", type: "DEX", link: "https://turbos.finance/", logo: "/logos/turbos.png" },
    { name: "7K Aggregator", type: "Aggregator", link: "https://7k.ag/", logo: "/logos/7k.png" }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white font-sans selection:bg-blue-500/30">
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-blue-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-purple-500/10 blur-[100px] rounded-full"></div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto py-20 px-6">
        
        <header className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent italic">
            DEEPBOOK EXPLORER
          </h1>
          <p className="text-zinc-500 text-lg mb-10 font-medium">
            Your curated directory for DeepBook ecosystem protocols.
          </p>
          <a 
            href="https://deepbook.tech/points#wallet-wrapper" 
            target="_blank"
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Check Ranking ↗
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a 
              key={project.name}
              href={project.link}
              target="_blank"
              className="group p-8 rounded-[2.5rem] bg-[#0b0f1a] border border-white/5 hover:border-blue-500/40 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-white/5 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl overflow-hidden relative">
                  <img 
                    src={project.logo} 
                    alt={project.name} 
                    className="w-full h-full object-contain p-3"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0';
                      const parent = e.currentTarget.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const span = document.createElement('span');
                        span.className = 'absolute text-2xl font-black text-zinc-700 fallback-text';
                        span.innerText = project.name[0];
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors tracking-tight">
                  {project.name}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500/80 mb-6 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10">
                  {project.type}
                </span>
                
                <div className="mt-2 text-[10px] font-bold text-zinc-600 uppercase tracking-tighter group-hover:text-zinc-400 transition-colors">
                  Go to Protocol —&gt;
                </div>
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-32 text-center">
          <p className="text-[10px] text-zinc-700 tracking-[0.4em] uppercase font-bold">
            Curated by Eren Yegit
          </p>
        </footer>
      </main>
    </div>
  );
}