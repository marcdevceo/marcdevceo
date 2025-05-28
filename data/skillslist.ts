export const frontendSkillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Tailwind CSS",
  "Styled Components",
  "Expo Router",
]

export const backendSkillList = [
  "Node.js",
  "FastAPI",
  "Django",
  "Python",
  "REST APIs",
  "GraphQL (basic understanding)",
]

export const databaseSkillList = [
  "PostgreSQL",
  "SQLite",
  "Supabase",
  "Prisma ORM",
]

export const devToolsSkillList = [
  "Git",
  "GitHub",
  "Docker (basic/intermediate)",
  "Postman",
  "Vercel",
  "Netlify",
  "ESLint",
  "Prettier",
  "Firebase (Auth + Firestore basics)",
  "Third-party APIs",
]

export const designSkillList = [
  "Figma",
  "UI/UX Design Principles",
  "Design Patterns (learning)",
  "Component-based Architecture",
  "Responsive Design",
  "Semantic HTML",
  "JWT Auth (in progress)",
  "Clean Code",
  "Modular UI Frameworks",
]

export const skillMap = {
  Frontend: {
    title: "Frontend Skillset",
    skills: frontendSkillList,
  },
  Backend: {
    title: "Backend Skillset",
    skills: backendSkillList,
  },
  Database: {
    title: "Database Skillset",
    skills: databaseSkillList,
  },
  DevTools: {
    title: "Dev Tools Skillset",
    skills: devToolsSkillList,
  },
  Design: {
    title: "Design Skillset",
    skills: designSkillList,
  },
};

export type SkillType = keyof typeof skillMap;