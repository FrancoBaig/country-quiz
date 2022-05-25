import React, { useState } from "react";
import AdventureImage from "../Assets/images/adventure.svg";
import useSound from "use-sound";
import correct from "../Assets/sounds/sound_correct.wav";
import wrong from "../Assets/sounds/sound_wrong.wav";

function Card({ data, displayBtn }) {
    const [finishedTurn, setFinishedTurn] = useState(false);
    const [playSuccess] = useSound(correct, { volume: 0.5 });
    const [playWrong] = useSound(wrong, { volume: 0.2 });
    const handleAnswerClick = (id) => {
        if (finishedTurn) return;
        const selected = document.getElementById(id);
        const correctAnswer = data.country;
        if (selected.id === correctAnswer) {
            selected.classList.add("success");
            // setScore(score + 1);
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
                <h3 className="card-question">{data.title}</h3>
                <div className="answers-container">
                    {data.options.map((elem) => (
                        <div
                            key={elem.id}
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
                    <button type="button" className="btn-next">
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}

export default Card;
