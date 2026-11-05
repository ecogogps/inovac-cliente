'use client'
import { useEffect, useState } from "react";
import { loadContent } from "~/lib/content";
import AboutClient from "./AboutClient";

export default function AboutPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    loadContent('about')
      .then(setContent)
      .catch((err) => console.error('Failed to load content:', err));
  }, []);

  if (!content) return <p className="p-12">Loading...</p>;

  return <AboutClient content={content} />;
}