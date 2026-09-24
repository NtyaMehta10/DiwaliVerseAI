"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, MessageSquare, BookOpen, ChevronRight } from "lucide-react"

export default function LandingPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen selection:bg-diwali-antique-gold selection:text-background flex flex-col">
      {/* Elegant Minimal Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 transition-all duration-300 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="font-serif text-xl md:text-2xl tracking-wide text-diwali-ivory">
          DiwaliVerse<span className="text-diwali-antique-gold text-sm font-sans tracking-normal ml-1">AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-light text-muted-foreground">
          <Link href="#create" className="hover:text-diwali-ivory transition-colors">Create</Link>
          <Link href="#learn" className="hover:text-diwali-ivory transition-colors">Learn</Link>
          <Link href="#about" className="hover:text-diwali-ivory transition-colors">About</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-light text-diwali-ivory hover:text-diwali-antique-gold transition-colors hidden sm:block">
            Sign In
          </Link>
          <Button variant="outline" className="border-diwali-antique-gold/30 text-diwali-antique-gold hover:bg-diwali-antique-gold/10" asChild>
            <Link href="/register">Enter DiwaliVerse</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-diwali-antique-gold/5 via-background to-background pointer-events-none" />

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center justify-center gap-3 text-diwali-antique-gold/80 text-sm tracking-[0.2em] font-light">
            <span className="w-8 h-[1px] bg-diwali-antique-gold/40" />
            DIGITAL FESTIVAL EXPERIENCE
            <span className="w-8 h-[1px] bg-diwali-antique-gold/40" />
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-diwali-ivory mb-8">
            <span className="block">A New Way</span>
            <span className="block text-gradient-gold">to Experience</span>
            <span className="block">Diwali.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Celebrate the festival of lights with AI-crafted greetings, culturally resonant memes, and an interactive journey through regional traditions.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-diwali-antique-gold text-background hover:bg-diwali-gold w-full sm:w-auto" asChild>
              <Link href="/register">Explore DiwaliVerse <ChevronRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-diwali-ivory/20 text-diwali-ivory hover:bg-diwali-ivory/5 w-full sm:w-auto" asChild>
              <Link href="#create">Create Something</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Editorial Introduction */}
      <section id="about" className="py-32 px-6 md:px-12 bg-background border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto editorial-layout">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-diwali-ivory leading-tight mb-8">
              One celebration.<br/>Countless ways<br/>to experience it.
            </h2>
          </div>
          <div className="text-muted-foreground font-light leading-relaxed space-y-6 text-lg">
            <p>
              Diwali is more than just a single day. It is a season of light, a tapestry of regional traditions, and a deeply personal celebration of new beginnings.
            </p>
            <p>
              DiwaliVerse brings together the cultural depth of the festival with modern technology, giving you an elegant space to create, learn, and share your joy.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section id="create" className="py-0">

        {/* 01 - Greeting Studio */}
        <div className="py-32 px-6 md:px-12 bg-[#0d0c0a] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-diwali-maroon/10 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto editorial-layout relative z-10">
            <div className="order-2 md:order-1 glass-panel p-8 md:p-12 cinematic-shadow glow-subtle">
              <div className="font-serif text-xl text-diwali-antique-gold mb-6 italic">Sample Greeting</div>
              <p className="text-diwali-ivory text-xl font-light leading-relaxed mb-6">
                &quot;May the glow of the diyas illuminate your path, and the warmth of the season bring peace to your home. Wishing you a beautiful and prosperous Diwali.&quot;
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="uppercase tracking-widest text-xs">Traditional</span>
                <span className="w-1 h-1 rounded-full bg-diwali-antique-gold/50" />
                <span className="uppercase tracking-widest text-xs">English</span>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="text-diwali-antique-gold/50 font-serif text-2xl">01 —</div>
              <h3 className="font-serif text-4xl text-diwali-ivory">Greeting Studio</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Move beyond forwarded messages. Craft personalized, culturally nuanced Diwali greetings in multiple Indian languages, perfectly tailored to your recipient and tone.
              </p>
              <Button variant="outline" className="border-diwali-antique-gold/30 text-diwali-antique-gold hover:bg-diwali-antique-gold/10 mt-4" asChild>
                <Link href="/dashboard/greetings">Create a Greeting <Sparkles className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 02 - Meme Studio */}
        <div className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
          <div className="absolute left-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-diwali-emerald/10 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto editorial-layout relative z-10">
            <div className="space-y-6">
              <div className="text-diwali-antique-gold/50 font-serif text-2xl">02 —</div>
              <h3 className="font-serif text-4xl text-diwali-ivory">Meme Studio</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Share the lighter side of the festival. Generate context-aware captions and create highly relatable, multilingual memes about family, sweets, and celebration prep.
              </p>
              <Button variant="outline" className="border-diwali-antique-gold/30 text-diwali-antique-gold hover:bg-diwali-antique-gold/10 mt-4" asChild>
                <Link href="/dashboard/memes">Create a Meme <MessageSquare className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="glass-panel p-8 md:p-12 cinematic-shadow border-white/5 bg-white/[0.01]">
              <div className="w-full aspect-[4/3] bg-muted/20 border border-white/5 flex flex-col items-center justify-center p-6 text-center">
                 <p className="font-serif text-2xl text-diwali-ivory mb-4 leading-snug">&quot;When relatives ask about your career plans during Diwali dinner.&quot;</p>
                 <div className="text-sm text-muted-foreground italic">— Soan Papdi stress intensifies —</div>
              </div>
            </div>
          </div>
        </div>

        {/* 03 - Learn Hub */}
        <div id="learn" className="py-32 px-6 md:px-12 bg-[#0d0c0a] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-diwali-antique-gold/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto editorial-layout relative z-10">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
               {['Dhanteras', 'Lakshmi Puja', 'Govardhan Puja', 'Bhai Dooj'].map((day, i) => (
                 <div key={day} className="glass-panel p-6 border-white/5 hover:border-diwali-antique-gold/30 transition-colors cursor-default">
                    <div className="text-diwali-antique-gold/40 text-xs tracking-widest mb-2">DAY 0{i+1}</div>
                    <div className="font-serif text-xl text-diwali-ivory">{day}</div>
                 </div>
               ))}
            </div>
            <div className="order-1 md:order-2 space-y-6 pl-0 md:pl-12">
              <div className="text-diwali-antique-gold/50 font-serif text-2xl">03 —</div>
              <h3 className="font-serif text-4xl text-diwali-ivory">Learn Hub</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Explore the stories behind the lights. Discover the five days of celebration, understand regional traditions, and test your knowledge of India&apos;s grandest festival.
              </p>
              <Button variant="outline" className="border-diwali-antique-gold/30 text-diwali-antique-gold hover:bg-diwali-antique-gold/10 mt-4" asChild>
                <Link href="/learn">Explore the Learn Hub <BookOpen className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Storytelling Statement */}
      <section className="py-40 px-6 md:px-12 bg-background relative flex items-center justify-center text-center">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
         <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl text-diwali-ivory leading-tight italic">
              &quot;Many regions.<br/>Many traditions.<br/>One celebration.&quot;
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-diwali-antique-gold/50 to-transparent mx-auto" />
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#0A0908] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-diwali-antique-gold/10 via-background to-background pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl text-diwali-ivory mb-6">
            <span className="block mb-2">Your Diwali.</span>
            <span className="block mb-2">Your story.</span>
            <span className="block text-diwali-antique-gold italic">Your way.</span>
          </h2>
          <div className="mt-12">
            <Button size="lg" className="bg-diwali-antique-gold text-background hover:bg-diwali-gold h-14 px-12 text-lg" asChild>
              <Link href="/register">Enter DiwaliVerse</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Minimal Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif text-2xl text-diwali-ivory mb-2">DiwaliVerse<span className="text-diwali-antique-gold text-sm font-sans ml-1">AI</span></div>
            <div className="text-muted-foreground text-sm font-light tracking-wide">Celebrate. Create. Learn. Laugh.</div>
          </div>
          <div className="flex gap-6 text-sm font-light text-muted-foreground">
            <Link href="/dashboard/greetings" className="hover:text-diwali-ivory transition-colors">Create</Link>
            <Link href="/learn" className="hover:text-diwali-ivory transition-colors">Learn</Link>
            <span className="opacity-30">|</span>
            <span className="hover:text-diwali-ivory transition-colors cursor-not-allowed">Privacy</span>
            <span className="hover:text-diwali-ivory transition-colors cursor-not-allowed">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
