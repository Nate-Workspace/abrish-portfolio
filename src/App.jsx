import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { useState, useMemo } from "react";
import { videos } from "./data/videos";
import VideoCard from "./components/VideoCard";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import "./App.css";

function SiteShell({ children }) {
  return (
    <div className="">
      <header className="site-header-wrapper">
        <div className="site-header">
          <NavLink className="brand" to="/home-alex" aria-label="Home">
            <span className="brand-mark" aria-hidden="true">
              AB
            </span>
          </NavLink>
          <nav aria-label="Primary">
            <ul className="top-nav">
              <li>
                <NavLink to="/home-alex">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/work2">WORK</NavLink>
              </li>
              <li>
                <NavLink to="/showreel">SHOWREEL</NavLink>
              </li>
              <li>
                <NavLink to="/new-index">CONTACT</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="site-shell">
        {children}
      </main>

      <footer className="site-footer">
        <div className="social-links" aria-label="Social media links">
          <a href="#" aria-label="LinkedIn">
            in
          </a>
          <a href="#" aria-label="Instagram">
            ig
          </a>
          <a href="mailto:hello@example.com" aria-label="Email">
            @
          </a>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="/new-index">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <SiteShell>
      <section className="home-grid">
        <div className="home-title">
          <h2>
            <a href="/showreel">Hi, I am Abraham K.</a>
          </h2>
        </div>

        <div className="home-image">
          <img src="/home-img.png" alt="Abraham K portfolio visual" />
        </div>

        <div className="home-subtitle">
          <h2>Video editor and Cinematographer.</h2>
        </div>

        <div className="home-copy">
          <p>
            I’m a video editor and cinematographer with around five years of
            experience. I combine storytelling, marketing, and an understanding
            of human psychology to create content that feels engaging and
            intentional, not just visually appealing.
          </p>
          <p>
            Over the years, I’ve worked on a range of projects including
            documentaries, dramas, sitcoms, sports content, promo videos, and
            podcast recaps. I also spend a lot of time creating short-form and
            vertical content, adapting ideas to fit different platforms and
            audiences.
          </p>
          <p>
            I’ve collaborated with individuals and personal brands, helping them
            grow their presence through consistent and targeted content. Through
            that, I’ve developed a strong sense of what captures attention, what
            keeps people watching, and how to shape content that actually
            connects. I have attached a link to some of my outstanding work : - 
            https://youtube.com/shorts/nhZCbZTYXqI?feature=share.
          </p>
          <p>
            Alongside my creative work, I’ve also worked as a social media
            manager and digital marketing manager. That experience changed the
            way I approach editing. I don’t just focus on how something looks,
            but also on how it performs — how it reaches people, how it holds
            attention, and how it communicates a message clearly.
          </p>
          <p>
            I mainly work with Adobe Premiere Pro and After Effects, using them
            as tools to support the story rather than drive it. For me, the goal
            is always to keep things simple, intentional, and effective.
          </p>
          <p>
            Lately, I’ve been especially interested in the relationship between
            storytelling, marketing, and human behavior — and how small creative
            choices can influence the way people feel and respond to content.
          </p>
        </div>

        <div className="home-cta">
          <h3>I look forward to working with you.</h3>
        </div>
      </section>
    </SiteShell>
  );
}

const ITEMS_PER_PAGE = 12;
function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 Filter videos
  const filteredVideos = useMemo(() => {
    if (activeFilter === "all") return videos;
    return videos.filter((v) => v.category === activeFilter);
  }, [activeFilter]);

  // 🔹 Pagination logic
  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);

  const paginatedVideos = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredVideos.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredVideos, currentPage]);

  // Reset page when filter changes
  function handleFilterChange(filter) {
    setActiveFilter(filter);
    setCurrentPage(1);
  }

  return (
    <SiteShell>
      <section className="page-intro">
        <h2>Selected Work</h2>
        <h3>Curated edits and motion projects.</h3>
      </section>

      <FilterBar active={activeFilter} setActive={handleFilterChange} />

      <section className="work-grid">
        {paginatedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </section>

      <Pagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </SiteShell>
  );
}

function ShowreelPage() {
  return (
    <SiteShell>
      <section className="page-intro">
        <h2>Showreel</h2>
        <h3>Editing and motion highlights.</h3>
      </section>
      <section className="showreel-panel" aria-label="Showreel preview">
        <div className="video-frame">
          <span>Showreel Placeholder</span>
        </div>
        <p>
          Replace this section with your embedded video or hosted reel link when
          you are ready.
        </p>
      </section>
    </SiteShell>
  );
}

function ContactPage() {
  return (
    <SiteShell>
      <section className="page-intro">
        <h2>Contact</h2>
        <h3>Let’s create something worth watching.</h3>
      </section>

      <section className="contact-grid">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <p>
            Whether you’re working on a commercial, documentary, or something
            experimental — I’m always open to collaborating on projects that
            tell a story.
          </p>

          <p>
            If you have a brief, timeline, or even just an idea, feel free to
            reach out.
          </p>

          <div className="contact-direct">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE PANEL) */}
        <div className="contact-visual">
          <img
            src="/hero.png" //
            alt="Editing workspace or project still"
          />
        </div>
      </section>
    </SiteShell>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home-alex" replace />} />
      <Route path="/home-alex" element={<HomePage />} />
      <Route path="/work2" element={<WorkPage />} />
      <Route path="/showreel" element={<ShowreelPage />} />
      <Route path="/new-index" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/home-alex" replace />} />
    </Routes>
  );
}

export default App;
