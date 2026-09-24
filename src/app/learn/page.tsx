"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, CheckCircle2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const TIMELINE = [
  {
    day: "Day 1",
    title: "Dhanteras",
    description: "The festival begins with Dhanteras, dedicated to wealth and prosperity. Homes are cleaned, and it is considered auspicious to buy gold, silver, or new utensils.",
    region: "Across India",
  },
  {
    day: "Day 2",
    title: "Naraka Chaturdashi / Choti Diwali",
    description: "Celebrated to mark the defeat of the demon Narakasura by Lord Krishna. Early morning oil baths and the lighting of the first few diyas are traditional.",
    region: "Especially significant in South India and Maharashtra",
  },
  {
    day: "Day 3",
    title: "Lakshmi Puja / Diwali",
    description: "The main day of the festival. Families gather for Lakshmi Puja to invite the Goddess of Wealth into their homes, followed by feasts and fireworks.",
    region: "Across India",
  },
  {
    day: "Day 4",
    title: "Govardhan Puja / Padwa",
    description: "Commemorates Lord Krishna lifting Mount Govardhan. In some regions, it is celebrated as the start of the new financial year or as a celebration of marital devotion.",
    region: "North and West India",
  },
  {
    day: "Day 5",
    title: "Bhai Dooj",
    description: "The final day honors the bond between brothers and sisters. Sisters pray for their brothers' long and happy lives and apply a protective tilak on their foreheads.",
    region: "Across India",
  }
]

const QUIZ_QUESTIONS = [
  {
    question: "What does the word 'Diwali' literally translate to in Sanskrit?",
    options: ["Festival of Lights", "Row of Lights", "Victory of Good", "New Beginning"],
    answer: 1
  },
  {
    question: "Which Goddess is primarily worshipped on the main day of Diwali?",
    options: ["Saraswati", "Parvati", "Lakshmi", "Durga"],
    answer: 2
  },
  {
    question: "What is the traditional oil lamp used during Diwali called?",
    options: ["Lantern", "Candle", "Diya", "Torch"],
    answer: 2
  }
]

