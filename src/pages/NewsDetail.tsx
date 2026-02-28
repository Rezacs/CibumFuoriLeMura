import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
}

export function NewsDetail() {
  const { id } = useParams();
  const [item, setItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/news/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="pt-48 pb-24 text-center">
        <p className="text-xl font-serif italic">Caricamento...</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-4xl mb-8">News not found</h1>
        <Link to="/news" className="text-brand-gold hover:underline">Back to News</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link to="/news" className="inline-flex items-center gap-2 text-brand-dark/60 hover:text-brand-gold transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} /> Back to News
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Calendar size={16} className="text-brand-gold" />
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">{item.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-12 leading-tight">{item.title}</h1>

          <div className="overflow-hidden rounded-3xl mb-12 shadow-2xl aspect-video">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg max-w-none text-brand-dark/80 font-serif leading-relaxed">
            {item.content.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-6 text-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
