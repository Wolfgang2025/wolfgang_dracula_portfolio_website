"use client";

import GothicScene from "../app/components/GothicScene"; // Importing the single Gothic Scene
import Link from "next/link";
import "../app/styles/globals.css"; // Importing global styles

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Dracula Portfolio</title>
      </head>
      <body className="relative w-screen h-screen overflow-hidden">
        {/* 3D Gothic Background Effects */}
        <GothicScene />

        {/* Left Side - Vampire Themed Social Buttons */}
        <div className="vampire-buttons-container">
          <Link
            href="https://www.linkedin.com/in/h-m-36a31a286/"
            target="_blank"
          >
            <div className="vampire-button">🩸 LinkedIn</div>
          </Link>
          <Link href="https://github.com/Wolfgang2025" target="_blank">
            <div className="vampire-button">📖 GitHub</div>
          </Link>
          <Link href="https://www.linkedin.com/in/h-m-36a31a286/details/projects/">
            <div className="vampire-button">🏰 My Projects</div>
          </Link>
          <Link href="https://www.linkedin.com/in/h-m-36a31a286/details/projects/">
            <div className="vampire-button">🏰 My Projects</div>
          </Link>
        </div>

        {/* Right Side - Valerius AI Box */}
        <div className="absolute right-0 top-0 h-screen w-1/3 bg-black/90 text-white p-6 gothic-border flex flex-col justify-between">
          <div>
            <h2 className="text-red-600 text-2xl gothic-text">Valerius AI</h2>
            <p className="mt-2">
              "Hello, traveller. My name is Valerius. Why do you wander in this
              guarded realm? Identify yourself, lest harm befalls you.
              Transylvania is the domain of elusive overlords, and they do not
              take kindly to mortal trespassers. Speak now, so I may decide your
              fate..."
            </p>
            <input
              type="text"
              className="mt-4 p-2 w-full bg-black border border-red-600"
              placeholder="Identify yourself..."
            />
            <button className="mt-2 p-2 bg-red-600 hover:bg-red-800 transition w-full">
              Submit
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="absolute inset-0 flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
