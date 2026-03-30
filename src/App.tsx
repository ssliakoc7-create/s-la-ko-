import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Camera, 
  Video, 
  Share2, 
  ExternalLink,
  Menu,
  X,
  PenTool,
  Moon,
  Sun,
  Globe
} from 'lucide-react';

const translations = {
  tr: {
    nav: {
      about: 'Hakkımda',
      resume: 'Özgeçmiş',
      contact: 'İletişim'
    },
    hero: {
      subtitle: 'Yeni Medya ve İletişim Öğrencisi',
      greeting: 'Merhaba, ben',
      description: "Üsküdar Üniversitesi Yeni Medya ve İletişim Bölümü'nde 3. sınıf öğrencisiyim. Eğitim sürecimde temel fotoğraf çekimi ve kurgu eğitimi aldım. Dijital içerik üretimi ve sosyal medya derslerinde başarı sağladım. Kendimi geliştirebileceğim, sorumluluk alabileceğim ve yeni beceriler kazanabileceğim bir pozisyonda çalışarak hem kişisel hem de profesyonel anlamda ilerlemeyi hedefliyorum.",
      contactBtn: 'İletişime Geç'
    },
    resume: {
      title: 'Özgeçmiş',
      education: 'Eğitim Bilgileri',
      ongoing: 'Devam Ediyor',
      degree: 'Yeni Medya ve İletişim (3. Sınıf)',
      school: 'Üsküdar Üniversitesi, İletişim Fakültesi',
      eduDesc: 'Dijital içerik üretimi, sosyal medya yönetimi, temel fotoğrafçılık ve kurgu alanlarında uygulamalı eğitimler almaktayım.',
      skills: 'Yetenekler & Beceriler',
      skill1: 'Dijital İçerik Üretimi',
      skill2: 'Sosyal Medya Yönetimi',
      skill3: 'Fotoğraf Çekimi',
      skill4: 'Kurgu & Montaj'
    },
    contact: {
      title: 'Birlikte çalışalım.',
      desc: 'Yeni projeler, staj imkanları veya yaratıcı fikirler için benimle iletişime geçebilirsiniz.',
      email: 'E-posta Gönder',
      linkedin: 'LinkedIn Profilim',
      instagram: 'Instagram Hesabım'
    },
    footer: {
      rights: 'Tüm hakları saklıdır.'
    },
    ui: {
      changeLang: 'TR',
      toggleTheme: 'Gece/Gündüz Modu'
    }
  },
  en: {
    nav: {
      about: 'About',
      resume: 'Resume',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'New Media and Communication Student',
      greeting: "Hello, I'm",
      description: "I am a 3rd-year student in the New Media and Communication Department at Üsküdar University. During my education, I received basic photography and editing training. I succeeded in digital content creation and social media courses. I aim to advance both personally and professionally by working in a position where I can improve myself, take responsibility, and gain new skills.",
      contactBtn: 'Get in Touch'
    },
    resume: {
      title: 'Resume',
      education: 'Education',
      ongoing: 'Ongoing',
      degree: 'New Media and Communication (3rd Year)',
      school: 'Üsküdar University, Faculty of Communication',
      eduDesc: 'I am receiving practical training in digital content creation, social media management, basic photography, and editing.',
      skills: 'Skills & Abilities',
      skill1: 'Digital Content Creation',
      skill2: 'Social Media Management',
      skill3: 'Photography',
      skill4: 'Video Editing'
    },
    contact: {
      title: "Let's work together.",
      desc: 'You can contact me for new projects, internship opportunities, or creative ideas.',
      email: 'Send Email',
      linkedin: 'LinkedIn Profile',
      instagram: 'Instagram Account'
    },
    footer: {
      rights: 'All rights reserved.'
    },
    ui: {
      changeLang: 'EN',
      toggleTheme: 'Toggle Theme'
    }
  }
};

type Language = 'tr' | 'en';

