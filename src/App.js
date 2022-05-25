import "./App.scss";
import AdventureImage from "./Assets/images/adventure.svg";
import React, { useState } from "react";

const data = [
    {
        id: "A",
        text: "Vietnam",
    },
    {
        id: "B",
        text: "Malaysia",
    },
    {
        id: "C",
        text: "Sweden",
    },
    {
        id: "D",
        text: "Austria",
    },
];

function App() {
    const correctAnswer = "Vietnam";
    const [displayBtn, setDisplayBtn] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [showWarning, setShowAnswer] = useState(false);

    const handleAnswerClick = (id) => {
        setAnswer(id);

        if (displayBtn) return;
        setDisplayBtn(true);
    };

    const handleSubmit = () => {
        const selected = document.getElementsByClassName("selected")[0];
        if (selected.text === correctAnswer) {
            selected.classList.add("success");
        } else {
            selected.classList.add("warning");
            let correct = document.getElementById(correctAnswer);
            correct.classList.add("success");
        }
    };

    return (
        <div className="app">
            <div className="content">
                <h1 className="header">Country quiz</h1>

                <div className="card">
                    <img
                        className="card-img"
                        src={AdventureImage}
                        alt="adventure"
                    />
                    <div className="card-body">
                        <h3 className="card-question">
                            Kuala Lumpur is the capital of
                        </h3>
                        <div className="answers-container">
                            {data.map((elem) => (
                                <div
                                    key={elem.id}
                                    id={elem.text}
                                    className={`answer-item ${
                                        answer === elem.id ? "selected" : ""
                                    }`}
                                    onClick={() => handleAnswerClick(elem.id)}
                                >
                                    <p>{elem.id}</p>
                                    <p className="answer-text">{elem.text}</p>
                                    <div className="result-icon">
                                        <i className="fa-regular fa-circle-check"></i>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {displayBtn && (
                            <button
                                type="button"
                                className="btn-next"
                                onClick={handleSubmit}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
