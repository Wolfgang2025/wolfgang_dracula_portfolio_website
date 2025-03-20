import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Missing search query" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const geminiResponse = await fetch(
      "https://api.gemini.ai/v1/generate-text",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: `Search through the project's files and folders. Provide a brief and accurate answer: ${prompt}`,
        }),
      }
    );

    const data = await geminiResponse.json();

    return NextResponse.json({
      result: data.choices?.[0]?.text || "No relevant data found.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
