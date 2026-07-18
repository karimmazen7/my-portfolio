import { useState } from "react";

const projects = [
  {
    id: "01",
    category: "Luxury Automotive Platform",
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

const archiveProjects = [];

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
        View project <span>↗</span>
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
          >
            <span>View live demo</span>
            <span className="project-link-arrow" aria-hidden="true">
              ↗
            </span>
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

function ArchiveCard({ project }) {
  return (
    <article className="archive-card">
      {project.demo ? (
        <a
          className="archive-image"
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            draggable="false"
          />
        </a>
      ) : (
        <div className="archive-image">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            draggable="false"
          />
        </div>
      )}

      <div className="archive-card-meta">
        <span>{project.category}</span>
        <span>{project.id}</span>
      </div>

      <h3>{project.title}</h3>
    </article>
  );
}

export default function Work() {
  return (
    <main className="work-page">
      <div className="work-container">
        <header className="work-header">
          {/* <p className="work-eyebrow">01 — Selected Work</p> */}
        </header>

        <section
          className="selected-projects"
          aria-label="Selected portfolio projects"
        >
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </section>

        {/* <section className="work-archive" aria-labelledby="archive-heading">
          <div className="archive-heading-row">
            <div>
              <p className="archive-label">Archive</p>
              <h2 id="archive-heading">Ongoing &amp; Previous</h2>
            </div>

            <p className="archive-introduction">
              A look into ongoing releases and selected previous work.
            </p>
          </div>

          {archiveProjects.length > 0 && (
            <div className="archive-grid">
              {archiveProjects.map((project) => (
                <ArchiveCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section> */}
      </div>
    </main>
  );
}
