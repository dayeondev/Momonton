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
    alphaValue = alphaValue + 0.02 * nightMode;
    // if(alphaValue < 0 || alphaValue > 1){
    //     clearInterval(setAlphaInterval);
    //     // nightMode = nightMode * -1;
    // } 
    
    //나열되는 이미지의 순서는 15번부터 0까지이다.
    //아래의 이미지의 불투명도가 1인 상태에서 상대적으로 위에 위치한 이미지의 불투명도가 조절되야 한다
    if(imgNum != 15){
        //imgNum이 15가 아닌 경우의 처리
        images[imgNum].style.opacity = alphaValue;
    }
    else{
        //imgNum이 15일 경우의 처리
        images[imgNum + 1 == 16? 0 : imgNum + 1].style.opacity = 1-alphaValue;
    }
    // image2.style.opacity = 1;



    console.log(alphaValue, nightMode);
}

function changeImage(imgNum){

    console.log(`changeImage(${imgNum}) called`);
    for(var i = 0; i < 16; i++){
        if(i != imgNum && i != (imgNum + 1 == 16? 0 : imgNum + 1)){
            images[i].classList.add("display_none");
        }
        else{
            images[i].classList.remove("display_none");
            if(i == 0){
                images[i].style.opacity = 0; //이거 안해주면 14에서 15로 넘어갈 때 투명도 오류
            }
            else{
                images[i].style.opacity = 1;
            }
        }
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

    changeImage(15); //이미지 15번으로 변경
}

function init(){
    paintImage();
    // setInterval(setAlpha, 50);
}

init();