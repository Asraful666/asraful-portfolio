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
               <img
        src="/profile.png"
        alt="Md. Asraful Islam"
        className="profile-image"
      />

              <p className="hero-subtitle">Hello, I'm</p>

              <h1>
                Md Asraful <span>Islam</span>
              </h1>

              <h2>Aspiring Full-Stack Developer</h2>
<p className="hero-role">
  Tech Educator • Developer • ML Practitioner
</p>
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

        <section id="projects" className="section projects-section">
  <div className="container">

    <div className="section-heading">
      <p>MY WORK</p>
      <h2>Featured Projects</h2>
    </div>

    <div className="projects-grid">

      {/* Project 01 */}
      <article className="project-card">

        <div className="project-number">
          01
        </div>

        <div className="project-content">
          <h3>Sports Tournament Management</h3>

          <p>
            A modern sports tournament management web application where
            users can manage tournaments, teams, players, matches and
            tournament results.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Asraful666"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a href="#" className="live-link">
              Live Demo ↗
            </a>
          </div>
        </div>

      </article>


      {/* Project 02 */}
      <article className="project-card">

        <div className="project-number">
          02
        </div>

        <div className="project-content">
          <h3>Movie Explorer</h3>

          <p>
            A movie exploration web application built with React.
            Users can explore movies and view movie-related information
            through a clean and responsive interface.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Vite</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Asraful666"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a href="#" className="live-link">
              Live Demo ↗
            </a>
          </div>
        </div>

      </article>


      {/* Project 03 */}
      <article className="project-card">

        <div className="project-number">
          03
        </div>

        <div className="project-content">
          <h3>DevConf 2026</h3>

          <p>
            A responsive developer conference website designed to present
            event information, speakers, schedules and conference details.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Asraful666"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a href="#" className="live-link">
              Live Demo ↗
            </a>
          </div>
        </div>

      </article>

    </div>

  </div>
</section>

        <section id="education" className="section education-section">
  <div className="container">

    <div className="section-heading">
      <p>MY JOURNEY</p>
      <h2>Education & Learning</h2>
    </div>

    <div className="education-timeline">

      {/* SIU */}
      <div className="education-item">
        <div className="education-dot"></div>

        <div className="education-card">
          <span className="education-label">
            UNIVERSITY
          </span>

          <h3>Sylhet International University (SIU)</h3>

          <h4>CSE Department Student</h4>

          <p>
            Studying Computer Science and Engineering with a focus on
            programming, software development, web technologies and
            computer science fundamentals.
          </p>
        </div>
      </div>


      {/* Uniatena */}
      <div className="education-item">
        <div className="education-dot"></div>

        <div className="education-card">
          <span className="education-label">
            PROFESSIONAL DIPLOMA
          </span>

          <h3>Uniatena</h3>

          <h4>Executive Diploma in Machine Learning</h4>

          <p>
            Developing knowledge of machine learning concepts,
            programming and practical applications of intelligent systems.
          </p>
        </div>
      </div>


      {/* Programming Hero */}
      <div className="education-item">
        <div className="education-dot"></div>

        <div className="education-card">
          <span className="education-label">
            PROFESSIONAL TRAINING
          </span>

          <h3>Programming Hero</h3>

          <h4>UI/UX & Web Development</h4>

          <p>
            Learning modern web development, responsive UI design,
            frontend technologies and practical development workflows.
          </p>
        </div>
      </div>


      {/* University of the People */}
      <div className="education-item">
        <div className="education-dot"></div>

        <div className="education-card">
          <span className="education-label">
            UNIVERSITY
          </span>

          <h3>University of the People</h3>

          <h4>Computer Science Student</h4>

          <p>
            Studying computer science fundamentals and developing a
            broader foundation in software and technology.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

        <section id="contact" className="section contact-section">
  <div className="container">

    <div className="section-heading">
      <p>GET IN TOUCH</p>
      <h2>Let's Work Together</h2>
    </div>

    <div className="contact-content">

      <div className="contact-info">

        <h3>Have a project in mind?</h3>

        <p>
          I'm always interested in learning, building new projects and
          connecting with other developers. Feel free to reach out.
        </p>

        <div className="contact-links">

          <a href="mailto:your-email@gmail.com">
            <span>Email</span>
            <strong>your-email@gmail.com</strong>
          </a>

          <a
            href="https://github.com/Asraful666"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <strong>github.com/Asraful666</strong>
          </a>

          <a href="#">
            <span>LinkedIn</span>
            <strong>Connect with me on LinkedIn</strong>
          </a>

        </div>

      </div>


      <form className="contact-form">

        <div className="form-group">
          <label htmlFor="name">Your Name</label>

          <input
            type="text"
            id="name"
            placeholder="Enter your name"
          />
        </div>


        <div className="form-group">
          <label htmlFor="email">Your Email</label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>


        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            rows={6}
            placeholder="Write your message..."
          ></textarea>
        </div>


        <button type="submit" className="submit-btn">
          Send Message
        </button>

      </form>

    </div>

  </div>
</section>
      </main>

      <footer className="footer">

  <div className="container footer-container">

    <div>
      <a href="#home" className="footer-logo">
        Asraful<span>.</span>
      </a>

      <p>
        Tech Educator • Developer • ML Practitioner
      </p>
    </div>


    <div className="footer-links">

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

    </div>

  </div>


  <div className="footer-bottom">

    <p>
      © 2026 Md Asraful Islam. All rights reserved.
    </p>

  </div>

</footer>
    </>
  );
}

export default App;