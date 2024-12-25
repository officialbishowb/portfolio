import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Project /> */}
      <Contact />
      <Footer />
  </div>
  );
}



