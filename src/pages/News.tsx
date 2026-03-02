import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";

export function News() {
  return (
    <div className="pb-24 bg-[#F5EDE3] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <span className="text-[#E6A23C] uppercase tracking-[0.3em] text-sm mb-4 block">
            Notizie
          </span>
          <h1 className="text-5xl md:text-7xl mb-6 text-[#8B1E2D]">
            Latest News
          </h1>
          <div className="w-24 h-px bg-[#E6A23C] mx-auto"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newsData.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <Link to={`/news/${item.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <span className="text-xs uppercase tracking-widest text-[#E6A23C]">
                    {item.date}
                  </span>

                  <h2 className="text-2xl mt-3 mb-4 text-[#8B1E2D] group-hover:text-[#E6A23C] transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-[#5a5a40] leading-relaxed mb-6">
                    {item.excerpt}
                  </p>

                  <span className="text-sm uppercase tracking-widest font-bold border-b-2 border-[#E6A23C] pb-1">
                    Read More
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}