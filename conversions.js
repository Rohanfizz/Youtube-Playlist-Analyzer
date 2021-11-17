function notation(timeInSeconds){
    let hours = Math.floor(timeInSeconds / 3600) + ``;
    timeInSeconds %= 3600;
    let mins = Math.floor(timeInSeconds / 60) + ``;
    timeInSeconds %= 60;
    timeInSeconds = timeInSeconds + ``;
    return (`${hours}:${mins}:${timeInSeconds}`);
}

module.exports ={
    notation : notation
}



