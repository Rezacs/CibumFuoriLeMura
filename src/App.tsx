import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header, Footer } from "./components/Layout";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { History } from "./pages/History";
import { Contact } from "./pages/Contact";
import { News } from "./pages/News";
import { NewsDetail } from "./pages/NewsDetail";
import { FoodGallery } from "./pages/FoodGallery";
import { Wines } from "./pages/Wines";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/history" element={<History />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<FoodGallery />} />
            <Route path="/wines" element={<Wines />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

