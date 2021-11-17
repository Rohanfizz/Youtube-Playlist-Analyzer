async function timeGetter(tab){

    function consoleWala(){
        let all =  document.querySelectorAll(`ytd-thumbnail-overlay-time-status-renderer>span`);
        let res = [];
        for(let i = 0;i<all.length;i++){
            res.push(all[i].innerText);
        }
        return res;
    }

    let allEle = await tab.evaluate(consoleWala);
    let secs = 0;

    for(let i = 0;i<allEle.length;i++){
        let time = allEle[i].split(':');
        let j = time.length - 1;
        let factor = 1;
        while(j>=0){
            secs += (time[j]*factor);
            factor*=60;
            j--;
        }
    }
    return secs; 
}

module.exports ={
    fn : timeGetter
}