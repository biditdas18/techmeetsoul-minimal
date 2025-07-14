import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import heroBg from './assets/hero-bg.png';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MeteorCanvas from './components/MeteorCanvas';
import projects from './data/projects.json';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      const sections = ['about', 'projects', 'blog', 'contact'];
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (id) =>
    `${activeSection === id ? 'underline text-cyan-400' : 'hover:underline'} block px-4 py-2`;

  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      <Helmet>
        <title>Bidit Das – AI Developer & Engineer</title>
        <meta name="description" content="Portfolio of Bidit Das – Machine Learning Engineer, AI Researcher, and Engineer. Explore my work, research, and contributions in AI, ML, and emotional computing." />
        <meta name="keywords" content="Bidit Das, AI Engineer, Machine Learning, Portfolio, Research, Emotional AI, NASA, PTSD AI, O1A, EB1A" />
        <meta name="author" content="Bidit Das" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Bidit Das – AI Developer & Engineer" />
        <meta property="og:description" content="Explore the portfolio of Bidit Das, focused on humanizing AI, space research, and impactful ML systems." />
        <meta property="og:image" content="/bidit-og.jpeg" />
        <meta property="og:url" content="https://techmeetssoul.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bidit Das – AI Developer & Engineer" />
        <meta name="twitter:description" content="Explore the portfolio of Bidit Das, focused on humanizing AI, space research, and impactful ML systems." />
        <meta name="twitter:image" content="/bidit-og.jpeg" />
        <meta name="twitter:site" content="@biditdas18" />

        <link rel="canonical" href="https://techmeetssoul.vercel.app" />
      </Helmet>

      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white z-50">
        <div className="flex justify-between items-center px-6 py-4 md:justify-center md:space-x-6">
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              ☰
            </button>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className={navLinkClass('about')}>About</a>
            <a href="#projects" className={navLinkClass('projects')}>Projects</a>
            <a href="#blog" className={navLinkClass('blog')}>Blog</a>
            <a href="#contact" className={navLinkClass('contact')}>Contact</a>
          </nav>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start px-6 pb-4 bg-black bg-opacity-80">
            <a href="#about" className={navLinkClass('about')} onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" className={navLinkClass('projects')} onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#blog" className={navLinkClass('blog')} onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#contact" className={navLinkClass('contact')} onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <section className="min-h-screen w-full relative overflow-hidden">
        {/* Background */}
        <img src={heroBg} alt="Hero Background" className="absolute w-full h-full object-cover z-0" />
        <div className="absolute w-full h-full bg-black bg-opacity-20 z-10" />

        {/* Meteor Canvas limited to 60% height */}
        <div className="absolute top-0 left-0 w-full h-[60%] z-20 pointer-events-none overflow-hidden">
          <MeteorCanvas />
        </div>

        {/* Hero text content on top */}
        <div className="relative z-30 flex flex-col items-center justify-center h-full pt-40 px-4 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-4"
          >
            Tech Meets Soul
          </motion.h1>

          <motion.p
            className="text-white text-base md:text-xl font-light drop-shadow-md opacity-90 max-w-3xl mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.2 }}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            Creating AI in tune with the soul, the stars, and the silent symphony of the cosmos.
          </motion.p>

          <motion.blockquote
            className="text-white text-sm md:text-base italic opacity-80 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            “Somewhere, something incredible is waiting to be known.”<br />
            <span className="text-xs text-gray-300">— Carl Sagan</span>
          </motion.blockquote>
        </div>
      </section>


      <section id="about" className="min-h-screen bg-gray-950 text-white px-4 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-6">
            Who I Am
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="text-lg max-w-4xl mb-10">
            I'm someone who has always been drawn to the stars—not just in the astronomical sense, but in the patterns, stories, and silence they carry. I've never been able to look at the sky without feeling both awe and comfort. My curiosity led me to Machine Learning and AI, not to build machines that simply compute, but to build systems that can listen, reflect, and help. I believe that we are all part of a larger order, and my work is my humble attempt to tune into that.
          </motion.p>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-6">
            Why I Build
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="text-lg max-w-4xl">
            I build because I believe AI/ML can serve more than markets—it can serve people. Whether it's exploring space weather patterns to feel more connected to the cosmos, or building emotional AI to help with depression, PTSD, and loneliness, my goal is to humanize the machine. If even one person feels understood, healed, or empowered by something I build, then I’ve succeeded. For me, technology isn't just logic—it’s soul.
          </motion.p>
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen bg-gray-900 text-white px-4 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-8">
            Projects
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj, index) => (
              <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="bg-gray-800 rounded-xl p-6 shadow-md hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  {proj.icon && <span className="mr-2">{proj.icon}</span>}
                  {proj.title}
                </h3>
                <p className="text-sm opacity-90">{proj.description}</p>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline inline-block mt-4">
                    View Project →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="blog" className="min-h-screen bg-gray-950 text-white px-4 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-4">
            Blog & Publications
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="text-lg max-w-3xl">
            [Medium articles, public work, etc.]
          </motion.p>
        </motion.div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-900 text-white px-4 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-4">
            Contact
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="text-lg max-w-3xl space-y-2">
            <p>📫 <a href="https://www.linkedin.com/in/biditdas18/" className="text-blue-400 underline" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p>💻 <a href="https://github.com/biditdas18" className="text-blue-400 underline" target="_blank" rel="noreferrer">GitHub</a></p>
            <p>🔬 <a href="https://scholar.google.com/citations?user=9dLYRD4AAAAJ&hl=en" className="text-blue-400 underline" target="_blank" rel="noreferrer">Google Scholar</a></p>
            <p>🕊️ <a href="https://x.com/biditdas18" className="text-blue-400 underline" target="_blank" rel="noreferrer">X (Twitter)</a></p>
          </motion.p>
        </motion.div>
      </section>

      <SpeedInsights />
    </div>
  );
}

export default App;
