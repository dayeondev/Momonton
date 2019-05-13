const liveForm = document.querySelector(".js-livewallpaper");

// 5400초마다 전환

var images = new Array();
var imgNum = -1; //0번부터 시작해야하기에 -1로 초기화

var nightMode;
var alphaValue;

function importImages(){
    console.log(`importImages() called`);
    for(var i = 0; i < 16; i++){
        images[i] = new Image();
        images[i].src = `./mojave_dynamic/mojave_dynamic_${i + 1}.jpeg`;
        images[i].classList.add("liveimg");
        images[i].classList.add("display_none")
        liveForm.prepend(images[i]);
    }
    
}
function setAlpha(n){
    // console.log(`setAlpha(${imgNum}) called`);
    alphaValue = alphaValue + 0.02 * nightMode;
    // if(alphaValue < 0 || alphaValue > 1){
    //     clearInterval(setAlphaInterval);
    //     // nightMode = nightMode * -1;
    // } 
    
    //나열되는 이미지의 순서는 15번부터 0까지이다.
    //아래의 이미지의 불투명도가 1인 상태에서 상대적으로 위에 위치한 이미지의 불투명도가 조절되야 한다
    if(n < 15){
        //imgNum이 15가 아닌 경우의 처리
        images[n].style.opacity = alphaValue;
    }
    else{
        //imgNum이 15일 경우의 처리
        images[0].style.opacity = 1-alphaValue;
    }
    // image2.style.opacity = 1;



    // console.log(alphaValue, nightMode);
}

//imgNum을 전역변수로 선언하고, changeImage 호출 시 1씩 증가
function changeImage(){
    imgNum = imgNum == 15 ? 0 : ++imgNum;
    console.log(`changeImage(${imgNum}) called`);
    
    for(var i = 0; i < 16; i++){
        images[i].classList.add("display_none");
    }
    
    switch(imgNum){
        case 15 :
        console.log(`case ${imgNum}`);
        images[imgNum].classList.remove("display_none");
        images[0].classList.remove("display_none");
        images[imgNum].style.opacity = 1;
        images[0].style.opacity = 0;
        break;
        
        default :
        console.log(`case Default`);
        images[imgNum].classList.remove("display_none");
        images[imgNum + 1].classList.remove("display_none");
        images[imgNum].style.opacity = 1;
        images[imgNum + 1].style.opacity = 1;
    }
    // images[imgNum].classList.remove("display_none");
    // images[imgNum + 1 == 16? 0 : imgNum + 1].classList.remove("display_none");
    nightMode = -1;
    alphaValue = 1;
    
    var setAlphaInterval = setInterval(function(){
        setAlpha(imgNum);
        if(alphaValue < 0 || alphaValue > 1){
            clearInterval(setAlphaInterval);
        } 
    }, 50);
    
    
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
    importImages(); //이미지 불러오기

    var testNum = -1;
    // changeImage(14); //이미지 15번으로 변경
    // setInterval(function(){
    //     changeImage(testNum == 15 ? testNum = 0 : ++testNum);
    // }, 2000)
    
    images[0].classList.remove("display_none");
    setInterval(changeImage, 3000);
}

function init(){
    paintImage();
    // setInterval(setAlpha, 50);
}

init();