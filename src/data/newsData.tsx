export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "New Spring Menu 2026",
    date: "March 2026",
    excerpt: "Discover our new seasonal dishes inspired by the Tuscan countryside.",
    image: "/images/Food/caption (5).jpg",
    content: `
This spring, Cibum Fuori le Mura introduces a new seasonal menu celebrating
fresh vegetables, local seafood, and handmade pasta.

Our chef has carefully selected ingredients from local markets,
combining traditional Tuscan recipes with a modern touch.

Highlights include:
• Grilled sea bass with lemon and herbs  
• Handmade pici with asparagus and pecorino  
• Fresh strawberry tiramisu  

We invite you to join us and experience the flavors of the season.
    `
  },
  {
    id: 2,
    title: "Wine & Grill Evening",
    date: "February 2026",
    excerpt: "An exclusive evening dedicated to Tuscan wines and charcoal grill specialties.",
    image: "/images/Food/caption (8).jpg",
    content: `
Join us for a special Wine & Grill Evening featuring selected Tuscan wines
paired with our signature charcoal-grilled dishes.

Our sommelier will guide you through:
• Chianti Classico Riserva  
• Brunello di Montalcino  
• Vermentino di Toscana  

Each wine will be paired with carefully prepared grill specialties.

Limited seats available — reserve your table now.
    `
  }
];