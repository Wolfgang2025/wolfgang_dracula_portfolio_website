"use client";

import gsap from "gsap";
import { useEffect } from "react";
import "../app/styles/globals.css";
import ValeriusHomepage from "../app/components/ValeriusHomepage"; // Adjust the path if needed

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <ValeriusHomepage />
    </div>
  );
}
