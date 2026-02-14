import React from 'react';

export default function ModernDeepBook() {
  const apps = [
    { name: "Cetus", category: "DEX / Liquidity", desc: "The flagship liquidity protocol on Sui.", link: "https://app.cetus.zone/" },
    { name: "Aftermath", category: "Staking & Trade", desc: "All-in-one liquidity and staking hub.", link: "https://aftermath.finance/" },
    { name: "KriyaDEX", category: "Orderbook", desc: "High-performance institutional orderbook.", link: "https://app.kriya.finance/" },
    { name: "7K.aggregator", category: "Aggregator", desc: "Smart router finding the best rates.", link: "https://7k.ag/" },
    { name: "Turbos", category: "Concentrated Liquidity", desc: "Efficient and low-slippage trading.", link: "https://app.turbos.finance/" },
    { name: "FlowX", category: "Ecosystem Hub", desc: "Community-driven trading experience.", link: "https://flowx.finance/" }
  ];

  return (
    <div className="min-h-screen bg-[#000] text-[#fff] font-sans antialiased selection:bg-blue-500/30">
      
      {/* Navigasyon */}
      <nav className="border-b border-white/5 py-6 px-10 flex justify-between items-center opacity-80">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-blue-500">DeepBook Directory</span>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest text-zinc-400">
          <a href="https://github.com/erenyegit" target="_blank" className="hover:text-white transition-colors">Developer</a>
          <span className="text-zinc-700">/</span>
          <span className="text-white">Mainnet</span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-24 px-8">
        
        {/* Başlık Bölümü */}
        <section className="mb-20">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
            DEEP HUB.
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-12">
            The essential directory for DeepBook (DEEP) ecosystem. Simple, fast, and direct.
          </p>

          {/* İSTEDİĞİN ÖZEL BUTON (Rank Checker) */}
          <a 
            href="https://deepbook.tech/points#wallet-wrapper" 
            target="_blank"
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group"
          >
            Check Your DeepBook Rank
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </section>

        {/* Uygulama Listesi */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800/20 border border-zinc-800/20 rounded-3xl overflow-hidden mt-20">
          {apps.map((app) => (
            <a 
              key={app.name} 
              href={app.link} 
              target="_blank" 
              className="group p-12 bg-[#000] hover:bg-zinc-900/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-4 block">
                  {app.category}
                </span>
                <h3 className="text-3xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {app.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[250px]">
                  {app.desc}
                </p>
              </div>
              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[10px] tracking-widest uppercase font-bold text-zinc-500">
                Launch App —&gt;
              </div>
            </a>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-8 opacity-50">
          <div>
            <p className="text-sm font-medium tracking-tight">Crafted by Eren Yegit</p>
            <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-tighter">MacBook Pro & Next.js Experience</p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="https://github.com/erenyegit" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </footer>

      </main>
    </div>
  );
}