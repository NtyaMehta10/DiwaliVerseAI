"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (res?.error) {
        setError("Invalid email or password")
      } else {
        router.push("/dashboard")
        router.refresh()
      }
    } catch {
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md glass-panel p-8 rounded-xl border border-white/5 cinematic-shadow">
        <div className="text-center mb-8">
          <Link href="/" className="font-serif text-2xl tracking-wide text-diwali-ivory">
             DiwaliVerse<span className="text-diwali-antique-gold text-sm font-sans tracking-normal ml-1">AI</span>
          </Link>
          <p className="text-muted-foreground font-light mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-muted-foreground text-xs uppercase tracking-widest">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-white/10 text-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-muted-foreground text-xs uppercase tracking-widest">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background border-white/10 text-foreground"
            />
          </div>

          {error && <p className="text-sm text-red-500 font-light">{error}</p>}

          <Button type="submit" className="w-full bg-diwali-antique-gold text-background hover:bg-diwali-gold" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground font-light">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-diwali-antique-gold hover:text-diwali-ivory transition-colors">
            Create one
          </Link>
        </div>
      </div>
    </div>
  )
}
