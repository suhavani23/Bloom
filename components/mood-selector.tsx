"use client"

interface MoodSelectorProps {
  onSelect: (mood: string) => void
  selected?: string
}

export function MoodSelector({ onSelect, selected }: MoodSelectorProps) {
  const moods = [
    { emoji: "😭", label: "Terrible", value: "terrible" },
    { emoji: "😟", label: "Bad", value: "bad" },
    { emoji: "😐", label: "Okay", value: "okay" },
    { emoji: "🙂", label: "Good", value: "good" },
    { emoji: "😊", label: "Great", value: "great" },
  ]

  return (
    <div className="px-8 py-6">
      <div className="flex justify-between gap-4 mb-6">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => onSelect(mood.value)}
            className={`flex flex-col items-center gap-2 p-3 rounded-3xl transition-all w-16 h-20 justify-center cursor-pointer ${
              selected === mood.value ? "bg-[#E6F2FF]" : "bg-white"
            }`}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="text-[11px] font-medium text-[#718096]" style={{ fontFamily: "var(--font-inter)" }}>
              {mood.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
