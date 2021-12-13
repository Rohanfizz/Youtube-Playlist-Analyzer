async function scrollToBottom(tab){
    let state = '';
    let i = 1;    
    while(true){
        state = await tab.evaluate((i)=>{
            let ele = document.querySelector('#contents>.style-scope.ytd-playlist-video-list-renderer:last-child').innerText;
            window.scrollTo(0,(10000*i));
            return ele;
        },i);
        i++;
        if(state.length==0)await delay(3000);
        else break;
    }   
}

async function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }
 module.exports = {
     fn: scrollToBottom
 }