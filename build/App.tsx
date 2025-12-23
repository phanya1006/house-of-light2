import React, { useState, useEffect } from 'react';
import ChatWidget from './components/ChatWidget';
import { CHURCH_DATA } from './constants';

// Icons
const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);
const IconMoon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
const IconLogoChurchStylized = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-md">
    <path d="M12 2L3 9v13h18V9l-9-7z" />
    <path d="M12 18V10" />
    <path d="M9 13h6" />
    <circle cx="12" cy="5" r="1" fill="currentColor" />
  </svg>
);
const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);
const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconCheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const IconImage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
);
const IconExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);
const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

type View = 'home' | 'about' | 'join' | 'service-detail' | 'news-detail' | 'apply';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [view, setView] = useState<View>('home');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  // Form State
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    service: 'Protocole',
    motivation: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navigateTo = (newView: View, itemData?: any) => {
    setView(newView);
    if (itemData) setSelectedItem(itemData);
    if (newView !== 'apply') setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Postulation pour le service : ${form.service} - ${form.nom}`;
    const body = `Nom: ${form.nom}%0D%0ATéléphone: ${form.telephone}%0D%0AService souhaité: ${form.service}%0D%0AMotivation: ${form.motivation}`;
    window.location.href = `mailto:mughenyakavale@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div onClick={() => navigateTo('home')} className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/30 transform group-hover:rotate-6 transition-transform">
              <IconLogoChurchStylized />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base sm:text-xl font-black tracking-tight uppercase leading-none">Maison de Lumière</h1>
              <p className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-1">Goma • RD Congo</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => navigateTo('home')} className={`text-sm font-bold ${view === 'home' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}>Accueil</button>
            <button onClick={() => navigateTo('about')} className={`text-sm font-bold ${view === 'about' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}>À Propos</button>
            <button onClick={() => navigateTo('join')} className={`text-sm font-bold ${view === 'join' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}>Rejoindre</button>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all">
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </button>
            <button onClick={() => navigateTo('join')} className="bg-blue-600 text-white px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black hover:bg-blue-700 active:scale-95 transition-all uppercase tracking-wider">
              Rejoindre
            </button>
          </div>
        </div>
      </header>

      {/* Main View Router */}
      <div className="animate-in fade-in duration-500">
        {view === 'home' && (
          <main>
            {/* Hero */}
            <section className="relative pt-12 sm:pt-20 pb-20 px-4 overflow-hidden">
              <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex py-2 px-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-[10px] font-black rounded-full mb-8 animate-bounce uppercase tracking-widest">Dieu est notre Lumière</div>
                  <h2 className="text-4xl sm:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tighter uppercase">
                    Vivre la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Lumière</span> de Dieu
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
                    Un sanctuaire de transformation au cœur de Goma. Notre mission est de sauver des âmes et d'être une lumière pour notre ville.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <button onClick={() => navigateTo('about')} className="bg-slate-900 dark:bg-white dark:text-slate-950 text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-blue-600 dark:hover:bg-blue-400 transition-all shadow-xl flex items-center justify-center gap-2">
                      En Savoir Plus <IconArrowRight />
                    </button>
                  </div>
                </div>
                <div className="flex-1 w-full max-w-lg relative group">
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://i.pinimg.com/1200x/39/4a/cb/394acb7ec39010489fed52c677815b47.jpg" alt="Maison de Lumière" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    
                    {/* Floating Overlay Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-10">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 w-fit px-6 py-3 rounded-2xl mb-4 transform -rotate-2">
                        <p className="text-white text-3xl sm:text-4xl font-black tracking-tighter uppercase drop-shadow-lg">
                          HOUSE OF <span className="text-blue-400">LIGHT</span>
                        </p>
                      </div>
                      <p className="text-blue-100/80 text-xs font-bold uppercase tracking-[0.3em] ml-2">Goma, RD Congo</p>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl"></div>
                </div>
              </div>
            </section>

            {/* Cultes Cards */}
            <section id="cultes" className="py-20 bg-slate-100 dark:bg-slate-900/50 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase">Calendrier des Cultes</h2>
                  <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { day: "Mardi", ...CHURCH_DATA.schedule.tuesday, icon: <IconSun />, color: "bg-amber-500" },
                    { day: "Jeudi", ...CHURCH_DATA.schedule.thursday, icon: <IconBook />, color: "bg-blue-600" },
                    { day: "Dimanche", ...CHURCH_DATA.schedule.sunday, icon: <IconUsers />, color: "bg-indigo-600" }
                  ].map((s) => (
                    <div 
                      key={s.id} 
                      onClick={() => navigateTo('service-detail', s)}
                      className="group cursor-pointer bg-slate-50 dark:bg-slate-800/50 p-10 rounded-[2.5rem] border border-transparent hover:border-blue-400 transition-all shadow-sm hover:shadow-xl"
                    >
                      <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>{s.icon}</div>
                      <h4 className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">{s.day}</h4>
                      <h3 className="text-2xl font-black mb-4">{s.name}</h3>
                      <div className="py-2 px-4 bg-white dark:bg-slate-700 rounded-xl w-fit font-black text-sm">{s.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* News Section */}
            <section id="actualites" className="py-20 bg-white dark:bg-slate-900 px-4 transition-colors">
              <div className="max-w-7xl px-4">
                <div className="text-center mb-16 gap-4">
                  <div>
                    <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase">Actualités</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-medium max-w-md">Vivez les temps forts de notre communauté et les événements à venir.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {CHURCH_DATA.news.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => navigateTo('news-detail', item)}
                      className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer border border-slate-100 dark:border-slate-800"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-blue-600 tracking-wider shadow-sm">
                          {item.date}
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-black mb-4 group-hover:text-blue-600 transition-colors leading-tight uppercase tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">{item.summary}</p>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-widest">
                          Lire la suite <IconArrowRight />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Galerie Section */}
            <section id="galerie" className="py-20 bg-slate-50 dark:bg-slate-950 px-4 transition-colors">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase">Galerie</h2>
                  <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                  <p className="mt-8 text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Découvrez les albums photos de nos moments précieux. Cliquez sur un album pour voir toutes les photos.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {CHURCH_DATA.gallery.map((album) => (
                    <a 
                      key={album.id}
                      href={album.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-slate-100 dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all block aspect-[4/3] border border-slate-200 dark:border-slate-700"
                    >
                      <img 
                        src={album.image} 
                        alt={album.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div>
                          <div className="bg-blue-600 text-white p-2 rounded-lg mb-4 w-fit shadow-lg">
                            <IconImage />
                          </div>
                          <h3 className="text-white text-xl font-black uppercase tracking-tight">{album.title}</h3>
                        </div>
                        <div className="text-white/70 group-hover:text-white transition-colors">
                          <IconExternalLink />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </main>
        )}

        {view === 'about' && (
          <main className="max-w-4xl mx-auto py-24 px-4 animate-in slide-in-from-right-10">
            <h2 className="text-5xl font-black text-center mb-8 uppercase tracking-tighter">À Propos</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-16"></div>
            <div className="space-y-12">
              <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <IconHeart />
                <h3 className="text-3xl font-black mt-4 mb-4 uppercase tracking-tight">Notre Mission</h3>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  La Maison de Lumière a pour mission de <span className="text-blue-600 font-bold uppercase tracking-wide">sauver des âmes</span>. Nous aspirons à être une véritable lumière pour la ville de Goma, guidant les cœurs vers le Salut et préparant un peuple pour le ciel.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
                <IconSun />
                <h3 className="text-3xl font-black mt-4 mb-4 uppercase tracking-tight">Notre Vision</h3>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  Être une communauté rayonnante qui prépare un peuple saint pour le retour du Seigneur, tout en impactant positivement la société de Goma par l'amour de Christ manifesté en actes.
                </p>
              </div>
            </div>

            {/* Notre Berger Section - déplacée ici en bas */}
            <section id="berger" className="pt-24 px-4 overflow-hidden relative">
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                  <div className="flex-1 w-full">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3.5rem] opacity-20 blur-2xl"></div>
                      <div className="relative aspect-square sm:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform rotate-2 hover:rotate-0 transition-all duration-500">
                        <img 
                          src="https://lh3.googleusercontent.com/pw/AP1GczMxNkUQqTVEI1soDLBVEoB0sYjdjpCbZWMq3P2gOWQh0ZqcEaglzby50Ei1UBgna44ic4_yzgtsidjxxezl9rjdQ6_RQAIWitZO5ZE_9vjW8Bpgy3iKK5TchheN8ouWm_g7tdv8ChTEhpQb91Uy9_gU=w1355-h903-s-no-gm?authuser=0" 
                          alt="Berger Aggelos Kamate" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Floating Badge */}
                      <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-[200px] transform -rotate-3">
                        <div className="flex items-center gap-2 mb-2 text-amber-500">
                          <IconStar /><IconStar /><IconStar />
                        </div>
                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-tight">Visionnaire & Guide Spirituel</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="inline-flex py-2 px-4 bg-blue-600/10 text-blue-600 text-[10px] font-black rounded-full mb-6 uppercase tracking-widest border border-blue-600/20">Leadership</div>
                    <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                      Notre <span className="text-blue-600 italic">Berger</span>
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-50 dark:border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                        <h3 className="text-2xl font-black mb-2 text-slate-900 dark:text-white uppercase tracking-tight">{CHURCH_DATA.leadership.berger}</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                          Serviteur de Dieu dévoué, le Berger Aggelos porte la vision de la Maison de Lumière avec passion. Son ministère est marqué par un amour profond pour les âmes et une soif d'enseigner la vérité biblique sans compromis pour transformer la ville de Goma.
                        </p>
                      </div>
                      
                      <div className="bg-white/50 dark:bg-slate-800/30 p-8 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-700">
                        <h4 className="text-lg font-black mb-2 flex items-center gap-3 uppercase tracking-tight">
                          <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"><IconHeart /></span>
                          Maman Rachelle Kamate
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium pl-11">
                          Prédicatrice ointe et pilier de soutien, elle accompagne le Berger dans cette mission sacrée. Ensemble, ils forment un couple uni pour le salut des familles et l'édification du corps de Christ.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <button onClick={() => navigateTo('home')} className="mt-12 block mx-auto text-blue-600 font-black uppercase text-xs tracking-[0.2em] hover:tracking-[0.3em] transition-all flex items-center gap-2 justify-center">
              Retour Accueil <IconArrowRight />
            </button>
          </main>
        )}

        {view === 'join' && (
          <main className="max-w-5xl mx-auto py-24 px-4 animate-in slide-in-from-bottom-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">Soyez les Bienvenus</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Rejoindre la Maison de Lumière, c'est intégrer une famille spirituelle unie pour Goma.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-800">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 tracking-tight uppercase"><IconMapPin /> Notre Adresse</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">{CHURCH_DATA.location}</p>
                  <p className="font-bold text-blue-600 mt-2 uppercase tracking-wider">{CHURCH_DATA.city}, {CHURCH_DATA.country}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-800">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 tracking-tight uppercase"><IconSun /> Horaires de la Semaine</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Mardi (Intercession)</span> <span>{CHURCH_DATA.schedule.tuesday.time}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Jeudi (Enseignement)</span> <span>{CHURCH_DATA.schedule.thursday.time}</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span className="font-bold text-blue-600 dark:text-blue-400">Dimanche (Culte Principal)</span> <span className="font-black">{CHURCH_DATA.schedule.sunday.time}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-12 rounded-[3.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
                <h3 className="text-3xl font-black mb-6 tracking-tight uppercase">Devenir Ouvrier</h3>
                <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                  Le Seigneur cherche des cœurs disposés. Mettez vos talents au service du Royaume à Goma en rejoignant l'une de nos équipes.
                </p>
                <div className="space-y-4 mb-10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 opacity-80">Nos Départements :</p>
                  <div className="flex flex-wrap gap-2">
                    {CHURCH_DATA.workers.map(w => (
                      <span key={w.name} className="px-3 py-1.5 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-wider border border-white/5">{w.role}</span>
                    ))}
                    <span className="px-3 py-1.5 bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-wider">Et d'autres...</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigateTo('apply')}
                  className="bg-white text-blue-700 font-black py-5 rounded-[2rem] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl"
                >
                  Postuler pour Servir
                </button>
              </div>
            </div>
          </main>
        )}

        {view === 'apply' && (
          <main className="max-w-3xl mx-auto py-16 px-4 animate-in zoom-in-95 duration-500">
            <button onClick={() => navigateTo('join')} className="mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold uppercase text-[10px] tracking-widest">
              ← Retour
            </button>
            
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="bg-blue-600 p-10 text-white text-center relative">
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-3">Servir dans le Royaume</h2>
                  <p className="text-blue-100 text-sm font-medium">Rejoignez l'armée de la Maison de Lumière à Goma.</p>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              </div>

              <div className="p-8 sm:p-12">
                {isSubmitted ? (
                  <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-8">
                      <IconCheckCircle />
                    </div>
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Merci, {form.nom} !</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      Votre postulation a été préparée. Si votre application mail ne s'est pas ouverte, veuillez contacter directement le responsable média. Que Dieu bénisse votre cœur disposé.
                    </p>
                    <button 
                      onClick={() => navigateTo('home')}
                      className="bg-slate-900 dark:bg-white dark:text-slate-950 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs"
                    >
                      Retour à l'accueil
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Nom Complet</label>
                      <input 
                        required
                        type="text" 
                        name="nom" 
                        value={form.nom}
                        onChange={handleFormChange}
                        placeholder="Votre nom et prénom" 
                        className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-blue-600 outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Téléphone / WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        name="telephone" 
                        value={form.telephone}
                        onChange={handleFormChange}
                        placeholder="+243 ..." 
                        className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-blue-600 outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Département de Service</label>
                      <select 
                        name="service" 
                        value={form.service}
                        onChange={handleFormChange}
                        className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-blue-600 outline-none transition-all font-medium appearance-none cursor-pointer"
                      >
                        <option value="Protocole">Protocole</option>
                        <option value="Accueil">Accueil</option>
                        <option value="Intercession">Intercession</option>
                        <option value="Média">Média</option>
                        <option value="Mode et Habillement">Mode et Habillement</option>
                        <option value="Prédication">Prédication</option>
                        <option value="Autre">Autre...</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Motivation</label>
                      <textarea 
                        required
                        name="motivation" 
                        value={form.motivation}
                        onChange={handleFormChange}
                        rows={4}
                        placeholder="Pourquoi souhaitez-vous intégrer ce service ?" 
                        className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-blue-600 outline-none transition-all font-medium resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all active:scale-[0.98] mt-4"
                    >
                      Envoyer ma Postulation
                    </button>
                  </form>
                )}
              </div>
            </div>
          </main>
        )}

        {view === 'service-detail' && selectedItem && (
          <main className="max-w-6xl mx-auto py-12 px-4 animate-in fade-in duration-500">
            <button onClick={() => navigateTo('home')} className="mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold uppercase text-[10px] tracking-widest">
              ← Retour au calendrier
            </button>
            <div className="relative h-[400px] sm:h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl mb-12 border-4 border-white dark:border-slate-800">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="bg-blue-600 text-white px-6 py-2 rounded-full w-fit font-black text-xs mb-4 tracking-[0.2em] uppercase">{selectedItem.day}</div>
                <h2 className="text-4xl sm:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-2">{selectedItem.name}</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3 tracking-tight uppercase">À propos de ce moment</h3>
                  <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 italic font-medium">"{selectedItem.description}"</p>
                  <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <IconMapPin />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest">Lieu du culte</h4>
                      <p className="text-slate-500 text-sm">{CHURCH_DATA.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-600 p-10 rounded-[2.5rem] text-center text-white shadow-xl shadow-blue-600/20">
                  <p className="font-black uppercase text-[10px] tracking-widest mb-2 opacity-80">Heure du rendez-vous</p>
                  <p className="text-6xl font-black tracking-tighter">{selectedItem.time}</p>
                </div>
                <button onClick={() => navigateTo('join')} className="w-full py-6 rounded-[2rem] bg-slate-900 dark:bg-white dark:text-slate-950 text-white font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">Nous Rejoindre</button>
              </div>
            </div>
          </main>
        )}

        {view === 'news-detail' && selectedItem && (
          <main className="max-w-4xl mx-auto py-12 px-4 animate-in slide-in-from-top-10">
            <button onClick={() => navigateTo('home')} className="mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold uppercase text-[10px] tracking-widest">
              ← Retour aux actualités
            </button>
            
            <div className="mb-10">
              <div className="inline-flex py-2 px-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-full mb-8 uppercase tracking-widest border border-blue-200/50">
                {selectedItem.date}
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white leading-none tracking-tighter mb-10 uppercase">
                {selectedItem.title}
              </h2>
              <div className="aspect-video w-full rounded-[3.5rem] overflow-hidden shadow-2xl mb-12 border-4 border-white dark:border-slate-800">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>
              <div className="prose prose-xl dark:prose-invert max-w-none">
                <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {selectedItem.content}
                </p>
              </div>
            </div>
          </main>
        )}
      </div>

      {/* Beautiful Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 transition-colors overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 opacity-50"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            {/* About Column */}
            <div className="space-y-8">
              <div onClick={() => navigateTo('home')} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-lg shadow-xl shadow-blue-500/40 group-hover:rotate-6 transition-transform">
                  <IconLogoChurchStylized />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase group-hover:text-blue-400 transition-colors">Maison de Lumière</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Sauver des âmes et préparer un peuple saint pour le Seigneur. Maison de Lumière est votre famille spirituelle unie au cœur de Goma, dans l'enceinte de l'ISTGA.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:border-blue-600 transition-all text-white/50 hover:text-white">
                    <IconHeart />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Column */}
            <div>
              <h4 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10">Exploration</h4>
              <ul className="space-y-5 text-slate-400 text-sm font-bold">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Accueil</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Notre Mission</button></li>
                <li><button onClick={() => navigateTo('join')} className="hover:text-white transition-colors uppercase tracking-wider text-xs">Rejoindre l'Église</button></li>
                <li><button onClick={() => navigateTo('apply')} className="hover:text-blue-400 transition-colors uppercase tracking-widest text-[10px]">Postuler pour Servir</button></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10">Lieu & Contact</h4>
              <div className="space-y-8 text-slate-400 text-sm">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-indigo-600 transition-colors"><IconMapPin /></div>
                  <p className="font-medium">ISTGA, Goma, RDC<br/><span className="text-[10px] opacity-60 uppercase font-black">Derrière l'ISIG</span></p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-blue-600 transition-colors"><IconMail /></div>
                  <p className="font-medium">contact@maisondelumiere.org</p>
                </div>
              </div>
            </div>

            {/* Newsletter / Action Column */}
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Restez Connecté</h4>
              <p className="text-slate-400 text-[10px] mb-8 italic leading-relaxed font-bold">Recevez nos messages d'édification et les annonces de nos cultes directement par email.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-xs w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                <button className="bg-blue-600 p-3 rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                  <IconArrowRight />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.4em] mb-2 opacity-60">Architecture Digitale</p>
              <p className="text-white text-xs font-black uppercase tracking-tight flex items-center gap-2">
                Ing. Mughenya Phanuel <span className="text-blue-600">•</span> L'Ouvrier Fantôme
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} Maison de Lumière • Goma, RDC
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* House AI Floating Assistant */}
      <ChatWidget />
    </div>
  );
}

export default App;