import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";
import { motion } from "motion/react";

export function NewsDetail() {
  const { id } = useParams();
  const article = newsData.find((n) => n.id === Number(id));

  if (!article) {
    return (
      <div className="pt-32 pb-24 text-center bg-[#F5EDE3] min-h-screen">
        <h1 className="text-4xl text-[#8B1E2D] mb-6">Article not found</h1>
        <Link
          to="/news"
          className="text-[#E6A23C] uppercase tracking-widest text-sm hover:underline"
        >
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-[#F5EDE3] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Back Link */}
        <Link
          to="/news"
          className="text-sm uppercase tracking-widest text-[#E6A23C] hover:underline"
        >
          ← Back to News
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-[#E6A23C]">
            {article.date}
          </span>

          <h1 className="text-4xl md:text-6xl mt-4 text-[#8B1E2D] leading-tight">
            {article.title}
          </h1>

          <div className="w-24 h-px bg-[#E6A23C] mt-6"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-xl md:text-2xl text-[#5a5a40] leading-relaxed whitespace-pre-line"
          >
            {article.content}
          </motion.div>
        </div>
      </div>
    </div>
  );
}