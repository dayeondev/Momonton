const liveForm = document.querySelector(".js-livewallpaper");

// 5400초마다 전환

var images = new Array();

var nightMode;
var alphaValue;

function importImages(){
    console.log(`importImages() called`);
    for(var i = 0; i < 16; i++){
        images[i] = new Image();
        images[i].src = `mojave_dynamic/mojave_dynamic_${i + 1}.jpeg`;
        images[i].classList.add("liveimg");
        images[i].classList.add("display_none")
        liveForm.prepend(images[i]);
    }
    
}
function setAlpha(imgNum){
    console.log(`setAlpha(${imgNum}) called`);
    alphaValue = alphaValue + 0.05 * nightMode;
    if(alphaValue < 0 || alphaValue > 1) nightMode = nightMode * -1;
    
    images[imgNum + 1 == 16? 0 : imgNum + 1].style.opacity = alphaValue;
    // image2.style.opacity = 1;
    console.log(alphaValue, nightMode);
}

function changeImage(imgNum){
    console.log(`changeImage(${imgNum}) called`);
    images[imgNum].classList.remove("display_none");
    images[imgNum + 1 == 16? 0 : imgNum + 1].classList.remove("display_none");
    nightMode = -1;
    alphaValue = 1;
    setInterval(setAlpha(imgNum), 50);
}

// var nightMode = -1;
// var alphaValue = 1;

// function setAlpha(){
//     alphaValue = alphaValue + 0.05 * nightMode;
//     if(alphaValue < 0 || alphaValue > 1) nightMode = nightMode * -1;

//     // image.style.opacity = alphaValue;
//     // image2.style.opacity = 1;
//     console.log(alphaValue, nightMode);
// }

function paintImage(){
    importImages();``

    changeImage(10);
}

function init(){``
    paintImage();``
    // setInterval(setAlpha, 50);
}

init();