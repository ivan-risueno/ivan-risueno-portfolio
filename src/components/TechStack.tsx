import { useState, useEffect } from "react";
import "../styles/techStack.scss";
import TechLayer from "./TechLayer.tsx";
import { TechStackItem, TechStackData } from "../types/TechStackItem";
import type { TechLayerProps } from "../types/TechLayerProps.ts";

const techStack: TechLayerProps[] = [
  { 
    id: "frontend", 
    title: "Frontend", 
    technologies: [ TechStackItem.REACT, TechStackItem.ASTRO, TechStackItem.JAVASCRIPT, TechStackItem.HTML, TechStackItem.CSS, TechStackItem.TAILWINDCSS ],
    baseColor: "#6ab0ee" 
  },
  { 
    id: "backend", 
    title: "Backend", 
    technologies:  [ TechStackItem.NODEJS, TechStackItem.EXPRESS, TechStackItem.JAVASCRIPT, TechStackItem.SPRINGBOOT, TechStackItem.JAVA, TechStackItem.C, TechStackItem.CPLUSPLUS ], 
    baseColor: "#67fbfe" 
  },
  { 
    id: "database", 
    title: "Database", 
    technologies: [ TechStackItem.ORACLE, TechStackItem.POSTGRESQL, TechStackItem.MYSQL ], 
    baseColor: "#fab858" 
  },
  { 
    id: "general", 
    title: "General", 
    technologies: [ TechStackItem.GIT, TechStackItem.GITHUB, TechStackItem.JIRA, TechStackItem.TAIGA, TechStackItem.TRELLO, TechStackItem.DOCKER ], 
    baseColor: "#fffccf" 
  },
];

const currentlyLearningTech: TechStackItem[] = [
  TechStackItem.TYPESCRIPT,
  TechStackItem.GRAPHQL,
];

export default function TechStack() {
  const [ stack ] = useState<TechLayerProps[]>(techStack);
  const [ currentlyLearning ] = useState<TechStackItem[]>(currentlyLearningTech);

  useEffect(() => {
    function updateIcons(activeLayer: HTMLDivElement) {
      const iconsContainer = document.querySelector(".icons-container") as HTMLDivElement;
      if (!iconsContainer) return;

      const techsRaw = activeLayer.dataset.icons;
      if (!techsRaw) return;

      try {
        const techs = JSON.parse(techsRaw) as TechStackItem[];
        iconsContainer.innerHTML = "";

        techs.forEach(tech => {
          const techData = TechStackData[tech];
          if (!techData) return;

          const iconWrapper = document.createElement("a");
          iconWrapper.className = "tech-stack-item show";
          iconWrapper.href = techData.website;
          iconWrapper.target = "_blank";
          iconWrapper.rel = "noopener noreferrer";

          const img = document.createElement("img");
          img.src = techData.svg;
          img.alt = techData.name;
          img.className = "tech-icon";

          iconWrapper.appendChild(img);
          iconsContainer.appendChild(iconWrapper);
        });
      } catch (error) {
        console.error("Error parsing icons:", error);
      }
    }

    function setDefaultActiveLayer() {
      const layers = document.querySelectorAll<HTMLDivElement>(".stack-layer");
      if (layers.length > 0) {
        document.querySelector(".stack-layer.active")?.classList.remove("active");
        layers[0].classList.add("active");
        updateIcons(layers[0]); 
      }
    }

    function setActiveLayer(event: MouseEvent) {
      const target = event.currentTarget as HTMLDivElement;
      document.querySelector(".stack-layer.active")?.classList.remove("active");
      target.classList.add("active");

      updateIcons(target);
    }

    setDefaultActiveLayer();
    document.addEventListener("astro:page-load", setDefaultActiveLayer);

    const layers = document.querySelectorAll<HTMLDivElement>(".stack-layer");
    layers.forEach(layer => {
      layer.addEventListener("mouseenter", setActiveLayer);
      layer.addEventListener("click", setActiveLayer);
    });

    return () => {
      document.removeEventListener("astro:page-load", setDefaultActiveLayer);
      layers.forEach(layer => {
        layer.removeEventListener("mouseenter", setActiveLayer);
        layer.removeEventListener("click", setActiveLayer);
      });
    };
  }, []);

  return (
    <section className="tech-stack">
      <div className="stack-container">
        <div className="title-icons-container">
          <h2>Tech Stack</h2>
          <div className="icons-container"></div>
        </div>
        <div className="layers-container">
          {stack.map(layer => (
            <TechLayer key={layer.id} {...layer} />
          ))}
        </div>
      </div>
      <div className="currently-learning-container">
        <p className="currently-learning-label">Currently learning: </p>
        <div className="learning-icons-container">
          {currentlyLearning.map(tech => {
            const techData = TechStackData[tech];
            return (
              <a 
                key={tech} 
                className="tech-stack-item show" 
                href={techData.website} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={techData.svg} alt={techData.name} className="tech-icon" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
