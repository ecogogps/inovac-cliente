import fs from "fs";
import path from "path";

interface Post {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  coverImage: string;
  content: string;
  slug: string;
}

export default async function BlogPage() {
  const postsDir = path.join(process.cwd(), "public/content/blog");
  const files = fs.readdirSync(postsDir);

  const posts: Post[] = files.map((file) => {
    const filePath = path.join(postsDir, file);
    const post = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const slug = file.replace(/\.json$/, "");
    return { ...post, slug: encodeURIComponent(slug) };
  });

  return (
    <section className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-3">Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Historias, noticias y artículos. Explora nuestras últimas publicaciones.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group block"
          >
            <article className="h-full flex flex-col rounded-2xl overflow-hidden border bg-white shadow-sm transition hover:shadow-md hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-5 flex flex-col">
                <h2 className="text-lg font-semibold mb-2 line-clamp-2 ">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(post.date).toLocaleDateString()} — {post.author}
                </p>
                <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-foreground font-medium group-hover:underline">
                  Leer más →
                </span>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}