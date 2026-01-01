"use client"

import { useEffect, useState } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function NewYearEffect() {
  const [showGreeting, setShowGreeting] = useState(false)
  const [showCountdown, setShowCountdown] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const nextYear = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0)

  useEffect(() => {
    const now = new Date()
    const currentMonth = now.getMonth() // 0-11, where 0 is January
    const currentDate = now.getDate()
    const currentYear = now.getFullYear()
    const nextYear = new Date(currentYear + 1, 0, 1, 0, 0, 0)

    // Check if it's January 1st
    if (currentMonth === 0 && currentDate === 1) {
      const cacheKey = `new-year-greeting-${currentYear}`
      const hasSeenGreeting = localStorage.getItem(cacheKey)
      
      if (!hasSeenGreeting) {
        setShowGreeting(true)
        localStorage.setItem(cacheKey, "true")
      }
    }

    // Check if it's December 31st
    if (currentMonth === 11 && currentDate === 31) {
      setShowCountdown(true)  
      
      const updateCountdown = () => {
        const now = new Date()
        const newYear = new Date(nextYear.getFullYear(), 0, 1, 0, 0, 0) // January 1st, 00:00:00
        const diff = newYear.getTime() - now.getTime()

        if (diff > 0) {
          const hours = Math.floor(diff / (1000 * 60 * 60))
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((diff % (1000 * 60)) / 1000)

          setTimeLeft({ hours, minutes, seconds })
        } else {
          setShowCountdown(false)
        }
      }

      updateCountdown()
      const interval = setInterval(updateCountdown, 1000)

      return () => clearInterval(interval)
    }
  }, [])

  if (!showGreeting && !showCountdown) return null

  return (
    <>
      {/* New Year Greeting Dialog */}
      {showGreeting && (
        <Dialog open={showGreeting} onOpenChange={setShowGreeting}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-12 w-12 text-yellow-500 animate-pulse" />
              </div>
              <DialogTitle className="text-center text-2xl">
                Happy New Year! 🎉
              </DialogTitle>
              <DialogDescription className="text-center text-base mt-2">
                Welcome to {new Date().getFullYear()}! Wishing you a year filled with
                new opportunities, growth, and success. Let's make this year amazing!
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-4">
              <Button onClick={() => setShowGreeting(false)}>
                Let's Go!
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* New Year Countdown Banner */}
      {showCountdown && (
        <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Sparkles className="h-5 w-5 animate-pulse" />
                <div className="flex-1">
                  <p className="font-semibold text-sm sm:text-base">
                    Are you ready for new year with new opportunities?
                  </p>
                  <div className="flex items-center gap-4 mt-1 text-xs sm:text-sm">
                    <span>
                      <span className="font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>h
                    </span>
                    <span>
                      <span className="font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>m
                    </span>
                    <span>
                      <span className="font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>s
                    </span>
                    <span className="text-white/80">until {nextYear.getFullYear()}!</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-8 w-8"
                onClick={() => setShowCountdown(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

