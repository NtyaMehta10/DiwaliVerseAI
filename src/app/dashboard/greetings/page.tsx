"use client"

import { useState } from "react"
import { Sparkles, Copy, RefreshCw, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const RECIPIENTS = ["Family", "Friend", "Colleague", "Client", "General"]
const LANGUAGES = ["English", "Hindi", "Gujarati", "Marathi", "Tamil"]
const TONES = ["Traditional", "Emotional", "Funny", "Professional", "Modern"]

export default function GreetingStudioPage() {
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [generatedGreeting, setGeneratedGreeting] = useState<string | null>(null)

  // Form State
  const [recipient, setRecipient] = useState(RECIPIENTS[0])
  const [language, setLanguage] = useState(LANGUAGES[0])
  const [tone, setTone] = useState(TONES[0])
  const [name, setName] = useState("")

  const handleGenerate = async () => {
    setLoading(true)
    setGeneratedGreeting(null)
    setCopied(false)

    try {
      // Import dynamically to avoid client-side issues if we had real server secrets
      const { generateGreeting } = await import("@/lib/ai")
      const result = await generateGreeting({
        recipient: name ? `${recipient} (${name})` : recipient,
        language,
        tone
      })
      setGeneratedGreeting(result)
    } catch (error) {
      console.error("Failed to generate greeting", error)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    if (generatedGreeting) {
      navigator.clipboard.writeText(generatedGreeting)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">

      <div className="space-y-4">
        <div className="text-diwali-antique-gold/70 text-sm tracking-[0.2em] uppercase font-light flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Greeting Studio
        </div>
        <h1 className="font-serif text-4xl text-diwali-ivory">Craft the Perfect Wish</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Editor Configuration */}
        <div className="md:col-span-5 space-y-8">

          <div className="space-y-4">
             <Label className="text-muted-foreground text-xs uppercase tracking-widest">1. Who is this for?</Label>
             <div className="flex flex-wrap gap-2">
               {RECIPIENTS.map((r) => (
                 <button
                   key={r}
                   onClick={() => setRecipient(r)}
                   className={`px-4 py-2 rounded-sm text-sm border transition-all ${
                     recipient === r
                       ? "bg-diwali-antique-gold/10 border-diwali-antique-gold text-diwali-antique-gold"
                       : "border-white/5 bg-background hover:border-white/20 text-muted-foreground"
                   }`}
                 >
                   {r}
                 </button>
               ))}
             </div>
             <div className="pt-2">
                <Input
                   placeholder="Recipient Name (Optional)"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="bg-transparent border-white/10"
                />
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
                       ? "bg-diwali-antique-gold/10 border-diwali-antique-gold text-diwali-antique-gold"
                       : "border-white/5 bg-background hover:border-white/20 text-muted-foreground"
                   }`}
                 >
                   {l}
                 </button>
               ))}
             </div>
          </div>

          <div className="space-y-4">
             <Label className="text-muted-foreground text-xs uppercase tracking-widest">3. Tone</Label>
             <div className="flex flex-wrap gap-2">
               {TONES.map((t) => (
                 <button
                   key={t}
                   onClick={() => setTone(t)}
                   className={`px-4 py-2 rounded-sm text-sm border transition-all ${
                     tone === t
                       ? "bg-diwali-antique-gold/10 border-diwali-antique-gold text-diwali-antique-gold"
                       : "border-white/5 bg-background hover:border-white/20 text-muted-foreground"
                   }`}
                 >
                   {t}
                 </button>
               ))}
             </div>
          </div>

          <Button
             className="w-full h-14 bg-diwali-antique-gold text-background hover:bg-diwali-gold font-medium text-base"
             onClick={handleGenerate}
             disabled={loading}
          >
            {loading ? (
               <span className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin" /> Crafting...
               </span>
            ) : "Generate Greeting"}
          </Button>

        </div>

        {/* Output Preview */}
        <div className="md:col-span-7">
          <div className="h-full min-h-[400px] glass-panel border border-white/5 rounded-lg p-8 relative flex flex-col items-center justify-center bg-gradient-to-br from-white/[0.02] to-transparent">

             {!generatedGreeting && !loading && (
                <div className="text-center space-y-4 opacity-50">
                   <div className="w-16 h-16 mx-auto border border-dashed border-white/20 rounded-full flex items-center justify-center">
                     <Sparkles className="w-6 h-6 text-muted-foreground" />
                   </div>
                   <p className="font-light text-sm">Configure options and generate to see preview.</p>
                </div>
             )}

             {loading && (
                <div className="text-center space-y-6">
                   <RefreshCw className="w-8 h-8 text-diwali-antique-gold animate-spin mx-auto" />
                   <div className="font-serif text-xl text-diwali-ivory animate-pulse">Crafting your greeting...</div>
                </div>
             )}

             {generatedGreeting && !loading && (
                <div className="w-full h-full flex flex-col animate-in fade-in zoom-in-95 duration-500">
                   <div className="flex-1 whitespace-pre-wrap font-serif text-xl md:text-2xl text-diwali-ivory leading-relaxed text-center flex items-center justify-center p-6">
                     {generatedGreeting}
                   </div>
                   <div className="flex gap-4 justify-center mt-8 pt-6 border-t border-white/5">
                      <Button variant="outline" className="border-white/10" onClick={handleCopy}>
                         {copied ? <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                         {copied ? "Copied!" : "Copy Text"}
                      </Button>
                      <Button variant="ghost" className="text-muted-foreground hover:text-diwali-ivory" onClick={handleGenerate}>
                         <RefreshCw className="w-4 h-4 mr-2" /> Regenerate
                      </Button>
                   </div>
                </div>
             )}
          </div>
        </div>

      </div>
    </div>
  )
}
