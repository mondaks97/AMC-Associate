import React from 'react';
import { Heart, Clock } from 'lucide-react';

const Card = ({ 
  imageUrl, 
  category, 
  title, 
  author, 
  time, 
  link = "#"
}) => {
  return (
    <article className="group relative w-full max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer">
      {/* Hover overlay info */}
      <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 pointer-events-none">
        <div className="flex justify-between items-start h-full">
          <Heart className="w-5 h-5 text-white fill-transparent hover:fill-white transition-all" />
          <div className="flex items-center bg-black/20 rounded-full px-2 py-1">
            <Clock className="w-4 h-4 text-white mr-1" />
            <span className="text-white text-sm font-medium">{time}</span>
          </div>
        </div>
      </div>
      
      {/* Image container */}
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-300"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
      </div>
      
      {/* Card content */}
      <div className="p-6 group-hover:bg-transparent transition-all duration-300">
        <span className="inline-block text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">
          {category}
        </span>
        <h3 className="text-gray-900 group-hover:text-black text-xl font-bold font-serif mb-3 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
          by <a href={link} className="text-amber-600 group-hover:text-amber-300 font-semibold hover:underline transition-colors">{author}</a>
        </p>
      </div>
    </article>
  );
};

const BlogPage = () => {
  const cardData = [
    {
      imageUrl: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      category: "Recipe",
      title: "Crisp Spanish tortilla Matzo brei",
      author: "Celeste Mills",
      time: "15 min"
    },
    {
      imageUrl: "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      category: "Travel", 
      title: "Discover the sea",
      author: "John Doe",
      time: "5 min"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 font-serif">
      <section className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              category={card.category}
              title={card.title}
              author={card.author}
              time={card.time}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;