import { useState } from "react";

const projects = [
  {
    id: "01",
    category: "Automotive Platform",
    title: "P1 Motors",
    description:
      "A premium automotive platform featuring vehicle customization, service requests, quotation management, P1 Assist, and an integrated administration experience.",
    technologies: ["React", "Vite", "Supabase", "Three.js"],
    demo: "https://p1-motors.vercel.app/",
    image: "/projects/p1-motors.jpg",
    imageAlt: "P1 Motors automotive customization platform",
  },
  {
    id: "02",
    category: "Business Website",
    title: "Mafak Website",
    description:
      "A modern business website presenting Mafak’s home-maintenance services and helping customers discover trusted service solutions.",
    technologies: ["React", "Vite", "Supabase"],
    demo: "https://mafak-business-site.vercel.app/",
    image: "/projects/mafak-web-1.jpg",
    imageAlt: "Mafak business website interface",
  },
  {
    id: "03",
    category: "Corporate Website",
    title: "LevelUp Website",
    description:
      "A modern bilingual corporate website with service pages, project showcases, news, contact management, and a custom administration system.",
    technologies: ["React", "Node.js", "MySQL"],
    demo: "https://levelup-blue.vercel.app/",
    image: "/projects/levelup-1.jpg",
    imageAlt: "LevelUp bilingual corporate website",
  },
  {
    id: "04",
    category: "Fitness Management Platform",
    title: "Shark Fit",
    description:
      "A digital fitness management platform designed to streamline member experiences, QR-based access, and gym operations.",
    technologies: ["React", "Vite", "Supabase"],
    demo: "https://shark-fit-qr.vercel.app/",
    image: "/projects/shark-1.jpg",
    imageAlt: "Shark Fit fitness management platform",
  },
  {
    id: "05",
    category: "Mobile Application",
    title: "Mafak App",
    description:
      "A home-services mobile application connecting customers with professional handymen for electricity, plumbing, smart-home installation, AC maintenance, CCTV, and more.",
    technologies: ["React Native", "Expo", "Supabase"],
    demo: null,
    image: "/projects/mafak-1.jpg",
    imageAlt: "Mafak home-services mobile application",
  },
];

function ArrowUpRight({ className = "" }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 11L11 3M5 3H11V9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function ProjectVisual({ project }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  const content = imageUnavailable ? (
    <div
      className="project-image-placeholder"
      role="img"
      aria-label={project.imageAlt}
    >
      <span>{project.id}</span>
      <strong>{project.title}</strong>
      <small>Add screenshot at {project.image}</small>
    </div>
  ) : (
    <img
      src={project.image}
      alt={project.imageAlt}
      loading={project.id === "01" ? "eager" : "lazy"}
      draggable="false"
      onError={() => setImageUnavailable(true)}
    />
  );

  if (!project.demo) {
    return (
      <div className="project-visual project-visual-disabled">{content}</div>
    );
  }

  return (
    <a
      className="project-visual"
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} live demo`}
    >
      {content}

      <span className="project-visual-action" aria-hidden="true">
        <span>View project</span>
        <ArrowUpRight />
      </span>
    </a>
  );
}

function ProjectShowcase({ project, index }) {
  const visualFirst = index % 2 !== 0;

  return (
    <article
      className={`project-showcase ${
        visualFirst ? "project-showcase-reversed" : ""
      }`}
    >
      <div className="project-content">
        <div className="project-meta">
          <span className="project-number">{project.id}</span>
          <span className="project-category">{project.category}</span>
        </div>

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <ul
          className="project-technologies"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {project.demo ? (
          <a
            className="project-demo-link"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
          >
            <span>View live demo</span>

            <ArrowUpRight className="project-link-arrow" />
          </a>
        ) : (
          <span className="project-demo-link project-demo-disabled">
            Mobile application
          </span>
        )}
      </div>

      <ProjectVisual project={project} />
    </article>
  );
}

export default function Work() {
  return (
    <main className="work-page">
      <div className="work-container">
        <header className="work-header" />

        <section
          className="selected-projects"
          aria-label="Selected portfolio projects"
        >
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </section>
      </div>
    </main>
  );
}
