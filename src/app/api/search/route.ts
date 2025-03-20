import { NextResponse } from "next/server";

const cvData = {
  education: {
    title: "Education",
    description: "Wolfgang studied Dark Sciences at Transylvanian University.",
    image: "/images/education.png",
  },
  experience: {
    title: "Experience",
    description: "Master of Shadows at the Vampire Tech Guild.",
    image: "/images/experience.png",
  },
  skills: {
    title: "Skills",
    description:
      "Expert in AI Necromancy, Blood Coding, and Shadow Engineering.",
    image: "/images/skills.png",
  },
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query")?.toLowerCase();

  if (!query) {
    return NextResponse.json({ error: "No search query provided." });
  }

  const result = cvData[query];

  if (!result) {
    return NextResponse.json({ error: "No matching results found." });
  }

  return NextResponse.json(result);
}
