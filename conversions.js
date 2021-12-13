function notation(timeInSeconds){
    let hours = Math.floor(timeInSeconds / 3600) + ``;
    timeInSeconds %= 3600;
    let mins = Math.floor(timeInSeconds / 60) + ``;
    timeInSeconds %= 60;
    timeInSeconds = timeInSeconds + ``;
    return (`${hours.length==1?'0'+hours:hours}:${mins.length==1?'0'+mins:mins}:${timeInSeconds.length==1?'0'+timeInSeconds:timeInSeconds}`);
}

module.exports ={
    notation : notation
}



