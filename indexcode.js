//console.log(window.performance);
var loadduration = performance.timing.responseEnd - performance.timing.navigationStart; //in milliseconds
//console.log(loadduration)

document.getElementById("footertext").innerText += " " + loadduration/1000 + " SECONDS";
