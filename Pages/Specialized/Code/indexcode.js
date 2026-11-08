//console.log(window.performance);
var loadduration = performance.timing.responseEnd - performance.timing.navigationStart; //in milliseconds
//console.log(loadduration)

document.getElementById("footertext").innerText += " " + loadduration/1000 + " SECONDS";



function GiveSumm() {
    let summary = document.getElementById("centerbox2");
    if(summary.style.zIndex == -1) {
        summary.style.zIndex = 0;
    }
    else if(summary.style.zIndex == "") {
        summary.style.zIndex = 0;
    }
    else if(summary.style.zIndex == 0) {
        summary.style.zIndex = -1;
    }
    else {
        summary.style.zIndex = -1;
    }
}