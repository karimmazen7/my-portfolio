import { useEffect } from "react";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("home-route-active");

    return () => {
      document.body.classList.remove("home-route-active");
    };
  }, []);

  return (
    <main className="home-page">
      <section className="home-hero" aria-label="Karim Ehab portfolio homepage">
        <img
          className="home-hero-image"
          src="/hero.jpg"
          alt="Karim Ehab, creative developer"
          draggable="false"
          fetchPriority="high"
        />
      </section>
    </main>
  );
}
