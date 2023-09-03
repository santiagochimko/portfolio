import React, { useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profilePicture from "./assets/santiagoProfilePicture.png";
import pokedexImg from "./assets/pokedex.png";
import todolistImg from "./assets/todolistapp.png";
import audnImg from "./assets/audnmusicapp.png";
import emailjs from "@emailjs/browser";

emailjs.init("NbKL289Zck4_qN24n");

function App() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set isSubmitting to true when form submission begins

    emailjs
      .sendForm(
        "service_rp8whi5",
        "template_c4ow0km",
        form.current,
        "NbKL289Zck4_qN24n"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Reset isSubmitting after submission
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid =
    formData.user_name.trim() !== "" &&
    formData.user_email.trim() !== "" &&
    formData.message.trim() !== "";

  return (
    <main>
      <nav>
        <div className="nav_container">
          <h1>Santiago Chimko</h1>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <header>
        <div className="header_container">
          <h1>
            Hi, I'm Santiago | <span>Full Stack Developer</span>
          </h1>
          <ul>
            <li>
              <a href="https://github.com/santiagochimko" target="_blank">
                <GitHubIcon
                  style={{ color: "#FF715B", width: "2rem", height: "2rem" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/scn93/" target="_blank">
                <LinkedInIcon
                  style={{ color: "#FF715B", width: "2rem", height: "2rem" }}
                />
              </a>
            </li>
          </ul>
          <p>
            I love exploring and creating. I'm a lifelong learner, and I might
            have a thing for food covered with cheese.
          </p>
        </div>
        <a href="#contact">
          <button>Get in touch</button>
        </a>
      </header>
      <section id="about">
        <div className="sectionAbout_container">
          <h1>
            My <span>Skills</span>
          </h1>
          <article>
            <img src={profilePicture} alt="Headshot of myself" />
            <div className="about">
              <h3>JavaScript</h3>
              <h3>React</h3>
              <h3>HTML5</h3>
              <h3>CSS3</h3>
              <h3>Node.js</h3>
              <h3>Express.js</h3>
              <h3>Next.js</h3>
              <h3>API/REST</h3>
              <h3>PostgreSQL</h3>
              <h3>Postman</h3>
              <h3>Git</h3>
              <h2>I love building stuff</h2>
              <p>
                I started playing with computers when I was 11 years-old. Since
                then I have been tinkering with all sorts of technologies that
                in some way or another led me into learning design, photography
                & video editing.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section id="projects">
        <div className="sectionProjects_container">
          <h1 id="projects_title">
            <span>Projects</span>
          </h1>
          <article className="content_right">
            <h2>BOOTCAMP PROJECT</h2>
            <div className="article_content">
              <h1>Pokemon Pokedex App</h1>
              <div className="about">
                <h3>React.js</h3>
                <h3>HTML5</h3>
                <h3>CSS3</h3>
                <h3>JavaScript</h3>
                <h3>API</h3>
                <h3>Postman</h3>
              </div>
              <img src={pokedexImg} alt="Pokedex preview img" />

              <a href="https://senpaipokedexapp.netlify.app/" target="_blank">
                <button>View project</button>
              </a>
            </div>
            <p></p>
          </article>
          <article className="content_left">
            <h2>BOOTCAMP PROJECT</h2>
            <div className="article_content">
              <h1>To Do List App</h1>
              <div className="about">
                <h3>React.js</h3>
                <h3>HTML5</h3>
                <h3>CSS3</h3>
                <h3>JavaScript</h3>
              </div>
              <img src={todolistImg} alt="To do list preview img" />

              <a
                href="https://santiago-todolistapp.netlify.app/"
                target="_blank"
              >
                <button>View project</button>
              </a>
            </div>
            <p></p>
          </article>
          <article className="content_right">
            <h2>BOOTCAMP PROJECT</h2>
            <div className="article_content">
              <h1>Audn Music App</h1>
              <div className="about">
                <h3>React.js</h3>
                <h3>HTML5</h3>
                <h3>CSS3</h3>
                <h3>JavaScript</h3>
                <h3>API</h3>
                <h3>Postman</h3>
                <h3>Next.js</h3>
                <h3>Express.js</h3>
              </div>
              <img src={audnImg} alt="Audn music app preview img" />

              <a
                href="https://github.com/santiagochimko/AppMusica_Gonzalo_Maximiliano_Santiago"
                target="_blank"
              >
                <button>View project</button>
              </a>
            </div>
            <p></p>
          </article>
        </div>
      </section>
      <section id="contact">
        <article>
          <h1>
            Let's have a <span>chat</span>
          </h1>
          <h3>santiagochimko.dev@gmail.com</h3>
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group input-material">
              <label htmlFor="name-field">Name</label>
              <input
                type="text"
                className="form-control"
                id="name-field"
                name="user_name"
                placeholder="Full Name"
                required
                value={formData.user_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group input-material">
              <label htmlFor="email-field">Email</label>
              <input
                type="email"
                className="form-control"
                id="email-field"
                name="user_email"
                placeholder="Email"
                required
                value={formData.user_email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group input-material">
              <label htmlFor="textarea-field">Your Message</label>
              <textarea
                className="form-control"
                id="textarea-field"
                rows="3"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            {messageSent && (
              <p>
                Message sent. Thanks for reaching out to me, I'll be in touch!
              </p>
            )}
            <div className="text-center">
              <button
                type="submit"
                style={{
                  backgroundColor: isSubmitting
                    ? "var(--secondary)"
                    : isFormValid
                    ? "var(--secondary)"
                    : "var(--gray)",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get in touch"}
              </button>
            </div>
          </form>
        </article>
      </section>
      <footer>
        <div className="footer_container">
          <div className="name_container">
            <h1>Santiago Chimko</h1>
            <p>© 2023, Built and designed by Santiago Chimko</p>
          </div>
          <div className="links_container">
            <h2>Links</h2>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="getInTouch_container">
            <h2>Get in touch</h2>
            <ul>
              <li>
                <a href="https://github.com/santiagochimko" target="_blank">
                  <GitHubIcon
                    style={{ color: "#FFF", width: "2rem", height: "2rem" }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/scn93/" target="_blank">
                  <LinkedInIcon
                    style={{ color: "#FFF", width: "2rem", height: "2rem" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
