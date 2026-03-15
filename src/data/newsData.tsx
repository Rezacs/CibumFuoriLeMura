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
    title: "Pisa oltre la Torre: incontro sull’ospitalità della città",
    date: "6 Marzo 2026",
    excerpt: "A Palazzo Gambacorti un incontro dedicato al futuro dell’ospitalità e allo sviluppo turistico della città di Pisa.",
    image: "/images/News/turismo.jpg",
    content: `
Venerdì 6 marzo 2026, nella Sala delle Baleari di Palazzo Gambacorti a Pisa,
si terrà l’incontro pubblico intitolato "Pisa oltre la Torre. L’ospitalità che resta".

L’iniziativa nasce con l’obiettivo di riflettere su come sta cambiando
l’ospitalità nella città di Pisa e su quale ruolo possa avere nel futuro
del territorio, andando oltre il turismo veloce e concentrato
soltanto attorno alla Piazza dei Miracoli.

L’incontro sarà un momento di dialogo aperto tra cittadini,
professionisti e operatori del settore, per discutere temi
come il valore degli spazi urbani, l’equilibrio tra residenti e visitatori
e il ruolo dell’accoglienza nello sviluppo della città.

All’evento parteciperanno:
• Paolo Pesciatini, assessore al Turismo del Comune di Pisa  
• Nico Tedeschi, consulente immobiliare e volto televisivo  
• Alberto Furia, imprenditore locale  
• Ilaria Mari, architetto e divulgatrice di design per l’ospitalità  

Secondo l’assessore Pesciatini, l’obiettivo è coinvolgere sempre più
la cittadinanza nella costruzione di Pisa come destinazione turistica
consapevole, valorizzando autenticità, identità e rispetto
per il patrimonio della città.

L’incontro vuole offrire uno spazio di confronto concreto
su casa, comunità e futuro urbano, perché l’ospitalità non riguarda
soltanto il turismo, ma il modo in cui una città viene vissuta
ogni giorno da chi la abita e da chi la visita.
    `
  }
];