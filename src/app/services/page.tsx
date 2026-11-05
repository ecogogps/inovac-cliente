'use client'
import { useEffect, useState } from "react";
import { loadContent } from "~/lib/content";
import ServicesClient from "./ServicesClient";

export default function ServicesPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    loadContent('services')
      .then(setContent)
      .catch((err) => console.error('Failed to load content:', err));
  }, []);

  if (!content) return <p className="p-12">Loading...</p>;

  return <ServicesClient content={content} />;
}
