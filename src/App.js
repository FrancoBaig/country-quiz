import "./App.scss";

import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "./Assets/sounds/sound_correct.wav";
import wrong from "./Assets/sounds/sound_wrong.wav";
import Card from "./components/Card";
import useCountry from "./hooks/useCountry";

function App() {
    const { data, loading, error, submitRequest } = useCountry();
    const [displayBtn, setDisplayBtn] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [finishedTurn, setFinishedTurn] = useState(false);
    const [score, setScore] = useState(0);

    const [playSuccess] = useSound(correct, { volume: 0.5 });
    const [playWrong] = useSound(wrong, { volume: 0.2 });

    const handleAnswerClick = (id) => {
        if (finishedTurn) return;
        setAnswer(id);

        if (displayBtn) return;
        setDisplayBtn(true);
    };

    useEffect(() => {
        submitRequest();
    }, []);

    const handleSubmit = () => {
        const selected = document.getElementsByClassName("selected")[0];
        const correctAnswer = data.country;

        if (selected.id === correctAnswer) {
            selected.classList.add("success");
            setScore(score + 1);
            playSuccess();
        } else {
            selected.classList.add("warning");
            let correct = document.getElementById(correctAnswer);
            correct.classList.add("success");
            playWrong();
        }
        setFinishedTurn(true);
    };

    return (
        <div className="app">
            <div className="content">
                <h1 className="header">Country quiz</h1>
                {loading && <h1>Cargando</h1>}
                {!loading && data && (
                    <Card
                        data={data}
                        answer={answer}
                        handleAnswerClick={handleAnswerClick}
                        displayBtn={displayBtn}
                        handleSubmit={handleSubmit}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
