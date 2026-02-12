var styleElement = document.createElement("style");
var scrollbarstyle = "div::-webkit-scrollbar{width: 10px;} div::-webkit-scrollbar-track{background: rgb(221, 221, 221);} div::-webkit-scrollbar-thumb{background: rgb(199, 199, 199);} div::-webkit-scrollbar-thumb:hover{background: #393D42;} div::-webkit-scrollbar-button{display: none;}";
var scrollbarstyle2 = document.createTextNode(scrollbarstyle)
styleElement.appendChild(scrollbarstyle2);
document.getElementById("centerbox").appendChild(styleElement);	
//console.log(scrollbarstyle2.nodeValue);



var isnormal = true;
var isTrueSet = true;

ImportTheme()

function ChangeTheme() {
    isTrueSet = !isTrueSet;
    localStorage.setItem("theme", isTrueSet);
    ImportTheme();
}

function ImportTheme() {
    if(localStorage.getItem("theme") != "true" && localStorage.getItem("theme") != "false")
    {
        isnormal = "true"
    }
    else {
        isnormal = localStorage.getItem("theme");
    }
    isTrueSet = (isnormal === "true");
    if(isTrueSet)
    {
        document.getElementById("image2").src = "../netbeansui.png"
        let stuff = document.getElementsByClassName("changecolor1")
        for(let b = 0; b < stuff.length; b++)
        {
            stuff[b].style.backgroundColor = "#C7C7C7";
        }
        let stuff2 = document.getElementsByClassName("changecolor2")
        for(let b = 0; b < stuff2.length; b++)
        {
            stuff2[b].style.backgroundColor = "#DDDDDD";
        }
        let stuff3 = document.getElementsByClassName("changecolor3")
        for(let b = 0; b < stuff3.length; b++)
        {
            stuff3[b].style.backgroundColor = "white";
        }
        let toptabs = document.getElementsByClassName("topbarkeytabsinputs")
        for(let b = 0; b < toptabs.length; b++)
        {
            toptabs[b].style.backgroundColor = "#9CB6C3"
        }
        let stuff4 = document.getElementsByClassName("normaltextcolor")
        for(let b = 0; b < stuff4.length; b++)
        {
            stuff4[b].style.color = "black";
        }
        let stuff5 = document.getElementsByClassName("codeorange")
        for(let b = 0; b < stuff5.length; b++)
        {
            stuff5[b].style.color = "#D0921F";
        }
        let stuff6 = document.getElementsByClassName("classblue")
        for(let b = 0; b < stuff6.length; b++)
        {
            stuff6[b].style.color = "blue";
        }
        let stuff7 = document.getElementsByClassName("codegreen")
        for(let b = 0; b < stuff7.length; b++)
        {
            stuff7[b].style.color = "#009600";
        }
        let stuff8 = document.getElementsByClassName("changecolor4")
        for(let b = 0; b < stuff8.length; b++)
        {
            stuff8[b].style.backgroundColor = "#949494";
        }
        scrollbarstyle2.nodeValue = "div::-webkit-scrollbar{width: 10px;} div::-webkit-scrollbar-track{background: rgb(221, 221, 221);} div::-webkit-scrollbar-thumb{background: rgb(199, 199, 199);} div::-webkit-scrollbar-thumb:hover{background: #393D42;} div::-webkit-scrollbar-button{display: none;}"
        let stuff9 = document.getElementsByClassName("codewhite")
        for(let b = 0; b < stuff9.length; b++)
        {
            stuff9[b].style.color = "#FFFFFF";
        }
        let stuff10 = document.getElementsByClassName("changecolor5")
        for(let b = 0; b < stuff10.length; b++)
        {
            stuff10[b].style.backgroundColor = "#717171";
        }
        let stuff11 = document.getElementsByClassName("changecolor5border")
        for(let b = 0; b < stuff11.length; b++)
        {
            stuff11[b].style.borderColor = "#717171";
        }
        let stuff12 = document.getElementsByClassName("codewhite2")
        for(let b = 0; b < stuff12.length; b++)
        {
            stuff12[b].style.color = "#FFFFFF";
        }
    }
    else
    {
        document.getElementById("image2").src = "../netbeansui2.png"
        let stuff = document.getElementsByClassName("changecolor1")
        for(let b = 0; b < stuff.length; b++)
        {
            stuff[b].style.backgroundColor = "#202225";
        }
        let stuff2 = document.getElementsByClassName("changecolor2")
        for(let b = 0; b < stuff2.length; b++)
        {
            stuff2[b].style.backgroundColor = "#393D42";
        }
        let stuff3 = document.getElementsByClassName("changecolor3")
        for(let b = 0; b < stuff3.length; b++)
        {
            stuff3[b].style.backgroundColor = "#25252B";
        }
        let toptabs = document.getElementsByClassName("topbarkeytabsinputs")
        for(let b = 0; b < toptabs.length; b++)
        {
            toptabs[b].style.backgroundColor = "#3D474D"
        }
        let stuff4 = document.getElementsByClassName("normaltextcolor")
        for(let b = 0; b < stuff4.length; b++)
        {
            stuff4[b].style.color = "white";
        }
        let stuff5 = document.getElementsByClassName("codeorange")
        for(let b = 0; b < stuff5.length; b++)
        {
            stuff5[b].style.color = "#009600";
        }
        let stuff6 = document.getElementsByClassName("classblue")
        for(let b = 0; b < stuff6.length; b++)
        {
            stuff6[b].style.color = "#D0921F";
        }
        let stuff7 = document.getElementsByClassName("codegreen")
        for(let b = 0; b < stuff7.length; b++)
        {
            stuff7[b].style.color = "#8B55EB";
        }
        let stuff8 = document.getElementsByClassName("changecolor4")
        for(let b = 0; b < stuff8.length; b++)
        {
            stuff8[b].style.backgroundColor = "#000000";
        }
        scrollbarstyle2.nodeValue = "div::-webkit-scrollbar{width: 10px;} div::-webkit-scrollbar-track{background: #393D42;} div::-webkit-scrollbar-thumb{background: #202225;} div::-webkit-scrollbar-thumb:hover{background: black;} div::-webkit-scrollbar-button{display: none;}"
        let stuff9 = document.getElementsByClassName("codewhite")
        for(let b = 0; b < stuff9.length; b++)
        {
            stuff9[b].style.color = "#D0921F";
        }
        let stuff10 = document.getElementsByClassName("changecolor5")
        for(let b = 0; b < stuff10.length; b++)
        {
            stuff10[b].style.backgroundColor = "#333333";
        }
        let stuff11 = document.getElementsByClassName("changecolor5border")
        for(let b = 0; b < stuff11.length; b++)
        {
            stuff11[b].style.borderColor = "#333333";
        }
        let stuff12 = document.getElementsByClassName("codewhite2")
        for(let b = 0; b < stuff12.length; b++)
        {
            stuff12[b].style.color = "#009600";
        }
    }
}
/////////////////////////////////////////////////////////////////////////////
var hover_element = document.getElementsByClassName("leftbarlinksinputs")
for(let i = 0; i < hover_element.length; i++)
{
    hover_element[i].addEventListener('mouseover', function() {
        if(isTrueSet) {
            hover_element[i].style.backgroundColor = "#B5D5E4"
            hover_element[i].style.color = "#ffffff"
        }
        else {
            hover_element[i].style.backgroundColor = "#0F112E"
        }
    });

    hover_element[i].addEventListener('mouseout', function() {
        if(isTrueSet) {
            hover_element[i].style.backgroundColor = "#ffffff"
            hover_element[i].style.color = "#000000"
        }
        else {
            hover_element[i].style.backgroundColor = "#25252B"
        }
    });
}
///////////////////////////////////////////////////////////////////////////////
var hover_element2 = document.getElementsByClassName("topbarkeytabsinputs")
for(let i = 0; i < hover_element2.length; i++)
{
    hover_element2[i].addEventListener('mouseover', function() {
        if(isTrueSet) {
            hover_element2[i].style.backgroundColor = "#B5D5E4"
            hover_element2[i].style.color = "#ffffff"
        }
        else {
            hover_element2[i].style.backgroundColor = "#0F112E"
        }
    });

    hover_element2[i].addEventListener('mouseout', function() {
        if(isTrueSet) {
            hover_element2[i].style.backgroundColor = "#9CB6C3"
            hover_element2[i].style.color = "#000000"
        }
        else {
            hover_element2[i].style.backgroundColor = "#3D474D"
        }
    });
}
///////////////////////////////////////////////////////////////////////////////
var slide
if(document.getElementById("nextslidediv") != null) {
    slide = document.getElementsByClassName("slidelink")
    for(let i = 0; i < slide.length; i++)
    {
        slide[i].addEventListener("mouseover", function() {
            if(isTrueSet) {
                slide[i].style.color = "green"
            }
            else {
                slide[i].style.color = "#8B55EB"
            }
        })
        slide[i].addEventListener("mouseout", function() {
            if(isTrueSet) {
                slide[i].style.color = "blue"
            }
            else {
                slide[i].style.color = "#D0921F"
            }
        })
    }
}
