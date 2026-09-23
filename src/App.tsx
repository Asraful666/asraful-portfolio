import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <p className="hero-subtitle">Hello, I'm</p>

              <h1>
                Md Asraful <span>Islam</span>
              </h1>

              <h2>Aspiring Full-Stack Developer</h2>

              <p className="hero-description">
                I'm a Computer Science Engineering student passionate about
                building modern and responsive web applications.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-btn">
                  View My Projects
                </a>

                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-card">
              <h3>Developer</h3>
              <p>HTML • CSS • TypeScript • React</p>
            </div>
          </div>
        </section>

        {/* About Section */}
<section id="about" className="section about-section">
  <div className="container">

    <div className="section-heading">
      <p>ABOUT ME</p>
      <h2>Who I Am</h2>
    </div>

    <div className="about-content">
      <div className="about-text">
        <p>
          I'm Md Asraful Islam, a Computer Science Engineering student
          passionate about web development and modern technologies.
        </p>

        <p>
          Currently, I'm focusing on building responsive and user-friendly
          web applications using HTML, CSS, TypeScript and React.
        </p>

        <p>
          My long-term goal is to become a professional Full-Stack Developer
          and build real-world applications that solve practical problems.
        </p>
      </div>

      <div className="about-info">
        <div className="info-box">
          <span>Education</span>
          <strong>CSE Student</strong>
        </div>

        <div className="info-box">
          <span>Focus</span>
          <strong>Web Development</strong>
        </div>

        <div className="info-box">
          <span>Goal</span>
          <strong>Full-Stack Developer</strong>
        </div>

        <div className="info-box">
          <span>Location</span>
          <strong>Bangladesh</strong>
        </div>
      </div>
    </div>

  </div>
</section>


{/* Skills Section */}
<section id="skills" className="section skills-section">
  <div className="container">

    <div className="section-heading">
      <p>MY SKILLS</p>
      <h2>Technologies I Use</h2>
    </div>

    <div className="skills-grid">

      <div className="skill-card">
        <div className="skill-icon">HTML</div>
        <h3>HTML5</h3>
        <p>Semantic and accessible web structure.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">CSS</div>
        <h3>CSS3</h3>
        <p>Responsive and modern user interfaces.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">TS</div>
        <h3>TypeScript</h3>
        <p>Type-safe and maintainable JavaScript.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">⚛</div>
        <h3>React</h3>
        <p>Component-based modern web applications.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">Git</div>
        <h3>Git & GitHub</h3>
        <p>Version control and project collaboration.</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">TW</div>
        <h3>Tailwind CSS</h3>
        <p>Utility-first responsive styling.</p>
      </div>

    </div>

  </div>
</section>

        <section id="projects" className="section">
          <h2>Projects</h2>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;