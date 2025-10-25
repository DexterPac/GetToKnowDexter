//console.log(window.performance);
var loadduration = performance.timing.responseEnd - performance.timing.navigationStart; //in milliseconds
//console.log(loadduration)

document.getElementById("footertext").innerText += " " + loadduration/1000 + " SECONDS";


document.addEventListener('DOMContentLoaded', initLinks);

var daimages = ["./personalimage1.png","./personalimage2.png","./personalimage3.png","./personalimage7.png"];
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
    let name = document.getElementById("GameName");
    let description = document.getElementById("p1");
    if(daimages[currentimage] == "./personalimage1.png")
    {
        name.textContent = "DK Space Invaders"
        description.textContent = "This is one of the first games I had worked on. The concept is simple, Space Invaders but with a Donkey Kong-esk theme. The goal of the game is to rack up point by destroying the falling banana peels. You destroy the banana peels by moving your character around and throwing barrels at them. If you are hit by a banana or bananapeel or if you let a bananapeel get to the bottom, the game will end. This was built entirely using Java."
    }
    else if(daimages[currentimage] == "./personalimage2.png")
    {
        name.textContent = "Stickfare"
        description.textContent = "'Stickfare' is the fist coding project I worked on in a group. The idea for the game was inspired by old flash games I used to play. The idea of the game is there are 2 teams, each with two controllable characters. One team first controlls a character to try and attack the enemy. Once their fire their gun, it will be the opponent's turn to control one of their characters and do the same. To help in this endeavor, there are numerous powerups scattered throughout the map. This was built entirely using Java."
    }
    else if(daimages[currentimage] == "./personalimage3.png")
    {
        name.textContent = "French Revolution"
        description.textContent = "The goal of the 'French Revolution' is to go around the town and killing enough zombie peasants to escape. You have numerous weapons at your disposable to help you slay the endless hoard. Alongside your rdiculous weaponry, there are also numerous power-ups you can find either scattered around the map or through buy-stations. This project was made in Unity using C#. This was the second project that really piqued my interest in sound design."
    }
    else if(daimages[currentimage] == "./personalimage7.png")
    {
        name.textContent = "3D-2D Platformer"
        description.textContent = "The idea for this platformer has been continued to be explored and expanded upon. I find it interesting how our perception influences our decision making. For example, there was a wall I constructed that, while in 3D mode, you clearly could not pass; however, if you were in 2D mode, the wall blended in with the adjacent wall, allowing you to pass as if it were never there. I really enjoy such a concept, and I do hope that I will be fortunate enough to build such a game in the future."
        let originalText = description.textContent;
        let targetWord = "platformer";
        let startIndex = originalText.indexOf(targetWord);

        if (startIndex !== -1) {
            let beforeText = originalText.substring(0, startIndex);
            let afterText = originalText.substring(startIndex + targetWord.length);

            //Create the anchor element
            let linkElement = document.createElement('a');
            linkElement.href = "https://dexterpaclebar.itch.io/3d2d"; //desired URL
            linkElement.textContent = targetWord;

            //Clear the original paragraph content
            description.innerHTML = '';

            //Append the parts back with the link in between
            description.appendChild(document.createTextNode(beforeText));
            description.appendChild(linkElement);
            description.appendChild(document.createTextNode(afterText));
        }
    }

}