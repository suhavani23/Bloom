"use client"

import { useState } from "react"

interface CalendarScreenProps {
  onNavigate: (screen: string) => void
}

const moodEmojis = {
  terrible: "😭",
  bad: "😟",
  okay: "😐",
  good: "🙂",
  great: "😊",
}

const mockEntries: { [key: number]: keyof typeof moodEmojis } = {
  1: "great",
  3: "good",
  5: "okay",
  7: "great",
  9: "bad",
  12: "great",
  15: "good",
  18: "okay",
  21: "great",
  24: "good",
  26: "great",
  29: "good",
}

export function CalendarScreen({ onNavigate }: CalendarScreenProps) {
  const [currentMonth] = useState(11)
  const [currentYear] = useState(2024)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
  const days = Array(firstDay)
    .fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1))

  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })

  return (
    <div className="pt-12 pb-4">
      <div className="px-6 mb-8">
        <h1 className="text-4xl font-semibold text-[#2D3748] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
          Your Journey
        </h1>
        <p className="text-base text-[#718096]" style={{ fontFamily: "var(--font-inter)" }}>
          {monthName} {currentYear}
        </p>
      </div>

      <div className="px-6 mb-8 text-center">
        <button className="text-lg font-semibold text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
          {"< "}
          {monthName} {currentYear}
          {" >"}
        </button>
      </div>

      <div className="px-4 mb-8">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-[#A0AEC0]">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => day && setSelectedDate(day)}
              className={`h-12 rounded-lg flex items-center justify-center text-center text-sm font-medium cursor-pointer ${
                !day
                  ? "bg-transparent"
                  : day <= new Date().getDate() && currentMonth === new Date().getMonth()
                    ? "bg-white border-2 border-[#4299E1]"
                    : "bg-white"
              }`}
            >
              {day && mockEntries[day] ? (
                <span className="text-lg">{moodEmojis[mockEntries[day]]}</span>
              ) : (
                <span className={`text-xs ${day ? "text-[#2D3748]" : "text-[#E2E8F0]"}`}>{day}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 mb-8">
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(moodEmojis).map(([mood, emoji]) => (
            <div key={mood} className="text-center text-xs">
              <span className="text-lg">{emoji}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div className="px-6">
          <div className="bg-white rounded-3xl p-5 border border-[#E2E8F0]">
            <p className="text-sm font-semibold text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
              {monthName} {selectedDate}, {currentYear}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-2xl">
                {mockEntries[selectedDate] ? moodEmojis[mockEntries[selectedDate]] : "—"}
              </span>
              <p className="text-xs text-[#718096]">Feeling great today, had a productive meeting...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
