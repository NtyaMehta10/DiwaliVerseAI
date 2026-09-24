"use client"

import { useState } from "react"
import { MessageSquare, RefreshCw, Upload, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const CATEGORIES = ["Family", "Relatives", "Sweets", "Fireworks", "Preparation"]
const LANGUAGES = ["English", "Hinglish", "Gujarati", "Marathi"]
const STYLES = ["Relatable", "Sarcastic", "Wholesome", "Desi"]

export default function MemeStudioPage() {
  const [loading, setLoading] = useState(false)
  const [caption, setCaption] = useState<string | null>(null)

  const [category, setCategory] = useState(CATEGORIES[0])
  const [language, setLanguage] = useState(LANGUAGES[0])
  const [style, setStyle] = useState(STYLES[0])

  const handleGenerateCaption = () => {
    setLoading(true)
    // Simulate AI caption generation
    setTimeout(() => {
      setCaption("When relatives ask about your career plans and you just want more Soan Papdi.")
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">

      <div className="space-y-4">
        <div className="text-diwali-emerald/70 text-sm tracking-[0.2em] uppercase font-light flex items-center gap-2">
          <MessageSquare className="w-4 h-4" /> Meme Studio
        </div>
        <h1 className="font-serif text-4xl text-diwali-ivory">Share the Laughter</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Editor Configuration */}
        <div className="md:col-span-5 space-y-8">

          <div className="space-y-4">
             <Label className="text-muted-foreground text-xs uppercase tracking-widest">1. Topic</Label>
             <div className="flex flex-wrap gap-2">
               {CATEGORIES.map((c) => (
                 <button
                   key={c}
                   onClick={() => setCategory(c)}
                   className={`px-4 py-2 rounded-sm text-sm border transition-all ${
                     category === c
                       ? "bg-diwali-emerald/10 border-diwali-emerald text-diwali-emerald"
                       : "border-white/5 bg-background hover:border-white/20 text-muted-foreground"
                   }`}
                 >
                   {c}
                 </button>
               ))}
             </div>
          </div>

          <div className="space-y-4">
             <Label className="text-muted-foreground text-xs uppercase tracking-widest">2. Language</Label>
             <div className="flex flex-wrap gap-2">
               {LANGUAGES.map((l) => (
                 <button
                   key={l}
                   onClick={() => setLanguage(l)}
                   className={`px-4 py-2 rounded-sm text-sm border transition-all ${
                     language === l
                       ? "bg-diwali-emerald/10 border-diwali-emerald text-diwali-emerald"
                       : "border-white/5 bg-background hover:border-white/20 text-muted-foreground"
                   }`}
                 >
                   {l}
                 </button>
               ))}
             </div>
          </div>

          <div className="space-y-4">
             <Label className="text-muted-foreground text-xs uppercase tracking-widest">3. Style</Label>
             <div className="flex flex-wrap gap-2">
               {STYLES.map((s) => (
                 <button
                   key={s}
                   onClick={() => setStyle(s)}
                   className={`px-4 py-2 rounded-sm text-sm border transition-all ${
                     style === s
                       ? "bg-diwali-emerald/10 border-diwali-emerald text-diwali-emerald"
                       : "border-white/5 bg-background hover:border-white/20 text-muted-foreground"
                   }`}
                 >
                   {s}
                 </button>
               ))}
             </div>
          </div>

          <Button
             className="w-full h-14 bg-diwali-emerald text-background hover:bg-[#003d1c] font-medium text-base"
             onClick={handleGenerateCaption}
             disabled={loading}
          >
            {loading ? (
               <span className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin" /> Thinking...
               </span>
            ) : "Generate Caption"}
          </Button>

        </div>

        {/* Output Preview */}
        <div className="md:col-span-7">
          <div className="h-full min-h-[500px] glass-panel border border-white/5 rounded-lg p-8 relative flex flex-col items-center justify-center bg-gradient-to-br from-white/[0.02] to-transparent">

             <div className="w-full max-w-md aspect-square bg-[#1A1A1A] border border-white/10 rounded-lg overflow-hidden flex flex-col relative">

                {/* Upload Placeholder / Image Area */}
                <div className="flex-1 bg-muted/20 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/30 transition-colors relative">
                    <Upload className="w-8 h-8 text-muted-foreground mb-4" />
                    <div className="text-sm text-muted-foreground font-light">Click to upload template</div>
                    <div className="text-xs text-muted-foreground/50 mt-2">or AI will pick one for you</div>
                </div>

                {/* Text Overlay Area (Impact Font Style for memes) */}
                {caption && (
                  <div className="absolute inset-0 flex flex-col justify-end pointer-events-none p-6">
                    <div className="text-center font-bold text-3xl text-white uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] [text-shadow:-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000] leading-tight">
                       {caption}
                    </div>
                  </div>
                )}
             </div>

             {caption && !loading && (
                <div className="flex gap-4 justify-center mt-8">
                   <Button variant="outline" className="border-white/10 hover:text-diwali-ivory">
                      <Download className="w-4 h-4 mr-2" /> Download Image
                   </Button>
                </div>
             )}
          </div>
        </div>

      </div>
    </div>
  )
}
