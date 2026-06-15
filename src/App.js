import React, { useEffect } from 'react';
import './App.css';
import './index.css';


import data from './data/personal';



function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">PKK.dev</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
         
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero container reveal">
      <div>
        <p>Hi, I am</p>
        <h1>Polana Kamal Kalyan</h1>
        <h2>Front End Developer</h2>
        <div className="socials">
          <a className="btn ghost" href={data.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn ghost" href={data.social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn ghost" href={data.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div style={{ marginTop: 16 }}>
          <a className="btn" href="/Kamal_Kalyan_Resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
      <div>
        <img className="profile" src="/profile.jpg" alt="Profile" />
      </div>
      <div className="gradient-blob" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container about reveal">
      <h3 className="section-title">About </h3>
      <div className="card">
        <p>
          I am an aspiring Full Stack MERN Developer with hands-on experience in building responsive and user-friendly web applications. I have worked on projects ranging from e-commerce websites to IoT-based automation systems, blending my background in Electrical & Electronics Engineering with modern web technologies. My goal is to create impactful digital solutions while continuously learning and exploring AI, machine learning, and scalable backend systems.
        </p>
      </div>
      <div style={{ height: '120px' }} />
      <h4 style={{ margin: '12px 0',fontSize:'28px'}}>Education</h4>
      <div className="timeline">
        {data.education.map((e, i) => (
          <div key={i} className="row card">
            <div className="when">{e.period}</div>
            <div className="what">
              <strong>{e.institution}</strong>
              <span>{e.course}</span>
              {e.score && <span>{e.score}</span>}
              <span>{e.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="container reveal">
      <h3 className="section-title">Skills</h3>
      <div className="skills-grid">
        {data.skills.map((skill, idx) => (
          <div key={idx} className="skill-card card">
            <img src={skill.logo} alt={skill.name} />
            <div className="name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="container reveal">
      <h3 className="section-title">Experience</h3>
      <div className="timeline">
        {data.experience.map((job, i) => (
          <div key={i} className="row card">
            <div className="when">{job.period}</div>
            <div className="what">
              <strong>{job.title}</strong>
              <span>{job.company}</span>
              <div>{job.summary}</div>
              <div>
                {job.highlights.map((h, hi) => (
                  <span key={hi} className="tag">{h}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="container reveal">
      <h3 className="section-title">Projects</h3>
      <div className="projects-grid">
        {data.projects.map((p, i) => (
          <div key={i} className="project-card card">
            <img src={p.image} alt={p.title} />
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <div>
              {p.tech.map((t, ti) => (
                <span key={ti} className="tag">{t}</span>
              ))}
            </div>
            {p.link && (
              <div style={{ marginTop: 10 }}>
                <a className="btn ghost" href={p.link} target="_blank" rel="noreferrer">View</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  // Add your Web3Forms access key
  formData.append("access_key", "660d1f61-c3ac-455d-97f6-129050a6f24b");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Network error. Please check your internet or API URL.");
  }
};



  return (
    <section id="contact" className="container reveal">
      <h3 className="section-title">Contact</h3>
      <div className="contact-grid">
        <div className="card">
          <p><strong>Phone:</strong> <a href={`tel:${data.contact.phone}`} className='contact-link'>{data.contact.phone}</a></p>
          <p><strong>Email:</strong> <a href={data.contact.email} className='contact-link'>{data.contact.email}</a></p>
          <div className="socials">
            <a className="btn ghost" href={data.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn ghost" href={data.social.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn ghost" href={data.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <form className="card" onSubmit={onSubmit}>
          <input type="text" placeholder="Your name" name="name"  required />
          <input name="email" type="email" placeholder="Your email"  required />
          <textarea name="message" placeholder="Message"  required />
          <button className="btn" type="submit">Send Email</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">© {new Date().getFullYear()} Polana Kamal Kalyan · Built with React</div>
    </footer>
  );
}

export default function App() {
  useReveal();
  
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
