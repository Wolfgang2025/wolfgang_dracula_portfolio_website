"use client";

import Link from "next/link";
import ValeriusAI from "../app/components/ValeriusAI"; // Adjust path if needed
import "../app/styles/globals.css"; // Ensure this path is correct

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Dracula Portfolio</title>
      </head>
      <body className="relative w-screen h-screen overflow-hidden">
        {/* Left Side - Vampire Themed Social Buttons */}
        <div className="vampire-buttons-container">
          <Link
            href="https://www.linkedin.com/in/h-m-36a31a286/"
            target="_blank"
          >
            <div className="vampire-button">🩸Wolfgang's LinkedIn</div>
          </Link>
          <Link href="https://github.com/Wolfgang2025" target="_blank">
            <div className="vampire-button">📖 Wolfgang's GitHub</div>
          </Link>
          <Link href="https://www.linkedin.com/in/h-m-36a31a286/details/projects/">
            <div className="vampire-button">🏰 Wolfgang's Projects</div>
          </Link>
          <Link href="https://gamma.app/docs/Wolfgang-Dracula-Software-Engineering-Portfolio-q3bv2hzz12fh138">
            <div className="vampire-button">🩸 Wolfgang's Presentation</div>
          </Link>
        </div>

        {/* Right Side - Valerius AI Box */}
        <div className="valerius-ai-side ml-4">
          <ValeriusAI />
        </div>

        {/* Main Content */}
        <main className="absolute inset-0 flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
