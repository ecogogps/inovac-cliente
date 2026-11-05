// import { getAllAuthors } from "~/lib/wordpress";
// import { Metadata } from "next";
// import BackButton from "~/ui/components/back";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "All Authors",
//   description: "Browse all authors of our blog posts",
//   alternates: {
//     canonical: "/posts/authors",
//   },
// };

// export default async function Page() {
//   const authors = await getAllAuthors();

//   return (
//     <div>
//       <div className="space-y-6">
//         <div className="mb-8">
//           <h2>All Authors</h2>
//           <ul className="grid">
//             {authors.map((author: any) => (
//               <li key={author.id}>
//                 <Link href={`/posts/?author=${author.id}`}>{author.name}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <BackButton />
//       </div>
//     </div>
//   );
// }