export default function App() {
  const [activeSection, setActiveSection] = useState('hakkimda');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>('tr');

  const t = (section: keyof typeof translations['tr'], key: string) => {
    // @ts-ignore
    return translations[language][section][key];
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const navItems = [
    { id: 'hakkimda', label: t('nav', 'about') },
    { id: 'ozgecmis', label: t('nav', 'resume') },
    { id: 'iletisim', label: t('nav', 'contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 selection:bg-stone-200 dark:selection:bg-stone-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="#hakkimda" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hakkimda'); }}
            className="font-serif text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50"
          >
            Sıla Koç.
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-stone-900 dark:hover:text-stone-50 ${
                  activeSection === item.id ? 'text-stone-900 dark:text-stone-50' : 'text-stone-500 dark:text-stone-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-2 border-l border-stone-200 dark:border-stone-800 pl-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 p-2 rounded-full text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50 transition-colors"
                title={t('ui', 'changeLang')}
              >
                <Globe size={18} />
                <span className="text-xs font-bold">{t('ui', 'changeLang')}</span>
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50 transition-colors"
                title={t('ui', 'toggleTheme')}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 p-2 text-stone-600 dark:text-stone-400"
              title={t('ui', 'changeLang')}
            >
              <Globe size={20} />
              <span className="text-xs font-bold">{t('ui', 'changeLang')}</span>
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-stone-600 dark:text-stone-400"
              title={t('ui', 'toggleTheme')}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="p-2 text-stone-600 dark:text-stone-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 px-6 py-4 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-lg font-medium ${
                    activeSection === item.id ? 'text-stone-900 dark:text-stone-50' : 'text-stone-500 dark:text-stone-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* HAKKIMDA SECTION */}
        <section id="hakkimda" className="scroll-mt-32">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-6 text-center md:text-left"
            >
              <div className="space-y-2">
                <h2 className="text-stone-500 dark:text-stone-400 font-medium tracking-widest uppercase text-sm">{t('hero', 'subtitle')}</h2>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight text-stone-900 dark:text-stone-50">
                  {t('hero', 'greeting')} <br/>
                  <span className="italic text-stone-700 dark:text-stone-300">Sıla Koç.</span>
                </h1>
              </div>
              
              <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl mx-auto md:mx-0">
                {t('hero', 'description')}
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/s%C4%B1la-ko%C3%A7-b59a363b4/?skipRedirect=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-800 dark:hover:bg-stone-700 hover:text-stone-50 dark:hover:text-stone-50 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/sliakoc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-800 dark:hover:bg-stone-700 hover:text-stone-50 dark:hover:text-stone-50 transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#iletisim"
                  onClick={(e) => { e.preventDefault(); scrollToSection('iletisim'); }}
                  className="px-6 py-3 rounded-full bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-all"
                >
                  {t('hero', 'contactBtn')}
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-64 h-64 md:w-80 md:h-96 relative shrink-0"
            >
              <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 rounded-[2rem] transform rotate-3 transition-transform hover:rotate-6"></div>
              <img 
                src="https://i.imgur.com/oCKPqeR.jpg" 
                alt="Sıla Koç" 
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* ÖZGEÇMİŞ SECTION */}
        <section id="ozgecmis" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-semibold text-stone-900 dark:text-stone-50">{t('resume', 'title')}</h2>
              <div className="w-12 h-1 bg-stone-300 dark:bg-stone-700 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Eğitim */}
              <div className="space-y-8">
                <h3 className="text-xl font-medium flex items-center gap-2 text-stone-800 dark:text-stone-200">
                  <GraduationCap className="text-stone-500 dark:text-stone-400" />
                  {t('resume', 'education')}
                </h3>
                
                <div className="relative pl-8 border-l border-stone-200 dark:border-stone-800 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-stone-50 dark:bg-stone-950 border-2 border-stone-400 dark:border-stone-600"></div>
                    <span className="text-sm font-medium text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-900 px-3 py-1 rounded-full">{t('resume', 'ongoing')}</span>
                    <h4 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mt-3">{t('resume', 'degree')}</h4>
                    <p className="text-stone-600 dark:text-stone-400 font-medium">{t('resume', 'school')}</p>
                    <p className="text-stone-500 dark:text-stone-500 mt-2 text-sm leading-relaxed">
                      {t('resume', 'eduDesc')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Yetenekler */}
              <div className="space-y-8">
                <h3 className="text-xl font-medium flex items-center gap-2 text-stone-800 dark:text-stone-200">
                  <Share2 className="text-stone-500 dark:text-stone-400" />
                  {t('resume', 'skills')}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: t('resume', 'skill1'), icon: <PenTool size={20} /> },
                    { name: t('resume', 'skill2'), icon: <Share2 size={20} /> },
                    { name: t('resume', 'skill3'), icon: <Camera size={20} /> },
                    { name: t('resume', 'skill4'), icon: <Video size={20} /> },
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-stone-400 dark:text-stone-500">{skill.icon}</div>
                      <span className="font-medium text-stone-700 dark:text-stone-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* İLETİŞİM SECTION */}
        <section id="iletisim" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-stone-900 rounded-[3rem] p-10 md:p-16 text-stone-50 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="space-y-6 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-serif font-medium">{t('contact', 'title')}</h2>
              <p className="text-stone-400 text-lg">
                {t('contact', 'desc')}
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto min-w-[250px]">
              <a 
                href="mailto:silakoc@example.com" 
                className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 rounded-2xl bg-stone-800 hover:bg-stone-700 transition-colors"
              >
                <Mail className="text-stone-400" size={20} />
                <span className="font-medium">{t('contact', 'email')}</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/s%C4%B1la-ko%C3%A7-b59a363b4/?skipRedirect=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 rounded-2xl bg-stone-800 hover:bg-stone-700 transition-colors"
              >
                <Linkedin className="text-stone-400" size={20} />
                <span className="font-medium">{t('contact', 'linkedin')}</span>
              </a>
              <a 
                href="https://www.instagram.com/sliakoc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 rounded-2xl bg-stone-800 hover:bg-stone-700 transition-colors"
              >
                <Instagram className="text-stone-400" size={20} />
                <span className="font-medium">{t('contact', 'instagram')}</span>
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 py-8 text-center transition-colors duration-300">
        <p className="text-stone-500 dark:text-stone-400 text-sm">
          © {new Date().getFullYear()} Sıla Koç. {t('footer', 'rights')}
        </p>
      </footer>
    </div>
  );
}
