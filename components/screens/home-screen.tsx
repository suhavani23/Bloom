"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MoodSelector } from "@/components/mood-selector"
import { StreakBadge } from "@/components/streak-badge"

interface HomeScreenProps {
  onNavigate: (screen: string) => void
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [selectedMood, setSelectedMood] = useState<string>("")
  const [journalText, setJournalText] = useState<string>("")

  const handleSave = () => {
    alert(`Entry saved! Mood: ${selectedMood}, Text: ${journalText.substring(0, 50)}...`)
  }

  return (
    <div className="pt-16 pb-4">
      <div className="px-8 mb-8">
        <h1 className="text-3xl font-semibold text-[#2D3748] text-center" style={{ fontFamily: "var(--font-poppins)" }}>
          How are you feeling today?
        </h1>
      </div>

      <MoodSelector onSelect={setSelectedMood} selected={selectedMood} />
      <StreakBadge />

      <div className="px-8 mb-6">
        <textarea
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
          placeholder="Write your thoughts for today..."
          className="w-full h-72 p-5 border-2 border-[#E2E8F0] rounded-3xl resize-none focus:outline-none focus:border-[#4299E1] text-base text-[#2D3748] placeholder-[#A0AEC0]"
          style={{ fontFamily: "var(--font-inter)" }}
        />
      </div>

      <div className="px-8">
        <Button
          onClick={handleSave}
          className="w-full h-14 text-lg text-white rounded-2xl"
          style={{
            background: "linear-gradient(to right, #8EC5FC, #E0C3FC)",
            fontFamily: "var(--font-poppins)",
          }}
        >
          Save Entry
        </Button>
      </div>
    </div>
  )
}
