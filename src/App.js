import "./App.scss";
import AdventureImage from "./Assets/images/adventure.svg";
import React, { useState } from "react";

function App() {
    const correctAnswer = "Vietnam";

    const [displayBtn, setDisplayBtn] = useState(false);

    const sendAnswer = () => {};

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
                            <div
                                className="answer-item"
                                onClick={() => setDisplayBtn(true)}
                            >
                                <p>A</p>
                                <p className="answer-text">Vietnam</p>
                                <div className="result-icon">
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                            </div>
                            <div
                                className="answer-item"
                                onClick={() => setDisplayBtn(true)}
                            >
                                <p>B</p>
                                <p className="answer-text">Malaysia</p>
                                <div className="result-icon">
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                            </div>
                            <div
                                className="answer-item"
                                onClick={() => setDisplayBtn(true)}
                            >
                                <p>C</p>
                                <p className="answer-text">Sweden</p>
                                <div className="result-icon">
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                            </div>
                            <div
                                className="answer-item"
                                onClick={() => setDisplayBtn(true)}
                            >
                                <p>D</p>
                                <p className="answer-text">Austria</p>
                                <div className="result-icon">
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                            </div>
                        </div>

                        {displayBtn && (
                            <button type="button" className="btn-next">
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
