export const journalPrompts = [
    "What's one thing that made you smile today?",
    "What are you grateful for right now?",
    "What's weighing on your mind?",
    "What would make tomorrow better?",
    "Who made you feel good today?",
    "What's a small win you had today?",
    "How are you really feeling right now?",
    "What do you need to let go of?",
    "What's something you're looking forward to?",
    "What challenge did you overcome today?",
    "What made you feel proud recently?",
    "What's one thing you learned about yourself today?",
    "Who do you want to reach out to?",
    "What's bringing you peace right now?",
    "What's a fear you're facing?",
    "What does your body need today?",
    "What boundary do you need to set?",
    "What's a kind thing you did for yourself today?",
    "What's a dream you're working toward?",
    "What emotion are you sitting with right now?",
    "What's something you're curious about?",
    "What would you tell your younger self today?",
    "What's a relationship you're grateful for?",
    "What's taking up too much mental space?",
    "What brings you joy that you want more of?",
]

export function getRandomPrompt(excludePrompt?: string): string {
    const availablePrompts = excludePrompt
        ? journalPrompts.filter(p => p !== excludePrompt)
        : journalPrompts

    const randomIndex = Math.floor(Math.random() * availablePrompts.length)
    return availablePrompts[randomIndex]
}
