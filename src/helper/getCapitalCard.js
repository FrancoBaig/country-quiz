import shuffleArray from "./shuffleArray";
import getOptions from "./getOptions";

function getCardData(data) {
    const getRandomCountry = (data) => {
        return data[Math.floor(Math.random() * data.length)];
    };

    const country = getRandomCountry(data);

    let options = [country.name.common];

    while (options.length <= 3) {
        let newCountry = getRandomCountry(data).name.common;
        if (!options.includes(newCountry)) {
            options.push(newCountry);
        }
    }

    const finalOptions = getOptions(options);

    const question = {
        type: "capital",
        title: `${country.capital[0]} is the capital of`,
        country: country.name.common,
        options: finalOptions,
    };

    return question;
}

export default getCardData;
