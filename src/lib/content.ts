export async function loadContent(section: string, file = `${section}.json`) {
  const response = await fetch(`/content/${section}/${file}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch /content/${section}/${file}: ${response.status}`);
  }
  return response.json();
}