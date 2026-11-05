import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface Post {
  title: string;
  date: string;
  author: string;
  coverImage: string;
  content: string;
}

export default async function PostPage({ params }: any) {
  const { slug } = await params as { slug: string };

  const decodedSlug = decodeURIComponent(slug);
  
  const filePath = path.join(process.cwd(), `public/content/blog/${decodedSlug}.json`);
  if (!fs.existsSync(filePath)) return notFound();

  const post: Post = JSON.parse(fs.readFileSync(filePath, "utf8"));

return (
  <main>
    <section id="features" className="py-8 ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span>
              {post.title}
            </span>
        </h1>
        <div className="flex justify-between items-center gap-4 text-sm mb-8">
          <h5 className="text-gray-500">
            Publicado el <span className="text-gray-400">{new Date(post.date).toLocaleDateString()}</span> por{" "}
            <span className="font-semibold italic text-foreground">{post.author}</span>
          </h5>

          
        </div>
        
          <div className="h-96 my-12 md:h-[500px] overflow-hidden flex items-center justify-center border rounded-lg bg-accent/25">
            <img
              className="w-full h-full object-cover"
              src={post.coverImage}
              alt={post.title}
            />
          </div>
        
      </div>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h1>,
            h2: ({children}) => <h2 className="text-2xl font-bold mt-6 mb-3 text-foreground">{children}</h2>,
            h3: ({children}) => <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">{children}</h3>,
            h4: ({children}) => <h4 className="text-lg font-semibold mt-3 mb-2 text-foreground">{children}</h4>,
            p: ({children}) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
            ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
            ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
            li: ({children}) => <li className="text-gray-700">{children}</li>,
            blockquote: ({children}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">{children}</blockquote>,
            strong: ({children}) => <strong className="font-bold text-foreground">{children}</strong>,
            em: ({children}) => <em className="italic text-foreground">{children}</em>,
            div: ({children, style, ...props}: any) => {
              if (style && style.textAlign) {
                return <div className={`mb-4 ${style.textAlign === 'left' ? 'text-left' : style.textAlign === 'center' ? 'text-center' : style.textAlign === 'right' ? 'text-right' : 'text-justify'}`} {...props}>{children}</div>;
              }
              return <div {...props}>{children}</div>;
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      </div>
    </section>
  </main>
)
}