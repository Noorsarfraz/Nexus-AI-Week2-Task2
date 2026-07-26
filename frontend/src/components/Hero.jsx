import React, { useEffect } from 'react';
import Button from './Button';
import Metrics from './Metrics';
import heroIllustration from '../assets/hero-illustration.png';

export default function Hero({ analyticsData }) {
  // Component load hotay hi page ko bilkul top par le aane ke liye
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-16 sm:pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden w-full">
      
      {/* Fine Cyber Grid Graphic Layer */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>
      
      {/* Layered High-End Ambient Lighting */}
      <div className="absolute top-[-5%] left-1/4 h-[350px] w-[350px] bg-brand-primary/15 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[15%] right-10 h-[300px] w-[300px] bg-purple-600/10 blur-[100px] pointer-events-none"></div>

      {/* Main Grid: Scalable Side-by-Side on both Mobile & Desktop */}
      <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-center w-full relative z-10 py-4">
        
        {/* Left Column: Scalable Text Content (Takes 7 columns on mobile for better readability, 6 on desktop) */}
        <div className="col-span-7 lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Floating Glass Component Badge */}
          <div className="inline-flex items-center gap-1.5 bg-slate-950/45 backdrop-blur-md text-slate-300 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-3 border border-slate-800/60 shadow-sm">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-brand-primary"></span>
            </span>
            <span className="bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent truncate">Nexus Terminal</span>
            <span className="text-[9px] bg-brand-primary/20 text-brand-primary px-1 rounded font-mono">v4.2</span>
          </div>
          
          {/* Scalable Heading for Mobile and Laptop */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
            Architect your metrics in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-indigo-400 to-purple-400">real-time</span> with AI nodes.
          </h1>
          
          <p className="mt-2.5 text-[11px] sm:text-sm md:text-base text-slate-400 max-w-lg leading-relaxed">
            Say goodbye to sluggish databases. Seamlessly link production servers and let automated intelligence construct clean data maps natively.
          </p>
          
          {/* Scalable Call to Actions */}
          <div className="mt-4 flex flex-col sm:flex-row gap-2.5 w-full">
            <Button variant="primary" className="w-full sm:w-auto px-3.5 py-2 text-[11px] sm:text-sm shadow-md shadow-brand-primary/20 justify-center">Initialize Core App</Button>
            <Button variant="secondary" className="w-full sm:w-auto px-3.5 py-2 text-[11px] sm:text-sm border-slate-800 bg-slate-900/30 text-slate-300 hover:bg-slate-900 justify-center">Inspect Blueprint</Button>
          </div>
        </div>

        {/* Right Column: Scalable Image (Takes 5 columns on mobile, 6 on desktop) */}
        <div className="col-span-5 lg:col-span-6 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-transparent to-[#030712] z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[#030712]/40 rounded-3xl blur-2xl pointer-events-none"></div>

          <div className="relative w-full overflow-hidden p-0 bg-transparent">
            <img 
              src={heroIllustration} 
              alt="Nexus AI Architecture Network" 
              className="w-full h-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-500 [mask-image:radial-gradient(circle_at_center,black_50%,transparent_90%)] filter blur-[0.3px] saturate-125"
            />
          </div>
        </div>

      </div>

      {/* Metrics / Interactive Dashboard */}
      <div className="w-full mt-10 sm:mt-16">
        <Metrics analyticsData={analyticsData} />
      </div>
    </section>
  );
}