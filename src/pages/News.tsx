import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export function News() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Notizie
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Latest News
          </motion.h1>
          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {news.map((item, idx) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/news/${item.id}`} className="block">
                <div className="overflow-hidden rounded-2xl mb-6 aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs uppercase tracking-widest text-brand-gold">{item.date}</span>
                  <div className="h-px flex-1 bg-brand-dark/10"></div>
                </div>
                <h2 className="text-3xl mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h2>
                <p className="text-brand-dark/60 leading-relaxed mb-6">{item.excerpt}</p>
                <span className="text-sm uppercase tracking-widest font-bold border-b-2 border-brand-gold pb-1 inline-block">
                  Read More
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
