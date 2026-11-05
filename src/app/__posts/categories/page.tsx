// import { getAllCategories } from "~/lib/wordpress";
// import { Metadata } from "next";
// import BackButton from "~/ui/components/back";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "All Categories",
//   description: "Browse all categories of our blog posts",
//   alternates: {
//     canonical: "/posts/categories",
//   },
// };

// export default async function Page() {
//   const categories = await getAllCategories();

//   return (
//     <div>
//       <div className="space-y-6">
//         <div className="mb-8">
//           <h2>All Categories</h2>
//           <ul className="grid">
//             {categories.map((category: any) => (
//               <li key={category.id}>
//                 <Link href={`/posts/?category=${category.id}`}>
//                   {category.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <BackButton />
//       </div>
//     </div>
//   );
// }
