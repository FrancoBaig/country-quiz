import shuffleArray from "./shuffleArray";

function getOptions(optionsArray) {
    let objOptions = [];
    const letters = ["A", "B", "C", "D"];
    const randomArray = shuffleArray(optionsArray);

    for (let i = 0; i < letters.length; i++) {
        objOptions.push({
            id: letters[i],
            text: randomArray[i],
        });
    }

    console.log(objOptions);
    return objOptions;
}

export default getOptions;
