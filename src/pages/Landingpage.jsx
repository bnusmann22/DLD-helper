 import React, { useState ,useEffect} from 'react';
 import { useNavigate } from 'react-router-dom';
 import { Bell, Sun, Moon } from "lucide-react"
 import { Button } from '@/components/ui/Button';
 import '../App.css'
 import { Card, CardContent } from '@/components/ui/card';
 import { ArrowRight } from 'lucide-react';
 import { motion } from 'framer-motion';

 export default function LandingPage() {
   const navigate = useNavigate();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(
      function () {
        document.documentElement.classList.toggle("fake-dark-mode");
      },
      [isDarkMode]
    );

   return (
     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 font-sans dark:bg-gray-700 dark:text-white">
       {/* HEADER */}
       <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
         <div className="flex items-center gap-4">
           <div className="rounded-2xl bg-slate-900 text-white w-12 h-12 flex items-center justify-center text-lg font-bold font-heading">
             D
           </div>
           <div>
             <h1 className="text-lg font-heading font-semibold">DLD Helper</h1>
             <p className="text-xs text-slate-500">Digital Logic, taught and practised</p>
           </div>
         </div>
         <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700 font-sans">
           <a href="#features" className="hover:text-slate-900">Features</a>
           <a href="#demo" className="hover:text-slate-900">Interactive Demo</a>
           <Button className="ml-2" onClick={() => navigate('/login')}>Get Started</Button>
           {/* <DarkMode /> */}
         <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg"
          >
            {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
         </nav>
         <div className="md:hidden">
           <Button
             aria-label="open menu"
             className="p-2"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
             ☰
           </Button>
         </div>
       </header>

       {/* MOBILE MENU */}
       {isMenuOpen && (
         <motion.div
           initial={{ height: 0, opacity: 0 }}
           animate={{ height: 'auto', opacity: 1 }}
           transition={{ duration: 0.3 }}
           className="md:hidden bg-white border-b px-6 py-4"
         >
           <nav className="flex flex-col gap-4 text-sm text-slate-700 font-sans">
             <a href="#features" className="hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>Features</a>
             <a href="#demo" className="hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>Interactive Demo</a>
             <a href="#whyus" className="hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>Why Us</a>
             <Button onClick={() => navigate('/login')}>Get Started</Button>
             <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg"
              >
                {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
              </button>
           </nav>
         </motion.div>
       )}

       <main className="max-w-6xl mx-auto px-6">
         {/* HERO */}
         <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
           <div>
             <motion.h2
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.75 }}
               className="text-4xl md:text-5xl font-heading font-extrabold leading-tight"
             >
               Learn Digital Logic
               <br />
               Build & Simulate Easily
             </motion.h2>
             <p className="mt-4 text-slate-600 max-w-xl font-sans">
               DLD Helper is a student-first toolkit for learning Digital Logic Design — lessons,
               interactive truth table simulators, Karnaugh map solvers, step-by-step simplifications,
               and challenge problems designed for classroom and self-study.
             </p>
             <div className="mt-6 flex gap-4 items-center">
               <Button onClick={() => navigate('/login')}>
                 Get Started
                 <ArrowRight className="ml-2" />
               </Button>
               <a href="#demo" className="text-sm text-slate-600 underline font-sans">Try demo — no signup</a>
             </div>
           </div>

           {/* Demo Card */}
           <div className="order-first md:order-last">
             <Card className="shadow-2xl">
               <CardContent>
                 <div className="p-6">
                   <h3 className="text-lg font-heading font-semibold">Live Demo — Truth Table to Simplified Expression</h3>
                   <p className="text-sm text-slate-500 mt-2 font-sans">
                     Type a boolean expression or paste a truth table. Watch steps, gate-level netlist, and K-map simplification.
                   </p>
                   <div className="mt-4 bg-slate-50 rounded-md border p-4">
                     <label className="text-xs text-slate-500">Expression</label>
                     <input
                       className="w-full mt-2 p-2 rounded border font-sans"
                       placeholder="e.g. A & B | !C"
                     />
                     <div className="mt-3 flex gap-2">
                       <Button>Simulate</Button>
                       <Button variant="ghost">Auto-simplify</Button>
                     </div>
                   </div>
                 </div>
               </CardContent>
             </Card>
           </div> 
         </section>

         {/* FEATURES */}
         <section id="features" className="py-12">
           <h3 className="text-2xl font-heading font-bold">Core Features</h3>
           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: 'Interactive Truth Tables', desc: 'Create and visualize truth tables and input vectors.' },
               { title: 'Karnaugh Map Solver', desc: 'Automatic grouping + step-by-step simplification.' },
               { title: 'Gate-Level Simulation', desc: 'See logic gate nets and timing animations.' },
               { title: 'Guided Lessons', desc: 'Short lessons + worked examples for each topic.' },
             ].map((f) => (
               <div key={f.title} className="p-4 border rounded-lg bg-white">
                 <div className="font-heading font-semibold">{f.title}</div>
                 <div className="text-sm text-slate-600 mt-2 font-sans">{f.desc}</div>
               </div>
             ))}
           </div>
         </section>

         {/* WHY US */}
        <section id="whyus" className="py-12">
           <h3 className="text-2xl font-heading font-bold">Why Choose DLD Helper?</h3>
           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               {
                 icon: '🚀',
                 title: 'Fast Simulations',
                 desc: 'Powered by optimized algorithms for real-time truth table and K-map processing.',
               },
               {
                 icon: '🎓',
                 title: 'Student-Centric Design',
                 desc: 'Built for learners, with clear explanations and interactive tools tailored for DLD courses.',
               },
               {
                 icon: '📚',
                 title: 'Comprehensive Resources',
                 desc: 'From beginner lessons to advanced challenges, everything you need in one platform.',
               },
             ].map((item) => (
               <Card key={item.title}>
                 <CardContent className="p-6">
                   <div className="text-2xl">{item.icon}</div>
                   <h4 className="mt-2 font-heading font-semibold">{item.title}</h4>
                   <p className="mt-2 text-sm text-slate-600 font-sans">{item.desc}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
         </section> 

         {/* CALL TO ACTION */}
         <section className="py-16 text-center">
           <motion.h2
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.45 }}
             className="text-3xl md:text-4xl font-heading font-bold"
           >
             Ready to Master Digital Logic Design?
           </motion.h2>
           <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-sans">
             Join thousands of students using DLD Helper to learn, practice, and excel in Digital Logic Design.
           </p>
           <div className="mt-6">
             <Button size="lg" onClick={() => navigate('/login')}>
               Start Learning Now
               <ArrowRight className="ml-2" />
             </Button>
           </div>
         </section>
       </main>

       {/* FOOTER */}
       <footer className="bg-slate-900 text-white py-12 font-sans">
         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div>
             <h4 className="font-heading font-semibold">DLD Helper</h4>
             <p className="text-sm text-slate-400 mt-2">
               Empowering students to master Digital Logic Design with intuitive tools and resources.
             </p>
           </div>
           <div>
             <h4 className="font-heading font-semibold">Links</h4>
             <ul className="text-sm text-slate-400 mt-2 space-y-2">
               <li><a href="#features" className="hover:text-white">Features</a></li>
               <li><a href="#demo" className="hover:text-white">Interactive Demo</a></li>
               <li><a href="#whyus" className="hover:text-white">Why Us</a></li>
               <li><a href="/contact" className="hover:text-white">Contact</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-heading font-semibold">Get Started</h4>
             <p className="text-sm text-slate-400 mt-2">
               Sign up today to access all features and start learning.
             </p>
             <Button
               variant="outline"
               className="mt-4 text-white border-white hover:bg-white hover:text-slate-900"
               onClick={() => navigate('/login')}
             >
               Sign Up
             </Button>
           </div>
         </div>
         <div className="mt-8 text-center text-sm text-slate-400">
           © {new Date().getFullYear()} DLD Helper. All rights reserved.
         </div>
       </footer>
     </div>
   );
 }
