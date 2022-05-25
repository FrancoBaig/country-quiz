import shuffleArray from "./shuffleArray";

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

    const newOptions = shuffleArray(options);

    let objOptions = [
        {
            id: "A",
            text: newOptions[0],
        },
        {
            id: "B",
            text: newOptions[1],
        },
        {
            id: "C",
            text: newOptions[2],
        },
        {
            id: "D",
            text: newOptions[3],
        },
    ];

    const question = {
        title: `${country.capital[0]} is the capital of`,
        country: country.name.common,
        options: objOptions,
    };

    return question;
}

export default getCardData;
