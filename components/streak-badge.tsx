export function StreakBadge() {
  return (
    <div className="px-8 mb-6">
      <div
        className="rounded-3xl px-6 py-3 text-center inline-flex items-center gap-2 w-32"
        style={{
          background: "linear-gradient(to right, #FFE5D9, #FFF0E6)",
        }}
      >
        <span className="text-lg">🔥</span>
        <span className="font-semibold text-sm text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
          7 Day Streak
        </span>
      </div>
    </div>
  )
}
