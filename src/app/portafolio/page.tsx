'use client'
import { useEffect, useState } from "react";
import { loadContent } from "~/lib/content";
import PortafolioClient from "./PortafolioClient";

export default function PortafolioPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    loadContent('portafolio')
      .then(setContent)
      .catch((err) => console.error('Failed to load content:', err));
  }, []);

  if (!content) return <p className="p-12">Loading...</p>;

  return <PortafolioClient content={content} />;
}