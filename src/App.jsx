import React, { useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profilePicture from "./assets/santiagoProfilePicture.png";
import pokedexImg from "./assets/pokedex.png";
import todolistImg from "./assets/todolistapp.png";
import audnImg from "./assets/audnmusicapp.png";
import creditcard from "./assets/creditcard.png";
import registerform from "./assets/registerform.png";
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
                <p className="display_desktop">
                Interactive web application connected to a Pokemon API that allows you to view different Pokémon and all their characteristics. Additionally, it allows you to filter by name and display them in alphabetical or numerical order.
                </p>
              </div>
              <img src={pokedexImg} alt="Pokedex preview img" />
              <p className="display_mobile">
              Interactive web application connected to a Pokemon API that allows you to view different Pokémon and all their characteristics. Additionally, it allows you to filter by name and display them in alphabetical or numerical order.
              </p>
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
                <p className="display_desktop">
                The classic To-Do list. It allows you to add tasks, mark them as completed, and delete them. It displays the number of tasks remaining to be completed, allows you to filter by completed and in-progress tasks. Additionally, it features day and night mode.
                </p>
              </div>
              <img src={todolistImg} alt="To do list preview img" />
              <p className="display_mobile">
              The classic To-Do list. It allows you to add tasks, mark them as completed, and delete them. It displays the number of tasks remaining to be completed, allows you to filter by completed and in-progress tasks. Additionally, it features day and night mode.
              </p>
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
                <p className="display_desktop">
                An extensive project that simulates a combination of Tinder and Spotify. It allows you to generate playlists simply by liking and disliking artists, or alternatively, create playlists based on filters such as weather, mood, etc. A database and backend have been created to enable user registration, access to the database, and more. For further details, please visit the GitHub repository below.
                </p>
              </div>
              <img src={audnImg} alt="Audn music app preview img" />
              <p className="display_mobile">
              An extensive project that simulates a combination of Tinder and Spotify. It allows you to generate playlists simply by liking and disliking artists, or alternatively, create playlists based on filters such as weather, mood, etc. A database and backend have been created to enable user registration, access to the database, and more. For further details, please visit the GitHub repository below.
              </p>
              <a
                href="https://github.com/santiagochimko/AppMusica_Gonzalo_Maximiliano_Santiago"
                target="_blank"
              >
                <button>View project</button>
              </a>
            </div>
            <p></p>
          </article>
          <article className="content_right">
            <h2>PERSONAL PROJECT</h2>
            <div className="article_content">
              <h1>Credit/Debit Card Component</h1>
              <div className="about">
                <h3>React.js</h3>
                <h3>HTML5</h3>
                <h3>CSS3</h3>
                <h3>JavaScript</h3>                
                <h3>Bootstrap 5</h3>                
                <p className="display_desktop">
                This project uses the "react-credit-cards 2" dependency to create a credit/debit card form. It allows the card to automatically update to the corresponding provider based on the entered card number. Additionally, some input validations have been added to enhance the user experience.
                </p>
              </div>
              <img src={creditcard} alt="Credit/Debit card component preview img" />
              <p className="display_mobile">
              This project uses the "react-credit-cards 2" dependency to create a credit/debit card form. It allows the card to automatically update to the corresponding provider based on the entered card number. Additionally, some input validations have been added to enhance the user experience.
              </p>
              <a
                href="https://regal-tarsier-102acc.netlify.app/"
                target="_blank"
              >
                <button>View project</button>
              </a>
            </div>
            <p></p>
          </article>
          <article className="content_right">
            <h2>PERSONAL PROJECT</h2>
            <div className="article_content">
              <h1>Register Form Validation Component</h1>
              <div className="about">
                <h3>React.js</h3>
                <h3>HTML5</h3>
                <h3>CSS3</h3>                               
                <p className="display_desktop">
                This is a simple project in which a registration form is created using useState, and validations are added to it using the HTML pattern property.
                </p>
              </div>
              <img src={registerform} alt="Form component preview img" />
              <p className="display_mobile">
              This is a simple project in which a registration form is created using useState, and validations are added to it using the HTML pattern property.
              </p>
              <a
                href="https://gleeful-crepe-730aeb.netlify.app/"
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
