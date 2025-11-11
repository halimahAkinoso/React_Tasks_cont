import React from "react";

const NewsCard = ({
  category = "Politics",
  image,
  headline,
  excerpt,
  author,
  date,
  readTime,
  link = "#",
}) => {
  // Category color logic
  const categoryColors = {
    Politics: "bg-nigeriaGreen text-white",
    Sports: "bg-nigeriaGold text-black",
    Entertainment: "bg-orange-500 text-white",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Featured Image */}
      <div className="relative">
        <img
          src={image}
          alt={headline}
          className="w-full h-48 object-cover"
        />
        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[category]}`}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Headline */}
        <h2 className="text-xl font-bold text-nigeriaGreen leading-snug hover:text-nigeriaGold transition-colors">
          {headline}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            By <span className="font-semibold text-gray-700">{author}</span>
          </span>
          <span>{date}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-gray-500 text-xs">{readTime} min read</span>
          <a
            href={link}
            className="text-nigeriaGreen font-semibold text-sm hover:text-nigeriaGold transition-colors"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
