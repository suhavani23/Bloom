"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { getRandomPrompt } from "@/data/prompts"

interface ReflectScreenProps {
    onNavigate: (screen: "home" | "calendar" | "goals" | "reflect" | "profile") => void
}

interface SavedResponse {
    prompt: string
    response: string
    timestamp: string
}

export function ReflectScreen({ onNavigate }: ReflectScreenProps) {
    const [currentPrompt, setCurrentPrompt] = useState("")
    const [response, setResponse] = useState("")

    useEffect(() => {
        setCurrentPrompt(getRandomPrompt())
    }, [])

    const handleDifferentPrompt = () => {
        setCurrentPrompt(getRandomPrompt(currentPrompt))
    }

    const handleSaveResponse = () => {
        if (!response.trim()) {
            alert("Please write a response before saving.")
            return
        }

        const savedResponse: SavedResponse = {
            prompt: currentPrompt,
            response: response.trim(),
            timestamp: new Date().toISOString(),
        }

        const existingResponses = localStorage.getItem("journalResponses")
        const responses: SavedResponse[] = existingResponses ? JSON.parse(existingResponses) : []

        responses.push(savedResponse)
        localStorage.setItem("journalResponses", JSON.stringify(responses))

        setResponse("")
        alert("Response saved successfully! ✨")
        setCurrentPrompt(getRandomPrompt(currentPrompt))
    }

    return (
        <div className="pt-12 pb-4">
            <div className="px-6 mb-6">
                <h1 className="text-4xl font-semibold text-[#2D3748] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    Daily Thoughts
                </h1>
                <p className="text-base text-[#718096]" style={{ fontFamily: "var(--font-inter)" }}>
                    Take a moment to check in with yourself
                </p>
            </div>

            {/* Prompt Card */}
            <div className="px-6 mb-6">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E2E8F0]">
                    <p
                        className="text-xl font-medium text-[#2D3748] text-center leading-relaxed"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        {currentPrompt}
                    </p>
                </div>
            </div>

            {/* Response Input */}
            <div className="px-6 mb-6">
                <textarea
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    placeholder="Write your thoughts here..."
                    className="w-full min-h-[150px] p-5 border-2 border-[#E2E8F0] rounded-3xl resize-none focus:outline-none focus:border-[#4299E1] text-base text-[#2D3748] placeholder-[#A0AEC0] bg-white"
                    style={{ fontFamily: "var(--font-inter)" }}
                />
            </div>

            {/* Buttons */}
            <div className="px-6 space-y-3">
                <Button
                    onClick={handleSaveResponse}
                    style={{
                        background: "linear-gradient(to right, #8EC5FC, #E0C3FC)",
                        fontFamily: "var(--font-poppins)",
                    }}
                    className="w-full h-14 text-lg text-white rounded-2xl active:brightness-110 transition-all"
                >
                    Save Response
                </Button>

                <button
                    onClick={handleDifferentPrompt}
                    className="w-full h-14 text-lg font-semibold text-[#4299E1] bg-white border-2 border-[#4299E1] rounded-2xl active:bg-[#F7FAFC] transition-all"
                    style={{ fontFamily: "var(--font-poppins)" }}
                >
                    Different Prompt
                </button>
            </div>
        </div>
    )
}
