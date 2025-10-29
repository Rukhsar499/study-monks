// /data/subjects.ts
export type Resource = {
  id: string;
  title: string;
  file?: string;     // for download or video url
  type: "sheet" | "video" | "mcq";
};

export type Topic = {
  id: string;
  title: string;
  resources: Resource[];
};

export type Subject = {
  id: string;           // slug used in URL, e.g. "mathematics"
  title: string;        // display title
  subtitle?: string;
  image: string;
  topics: Topic[];
};

export const subjects: Subject[] = [
  {
    id: "mathematics",
    title: "Mathematics",
    image: "/assets/img/Maths.png",
    topics: [
      {
        id: "geometry",
        title: "Geometry",
        resources: [
          { id: "g-sheet-1", title: "Geometry - Practice Sheet 1", file: "/sheets/geometry-1.pdf", type: "sheet" },
          { id: "g-video-1", title: "Geometry - Intro Video", file: "/videos/geometry-intro.mp4", type: "video" },
          { id: "g-mcq-1", title: "Geometry - MCQ Set 1", file: "/mcq/geometry-1.json", type: "mcq" },
        ],
      },
      {
        id: "algebra",
        title: "Algebra",
        resources: [
          { id: "a-sheet-1", title: "Algebra - Practice Sheet 1", file: "/sheets/algebra-1.pdf", type: "sheet" },
          { id: "a-video-1", title: "Algebra - Basics", file: "/videos/algebra-basics.mp4", type: "video" },
          { id: "a-mcq-1", title: "Algebra - MCQ Set 1", file: "/mcq/algebra-1.json", type: "mcq" },
        ],
      },
      {
        id: "trigonometry",
        title: "Trigonometry",
        resources: [
          { id: "t-sheet-1", title: "Trigonometry - Practice Sheet 1", file: "/sheets/trig-1.pdf", type: "sheet" },
          { id: "t-video-1", title: "Trigonometry - Basics", file: "/videos/trig-basics.mp4", type: "video" },
        ],
      },
    ],
  },

  {
    id: "science",
    title: "Science",
    image: "/assets/img/EducationScience.png",
    topics: [
      {
        id: "physics",
        title: "Physics",
        resources: [
          { id: "p-sheet-1", title: "Physics - Practice Sheet 1", file: "/sheets/physics-1.pdf", type: "sheet" },
        ],
      },
      {
        id: "chemistry",
        title: "Chemistry",
        resources: [
          { id: "c-video-1", title: "Chemistry - Reaction Basics", file: "/videos/chem-reactions.mp4", type: "video" },
        ],
      },
      {
        id: "biology",
        title: "Biology",
        resources: [
          { id: "b-mcq-1", title: "Biology - MCQ Set 1", file: "/mcq/biology-1.json", type: "mcq" },
        ],
      },
    ],
  },

  {
    id: "english",
    title: "English",
    image: "/assets/img/enlishg.png",
    topics: [
      {
        id: "grammar",
        title: "Grammar",
        resources: [
          { id: "gram-sheet-1", title: "Grammar - Practice Sheet 1", file: "/sheets/grammar-1.pdf", type: "sheet" },
          { id: "gram-video-1", title: "Grammar - Video 1", file: "/videos/grammar-1.mp4", type: "video" },
        ],
      },
      {
        id: "comprehension",
        title: "Comprehension",
        resources: [
          { id: "comp-sheet-1", title: "Comprehension - Practice Sheet", file: "/sheets/comprehension-1.pdf", type: "sheet" },
        ],
      },
       {
        id: "vocab",
        title: "Vocabulary",
        resources: [
          { id: "comp-sheet-1", title: "Vocabulary - Practice Sheet", file: "/sheets/Vocabulary.pdf", type: "sheet" },
        ],
      },
    ],
  },

  // Add more subjects similarly...
];
