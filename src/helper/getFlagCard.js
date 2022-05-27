import getOptions from "./getOptions";

function getFlagCard(data) {
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
        type: "flag",
        flag: country.flags.png,
        title: "Which country does this flag belong to?",
        country: country.name.common,
        options: finalOptions,
    };

    return question;
}

export default getFlagCard;
