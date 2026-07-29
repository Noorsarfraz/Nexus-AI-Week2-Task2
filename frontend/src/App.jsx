import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIServerMonitor from './components/AIServerMonitor';

// Import Pages
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import BillingPage from './pages/BillingPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ModelsPage from './pages/ModelsPage';
import ApiKeysPage from './pages/ApiKeysPage';

export default function App() {
  // Page load ya refresh hone par bilkul top par le kar janay ke liye
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  

  // sessionStorage se authentication check kar rahe hain
  const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('token'));

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
    <Router>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={
          <div className="bg-[#030712] text-slate-200 selection:bg-brand-primary/30 selection:text-white antialiased overflow-x-hidden w-full">
            <Navbar isAuthenticated={isAuthenticated} />
            <main className="w-full flex flex-col gap-16">
              <Hero analyticsData={analyticsData} />
              <Features featuresList={featuresList} />
              <About />
              <Pricing />
              <Contact />
            </main>
            <Footer />
          </div>
        } />

        {/* Authentication Pages */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Pages (Logout par ab seedha 1st page '/' par bhejenge) */}
        <Route path="/dashboard" element={isAuthenticated ? <DashboardPage setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />} />
        <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/" />} />
        <Route path="/settings" element={isAuthenticated ? <SettingsPage /> : <Navigate to="/" />} />
        <Route path="/billing" element={isAuthenticated ? <BillingPage /> : <Navigate to="/" />} />
        
        {/* Other Pages */}
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/api-keys" element={<ApiKeysPage />} />
        
        {/* Catch-all Redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
