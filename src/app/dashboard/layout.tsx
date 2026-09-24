import { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="font-serif text-xl tracking-wide text-diwali-ivory hover:opacity-80 transition-opacity">
            DiwaliVerse<span className="text-diwali-antique-gold text-xs font-sans tracking-normal ml-1">AI</span>
          </Link>
          <div className="flex items-center gap-4">
             <nav className="hidden md:flex gap-6 text-sm font-light text-muted-foreground mr-4">
                <Link href="/dashboard/greetings" className="hover:text-diwali-ivory transition-colors">Greetings</Link>
                <Link href="/dashboard/memes" className="hover:text-diwali-ivory transition-colors">Memes</Link>
                <Link href="/learn" className="hover:text-diwali-ivory transition-colors">Learn</Link>
             </nav>
             <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-diwali-ivory">
                Sign Out
             </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12 px-6 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  )
}
