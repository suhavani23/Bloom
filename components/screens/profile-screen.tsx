"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ProfileScreenProps {
    onNavigate: (screen: "home" | "calendar" | "goals" | "reflect" | "profile") => void
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
    const [name, setName] = useState("Sarah Johnson")
    const [gender, setGender] = useState("Female")
    const [age, setAge] = useState("28")
    const [profilePhoto, setProfilePhoto] = useState<string | null>(null)
    const [dailyReminder, setDailyReminder] = useState(true)
    const [weeklyReport, setWeeklyReport] = useState(true)
    const [communityUpdates, setCommunityUpdates] = useState(false)
    const [goalReminders, setGoalReminders] = useState(true)

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfilePhoto(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSave = () => {
        alert("Profile updated successfully!")
    }

    return (
        <div className="pt-16 pb-4">
            <div className="px-8 mb-8">
                <h1
                    className="text-3xl font-bold text-center bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] bg-clip-text text-transparent"
                    style={{ fontFamily: "var(--font-poppins)" }}
                >
                    Your Profile
                </h1>
            </div>

            {/* Profile Picture */}
            <div className="px-8 mb-8 flex flex-col items-center">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] flex items-center justify-center overflow-hidden">
                        {profilePhoto ? (
                            <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-4xl text-white font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
                                {name.charAt(0)}
                            </span>
                        )}
                    </div>
                    <label
                        htmlFor="photo-upload"
                        className="absolute bottom-0 right-0 w-8 h-8 bg-[#4299E1] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3182CE] transition-colors"
                    >
                        <span className="text-white text-lg">📷</span>
                    </label>
                    <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                    />
                </div>
                <p className="text-xs text-[#718096] mt-2" style={{ fontFamily: "var(--font-inter)" }}>
                    Click camera to update photo
                </p>
            </div>

            {/* Personal Information */}
            <div className="px-8 mb-8">
                <h2 className="text-xl font-semibold text-[#2D3748] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                    Personal Information
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#718096] mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4299E1] text-base text-[#2D3748] bg-white"
                            style={{ fontFamily: "var(--font-inter)" }}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#718096] mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                            Gender
                        </label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4299E1] text-base text-[#2D3748] bg-white"
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Non-binary">Non-binary</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#718096] mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                            Age
                        </label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4299E1] text-base text-[#2D3748] bg-white"
                            style={{ fontFamily: "var(--font-inter)" }}
                        />
                    </div>
                </div>
            </div>

            {/* Notification Preferences */}
            <div className="px-8 mb-8">
                <h2 className="text-xl font-semibold text-[#2D3748] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                    Notification Preferences
                </h2>

                <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#E2E8F0]">
                        <div>
                            <p className="text-base font-medium text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
                                Daily Reminder
                            </p>
                            <p className="text-xs text-[#718096]" style={{ fontFamily: "var(--font-inter)" }}>
                                Get reminded to journal every day
                            </p>
                        </div>
                        <button
                            onClick={() => setDailyReminder(!dailyReminder)}
                            className={`w-12 h-6 rounded-full transition-colors ${dailyReminder ? "bg-[#4299E1]" : "bg-[#E2E8F0]"
                                }`}
                        >
                            <div
                                className={`w-5 h-5 rounded-full bg-white transition-transform ${dailyReminder ? "translate-x-6" : "translate-x-0.5"
                                    }`}
                            />
                        </button>
                    </div>

                    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#E2E8F0]">
                        <div>
                            <p className="text-base font-medium text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
                                Weekly Report
                            </p>
                            <p className="text-xs text-[#718096]" style={{ fontFamily: "var(--font-inter)" }}>
                                Receive your weekly mood summary
                            </p>
                        </div>
                        <button
                            onClick={() => setWeeklyReport(!weeklyReport)}
                            className={`w-12 h-6 rounded-full transition-colors ${weeklyReport ? "bg-[#4299E1]" : "bg-[#E2E8F0]"
                                }`}
                        >
                            <div
                                className={`w-5 h-5 rounded-full bg-white transition-transform ${weeklyReport ? "translate-x-6" : "translate-x-0.5"
                                    }`}
                            />
                        </button>
                    </div>

                    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#E2E8F0]">
                        <div>
                            <p className="text-base font-medium text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
                                Community Updates
                            </p>
                            <p className="text-xs text-[#718096]" style={{ fontFamily: "var(--font-inter)" }}>
                                Get notified about community activity
                            </p>
                        </div>
                        <button
                            onClick={() => setCommunityUpdates(!communityUpdates)}
                            className={`w-12 h-6 rounded-full transition-colors ${communityUpdates ? "bg-[#4299E1]" : "bg-[#E2E8F0]"
                                }`}
                        >
                            <div
                                className={`w-5 h-5 rounded-full bg-white transition-transform ${communityUpdates ? "translate-x-6" : "translate-x-0.5"
                                    }`}
                            />
                        </button>
                    </div>

                    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#E2E8F0]">
                        <div>
                            <p className="text-base font-medium text-[#2D3748]" style={{ fontFamily: "var(--font-inter)" }}>
                                Goal Reminders
                            </p>
                            <p className="text-xs text-[#718096]" style={{ fontFamily: "var(--font-inter)" }}>
                                Stay on track with your goals
                            </p>
                        </div>
                        <button
                            onClick={() => setGoalReminders(!goalReminders)}
                            className={`w-12 h-6 rounded-full transition-colors ${goalReminders ? "bg-[#4299E1]" : "bg-[#E2E8F0]"
                                }`}
                        >
                            <div
                                className={`w-5 h-5 rounded-full bg-white transition-transform ${goalReminders ? "translate-x-6" : "translate-x-0.5"
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="px-8">
                <Button
                    onClick={handleSave}
                    style={{
                        background: "linear-gradient(to right, #8EC5FC, #E0C3FC)",
                        fontFamily: "var(--font-poppins)",
                    }}
                    className="w-full h-14 text-lg text-white rounded-2xl active:brightness-110 transition-all"
                >
                    Save Changes
                </Button>
            </div>
        </div>
    )
}
