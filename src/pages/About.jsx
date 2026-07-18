import { Link } from "react-router-dom";
import "./About.css";

const experiences = [
  {
    id: "01",
    role: "Software Engineer",
    company: "LevelUp",
    date: "May 2025 — Present",
    location: "Riyadh, Saudi Arabia",
    description:
      "Developing modern web platforms and business systems using React.js, Node.js, MySQL, and Supabase, with a focus on responsive interfaces, scalable architecture, API integrations, and administration dashboards.",
  },
  {
    id: "02",
    role: "Technical Specialist",
    company: "Shahid / MBC",
    date: "Dec 2024 — May 2025",
    location: "Cairo, Egypt",
    description:
      "Supported technical operations and customer cases using Salesforce, CleverTap, Adyen, Giga, and T-Pay, while resolving technical issues and maintaining a reliable customer experience.",
  },
  {
    id: "03",
    role: "Software Engineer",
    company: "Hunt ERP Software Company",
    date: "Apr 2024 — Nov 2024",
    location: "Cairo, Egypt",
    description:
      "Developed ERP backend functionality using C# and SQL Server, improved database performance, and contributed to responsive interfaces using HTML, CSS, JavaScript, and React.",
  },
];

const capabilities = [
  {
    id: "01",
    title: "Web Applications",
    description:
      "Scalable, responsive web platforms and business systems built with React.js.",
  },
  {
    id: "02",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile applications built with React Native and Expo.",
  },
  {
    id: "03",
    title: "Backend & Data",
    description:
      "APIs, authentication, database systems, cloud services, and real-time functionality.",
  },
  {
    id: "04",
    title: "Admin Systems",
    description:
      "Dashboards for managing users, content, requests, services, and business operations.",
  },
];

const technologies = [
  "React.js",
  "React Native",
  "Expo",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Supabase",
  "MySQL",
  "SQL Server",
  "C#",
  "Vercel",
  "Git",
];

const recentProjects = ["P1 Motors", "Mafak", "LevelUp", "Shark Fit"];

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

function SectionLabel({ children, id }) {
  return (
    <p className="about-section-label" id={id}>
      {children}
    </p>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <div className="about-editorial-container">
        <section className="about-hero" aria-labelledby="about-page-title">
          <div className="about-hero-identity">
            <SectionLabel>02 — About</SectionLabel>

            <h1 id="about-page-title">
              Karim Ehab
              <br />
              Mazen
            </h1>

            <div className="about-identity-details">
              <p>Full Stack Developer</p>
              <p>Cairo, Egypt</p>
            </div>

            <div className="about-availability">
              <span aria-hidden="true" />
              <p>Available for freelance projects and opportunities</p>
            </div>
          </div>

          <div className="about-introduction">
            <p className="about-introduction-lead">
              I design and build modern web and mobile products that combine
              reliable engineering with clear, thoughtful user experiences.
            </p>

            <div className="about-supporting-copy">
              <p>
                I specialize in React.js, React Native, Node.js, and Supabase,
                building scalable applications, admin dashboards, authentication
                systems, API integrations, and responsive user interfaces.
              </p>

              <p>
                My approach focuses on performance, maintainability, and
                transforming business requirements into digital products that
                are simple and effective to use.
              </p>
            </div>
          </div>
        </section>

        <section
          className="about-editorial-section experience-section"
          aria-labelledby="experience-heading"
        >
          <SectionLabel id="experience-heading">Experience</SectionLabel>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-row" key={experience.id}>
                <div className="experience-date">
                  <time>{experience.date}</time>
                </div>

                <div className="experience-content">
                  <h2>{experience.role}</h2>

                  <p className="experience-company">{experience.company}</p>

                  <p className="experience-location">{experience.location}</p>

                  <p className="experience-description">
                    {experience.description}
                  </p>
                </div>

                <span className="experience-number" aria-hidden="true">
                  {experience.id}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-editorial-section capabilities-section"
          aria-labelledby="capabilities-heading"
        >
          <SectionLabel id="capabilities-heading">What I Do</SectionLabel>

          <div className="capabilities-grid">
            {capabilities.map((capability) => (
              <article className="capability-item" key={capability.id}>
                <span className="capability-number" aria-hidden="true">
                  {capability.id}
                </span>

                <h2>{capability.title}</h2>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-editorial-section technologies-section"
          aria-labelledby="technologies-heading"
        >
          <SectionLabel id="technologies-heading">
            Selected Technologies
          </SectionLabel>

          <ul className="technologies-list" aria-label="Selected technologies">
            {technologies.map((technology, index) => (
              <li key={technology}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {technology}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="about-editorial-section recent-work-section"
          aria-labelledby="recent-work-heading"
        >
          <SectionLabel id="recent-work-heading">Recent Work</SectionLabel>

          <div className="recent-work-content">
            <div className="recent-projects" aria-label="Recent projects">
              {recentProjects.map((project) => (
                <span key={project}>{project}</span>
              ))}
            </div>

            <Link className="about-text-link" to="/work">
              <span>View all case studies</span>
              <ArrowUpRight className="about-link-arrow" />
            </Link>
          </div>
        </section>

        <section
          className="about-editorial-section education-section"
          aria-labelledby="education-heading"
        >
          <SectionLabel id="education-heading">Education</SectionLabel>

          <div className="education-content">
            <div className="education-main">
              <div>
                <h2>Bachelor of Science in Computer Science</h2>
                <p>Ahram Canadian University</p>
              </div>

              <time>2019 — 2023</time>
            </div>

            <div className="education-project">
              <div>
                <h3>Powerlifting Coaching System</h3>
                <p>Graduation Project — Grade A−</p>
              </div>

              <span>Graduation Project</span>
            </div>
          </div>
        </section>

        <section className="about-cta" aria-labelledby="about-cta-heading">
          <h2 id="about-cta-heading">
            Have an idea worth
            <br />
            building?
          </h2>

          <p>
            I’m currently open to selective freelance projects and full-time
            opportunities that demand high-level engineering.
          </p>

          <Link className="about-cta-button" to="/contact">
            <span>Let’s work together</span>
            <ArrowUpRight className="about-link-arrow" />
          </Link>
        </section>
      </div>
    </main>
  );
}
