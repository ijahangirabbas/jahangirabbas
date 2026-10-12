export type VerseItem = {
  id: string;
  title: string;
  lines: string[];
  theme?: string;
  date?: string;
  reference?: string;
};

export type HeaderVerse = {
  text: string;
  reference: string;
};

export const HEADER_VERSES: HeaderVerse[] = [
  {
    text: "My Lord, increase me in knowledge.",
    reference: "Surah Taha (20:114)",
  },
  {
    text: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:5)",
  },
  {
    text: "Excellence is not an act, but a habit of perfection.",
    reference: "Wisdom",
  },
  {
    text: "In the silence between lines of code, the architecture of thought is born.",
    reference: "Reflection",
  },
];

export const POETIC_VERSES: VerseItem[] = [
  {
    id: "architecture-of-thought",
    title: "The Architecture of Thought",
    theme: "Engineering & Creation",
    date: "2026",
    lines: [
      "We trace invisible lines across digital stone,",
      "Building cathedrals of logic where minds stand alone.",
      "Not merely tokens or vectors that stream in the night,",
      "But whispers of order turning darkness to light."
    ],
  },
  {
    id: "latent-space",
    title: "Latent Space",
    theme: "Philosophy & AI",
    date: "2026",
    lines: [
      "In dimensions unseen where embeddings abide,",
      "A million true thoughts in high vectors collide.",
      "Beyond silent prompts and the weights we bestow,",
      "Lies the beauty of truths that we strive to know."
    ],
  },
  {
    id: "chasing-perfection",
    title: "Chasing Perfection",
    theme: "Craftsmanship",
    date: "2025",
    lines: [
      "Small details matter, the sub-pixels align,",
      "A rhythm of reason, a deliberate design.",
      "To build for the future with rigor and grace,",
      "And leave a fine mark in this digital space."
    ],
  },
  {
    id: "the-worker-and-the-queue",
    title: "The Stream of Time",
    theme: "Reflection",
    date: "2025",
    lines: [
      "Task by task the worker runs,",
      "Beneath the glow of digital suns.",
      "Patience yields what haste destroys,",
      "Calm mind finds peace amidst the noise."
    ],
  },
];
