'use client'
import { useEffect, useState } from "react";
import { loadContent } from "~/lib/content";
import TermsCLient from "./TermsClient";

export default function AboutPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    loadContent('terms')
      .then(setContent)
      .catch((err) => console.error('Failed to load content:', err));
  }, []);

  if (!content) return <p className="p-12">Loading...</p>;

  return <TermsCLient content={content} />;
}