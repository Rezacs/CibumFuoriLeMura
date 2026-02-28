import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("Contact Form Submission:", { name, email, message });
    
    // In a real app, you'd use nodemailer here.
    // For this demo, we'll simulate success.
    res.json({ 
      success: true, 
      message: "Grazie! Your message has been received. We will contact you soon." 
    });
  });

  const newsData = [
    {
      id: 1,
      title: "New Seasonal Menu Launched",
      date: "2024-05-20",
      excerpt: "Discover the flavors of spring with our new locally sourced ingredients.",
      content: "We are thrilled to announce the launch of our new seasonal menu at Cibum Fuori le Mura. This season, our Executive Chef Marco has focused on the vibrant flavors of spring in Tuscany. From fresh artichokes from the neighboring fields to the first wild asparagus of the year, every dish tells a story of the land. Highlights include our new 'Risotto agli Asparagi Selvatici' and the 'Agnello al Forno' with spring herbs. We invite you to join us and experience the true essence of the Tuscan spring.",
      image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      title: "Wine Tasting Evening",
      date: "2024-06-15",
      excerpt: "Join us for an exclusive evening featuring the best Chianti Classico selections.",
      content: "Join us for an unforgettable evening of wine exploration. Our Head Sommelier, Giulia, has curated an exclusive selection of Chianti Classico Riserva from the most prestigious estates in the region. The evening will include a guided tasting of five distinct labels, each paired with a small plate specifically designed to enhance the wine's unique characteristics. Whether you are a seasoned connoisseur or a curious beginner, this event promises to deepen your appreciation for Tuscany's most famous wine. Reservations are highly recommended as space is limited.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  app.get("/api/news", (req, res) => {
    res.json(newsData.map(({ content, ...rest }) => rest));
  });

  app.get("/api/news/:id", (req, res) => {
    const item = newsData.find(n => n.id === parseInt(req.params.id));
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "News not found" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
