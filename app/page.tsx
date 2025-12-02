"use client"

import { useState } from "react"
import { HomeScreen } from "@/components/screens/home-screen"
import { CalendarScreen } from "@/components/screens/calendar-screen"
import { GoalsScreen } from "@/components/screens/goals-screen"
import { CommunityScreen } from "@/components/screens/community-screen"
import { PostDetailScreen } from "@/components/screens/post-detail-screen"

type ScreenType = "home" | "calendar" | "goals" | "community" | "post-detail" | "profile"

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
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen)
  }

  const handlePostClick = (post: Post) => {
    setSelectedPost(post)
    setCurrentScreen("post-detail")
  }

  const handleBackFromPostDetail = () => {
    setCurrentScreen("community")
    setSelectedPost(null)
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
        {currentScreen === "community" && <CommunityScreen onNavigate={handleNavigate} onPostClick={handlePostClick} />}
        {currentScreen === "post-detail" && selectedPost && (
          <PostDetailScreen post={selectedPost} onBack={handleBackFromPostDetail} />
        )}
        {currentScreen === "profile" && (
          <div className="pt-16 px-6 text-center">
            <p className="text-2xl font-semibold text-[#2D3748]" style={{ fontFamily: "var(--font-poppins)" }}>
              Profile Coming Soon
            </p>
          </div>
        )}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-[#E2E8F0] h-20 flex justify-around items-center">
        {[
          { id: "home" as const, icon: "🏠", label: "Home" },
          { id: "calendar" as const, icon: "📅", label: "Calendar" },
          { id: "goals" as const, icon: "🎯", label: "Goals" },
          { id: "community" as const, icon: "👥", label: "Community" },
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
