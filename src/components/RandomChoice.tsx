import { useState } from "react";

const choices = [
    'Clément',
    'Evan',
    'Julien',
    'Lucas',
    'Arthur',
    'Mathis',
    'Hugo',
    'Gabin',
    'Théo',
    'Nicolas',
    'Emma',
    'Chloé',
    'Manon',
    'Léa',
    'Camille',
    'Louise',
    'Clara',
    'Juliette',
    'Zoé',
    'Sarah',
];

const RandomChoice: React.FC = () => {
    const [choice, setChoice] = useState<string | null>(null);

    const handleRandomChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        setChoice(choices[randomIndex]);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🎲 Random Choice</h1>
            <button onClick={handleRandomChoice} style={{ padding: "10px 20px", fontSize: "16px" }}>
                Choisir au hasard
            </button>
            {choice && <h2 style={{ marginTop: "20px" }}>✅ {choice}</h2>}
        </div>
    );
};

export default RandomChoice;