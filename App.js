import React from "react";
import "./App.css";

function App() {

    return (

        <div>

            <nav>
                <h2>My Portfolio</h2>

                <div>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <section id="home">

                <h1>Hello, I am Rythima shakya</h1>

                <h3>Web Developer</h3>

                <p>
                    I am a Computer Science student
                    interested in web development.
                </p>

                <a href="#projects">
                    <button>View My Projects</button>
                </a>

            </section>

            <section id="about">

                <h2>About Me</h2>

                <p>
                    I am pursuing MCA 
                    I enjoy learning new technologies and
                    developing websites.
                </p>

            </section>

            <section id="skills">

                <h2>My Skills</h2>

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>Node.js</li>
                </ul>

            </section>

            <section id="projects">

                <h2>My Projects</h2>

                <div className="project">

                    <h3>Event Pass Generator</h3>

                    <p>
                        A project used to generate
                        event passes.
                    </p>

                </div>

                <div className="project">

                    <h3>Complaint Management System</h3>

                    <p>
                        A project used to manage
                        customer complaints.
                    </p>

                </div>

            </section>

            <section id="contact">

                <h2>Contact Me</h2>

                <p>Email: your-email@example.com</p>

                <p>GitHub: your-github-link</p>

            </section>

            <footer>

                <p>© 2026 Rythima shakya</p>

            </footer>

        </div>

    );

}

export default App;