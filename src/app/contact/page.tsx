'use client'
import { useEffect, useState } from "react";
import { loadContent } from "~/lib/content";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    loadContent('contact')
      .then(setContent)
      .catch((err) => console.error('Failed to load content:', err));
  }, []);

  if (!content) return <p className="p-12">Loading...</p>;

  return <ContactClient content={content} />;
}

