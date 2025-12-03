"use client"

import { useState } from "react"
import { HomeScreen } from "@/components/screens/home-screen"
import { CalendarScreen } from "@/components/screens/calendar-screen"
import { GoalsScreen } from "@/components/screens/goals-screen"
import { ReflectScreen } from "@/components/screens/reflect-screen"
import { ProfileScreen } from "@/components/screens/profile-screen"

type ScreenType = "home" | "calendar" | "goals" | "reflect" | "profile"

interface Post {
  id: string
  author: string
  animal: string
  timeAgo: string
  content: string
  likes: number
  comments: number
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("home")

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen)
  }

  return (
    <div
      className="max-w-sm mx-auto min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #E2E8F0 0%, #D1E3FF 50%, #E2E8F0 100%)",
      }}
    >
      <div className="flex-1 overflow-y-auto pb-24">
        {currentScreen === "home" && <HomeScreen onNavigate={handleNavigate} />}
        {currentScreen === "calendar" && <CalendarScreen onNavigate={handleNavigate} />}
        {currentScreen === "goals" && <GoalsScreen onNavigate={handleNavigate} />}
        {currentScreen === "reflect" && <ReflectScreen onNavigate={handleNavigate} />}
        {currentScreen === "profile" && <ProfileScreen onNavigate={handleNavigate} />}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-[#E2E8F0] h-20 flex justify-around items-center">
        {[
          { id: "home" as const, icon: "🏠", label: "Home" },
          { id: "calendar" as const, icon: "📅", label: "Calendar" },
          { id: "goals" as const, icon: "🎯", label: "Goals" },
          { id: "reflect" as const, icon: "✍️", label: "Reflect" },
          { id: "profile" as const, icon: "👤", label: "Profile" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${currentScreen === item.id ? "text-[#4299E1]" : "text-[#A0AEC0]"
              }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-[10px] font-medium" style={{ fontFamily: "var(--font-inter)" }}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  )
}
