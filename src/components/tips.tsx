/* Component for generating random mock interview tips (like mojang ) */

import React from 'react';
import RoadRageText from './roadRageText';

const Tips = () => {
    // get a random tip
    const tips = [
        "Take a deep breath and stay calm before answering questions",
        "Think out loud while solving problems to show your thought process",
        "Ask clarifying questions if something is unclear",
        "Break down complex problems into smaller steps",
        "Explain your approach before starting to code",
        "Consider edge cases in your solutions",
        "It's okay to say 'I don't know' if you're unsure",
        "Use proper variable naming conventions",
        "Discuss time and space complexity of your solutions",
        "Write clean, readable code",
        "Listen carefully to the interviewer's feedback",
        "Test your solution with example cases",
        "Consider multiple approaches before implementing",
        "Practice proper error handling",
        "Be honest about your experience level"
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    return (
        <div>
            <RoadRageText titleText={`Mock Interview Tip: ${randomTip}`} color='#FFFFFF' min='2.5rem' middle='3vw' max='3rem' />
        </div>
    );
};

export default Tips;