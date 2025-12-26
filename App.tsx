import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ForSellers } from './components/ForSellers';
import { ForBuyers } from './components/ForBuyers';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { DashboardYoco } from './components/DashboardYoco';

function Home() {
  return (
    <div className="min-h-screen bg-[#FFF0DD]">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <ForSellers />
      <ForBuyers />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller/dashboard" element={<Dashboard />} />
        <Route path="/seller/hub" element={<DashboardYoco />} />
      </Routes>
    </Router>
  );
}
