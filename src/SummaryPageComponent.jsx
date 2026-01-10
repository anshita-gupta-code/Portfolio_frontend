import React, { useState } from "react";
import { Code, Mail, Phone, MapPin, Linkedin, Github, Download, Sun, Moon, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => (
  <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    {/* Thumbnail with overlay */}
    <div className="relative overflow-hidden h-48">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
          <a href={project.liveUrl} className="flex-1 bg-white text-blue-600 py-2 rounded-lg text-center font-medium hover:bg-blue-50">
            Live Demo
          </a>
          <a href={project.githubUrl} className="flex-1 bg-white/20 backdrop-blur text-white py-2 rounded-lg text-center font-medium border border-white/30">
            GitHub
          </a>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}
      <ul className="space-y-2">
        {project.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="text-blue-600 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SummaryPageComponent = () => {
    const [darkMode, setDarkMode] = useState(false);

    const skills = {
        frontend: ["React", "AngularJS", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
        backend: ["Ruby on Rails", "Node.js"],
        databases: ["PostgreSQL", "MongoDB", "SQLite"],
        tools: ["Git", "LaTeX", "MS Office"]
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 text-gray-800 dark:text-gray-100 min-h-screen transition-all duration-500">

                {/* Floating Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                    {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
                </button>

                {/* Hero Header */}
                <header className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
                    
                    <div className="relative max-w-6xl mx-auto px-6 py-20 text-center text-white">
                        <div className="inline-block mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                            <Code className="w-12 h-12 mx-auto" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Anshita Gupta</h1>
                        <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
                            Full Stack Developer
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm md:text-base">
                            {["React", "AngularJS", "Ruby on Rails", "Node.js"].map((tech, i) => (
                                <span key={i} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Pune, India</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:gupta.anshita1710@gmail.com" className="hover:underline">
                                    gupta.anshita1710@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>+91-7974136059</span>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <a href="https://www.linkedin.com/in/anshita-gupta-4b279817b" 
                               className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-medium">
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a href="#" 
                               className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 border border-white/30 font-medium">
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                            <a href="#" 
                               className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 border border-white/30 font-medium">
                                <Download className="w-4 h-4" />
                                Resume
                            </a>
                        </div>
                    </div>
                </header>

                <main className="mx-auto px-6 py-16 space-y-20">
                    {/* About */}
                    <section className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                            <h2 className="text-3xl font-bold">About Me</h2>
                        </div>
                        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                I'm a results-driven developer with <strong className="text-blue-600 dark:text-blue-400">6+ years of experience</strong> in frontend and backend development.
                                I specialize in building scalable, user-friendly applications using modern technologies.
                                I thrive on solving real-world problems and collaborating with cross-functional teams to deliver exceptional digital experiences.
                            </p>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                            <h2 className="text-3xl font-bold">Tech Stack</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(skills).map(([category, items], i) => (
                                <div key={i} className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 capitalize text-blue-600 dark:text-blue-400">
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item, j) => (
                                            <span key={j} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800">
                            <p className="text-center font-medium text-yellow-800 dark:text-yellow-300">
                                🏆 Oracle Certified in Core Java
                            </p>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                            <h2 className="text-3xl font-bold">Featured Projects</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "OpsPi Software", desc: "Operational intelligence platform for business analytics", stack: "React, Ruby on Rails", color: "from-blue-500 to-cyan-500" },
                                { title: "Derma Aid App", desc: "Mobile application for dermatology consultations", stack: "React Native", color: "from-purple-500 to-pink-500" },
                                { title: "Online Counselling", desc: "ULB allocation system for government administration", stack: "AngularJS, HTML, CSS", color: "from-orange-500 to-red-500" }
                            ].map((proj, i) => (
                                <div key={i} className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                                    <div className={`h-2 bg-gradient-to-r ${proj.color}`}></div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {proj.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                            {proj.desc}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                                {proj.stack}
                                            </span>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                            <h2 className="text-3xl font-bold">Experience</h2>
                        </div>
                        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex flex-wrap items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">IB Group</h3>
                                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Full Stack Developer</p>
                                </div>
                                <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium text-sm border border-blue-100 dark:border-blue-800">
                                    Jun 2024 – Present
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Built scalable web applications using React and Node.js",
                                    "Integrated Socket.io for real-time IVR systems",
                                    "Developed RESTful APIs and responsive UI components"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="text-center pb-12">
                        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 rounded-3xl p-12 shadow-2xl">
                            <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
                            <p className="text-xl text-white/90 mb-8">Ready to bring your ideas to life</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="mailto:gupta.anshita1710@gmail.com" 
                                   className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-medium">
                                    <Mail className="w-5 h-5" />
                                    Email Me
                                </a>
                                <a href="tel:+917974136059" 
                                   className="flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 border border-white/30 font-medium">
                                    <Phone className="w-5 h-5" />
                                    Call Me
                                </a>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="text-center py-8 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
                    <p>© 2026 Anshita Gupta. Built with React & Tailwind CSS</p>
                </footer>
            </div>
        </div>
    );
};

export default SummaryPageComponent;