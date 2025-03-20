import Image from "next/image";
import BackgroundEffect from "@/components/BackgroundEffect";
import AnimatedText from "@/components/AnimatedText";

export default function EducationPage() {
  return (
    <main className="relative h-screen flex flex-col justify-center items-center bg-black text-white text-center">
      {/* Background Animation */}
      <BackgroundEffect imageSrc="/backgrounds/education.jpg" />

      {/* Animated Text */}
      <AnimatedText
        text="The Dark Knowledge of Wolfgang"
        className="dracula-title"
      />

      {/* Content */}
      <div className="dracula-content">
        <p>
          Wolfgang studied <strong>Dark Sciences</strong> and{" "}
          <strong>Ancient AI Rituals</strong> at the
          <strong> Transylvanian University of Necromancy</strong>.
        </p>
      </div>
    </main>
  );
}
