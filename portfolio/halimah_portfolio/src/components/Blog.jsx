import { blog } from "../data/blog";

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-8 md:px-20 bg-white">
      <h2 className="text-3xl font-semibold text-slate-900 mb-10">Blog</h2>

      <div className="space-y-10">
        {blog.map((post, i) => (
          <div key={i} className="border-b border-slate-200 pb-5">
            <h3 className="text-xl font-semibold text-black">{post.title}</h3>
            <p className="text-slate-500 text-sm mt-1">{post.date}</p>
            <p className="text-slate-600 mt-3">{post.snippet}</p>

            <a href={post.link} className="text-sm text-black mt-3 inline-block hover:underline">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
