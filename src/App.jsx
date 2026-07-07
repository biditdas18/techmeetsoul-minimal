import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import heroBg from './assets/hero-bg.png';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MeteorCanvas from './components/MeteorCanvas';
import research from './data/research.json';
import publications from './data/publications.json';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      const sections = ['about', 'research', 'publications', 'recognition', 'contact'];
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
        <title>Bidit Das – AI Researcher | Model Efficiency & Decentralized Intelligence</title>
        <meta name="description" content="Bidit Das is an AI researcher and AWS Escalation Engineer working on model efficiency, decentralized AI systems, and personalization without retraining." />
        <meta name="keywords" content="Bidit Das, AI Researcher, Machine Learning, LLM Evaluation, Model Efficiency, Recommender Systems, AWS, University of Houston" />
        <meta name="author" content="Bidit Das" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Bidit Das – AI Researcher | Model Efficiency & Decentralized Intelligence" />
        <meta property="og:description" content="Research on model efficiency, decentralized AI, and personalization without retraining, plus published work on LLM evaluation and recommendation systems." />
        <meta property="og:image" content="/bidit-og.jpeg" />
        <meta property="og:url" content="https://techmeetssoul.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bidit Das – AI Researcher | Model Efficiency & Decentralized Intelligence" />
        <meta name="twitter:description" content="Research on model efficiency, decentralized AI, and personalization without retraining, plus published work on LLM evaluation and recommendation systems." />
        <meta name="twitter:image" content="/bidit-og.jpeg" />
        <meta name="twitter:site" content="@biditdas18" />

        <meta name="google-site-verification" content="FNMe_UhWowDzY3UdbxRbj_umlkvGGHWdF9gP3pHTRQY" />

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
            <a href="#research" className={navLinkClass('research')}>Research</a>
            <a href="#publications" className={navLinkClass('publications')}>Publications</a>
            <a href="#recognition" className={navLinkClass('recognition')}>Recognition</a>
            <a href="#contact" className={navLinkClass('contact')}>Contact</a>
          </nav>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start px-6 pb-4 bg-black bg-opacity-80">
            <a href="#about" className={navLinkClass('about')} onClick={() => setMenuOpen(false)}>About</a>
            <a href="#research" className={navLinkClass('research')} onClick={() => setMenuOpen(false)}>Research</a>
            <a href="#publications" className={navLinkClass('publications')} onClick={() => setMenuOpen(false)}>Publications</a>
            <a href="#recognition" className={navLinkClass('recognition')} onClick={() => setMenuOpen(false)}>Recognition</a>
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
            Bidit Das
          </motion.h1>

          <motion.p
            className="text-cyan-300 text-lg md:text-2xl font-medium drop-shadow-md mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            AI Researcher — Model Efficiency & Decentralized Intelligence
          </motion.p>

          <motion.p
            className="text-white text-base md:text-xl font-light drop-shadow-md opacity-90 max-w-3xl mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.2 }}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            Building AI systems that cost less to build, run outside centralized infrastructure, and personalize to individual users without expensive retraining.
          </motion.p>

          <motion.p
            className="text-gray-300 text-sm md:text-base mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            AWS Escalation Engineer · M.S. Electrical Engineering, University of Houston
          </motion.p>
        </div>
      </section>


      <section id="about" className="min-h-screen bg-gray-950 text-white px-4 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-6">
            About
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="text-lg max-w-4xl mb-10">
            I'm an AI researcher and AWS Escalation Engineer. Most of the field is betting on scale: bigger models, more compute, more centralized infrastructure. I find the opposite direction more interesting. How much intelligence can you squeeze out of a machine sitting on your desk? Can training data build itself without armies of human annotators? Can a model learn <em>you</em> without being retrained? These questions keep me up at night, and I answer them the only way I trust: build the system, measure it honestly, publish the result.
          </motion.p>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-6">
            Origin
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="text-lg max-w-4xl">
            This work started with a personal problem. Experimenting with modern AI is expensive. I felt that as a working professional. A student with a great idea and no budget feels it much more. Around the same time, I noticed something else: people share everything with AI. Journals, medical reports, their worst days. All of it flows through someone else's servers. Sooner or later, privacy will matter as much as intelligence. Both problems point to the same answer: capable AI that runs locally, on your own machine, owned by you. I had worked on a version of this problem before, in graduate research on securing decentralized vehicle networks without a central authority (Springer FTC 2020, 13 citations). I've been pulling on that thread ever since. Everything below is that loop in motion.
          </motion.p>
        </motion.div>
      </section>

      <section id="research" className="min-h-screen bg-gray-900 text-white px-4 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-2">
            Research
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-base text-gray-400 mb-8 max-w-3xl">
            Three connected problems: the cost of building AI systems, their dependence on centralized infrastructure, and the expense of personalizing them.
          </motion.p>
          <div className="grid gap-6 md:grid-cols-2">
            {research.map((proj, index) => (
              <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="bg-gray-800 rounded-xl p-6 shadow-md hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10 transition-transform duration-300">
                <p className="text-xs uppercase tracking-wide text-cyan-400 mb-2">{proj.pillar}</p>
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm opacity-90">{proj.description}</p>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline inline-block mt-4">
                    {proj.linkLabel}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="publications" className="min-h-screen bg-gray-950 text-white px-4 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-8">
            Publications
          </motion.h2>
          <div className="space-y-6 max-w-4xl">
            {publications.map((pub, index) => (
              <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="border-l-2 border-cyan-500/40 pl-4">
                <p className="text-base md:text-lg font-medium">{pub.title}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {pub.authors} ({pub.year}). {pub.venue}
                  {pub.note && ` · ${pub.note}`}
                </p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-sm inline-block mt-2">
                  View →
                </a>
              </motion.div>
            ))}
          </div>
          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1 }}
            href="https://scholar.google.com/citations?user=9dLYRD4AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-cyan-400 underline"
          >
            Full profile on Google Scholar →
          </motion.a>
        </motion.div>
      </section>

      <section id="recognition" className="min-h-screen bg-gray-900 text-white px-4 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-8">
            Recognition & Service
          </motion.h2>
          <div className="space-y-8 max-w-3xl">
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }}>
              <h3 className="text-lg font-semibold">Reviewer & Program Committee Member, UncertaiNLP Workshop @ EMNLP 2026</h3>
              <p className="text-sm opacity-90 mt-1">
                Serving on the program committee for the workshop on uncertainty estimation in NLP. Verifiable on OpenReview.
              </p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }}>
              <h3 className="text-lg font-semibold">Master of Ceremonies, ODSC AI East 2026</h3>
              <p className="text-sm opacity-90 mt-1">
                Invited to host after submitting a well-received research proposal to the conference.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-900 text-white px-4 md:px-8 py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-4">
            Contact
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="text-lg max-w-3xl mb-6 opacity-90">
            Interested in connecting or working together? Reach out on LinkedIn.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1 }} className="text-lg max-w-3xl space-y-2">
            <p><a href="https://www.linkedin.com/in/biditdas18/" className="text-blue-400 underline" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/biditdas18" className="text-blue-400 underline" target="_blank" rel="noreferrer">GitHub</a></p>
            <p><a href="https://scholar.google.com/citations?user=9dLYRD4AAAAJ&hl=en" className="text-blue-400 underline" target="_blank" rel="noreferrer">Google Scholar</a></p>
            <p><a href="https://medium.com/@biditdas18" className="text-blue-400 underline" target="_blank" rel="noreferrer">Medium — I write here</a></p>
          </motion.div>
        </motion.div>
      </section>

      <SpeedInsights />
    </div>
  );
}

export default App;
