//console.log(window.performance);
var loadduration = performance.timing.responseEnd - performance.timing.navigationStart; //in milliseconds
//console.log(loadduration)

document.getElementById("footertext").innerText += " " + loadduration/1000 + " SECONDS";


document.addEventListener('DOMContentLoaded', initLinks);

var daimages = ["../SipImages/sipimage1.png","../SipImages/sipimage2.png","../SipImages/sipimage3.png","../SipImages/sipimage4.png"];
var currentimage = 0;

function initLinks() {
    document.getElementById("backslide").addEventListener("click",LoadPrevious);
    document.getElementById("nextslide").addEventListener("click",LoadNext);

    function LoadPrevious(event) {
        event.preventDefault();

        if(currentimage > 0)
        {
            currentimage -= 1;
            changedescription()
        }
        document.getElementById("mainshowimage").src = daimages[currentimage];
    }

    function LoadNext(event) {
        event.preventDefault();

        if(currentimage < daimages.length-1)
        {
            currentimage += 1;
            changedescription()
        }
        document.getElementById("mainshowimage").src = daimages[currentimage];
    }
}

function changedescription() {
    let name = document.getElementById("SipTab");
    let description = document.getElementById("p1");
    if(daimages[currentimage] == "../SipImages/sipimage1.png")
    {
        name.textContent = "Problem"
        description.textContent = "In an increasingly, fast paced society we find ourselves to be in, it can sometimes be challenging to keep one’s main task or goal in mind. This is especially true for those who attract unwanted distractions. While eliminating any chance of distractions to occur is a hefty challenge, it is an arguably unreasonable standard. Instead, there needs to be some sort of tool that can help reduce the chance of a distraction in addition to being able to redirect its user back on track in the event of one occurring."
    }
    else if(daimages[currentimage] == "../SipImages/sipimage2.png")
    {
        name.textContent = "Innovation Claim"
        description.textContent = "This extension would be designed to pull you back on track when distractions creep in. It uses short, motivational pop-up reminders tied to your goals and time limits, while optional anti-distraction features prevent you from endlessly continuing off-task behavior. Users can control how strict it is, from gentle nudges to firmer interventions, all in one clean, easy-to-navigate extension. It’s everything you need to stay focused, without juggling multiple productivity tools."
    }
    else if(daimages[currentimage] == "../SipImages/sipimage3.png")
    {
        name.textContent = "Project Description"
        description.textContent = "This project proposes a browser-based task reminder and anti-distraction extension that helps users stay focused through goal tracking, progress check-ins, and customizable interventions in a single, easy-to-use interface. Users can set tasks and timestamps, receive reminders, respond to reflective prompts, and manage distractions with features like site warnings or blocking, motivational messages, alert sounds, and adjustable intensity levels. The project relies on open-source tools and prioritizes core productivity features"
    }
    else if(daimages[currentimage] == "../SipImages/sipimage4.png")
    {
        name.textContent = "Concept"
        description.textContent = "[In Progress]"
    }

}