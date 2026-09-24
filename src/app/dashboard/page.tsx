import Link from "next/link"
import { Sparkles, MessageSquare, BookOpen, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">

      {/* Welcome Section */}
      <section className="space-y-4">
        <div className="text-diwali-antique-gold/70 text-sm tracking-[0.2em] uppercase font-light">Welcome back</div>
        <h1 className="font-serif text-4xl md:text-5xl text-diwali-ivory">Your Creative Studio</h1>
        <p className="text-muted-foreground font-light text-lg max-w-2xl">
          What would you like to create for this year&apos;s celebration?
        </p>
      </section>

      {/* Quick Actions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Greeting Card */}
        <Link href="/dashboard/greetings" className="group block">
          <div className="h-full glass-panel p-8 border border-white/5 hover:border-diwali-antique-gold/30 transition-all duration-300 rounded-lg relative overflow-hidden bg-background">
            <div className="absolute top-0 right-0 w-32 h-32 bg-diwali-antique-gold/5 blur-3xl rounded-full -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50" />
            <Sparkles className="w-8 h-8 text-diwali-antique-gold mb-6" />
            <h3 className="font-serif text-2xl text-diwali-ivory mb-3 group-hover:text-diwali-antique-gold transition-colors">Greeting Studio</h3>
            <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
              Craft personalized, culturally resonant Diwali wishes in multiple Indian languages.
            </p>
            <div className="text-diwali-antique-gold text-sm font-medium flex items-center">
              Create <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform">→</span>
            </div>
          </div>
        </Link>

        {/* Meme Card */}
        <Link href="/dashboard/memes" className="group block">
          <div className="h-full glass-panel p-8 border border-white/5 hover:border-diwali-antique-gold/30 transition-all duration-300 rounded-lg relative overflow-hidden bg-background">
            <div className="absolute top-0 right-0 w-32 h-32 bg-diwali-emerald/5 blur-3xl rounded-full -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50" />
            <MessageSquare className="w-8 h-8 text-diwali-emerald mb-6" />
            <h3 className="font-serif text-2xl text-diwali-ivory mb-3 group-hover:text-diwali-emerald transition-colors">Meme Studio</h3>
            <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
              Generate funny, relatable, context-aware Diwali memes to share the joy.
            </p>
            <div className="text-diwali-emerald text-sm font-medium flex items-center">
              Create <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform">→</span>
            </div>
          </div>
        </Link>

        {/* Learn Card */}
        <Link href="/learn" className="group block lg:col-span-1 md:col-span-2">
          <div className="h-full glass-panel p-8 border border-white/5 hover:border-diwali-antique-gold/30 transition-all duration-300 rounded-lg relative overflow-hidden bg-background">
             <div className="absolute top-0 right-0 w-32 h-32 bg-diwali-maroon/5 blur-3xl rounded-full -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50" />
            <BookOpen className="w-8 h-8 text-diwali-maroon mb-6" />
            <h3 className="font-serif text-2xl text-diwali-ivory mb-3 group-hover:text-diwali-maroon transition-colors">Learn Hub</h3>
            <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
              Explore the rich traditions, stories, and regional diversity of the festival.
            </p>
            <div className="text-diwali-maroon text-sm font-medium flex items-center">
              Explore <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform">→</span>
            </div>
          </div>
        </Link>

      </section>

      {/* Empty State / Recent Creations Placeholder */}
      <section className="space-y-6 pt-8 border-t border-white/5">
         <h2 className="font-serif text-2xl text-diwali-ivory flex items-center gap-3">
            <Clock className="w-5 h-5 text-muted-foreground" />
            Recent Creations
         </h2>
         <div className="glass-panel border border-white/5 border-dashed rounded-lg p-12 text-center flex flex-col items-center justify-center bg-transparent">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
               <Sparkles className="w-6 h-6 text-muted-foreground/50" />
            </div>
            <h3 className="text-diwali-ivory font-medium mb-2">No creations yet</h3>
            <p className="text-sm text-muted-foreground font-light max-w-sm mb-6">
               Your generated greetings and memes will appear here for easy access and sharing.
            </p>
            <Button variant="outline" className="border-white/10 text-muted-foreground hover:text-diwali-ivory" asChild>
               <Link href="/dashboard/greetings">Start Creating</Link>
            </Button>
         </div>
      </section>

    </div>
  )
}
