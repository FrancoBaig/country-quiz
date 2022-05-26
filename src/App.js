import "./App.scss";

import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import useCountry from "./hooks/useCountry";
import Loading from "./components/Loading";
// import data from "./data.json";

import getGameData from "./helper/getGameData";
import raw from "./raw.json";

const loading = false;
const data = getGameData(raw);

function App() {
    // API data
    // const { loading, submitRequest } = useCountry();

    /* finished game */
    const [finished, setFinished] = useState(true);

    /* game score */
    const [score, setScore] = useState(0);

    /* currently question */
    const [numberQuestion, setNumberQuestion] = useState(0);

    /* first data request */
    useEffect(() => {
        // submitRequest();
    }, []);

    const nextQuestion = () => {
        /* set finished gamed  */
        if (numberQuestion === data.length - 1) {
            setFinished(true);
            return;
        }

        // set next question
        setNumberQuestion(numberQuestion + 1);
    };

    return (
        <div className="app">
            <div className="content">
                {loading && <Loading />}

                {!loading && data && (
                    <>
                        <h1 className="header">Country quiz</h1>
                        <Card
                            data={data[numberQuestion]}
                            nextQuestion={nextQuestion}
                            score={score}
                            setScore={setScore}
                            finished={finished}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
