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

        <section id="about" className="section">
          <h2>About Me</h2>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
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