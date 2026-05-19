import { useRef } from "react";

export default function Work() {
  const projects = [
    {
      client: "MAFAK",
      title: "Mafak App",
      description:
        "A home services mobile application connecting customers with professional handymen for electricity, plumbing, smart home, AC maintenance, CCTV, and more services.",
      images: [
        "/projects/mafak-1.jpg",
        "/projects/mafak-2.jpg",
        "/projects/mafak-3.jpg",
      ],
    },

    {
      client: "LEVELUP",
      title: "LevelUp Website",
      description:
        "A modern business website with services, projects, news system, contact pages, and a powerful admin dashboard connected with Supabase.",
      images: [
        "/projects/levelup-1.jpg",
        "/projects/levelup-2.jpg",
        "/projects/levelup-3.jpg",
      ],
    },

    {
      client: "SHARK FIT",
      title: "Shark Fit",
      description:
        "A QR promotional website experience with spin wheel offers, discounts, and phone number collection for marketing campaigns.",
      images: [
        "/projects/shark-1.jpg",
        "/projects/shark-2.jpg",
        "/projects/shark-3.jpg",
      ],
    },

    {
      client: "MAFAK",
      title: "Mafak Website",
      description:
        "A modern landing website presenting the Mafak platform, services, onboarding system, and digital brand experience.",
      images: [
        "/projects/mafak-web-1.jpg",
        "/projects/mafak-web-2.jpg",
        "/projects/mafak-web-3.jpg",
      ],
    },
  ];

  const slidersRef = useRef([]);

  const startDragging = (slider) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active-drag");

      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active-drag");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active-drag");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;

      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;

      const walk = (x - startX) * 1.5;

      slider.scrollLeft = scrollLeft - walk;
    });
  };

  return (
    <section className="work-page">
      {projects.map((project, index) => (
        <div className="work-row" key={index}>
          <div className="work-info">
            <div className="work-client">
              <span>{project.client}</span>
            </div>

            <h1>{project.title}</h1>

            <p>{project.description}</p>
          </div>

          <div
            className="work-images"
            ref={(el) => {
              if (el && !slidersRef.current[index]) {
                slidersRef.current[index] = el;
                startDragging(el);
              }
            }}
          >
            {project.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={project.title}
                draggable="false"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