export default function LearnHubPage() {
  const [activeQuizIndex, setActiveQuizIndex] = useState(-1)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleStartQuiz = () => {
    setActiveQuizIndex(0)
    setScore(0)
    setShowResult(false)
    setSelectedOption(null)
  }

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return // Prevent multiple selections
    setSelectedOption(index)

    if (index === QUIZ_QUESTIONS[activeQuizIndex].answer) {
      setScore(s => s + 1)
    }

    setTimeout(() => {
      if (activeQuizIndex < QUIZ_QUESTIONS.length - 1) {
        setActiveQuizIndex(i => i + 1)
        setSelectedOption(null)
      } else {
        setShowResult(true)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-diwali-maroon selection:text-background flex flex-col">
      {/* Elegant Minimal Navigation */}
      <nav className="border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="font-serif text-xl tracking-wide text-diwali-ivory hover:opacity-80 transition-opacity">
            DiwaliVerse<span className="text-diwali-antique-gold text-xs font-sans tracking-normal ml-1">AI</span>
          </Link>
          <div className="flex items-center gap-4">
             <nav className="hidden md:flex gap-6 text-sm font-light text-muted-foreground mr-4">
                <Link href="/dashboard/greetings" className="hover:text-diwali-ivory transition-colors">Greetings</Link>
                <Link href="/dashboard/memes" className="hover:text-diwali-ivory transition-colors">Memes</Link>
                <Link href="/learn" className="text-diwali-ivory border-b border-diwali-antique-gold/50 pb-1">Learn</Link>
             </nav>
             <Button variant="outline" size="sm" className="border-diwali-antique-gold/30 text-diwali-antique-gold hover:bg-diwali-antique-gold/10" asChild>
                <Link href="/dashboard">Dashboard</Link>
             </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-16 animate-in fade-in duration-700">

        {/* Header */}
        <section className="text-center max-w-3xl mx-auto mb-24">
          <div className="text-diwali-maroon/70 text-sm tracking-[0.2em] uppercase font-light flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-4 h-4" /> Explore the traditions
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-diwali-ivory leading-tight mb-8">
            The Story Behind<br/><span className="text-diwali-maroon italic">the Lights</span>
          </h1>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">
            Diwali is a five-day festival celebrating the triumph of light over darkness. While stories vary across regions—from Lord Rama&apos;s return to Ayodhya to Lord Krishna&apos;s victory over Narakasura—the spirit of joy and renewal remains universal.
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-32 relative">
           <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-diwali-maroon/20 to-transparent" />

           <div className="space-y-16">
             {TIMELINE.map((item, idx) => (
               <div key={item.day} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                  {/* Timeline Dot */}
                  <div className="absolute left-[11px] md:left-1/2 md:-ml-[5px] top-6 w-2.5 h-2.5 rounded-full bg-diwali-maroon border-4 border-background ring-2 ring-diwali-maroon/20 z-10" />

                  {/* Content Box */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 text-left" : "md:pl-16 md:text-right"}`}>
                     <div className="text-diwali-maroon/70 text-xs tracking-[0.2em] uppercase font-light mb-2">{item.day}</div>
                     <h3 className="font-serif text-3xl text-diwali-ivory mb-4">{item.title}</h3>
                     <p className="text-muted-foreground font-light leading-relaxed mb-4">{item.description}</p>
                     <div className="inline-block px-3 py-1 border border-white/10 rounded-full text-xs text-muted-foreground/80 bg-white/[0.02]">
                        {item.region}
                     </div>
                  </div>
               </div>
             ))}
           </div>
        </section>

        {/* Interactive Quiz */}
        <section className="max-w-3xl mx-auto">
           <div className="glass-panel border border-white/5 rounded-2xl p-8 md:p-12 cinematic-shadow text-center">

              {activeQuizIndex === -1 && !showResult && (
                <div className="space-y-6">
                   <h3 className="font-serif text-4xl text-diwali-ivory">Test your Knowledge</h3>
                   <p className="text-muted-foreground font-light mb-8">Ready to see how much you know about the festival of lights?</p>
                   <Button size="lg" className="bg-diwali-maroon text-background hover:bg-[#600000] px-12" onClick={handleStartQuiz}>
                      Start Quiz
                   </Button>
                </div>
              )}

              {activeQuizIndex >= 0 && !showResult && (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
                   <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-widest border-b border-white/5 pb-4">
                      <span>Question {activeQuizIndex + 1} of {QUIZ_QUESTIONS.length}</span>
                      <span>Score: {score}</span>
                   </div>

                   <h4 className="font-serif text-2xl md:text-3xl text-diwali-ivory leading-tight">
                      {QUIZ_QUESTIONS[activeQuizIndex].question}
                   </h4>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      {QUIZ_QUESTIONS[activeQuizIndex].options.map((opt, i) => {
                        let btnClass = "border-white/10 hover:border-diwali-maroon/50 text-muted-foreground hover:text-diwali-ivory h-auto py-4 font-light";

                        if (selectedOption !== null) {
                           if (i === QUIZ_QUESTIONS[activeQuizIndex].answer) {
                              btnClass = "border-green-500 bg-green-500/10 text-green-500 h-auto py-4 font-medium";
                           } else if (i === selectedOption) {
                              btnClass = "border-red-500 bg-red-500/10 text-red-500 h-auto py-4 font-medium";
                           } else {
                              btnClass = "border-white/5 opacity-50 h-auto py-4 font-light cursor-not-allowed";
                           }
                        }

                        return (
                          <Button
                             key={i}
                             variant="outline"
                             className={btnClass}
                             onClick={() => handleOptionSelect(i)}
                             disabled={selectedOption !== null}
                          >
                             {opt}
                          </Button>
                        )
                      })}
                   </div>
                </div>
              )}

              {showResult && (
                <div className="space-y-6 animate-in zoom-in duration-500">
                   <div className="w-20 h-20 mx-auto bg-diwali-maroon/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-diwali-maroon" />
                   </div>
                   <h3 className="font-serif text-4xl text-diwali-ivory">Quiz Completed!</h3>
                   <p className="text-xl text-muted-foreground font-light mb-8">
                      You scored <span className="text-diwali-antique-gold font-medium">{score}</span> out of {QUIZ_QUESTIONS.length}.
                   </p>
                   <Button variant="outline" className="border-diwali-maroon/30 text-diwali-maroon hover:bg-diwali-maroon/10" onClick={handleStartQuiz}>
                      Try Again <RefreshCw className="ml-2 w-4 h-4" />
                   </Button>
                </div>
              )}

           </div>
        </section>

      </main>

      <footer className="py-8 px-6 border-t border-white/5 bg-background text-center text-sm font-light text-muted-foreground">
        DiwaliVerseAI • Celebrate. Create. Learn. Laugh.
      </footer>
    </div>
  )
}
