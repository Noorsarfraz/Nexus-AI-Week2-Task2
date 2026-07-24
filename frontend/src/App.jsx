import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIServerMonitor from './components/AIServerMonitor';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [analyticsData] = useState([
    { id: "rev", title: "Total Revenue API", value: "$84,259.00", trend: "↑ +14.2%", isPositive: true, subtext: "vs last month" },
    { id: "usr", title: "Active Nodes", value: "32,481", trend: "↑ +22.8%", isPositive: true, subtext: "real-time synchronization" },
    { id: "cvr", title: "API Endpoint Latency", value: "14ms", trend: "↓ -4.1%", isPositive: false, subtext: "optimized response rate" },
  ]);

  const [featuresList] = useState([
    { icon: "⚡", title: "Predictive Analytics Architecture", desc: "Advanced algorithmic data indexing structures mapping complex consumer cohorts up to 3 quarters ahead.", premium: true },
    { icon: "🔒", title: "End-to-End Cryptography", desc: "Bank-grade protocol tokens keeping client configuration layers securely containerized and isolated.", premium: false },
    { icon: "🌐", title: "Dynamic Webhook Streaming", desc: "Low-latency streaming channels delivering instantaneous events straight to your application core.", premium: false }
  ]);

  return (
    <div className="bg-[#030712] text-slate-200 selection:bg-brand-primary/30 selection:text-white antialiased overflow-x-hidden w-full">
      <Navbar />
      
      <main className="w-full flex flex-col gap-16">
        <Hero analyticsData={analyticsData} />
        <Features featuresList={featuresList} />
        <AIServerMonitor />
        <About />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}