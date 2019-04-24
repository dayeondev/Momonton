const liveForm = document.querySelector(".js-livewallpaper");

var dayimg = document.querySelector(".bgday")
var nightimg = document.querySelector(".bgnight");

var image = new Image();
var image2 = new Image();


var nightMode = -1;
var alphaValue = 1;

function setAlpha(){
    alphaValue = alphaValue + 0.05 * nightMode;
    if(alphaValue < 0 || alphaValue > 1) nightMode = nightMode * -1;

    image.style.opacity = alphaValue;
    // image2.style.opacity = 1;
    console.log(alphaValue, nightMode);
}

function paintImage(){

    image.src = `../images/Day.jpg`;
    image2.src = `../images/Night.jpg`;

    image.classList.add("bgday");
    image2.classList.add("bgnight");

    liveForm.prepend(image);
    liveForm.prepend(image2);
}

function init(){
    paintImage();
    setInterval(setAlpha, 50);
}

init();