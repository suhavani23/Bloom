"use client"

import { useState } from "react"

interface Post {
  id: string
  author: string
  animal: string
  timeAgo: string
  content: string
  likes: number
  comments: number
}

interface CommunityScreenProps {
  onNavigate: (screen: string) => void
  onPostClick: (post: Post) => void
}

export function CommunityScreen({ onNavigate, onPostClick }: CommunityScreenProps) {
  const [sortFilter, setSortFilter] = useState<"recent" | "top" | "unanswered">("recent")
  const [posts] = useState<Post[]>([
    {
      id: "1",
      author: "Anonymous Owl",
      animal: "🦉",
      timeAgo: "2h ago",
      content: "Feeling nervous about my presentation tomorrow. Any tips for stage fright?",
      likes: 24,
      comments: 12,
    },
    {
      id: "2",
      author: "Kind Panda",
      animal: "🐼",
      timeAgo: "4h ago",
      content: "Just finished a great workout session! Feeling energized and proud of myself.",
      likes: 45,
      comments: 8,
    },
    {
      id: "3",
      author: "Happy Lion",
      animal: "🦁",
      timeAgo: "6h ago",
      content: "Started learning meditation this week. It really helps calm my mind in the evenings.",
      likes: 32,
      comments: 15,
    },
  ])

  return (
    <div className="pt-12 pb-4">
      <div className="px-6 mb-4">
        <h1 className="text-4xl font-semibold text-[#2D3748] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
          Community
        </h1>
        <p className="text-sm text-[#718096]" style={{ fontFamily: "var(--font-inter)" }}>
          You're not alone ❤️
        </p>
      </div>

      <div className="px-6 mb-4">
        <button
          className="w-full h-14 bg-white border-2 border-[#4299E1] rounded-3xl flex items-center justify-center gap-2 text-[#4299E1] font-semibold"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          + Share your thoughts
        </button>
      </div>

      <div className="px-6 mb-4">
        <div className="bg-[#FAF089] rounded-2xl px-4 py-3 text-center">
          <p className="text-sm font-medium text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
            🎉 127 people journaled today!
          </p>
        </div>
      </div>

      <div className="px-6 mb-4 flex gap-2">
        {(["recent", "top", "unanswered"] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setSortFilter(filter)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              sortFilter === filter ? "bg-[#4299E1] text-white" : "bg-white text-[#718096] border border-[#E2E8F0]"
            }`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="px-6 space-y-4">
        {posts.map((post) => (
          <button
            key={post.id}
            onClick={() => onPostClick(post)}
            className="w-full bg-white rounded-3xl p-5 text-left border border-[#E2E8F0] hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{post.animal}</span>
              <div className="flex-1">
                <p className="font-semibold text-sm text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
                  {post.author}
                </p>
                <p className="text-xs text-[#A0AEC0]">{post.timeAgo}</p>
              </div>
            </div>
            <p className="text-sm text-[#2D3748] mb-4 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              {post.content}
            </p>
            <div className="flex gap-4 text-xs font-medium text-[#718096]">
              <span>❤️ {post.likes}</span>
              <span>💬 {post.comments}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
