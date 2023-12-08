let hour = document.getElementById("hr");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let timer = document.querySelector("h1");
let interval = null;
let total = 0;

function totalvalue(){
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}

function  timerL(){
totalvalue();
total--;

if(total >= 0){
   let ht = Math.floor(total/3600);
   let mt = Math.floor((total % 3600) / 60  );
   let st = total % 60;

    hour.value = ht;
    minute.value = mt;
    second.value = st;  
}
else{
    clearInterval(interval)
    timer.innerHTML = "Timer Ended";
}

}

let start = document.getElementById("start");

start.addEventListener("click", function(){
clearInterval(interval);
interval = setInterval(timerL,1000)

timer.innerHTML = "Timer Started"
});


let reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    clearInterval(interval);

    hour.value = null;
    minute. value = null;
    second.value = null;

timer.innerHTML = "Timer Ended"

})

let pause = document.getElementById("pause");
pause.addEventListener("click", function(){
    clearInterval(interval)

timer.innerHTML = "Timer Paused"

})