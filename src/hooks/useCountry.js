import React, { useState } from "react";
import axios from "axios";
import getCapitalCard from "../helper/getCapitalCard";
import getFlagCard from "../helper/getFlagCard";

import raw from "../raw.json";

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

    const gameData = (rawData) => {
        const cardCapitalData = getCapitalCard(rawData);
        // const cardFlagData = getCapitalFlag(raw);

        setData(cardCapitalData);
        setLoading(false);
    };

    const submitRequest = async () => {
        setLoading(true);
        setError(false);

        const allData = await getAll();
        // gameData(allData);
    };

    return { data, loading, error, submitRequest };
}

export default useCountry;
