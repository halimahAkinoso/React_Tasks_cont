// BlogPost.jsx
import React from 'react';

const relatedPosts = [
  'How to Cook Jollof Rice',
  'Top 5 Nigerian Fabrics',
  'The History of Suya',
  'Palm Wine: Nature’s Drink',
];

const BlogPost = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Featured Image */}
      <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/1200x400?text=Featured+Image"
          alt="Featured"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Metadata */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">Exploring Nigerian Culture Through Food and Fashion</h1>
        <p className="text-sm text-gray-500">
          By <span className="font-medium text-gray-700">Halimat</span> · Nov 12, 2025 · 6 min read
        </p>
      </div>

      {/* Content and Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Nigeria’s rich cultural heritage is deeply reflected in its cuisine and fashion. From the spicy aroma of Suya to the vibrant patterns of Ankara, every element tells a story.
          </p>
          <p>
            Jollof rice, a staple dish, is more than just food — it’s a symbol of celebration. Similarly, Aso-Ebi and Agbada are worn with pride during weddings and festivals, showcasing elegance and tradition.
          </p>
          <p>
            Whether sipping palm wine under a mango tree or dancing in puff puff-filled parties, the essence of Naija life is vibrant, flavorful, and unforgettable.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Related Posts</h2>
          <ul className="space-y-2 text-sm text-green-700">
            {relatedPosts.map((post, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                {post}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;