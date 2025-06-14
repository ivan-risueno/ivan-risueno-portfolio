export enum TechStackItem {
  REACT = "React",
  ASTRO = "Astro",
  JAVASCRIPT = "JavaScript",
  HTML = "HTML",
  CSS = "CSS",
  TAILWINDCSS = "Tailwind CSS",
  NODEJS = "Node.js",
  EXPRESS = "Express",
  SPRING = "Spring",
  SPRINGBOOT = "Spring Boot",
  JAVA = "Java",
  PYHTON = "Python",
  C = "C",
  CPLUSPLUS = "C++",
  ORACLE = "Oracle",
  POSTGRESQL = "PostgreSQL",
  MYSQL = "MySQL",
  GIT = "Git",
  GITHUB = "GitHub",
  JIRA = "Jira",
  TAIGA = "Taiga",
  TRELLO = "Trello",
  DOCKER = "Docker",
  TYPESCRIPT = "TypeScript",
  GRAPHQL = "GraphQL"
}

export type TechStackDataType = {
  name: string;
  svg: string;
  website: string;
};

const svgBasePath = "/icons/tech/";

export const TechStackData: Record<TechStackItem, TechStackDataType> = {
  [TechStackItem.REACT]: {
    name: "React",
    svg: svgBasePath + "react.svg",
    website: "https://react.dev",
  },
  [TechStackItem.ASTRO]: {
    name: "Astro",
    svg: svgBasePath + "astro.svg",
    website: "https://astro.build",
  },
  [TechStackItem.JAVASCRIPT]: {
    name: "JavaScript",
    svg: svgBasePath + "javascript.svg",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  [TechStackItem.HTML]: {
    name: "HTML",
    svg: svgBasePath + "html5.svg",
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  [TechStackItem.CSS]: {
    name: "CSS",
    svg: svgBasePath + "css.svg",
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  [TechStackItem.TAILWINDCSS]: {
    name: "Tailwind CSS",
    svg: svgBasePath + "tailwindcss.svg",
    website: "https://tailwindcss.com",
  },
  [TechStackItem.NODEJS]: {
    name: "Node.js",
    svg: svgBasePath + "nodejs.svg",
    website: "https://nodejs.org",
  },
  [TechStackItem.EXPRESS]: {
    name: "Express",
    svg: svgBasePath + "express.svg",
    website: "https://expressjs.com",
  },
  [TechStackItem.SPRING]: {
    name: "Spring",
    svg: svgBasePath + "spring.svg",
    website: "https://spring.io",
  },
  [TechStackItem.SPRINGBOOT]: {
    name: "Spring Boot",
    svg: svgBasePath + "spring.svg",
    website: "https://spring.io/projects/spring-boot",
  },
  [TechStackItem.JAVA]: {
    name: "Java",
    svg: svgBasePath + "java.svg",
    website: "https://www.java.com",
  },
  [TechStackItem.PYHTON]: {
    name: "Python",
    svg: svgBasePath + "python.svg",
    website: "https://www.python.org",
  },
  [TechStackItem.C]: {
    name: "C",
    svg: svgBasePath + "c.svg",
    website: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  [TechStackItem.CPLUSPLUS]: {
    name: "C++",
    svg: svgBasePath + "cplusplus.svg",
    website: "https://en.wikipedia.org/wiki/C%2B%2B",
  },
  [TechStackItem.ORACLE]: {
    name: "Oracle",
    svg: svgBasePath + "oracle.svg",
    website: "https://www.oracle.com",
  },
  [TechStackItem.POSTGRESQL]: {
    name: "PostgreSQL",
    svg: svgBasePath + "postgresql.svg",
    website: "https://www.postgresql.org",
  },
  [TechStackItem.MYSQL]: {
    name: "MySQL",
    svg: svgBasePath + "mysql.svg",
    website: "https://www.mysql.com",
  },
  [TechStackItem.GIT]: {
    name: "Git",
    svg: svgBasePath + "git.svg",
    website: "https://git-scm.com",
  },
  [TechStackItem.GITHUB]: {
    name: "GitHub",
    svg: svgBasePath + "github.svg",
    website: "https://github.com",
  },
  [TechStackItem.JIRA]: {
    name: "Jira",
    svg: svgBasePath + "jira.svg",
    website: "https://www.atlassian.com/software/jira",
  },
  [TechStackItem.TAIGA]: {
    name: "Taiga",
    svg: svgBasePath + "taiga.svg",
    website: "https://taiga.io",
  },
  [TechStackItem.TRELLO]: {
    name: "Trello",
    svg: svgBasePath + "trello.svg",
    website: "https://trello.com",
  },
  [TechStackItem.DOCKER]: {
    name: "Docker",
    svg: svgBasePath + "docker.svg",
    website: "https://www.docker.com",
  },
  [TechStackItem.TYPESCRIPT]: {
    name: "TypeScript",
    svg: svgBasePath + "typescript.svg",
    website: "https://www.typescriptlang.org",
  },
  [TechStackItem.GRAPHQL]: {
    name: "GraphQL",
    svg: svgBasePath + "graphql.svg",
    website: "https://graphql.org",
  }

};
