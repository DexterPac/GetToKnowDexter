
const imageset1 = [
    "../../SipImages/Goblinface.png",
    "../../SipImages/sipimage4.png",
    "../../SipImages/rdme.png",
    "../../SipImages/taskgoblinupdate3.png"
];

//tracks the current image index
let currentimages = {
    currentimage1: 0
};
//tracks which HTML image element <img> is currently visible
let activeimages = {
    currentimage1: 0
};

// prevents multiple transitions from overlapping
let sliderbusy = {
    currentimage1: false
};

const Obj1Img1 = document.getElementById("Obj1Img1");
const Obj1Img2 = document.getElementById("Obj1Img2");

//set initial image
Obj1Img1.classList.add("active");
Obj1Img2.classList.add("enter-right");

document.getElementById("Obj1ImgSet1").addEventListener("click",
    (event) => LoadPrevious(event, imageset1, currentimages, "currentimage1", Obj1Img1, Obj1Img2));

document.getElementById("Obj1ImgSet2").addEventListener("click",
    (event) => LoadNext(event, imageset1, currentimages, "currentimage1", Obj1Img1, Obj1Img2));


function ChangeImage(event, imgset, imgindex, indexname, image1, image2, direction) {
    event.preventDefault();

    if (sliderbusy[indexname] || imgset.length <= 1) return;

    sliderbusy[indexname] = true;

    //calculate the next image index (with looping)
    let nextindex = (imgindex[indexname] + direction + imgset.length) % imgset.length;

    //determine which image element is currently visible
    let currentimg = activeimages[indexname] === 0 ? image1 : image2;
    //the other element will display the incoming image
    let nextimg = activeimages[indexname] === 0 ? image2 : image1;

    //position incoming image outside the slider
    nextimg.style.transition = "none";
    nextimg.className = direction === 1 ? "right" : "left";
    nextimg.src = imgset[nextindex];

    function StartTransition() {
        nextimg.offsetWidth; //force browser to recognize its starting position
        nextimg.style.transition = ""; //restore CSS transition

        //start the animation on the next frame
        requestAnimationFrame(() => {
            currentimg.className = direction === 1 ? "left" : "right";  //move current image out
            nextimg.className = "active"; //move incoming image into view

            //update tracking variables
            imgindex[indexname] = nextindex;
            activeimages[indexname] = activeimages[indexname] === 0 ? 1 : 0;

            //wait for animation to finish
            nextimg.addEventListener("transitionend", function FinishTransition(e) {

                if (e.propertyName !== "transform") return;

                //reset outgoing image WITHOUT animation
                currentimg.style.transition = "none";
                currentimg.className = "right";
                currentimg.offsetWidth; //force browser to apply reset
                currentimg.style.transition = ""; //restore transition for future use
                sliderbusy[indexname] = false;

            }, { once: true });

        });
    }

    //onnly start transition once image has loaded
    nextimg.onload = function() {
        nextimg.onload = null;
        StartTransition();
    };

    //handle images already cached by the browser
    if (nextimg.complete && nextimg.naturalWidth > 0) {
        nextimg.onload = null;
        StartTransition();
    }
}

function LoadPrevious(event, imgset, imgindex, indexname, image1, image2) {
    ChangeImage(event, imgset, imgindex, indexname, image1, image2, -1);
}
function LoadNext(event, imgset, imgindex, indexname, image1, image2) {
    ChangeImage(event, imgset, imgindex, indexname, image1, image2, 1);
}
