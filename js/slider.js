var radio = document.getElementsByName("r");
var index = 0;
function sliderloop(){
    var i;
    for(i = 0 ; i<radio.length;i++){
        radio[i].checked = false;
    }
    if(index < radio.length-1){
        index++;
    }else{
        index=0;
    }
    radio[index].checked = true;
    setTimeout(sliderloop, 3000);
}
sliderloop();

document.getElementById("right").addEventListener("click",back);
function back(){
    var i;
    for(i = 0 ; i<radio.length ; i++){
        radio[i].checked = false;
    }
    if(index <= radio.length-1 && index > 0){
        index--;
    }else{
        index=radio.length-1;
    }
    radio[index].checked = true;
}

document.getElementById("left").addEventListener("click",forword);
function forword(){
    var i;
    for(i = 0 ; i<radio.length ; i++){
        radio[i].checked = false;
    }
    if(index < radio.length-1 && index >= 0){
        index++;
    }else{
        index=0;
    }
    radio[index].checked = true;
}