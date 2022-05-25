import React, { useState } from "react";
import axios from "axios";
import getCardData from "../helper/getCardData";

function useCountry() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getAll = async () => {
        const { data } = await axios.get(`https://restcountries.com/v3.1/all`);

        if (!data) {
            setError("There is an error");
            setLoading(false);
            return;
        }
        return data;
    };

    const gameData = (raw) => {
        const cardData = getCardData(raw);

        setData(cardData);
        setLoading(false);
    };

    const submitRequest = async () => {
        setLoading(true);
        setError(false);

        const allData = await getAll();

        gameData(allData);
    };

    return { data, loading, error, submitRequest };
}

export default useCountry;
