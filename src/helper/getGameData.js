import getCapitalCard from "./getCapitalCard";
import getFlagCard from "./getFlagCard";

function getGameData(data) {
    const n_questions = 6;
    let gameData = [];

    while (gameData.length < n_questions) {
        /* Falta hacer comprobación de que no esté repetida la pregunta */
        gameData.push(getCapitalCard(data), getFlagCard(data));
    }

    return gameData;
}

export default getGameData;
