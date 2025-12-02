"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Goal {
  id: string
  title: string
  progress: number
  targetDate: string
  completed: boolean
}

interface GoalsScreenProps {
  onNavigate: (screen: string) => void
}

export function GoalsScreen({ onNavigate }: GoalsScreenProps) {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: "1",
      title: "Learn Guitar",
      progress: 30,
      targetDate: "Dec 31, 2024",
      completed: false,
    },
    {
      id: "2",
      title: "Read 12 Books",
      progress: 50,
      targetDate: "Dec 31, 2024",
      completed: false,
    },
    {
      id: "3",
      title: "Exercise Daily",
      progress: 70,
      targetDate: "Dec 31, 2024",
      completed: false,
    },
  ])

  const cardColors = ["bg-[#EDE9FE]", "bg-[#D1FAE5]", "bg-[#DBEAFE]"]

  const handleToggleComplete = (id: string) => {
    setGoals((prev) => prev.map((goal) => (goal.id === id ? { ...goal, completed: !goal.completed } : goal)))
  }

  return (
    <div className="pt-12 pb-4">
      <div className="px-6 mb-6 flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-[#2D3748]" style={{ fontFamily: "var(--font-poppins)" }}>
          My Goals
        </h1>
        <button
          className="w-10 h-10 rounded-full text-white flex items-center justify-center text-xl font-bold"
          style={{
            background: "linear-gradient(to right, #8EC5FC, #E0C3FC)",
          }}
        >
          +
        </button>
      </div>

      {goals.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <div className="text-5xl mb-4">🎯</div>
          <p className="text-lg font-semibold text-[#2D3748] mb-2" style={{ fontFamily: "var(--font-inter)" }}>
            Set your first goal
          </p>
          <p className="text-sm text-[#718096] mb-6">What do you want to achieve?</p>
          <Button
            className="text-white rounded-2xl"
            style={{
              background: "linear-gradient(to right, #8EC5FC, #E0C3FC)",
            }}
          >
            Add Goal
          </Button>
        </div>
      ) : (
        <div className="px-6 space-y-4">
          {goals.map((goal, index) => (
            <div
              key={goal.id}
              className={`${cardColors[index % cardColors.length]} rounded-3xl p-5 h-32 flex flex-col justify-between`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
                  🎯 {goal.title}
                </h3>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-[#718096]" style={{ fontFamily: "var(--font-inter)" }}>
                    Progress: {goal.progress}%
                  </p>
                  <span className="text-xs font-semibold text-[#2D3748]">{goal.progress}%</span>
                </div>
                <div className="w-full bg-[#E2E8F0] rounded-full h-2 mb-3">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${goal.progress}%`,
                      background: "linear-gradient(to right, #8EC5FC, #E0C3FC)",
                    }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-[#718096]">Target: {goal.targetDate}</p>
                  <button
                    onClick={() => handleToggleComplete(goal.id)}
                    className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                      goal.completed ? "bg-[#4299E1] border-[#4299E1] text-white" : "border-[#A0AEC0]"
                    }`}
                  >
                    {goal.completed && "✓"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
