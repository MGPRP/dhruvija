import sitePlanningImg from "@/assets/journal-site-planning.jpg?format=webp&quality=80";
import farmlandsImg from "@/assets/journal-farmlands.jpg?format=webp&quality=80";
import reraImg from "@/assets/journal-rera.jpg?format=webp&quality=80";
import monsoonImg from "@/assets/journal-monsoon.jpg?format=webp&quality=80";
import nativeImg from "@/assets/journal-native.jpg?format=webp&quality=80";

export type JournalPost = {
  slug: string;
  title: string;
  chapter: string;
  tag: string;
  readMinutes: number;
  date: string; // ISO
  dateLabel: string;
  excerpt: string;
  tint: "sage" | "peach" | "sky" | "butter" | "lilac";
  image: string;
  imageAlt: string;
  body: string[]; // paragraphs
};

export const journalPosts: JournalPost[] = [
  {
    slug: "reading-the-land-before-drawing-the-line",
    title: "Reading the land before drawing the line",
    chapter: "Field notes",
    tag: "Site planning",
    readMinutes: 6,
    date: "2026-06-14",
    dateLabel: "June 2026",
    excerpt:
      "How we walk a plot for weeks before a single stake goes in, and why the oldest tree on site almost always decides the master plan.",
    tint: "sage",
    image: sitePlanningImg,
    imageAlt: "Aerial view of a planner walking through a green Bengaluru site at golden hour with a sketchbook and measuring tape on a rock",
    body: [
      "Every project we take on begins with a walk. Not with a drone survey or a CAD plan, but a slow, unhurried walk with our senior planners, a topography sketchbook and a cup of filter coffee. We map where the wind falls in the afternoon, where the water pools after a Bengaluru shower, and which trees have been standing long enough to earn a name from the neighbours.",
      "The best masterplans are not imposed on land, they are drawn out of it. A stand of jamun trees becomes the community lung. A gentle west slope becomes the walking spine. A rocky outcrop that would be expensive to blast becomes the meditation deck instead.",
      "This is the quiet part of real estate that rarely makes it into a brochure. But it is the difference between a layout that ages beautifully and one that has to be constantly retrofitted to feel human.",
    ],
  },
  {
    slug: "why-managed-farmlands-are-having-a-moment",
    title: "Why managed farmlands are having a moment",
    chapter: "The long view",
    tag: "Managed farmland",
    readMinutes: 5,
    date: "2026-05-02",
    dateLabel: "May 2026",
    excerpt:
      "The urban Bengalurean is buying land again, but not for a plot number. They are buying a weekend, a mango season, and a way to belong to soil.",
    tint: "peach",
    image: farmlandsImg,
    imageAlt: "A child running along a mud path through a managed mango orchard at sunrise with a terracotta pot in the foreground",
    body: [
      "Ask any of our farmland owners why they bought, and you will rarely hear about square feet. You will hear about their child seeing a papaya on the tree it grew on. About Saturdays that begin with a walk through the orchard instead of an Uber to a mall. About parents who finally have a garden to potter in.",
      "Managed farmlands work because they remove the friction of ownership, the fencing, the water bore, the caretaker, the quarterly paperwork. We handle the land the way a good gardener would, and you get to arrive to a place that is already alive.",
      "The category is only going to grow. Post-pandemic Bengaluru has fallen back in love with slowness, and land that is worked with intention is the most honest expression of that.",
    ],
  },
  {
    slug: "rera-plain-english-guide",
    title: "RERA in plain English: what a buyer should actually check",
    chapter: "Buyer's desk",
    tag: "Compliance",
    readMinutes: 7,
    date: "2026-04-08",
    dateLabel: "April 2026",
    excerpt:
      "A short, jargon-free tour of the RERA registration, the carpet-area vs super-area confusion, and the four documents to always ask for before signing.",
    tint: "sky",
    image: reraImg,
    imageAlt: "Overhead view of Indian real estate registration papers on a warm wooden desk with a fountain pen and filter coffee",
    body: [
      "RERA changed real estate in India for the better, but for most first-time buyers it still lives behind a wall of jargon. Here is the shortest useful version we know how to write.",
      "First: every project you consider should have a RERA number, and that number should resolve on the Karnataka RERA portal to the exact tower, phase or layout you are being sold. If the promoter hesitates, walk away.",
      "Second: know the difference between carpet, built-up and super built-up area. RERA prices are quoted on carpet area, the actual usable floor inside your walls. Everything else is a marketing number.",
      "Third: ask for the encumbrance certificate, the sanctioned plan, the RERA-registered agreement draft, and the latest quarterly progress report. If all four exist and match, you have done more diligence than 90% of buyers.",
    ],
  },
  {
    slug: "designing-for-bengaluru-monsoon",
    title: "Designing for the Bengaluru monsoon (not just against it)",
    chapter: "Craft",
    tag: "Architecture",
    readMinutes: 6,
    date: "2026-02-19",
    dateLabel: "February 2026",
    excerpt:
      "Deep eaves, raised plinths, permeable driveways, and a stubborn refusal to specify shiny tiles. Small choices that turn a rainy weekend from a nuisance into the best part of the week.",
    tint: "butter",
    image: monsoonImg,
    imageAlt: "A modern home with deep eaves and a wet terracotta verandah looking out onto a rain-soaked Bengaluru garden",
    body: [
      "Bengaluru gets a soft, insistent rain for most of the year. Homes here should welcome that rain, not seal themselves against it.",
      "We design with deep eaves so the walls stay dry and windows can stay open in a shower. Plinths are raised well above the driveway so no room ever floods. Permeable paving lets stormwater return to the ground where it belongs instead of choking a stormwater drain three streets away.",
      "And we refuse, project after project, to specify high-gloss floor tiles. They are dangerous when wet and they never really suit the light of a rainy morning. A quiet matte finish is better in every way.",
    ],
  },
  {
    slug: "the-small-economics-of-native-planting",
    title: "The small economics of native planting",
    chapter: "Notes from the grove",
    tag: "Landscape",
    readMinutes: 4,
    date: "2025-12-05",
    dateLabel: "December 2025",
    excerpt:
      "A native tree costs less, drinks less, lives longer, and hosts twenty times the birdlife of an imported ornamental. The math is not close.",
    tint: "lilac",
    image: nativeImg,
    imageAlt: "A young native sapling emerging from dark soil beneath a mature neem canopy with a bulbul bird in soft focus",
    body: [
      "We are gently, permanently biased toward native species in every landscape plan we draw. Not for ideology, but for arithmetic.",
      "A native honge or a neem, once past its first monsoon, needs almost no supplementary water. It grows shade a family will actually sit under. It hosts an ecosystem, bulbuls, bees, squirrels, the occasional barn owl, that no imported palm has ever replicated.",
      "The cost curve is on our side too. Native saplings from a Karnataka nursery are a fraction of the price of a shipped ornamental, and they survive the transplant at nearly twice the rate. The greenest choice is almost always the cheapest one, if you are willing to be patient.",
    ],
  },
];

export function getPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}