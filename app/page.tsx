"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      title: "Real-Time Analytics Dashboard",
      description: "Built a high-performance analytics platform processing 10M+ events daily with React, Node.js, and PostgreSQL. Reduced query time by 73% through optimization.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      year: "2024"
    },
    {
      title: "E-Commerce Microservices Platform",
      description: "Architected distributed system handling 50K concurrent users. Implemented event-driven architecture with RabbitMQ and Docker orchestration.",
      tech: ["Go", "Kubernetes", "RabbitMQ", "MongoDB"],
      year: "2023"
    },
    {
      title: "AI-Powered Content Moderation System",
      description: "Developed ML pipeline achieving 94% accuracy in harmful content detection. Deployed on AWS Lambda with sub-200ms response times.",
      tech: ["Python", "TensorFlow", "AWS", "FastAPI"],
      year: "2023"
    },
    {
      title: "Mobile Fitness Tracking Application",
      description: "Cross-platform app with 100K+ downloads. Built real-time GPS tracking, social features, and integrated payment processing.",
      tech: ["React Native", "Firebase", "Stripe"],
      year: "2022"
    }
  ];

  const skills = [
    { category: "Languages", items: ["JavaScript/TypeScript", "Python", "Go", "Java", "SQL"] },
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "React Native"] },
    { category: "Backend", items: ["Node.js", "Express", "Django", "FastAPI", "GraphQL"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"] },
    { category: "Tools", items: ["Git", "Jest", "Webpack", "Linux", "Nginx"] }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Sepehr</div>
          <div className="flex gap-8 text-sm">
            <a href="#projects" className="hover:text-neutral-500 transition">Projects</a>
            <a href="#skills" className="hover:text-neutral-500 transition">Skills</a>
            <a href="#about" className="hover:text-neutral-500 transition">About</a>
            <a href="#contact" className="hover:text-neutral-500 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">Software Engineer</h1>
            <p className="text-2xl md:text-3xl text-neutral-600 mb-8 leading-relaxed">
              Building scalable systems and elegant user experiences. Specialized in full-stack development, cloud architecture, and performance optimization.
            </p>
            <a href="#contact" className="inline-block bg-black text-white px-8 py-4 text-lg hover:bg-neutral-800 transition">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white p-8 hover:shadow-lg transition group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-neutral-600 transition">{project.title}</h3>
                  <span className="text-sm text-neutral-500">{project.year}</span>
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-neutral-100 text-sm text-neutral-700">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-4 text-neutral-800">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-neutral-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              I'm a software engineer with over 6 years of experience building scalable web applications and distributed systems. My passion lies in solving complex technical challenges and creating products that make a real impact.
            </p>
            <p>
              Throughout my career, I've worked across the full stack—from designing database schemas and REST APIs to crafting responsive user interfaces. I believe in writing clean, maintainable code and advocating for best practices within development teams.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, or mentoring junior developers. I'm always excited to collaborate on innovative projects that push boundaries.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
              </p>
              <div className="space-y-4 text-lg">
                <div>
                  <div className="font-bold mb-1">Email</div>
                  <a href="mailto:sepifazeli@yahoo.com" className="text-neutral-600 hover:text-black transition">
                    sepifazeli@yahoo.com
                  </a>
                </div>
                <div>
                  <div className="font-bold mb-1">Phone</div>
                  <a href="tel:4379856337" className="text-neutral-600 hover:text-black transition">
                    437-985-6337
                  </a>
                </div>
                <div>
                  <div className="font-bold mb-1">Connect</div>
                  <a href="https://Sep" className="text-neutral-600 hover:text-black transition">
                    Sep
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black transition"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black transition"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black transition resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="w-full bg-black text-white py-3 hover:bg-neutral-800 transition">
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto text-center text-neutral-600">
          <p>© 2024 Sepehr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}