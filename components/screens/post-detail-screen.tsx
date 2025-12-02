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

interface Comment {
  id: string
  author: string
  animal: string
  timeAgo: string
  content: string
  likes: number
}

interface PostDetailScreenProps {
  post: Post
  onBack: () => void
}

export function PostDetailScreen({ post, onBack }: PostDetailScreenProps) {
  const [replyText, setReplyText] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Kind Panda",
      animal: "🐼",
      timeAgo: "1h ago",
      content: "Deep breaths help me! Try practicing in front of a mirror first.",
      likes: 8,
    },
    {
      id: "2",
      author: "Wise Owl",
      animal: "🦉",
      timeAgo: "45m ago",
      content: "I always remind myself that the audience wants me to succeed. You've got this!",
      likes: 12,
    },
  ])

  const handleSendReply = () => {
    if (replyText.trim()) {
      const newComment: Comment = {
        id: Date.now().toString(),
        author: "You",
        animal: "😊",
        timeAgo: "now",
        content: replyText,
        likes: 0,
      }
      setComments([...comments, newComment])
      setReplyText("")
    }
  }

  return (
    <div className="pt-12 pb-24">
      <div className="px-6 mb-6 flex items-center gap-4">
        <button onClick={onBack} className="text-2xl">
          ←
        </button>
        <h1 className="text-lg font-semibold text-[#2D3748] flex-1" style={{ fontFamily: "var(--font-inter)" }}>
          Community Post
        </h1>
      </div>

      <div className="px-6 mb-6">
        <div className="bg-[#E6F2FF] rounded-3xl p-5 border-2 border-[#4299E1]">
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
        </div>
      </div>

      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold text-[#2D3748] mb-4" style={{ fontFamily: "var(--font-inter)" }}>
          {comments.length} Responses
        </h2>

        <div className="space-y-3">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-3xl p-4 border border-[#E2E8F0] ml-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{comment.animal}</span>
                <div>
                  <p className="font-semibold text-xs text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
                    {comment.author}
                  </p>
                  <p className="text-xs text-[#A0AEC0]">{comment.timeAgo}</p>
                </div>
              </div>
              <p className="text-xs text-[#2D3748] mb-3 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                {comment.content}
              </p>
              <div className="text-xs font-medium text-[#718096]">❤️ {comment.likes}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-[#E2E8F0] px-6 py-3 flex gap-3 h-24 items-center">
        <input
          type="text"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Write a supportive reply..."
          className="flex-1 border border-[#E2E8F0] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#4299E1]"
          style={{ fontFamily: "var(--font-inter)" }}
        />
        <button
          onClick={handleSendReply}
          className="w-10 h-10 bg-[#4299E1] rounded-full flex items-center justify-center text-white hover:bg-[#3182CE]"
        >
          ✈️
        </button>
      </div>
    </div>
  )
}
