import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BookingPage } from "./components/Booking";
import StaffPage from "./components/StaffPortal";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function BookingWrapper() {
  const navigate = useNavigate();
  return <BookingPage onBack={() => navigate("/")} />;
}

function StaffWrapper() {
  const navigate = useNavigate();
  return <StaffPage onClose={() => navigate("/")} />;
}

export default function App() {
  return (
    <main className="min-h-screen bg-brand-bg font-sans text-brand-text overflow-x-hidden selection:bg-brand-primary selection:text-white mt-16 md:mt-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingWrapper />} />
        <Route path="/staff" element={<StaffWrapper />} />
      </Routes>
    </main>
  );
}
