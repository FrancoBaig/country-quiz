import React, { useState } from "react";
import AdventureImage from "../Assets/images/adventure.svg";
import useSound from "use-sound";
import correct from "../Assets/sounds/sound_correct.wav";
import wrong from "../Assets/sounds/sound_wrong.wav";

function Card({ data, nextQuestion, score, setScore }) {
    const [finishedTurn, setFinishedTurn] = useState(false);
    const [playSuccess] = useSound(correct, { volume: 0.5 });
    const [playWrong] = useSound(wrong, { volume: 0.2 });
    const [selected, setSelected] = useState("");

    const handleNextQuestion = () => {
        nextQuestion();
        setFinishedTurn(false); // para qué necesito esto?
    };

    const handleAnswerClick = (id) => {
        if (finishedTurn) return;
        const selected = document.getElementById(id);
        setSelected(selected);
        const correctAnswer = data.country;
        if (selected.id === correctAnswer) {
            selected.classList.add("success");
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

                            <i className="fa-regular fa-circle-check"></i>
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
