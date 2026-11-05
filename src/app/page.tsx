'use client'
import { useEffect, useState } from 'react';
import { loadContent } from '~/lib/content';
import HomeClient from './HomeClient';

export default function HomePage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    loadContent('home')
      .then(setContent)
      .catch(err => console.error('Failed to load content:', err));
  }, []);

  if (!content) return <p className="p-12">Loading...</p>;

  return <HomeClient content={content} />;
}