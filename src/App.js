import "./App.scss";

function App() {
    return (
        <div className="app">
            <header className="header">
                <h1>Country quiz</h1>
            </header>
            <div className="card">
                <img
                    className="card-img"
                    src="../public/images/adventure.svg"
                    alt="adventure"
                />
                <div className="card-body">
                    <h3 className="card-quiestion">
                        Kuala Lumpur is the capital of
                    </h3>
                    <div className="answers-container">
                        <div className="answer-item">
                            <p>A</p>
                            <p>Vietnam</p>
                            <div className="result-icon">
                                <i class="fa-regular fa-circle-check"></i>
                            </div>
                        </div>
                        <div className="answer-item">
                            <p>A</p>
                            <p>Vietnam</p>
                            <div className="result-icon">
                                <i class="fa-regular fa-circle-check"></i>
                            </div>
                        </div>
                        <div className="answer-item">
                            <p>A</p>
                            <p>Vietnam</p>
                            <div className="result-icon">
                                <i class="fa-regular fa-circle-check"></i>
                            </div>
                        </div>
                        <div className="answer-item">
                            <p>A</p>
                            <p>Vietnam</p>
                            <div className="result-icon">
                                <i class="fa-regular fa-circle-check"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
