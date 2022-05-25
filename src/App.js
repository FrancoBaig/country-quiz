import "./App.scss";

import React, { useEffect, useState } from "react";

import Card from "./components/Card";
import useCountry from "./hooks/useCountry";
import Loading from "./components/Loading";

const data = {
    title: "Malabo is the capital of",
    country: "Equatorial Guinea",
    options: [
        {
            id: "A",
            text: "Isle of Man",
        },
        {
            id: "B",
            text: "Equatorial Guinea",
        },
        {
            id: "C",
            text: "El Salvador",
        },
        {
            id: "D",
            text: "British Indian Ocean Territory",
        },
    ],
};
const loading = false;

function App() {
    // const { error, submitRequest } = useCountry();
    // const [displayBtn, setDisplayBtn] = useState(false);
    const [answer, setAnswer] = useState(null);

    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        // submitRequest();
    }, []);

    return (
        <div className="app">
            <div className="content">
                {loading && <Loading />}

                {!loading && data && (
                    <>
                        <h1 className="header">Country quiz</h1>
                        <Card data={data} answer={answer} selected={selected} />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
