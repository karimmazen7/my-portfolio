import "./Home.css";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home" aria-label="Karim Ehab portfolio homepage">
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
