/*=========================================
        LIVE CLOCK & DATE
=========================================*/

const liveClock = document.getElementById("liveClock");
const liveDate = document.getElementById("liveDate");

function updateClock(){

const now = new Date();

liveClock.innerHTML = now.toLocaleTimeString([],{
hour:'2-digit',
minute:'2-digit'
});

liveDate.innerHTML = now.toLocaleDateString([],{
weekday:'long',
day:'numeric',
month:'long',
year:'numeric'
});

}

setInterval(updateClock,1000);
updateClock();

/*=========================================
        TODAY'S TIMETABLE
=========================================*/

const schedule=[

{
subject:"Artificial Intelligence",
code:"CST415",
start:"09:00",
end:"10:00"
},

{
subject:"Cloud Computing",
code:"CST463",
start:"10:00",
end:"11:00"
},

{
subject:"IoT & Applications",
code:"CST467",
start:"11:15",
end:"12:15"
},

{
subject:"Industrial Safety Engineering",
code:"MCN401",
start:"13:15",
end:"14:15"
},

{
subject:"Seminar",
code:"CSP493",
start:"14:15",
end:"15:15"
},

{
subject:"Major Project",
code:"CSP497",
start:"15:15",
end:"17:15"
}

];

/*=========================================
        DOM ELEMENTS
=========================================*/

const currentSubject=document.getElementById("currentSubject");
const currentCode=document.getElementById("currentCode");
const currentTime=document.getElementById("currentTime");
const remaining=document.getElementById("remainingTime");

const nextSubject=document.getElementById("nextSubject");
const nextCode=document.getElementById("nextCode");
const nextTime=document.getElementById("nextTime");

/*=========================================
        REAL TIME TRACKING
=========================================*/

function convertMinutes(time){

let t=time.split(":");

return parseInt(t[0])*60+parseInt(t[1]);

}

function updateSchedule(){

const now=new Date();

const minutes=now.getHours()*60+now.getMinutes();

let found=false;

const cards=document.querySelectorAll(".timeline-card");

cards.forEach(card=>{

card.classList.remove("live");

const tag=card.querySelector(".indicator");

if(tag) tag.remove();

});

for(let i=0;i<schedule.length;i++){

let start=convertMinutes(schedule[i].start);

let end=convertMinutes(schedule[i].end);

if(minutes>=start && minutes<end){

found=true;

currentSubject.innerHTML=schedule[i].subject;
currentCode.innerHTML=schedule[i].code;
currentTime.innerHTML=schedule[i].start+" - "+schedule[i].end;

let remain=end-minutes;

remaining.innerHTML=remain+" mins";

cards[i].classList.add("live");

const badge=document.createElement("div");

badge.className="indicator";

badge.innerHTML="LIVE";

cards[i].appendChild(badge);

if(i<schedule.length-1){

nextSubject.innerHTML=schedule[i+1].subject;

nextCode.innerHTML=schedule[i+1].code;

nextTime.innerHTML=schedule[i+1].start+" - "+schedule[i+1].end;

}else{

nextSubject.innerHTML="No More Classes";

nextCode.innerHTML="";

nextTime.innerHTML="Enjoy your day!";

}

break;

}

}

if(!found){

if(minutes<convertMinutes(schedule[0].start)){

currentSubject.innerHTML="Classes Not Started";

currentCode.innerHTML="";

currentTime.innerHTML="";

remaining.innerHTML="Starts Soon";

nextSubject.innerHTML=schedule[0].subject;

nextCode.innerHTML=schedule[0].code;

nextTime.innerHTML=schedule[0].start+" - "+schedule[0].end;

}

else{

currentSubject.innerHTML="Classes Over";

currentCode.innerHTML="";

currentTime.innerHTML="";

remaining.innerHTML="See you tomorrow";

nextSubject.innerHTML="No Upcoming Class";

nextCode.innerHTML="";

nextTime.innerHTML="";

}

}

}

setInterval(updateSchedule,1000);

updateSchedule();

/*=========================================
        QUICK ACTION BUTTONS
=========================================*/

document.querySelectorAll(".actions button").forEach(btn=>{

btn.addEventListener("click",()=>{

const old=btn.innerHTML;

btn.innerHTML="Processing...";

setTimeout(()=>{

btn.innerHTML=old;

},1500);

});

});

/*=========================================
        ASSIGNMENT BUTTONS
=========================================*/

document.querySelectorAll(".assignment-card button").forEach(btn=>{

if(!btn.disabled){

btn.addEventListener("click",()=>{

btn.innerHTML="Uploaded ✓";

btn.style.background="#10B981";

});

}

});

/*=========================================
        SCROLL ANIMATION
=========================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll(

".glass,.timeline-card,.assignment-card,.stat-card"

).forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(30px)";

item.style.transition=".8s";

observer.observe(item);

});

/*=========================================
        PAGE LOADED
=========================================*/

window.onload=()=>{

console.log("KTU Timetable Loaded Successfully");

};