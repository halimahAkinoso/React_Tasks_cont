import React from "react";
import NewsCard from "./NewsCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center">
      <NewsCard
        category="Politics"
        image="https://images.unsplash.com/photo-1615296246802-52aa1eec1c6e"
        headline="National Assembly Passes New Electoral Reform Bill"
        excerpt="In a historic move, the National Assembly has approved key amendments aimed at ensuring fair and transparent elections across Nigeria..."
        author="Aisha Bello"
        date="Nov 7, 2025"
        readTime="4"
        link="#"
      />
     <div>
      <NewsCard />
     </div>
    </div>
  );
}

export default App;
