import React, { useState, useLayoutEffect } from "react";
import AdventureImage from "../Assets/images/adventure.svg";
import winnerImage from "../Assets/images/winner.svg";
import useSound from "use-sound";
import correct from "../Assets/sounds/sound_correct.wav";
import wrong from "../Assets/sounds/sound_wrong.wav";
import winner2 from "../Assets/sounds/sound_winner.mp3";
import loser1 from "../Assets/sounds/sound_loser.mp3";

function Card({ data, nextQuestion, score, setScore, finished }) {
    const [finishedTurn, setFinishedTurn] = useState(false);
    const [playSuccess] = useSound(correct, { volume: 0.5 });
    const [playWrong] = useSound(wrong, { volume: 0.2 });
    const [playWinner] = useSound(winner2, { volume: 0.5 });
    const [playLoser] = useSound(loser1, { volume: 0.5 });
    // const [selected, setSelected] = useState("");

    useLayoutEffect(() => {
        if (!finished) return;
        if (score >= 3) {
            playWinner();
        } else {
            playLoser();
        }
    }, [finished]);

    const handleNextQuestion = () => {
        nextQuestion();
        setFinishedTurn(false); // para qué necesito esto?
    };

    const handleAnswerClick = (id) => {
        if (finishedTurn) return;
        const selected = document.getElementById(id);

        /* display icon */

        // setSelected(selected); si tengo error voolver
        const correctAnswer = data.country;
        if (selected.id === correctAnswer) {
            selected.classList.add("success");
            addIcon(selected, true);
            setScore(score + 1);
            playSuccess();
        } else {
            selected.classList.add("warning");
            addIcon(selected, false);
            let correct = document.getElementById(correctAnswer);
            correct.classList.add("success");
            addIcon(correct, true);
            playWrong();
        }
        setFinishedTurn(true);
    };

    const addIcon = (div, isCorrect) => {
        let iElement = div.children[1];

        if (isCorrect) {
            iElement.classList.add("fa-circle-check");
        } else {
            iElement.classList.add("fa-circle-xmark");
        }
    };

    /* end of the game */
    if (finished) {
        return (
            <div className="card">
                <div className="result-container">
                    <img
                        className="results-img"
                        src={winnerImage}
                        alt="result"
                    />
                    <h2 className="results-title">Results</h2>
                    <p className="results-text">
                        You got{" "}
                        <span className={score >= 3 ? "green" : "red"}>
                            {score}{" "}
                        </span>
                        correct answers
                    </p>
                    <button
                        className="btn-again"
                        onClick={() => (window.location.href = "/")}
                    >
                        Try again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="card">
            <img className="card-img" src={AdventureImage} alt="adventure" />
            <div className="card-body">
                {data.type === "flag" && (
                    <img className="card-flag" src={data.flag} alt="flag" />
                )}
                <h3 className="card-question">{data.title}</h3>
                <div className="answers-container">
                    {data.options.map((elem) => (
                        <div
                            key={elem.text}
                            id={elem.text}
                            className={`answer-item `}
                            onClick={() => handleAnswerClick(elem.text)}
                        >
                            {elem.id}
                            <p className="answer-text">{elem.text}</p>

                            <i className="fa-regular "></i>
                        </div>
                    ))}
                </div>

                {finishedTurn && (
                    <button
                        type="button"
                        className="btn-next"
                        onClick={handleNextQuestion}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}

export default Card;
