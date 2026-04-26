import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

function SiteShell({ children }) {
  return (
    <div className="">

      <header className="site-header-wrapper">
        <div className='site-header'>
        <NavLink className="brand" to="/home-alex" aria-label="Home">
          <span className="brand-mark" aria-hidden="true">AB</span>
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

      <main id="main-content" className='site-shell'>{children}</main>

      <footer className="site-footer">
        <div className="social-links" aria-label="Social media links">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="mailto:hello@example.com" aria-label="Email">@</a>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="/new-index">Contact</a>
        </div>
      </footer>
    </div>
  )
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

        <div className="home-image" aria-hidden="true" />

        <div className="home-subtitle">
          <h2>London-based freelance video editor.</h2>
        </div>

        <div className="home-copy">
          <p>
            I am a freelance video editor and motion graphics compositor.
            London-based for the past 12 years, I specialise in short-form
            content including music videos, commercials, comedic television and
            documentaries. I am experienced in Premiere Pro, Resolve (colour
            grading) and After Effects (motion graphics, rotoscoping, 3D camera
            tracking, face tracking, text animation, and building 3D
            environments.
          </p>
          <p>
            Over 4 years, I worked in-house at a global music label editing
            music videos, documentaries, promos and live broadcasts for major
            artists.
          </p>
          <p>
            I have worked extensively with broadcasters and digital publishers on
            documentaries, commercials, short films, and comedic series.
          </p>
          <p>
            In addition, I have substantial interest in natural history and
            travel storytelling. I am particularly adept at communicating complex
            geopolitical and environmental concepts in an engaging and sometimes
            comedic manner.
          </p>
          <p>
            Represented by a post-production agency, I am available for
            freelance projects.
          </p>
          <p>
            My reel is available here and download my CV here.
          </p>
        </div>

        <div className="home-cta">
          <h3>I look forward to working with you.</h3>
        </div>
      </section>
    </SiteShell>
  )
}

function WorkPage() {
  return (
    <SiteShell>
      <section className="page-intro">
        <h2>Selected Work</h2>
        <h3>Curated edits and motion projects.</h3>
      </section>
      <section className="work-grid" aria-label="Projects">
        {[1, 2, 3, 4, 5, 6].map((project) => (
          <article className="work-card" key={project}>
            <div className="work-thumb" aria-hidden="true" />
            <h4>Project Title {project}</h4>
            <p>Brand campaign · 202{project % 4} · 45-90 sec cut</p>
          </article>
        ))}
      </section>
    </SiteShell>
  )
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
  )
}

function ContactPage() {
  return (
    <SiteShell>
      <section className="page-intro">
        <h2>Contact</h2>
        <h3>Available for freelance projects and collaborations.</h3>
      </section>
      <section className="contact-stack">
        <a href="mailto:hello@example.com">hello@example.com</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </section>
    </SiteShell>
  )
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
  )
}

export default App
