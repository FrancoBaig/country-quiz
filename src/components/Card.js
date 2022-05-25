import React from "react";
import AdventureImage from "../Assets/images/adventure.svg";

function Card({ data, answer, handleAnswerClick, displayBtn, handleSubmit }) {
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
    );
}

export default Card;
