/*=========================================
        CGPA CIRCLE ANIMATION
=========================================*/

const progress = document.querySelector(".progress");

if(progress){

const radius = 80;
const circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = circumference;

// 8.12 CGPA out of 10

const percentage = 81.2;

const offset = circumference - (percentage/100)*circumference;

setTimeout(()=>{

progress.style.strokeDashoffset = offset;

},300);

}

/*=========================================
        SGPA TREND CHART
=========================================*/

const trendCanvas = document.getElementById("trendChart");

if(trendCanvas){

new Chart(trendCanvas,{

type:"line",

data:{

labels:[

"Sem 1",
"Sem 2",
"Sem 3",
"Sem 4",
"Sem 5",
"Sem 6"

],

datasets:[{

label:"SGPA",

data:[

7.80,
8.04,
7.92,
8.30,
8.42,
8.35

],

borderColor:"#7C3AED",

backgroundColor:"rgba(124,58,237,.15)",

fill:true,

borderWidth:4,

pointRadius:6,

pointHoverRadius:8,

tension:.35

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

},

scales:{

y:{

min:7,

max:9,

grid:{
color:"rgba(255,255,255,.08)"
},

ticks:{
color:"#CBD5E1"
}

},

x:{

grid:{
display:false
},

ticks:{
color:"#CBD5E1"
}

}

}

}

});

}
/*=========================================
        SUBJECT PERFORMANCE RADAR CHART
=========================================*/

const radarCanvas = document.getElementById("radarChart");

if(radarCanvas){

new Chart(radarCanvas,{

type:"radar",

data:{

labels:[

"AI",
"Cloud",
"ISE",
"Seminar",
"Project",
"IoT"

],

datasets:[{

label:"Performance",

data:[

92,
90,
95,
96,
94,
88

],

backgroundColor:"rgba(124,58,237,.25)",

borderColor:"#8B5CF6",

borderWidth:3,

pointBackgroundColor:"#38BDF8",

pointBorderColor:"#ffffff",

pointRadius:5,

pointHoverRadius:7

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:false

}

},

scales:{

r:{

min:60,

max:100,

ticks:{

stepSize:10,

color:"#CBD5E1",

backdropColor:"transparent"

},

grid:{

color:"rgba(255,255,255,.08)"

},

angleLines:{

color:"rgba(255,255,255,.08)"

},

pointLabels:{

color:"#FFFFFF",

font:{

size:14,

weight:"600"

}

}

}

}

}

});

}

/*=========================================
        PROGRESS BAR ANIMATION
=========================================*/

window.addEventListener("load",()=>{

const fills=document.querySelectorAll(".fill");

fills.forEach(fill=>{

const width=fill.style.width;

fill.style.width="0";

setTimeout(()=>{

fill.style.width=width;

},300);

});

});

/*=========================================
        CARD ENTRANCE ANIMATION
=========================================*/

const cards=document.querySelectorAll(".card,.stat");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:0.15

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(30px)";

card.style.transition="all .8s ease";

observer.observe(card);

});

/*=========================================
        HOVER GLOW EFFECT
=========================================*/

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 25px rgba(124,58,237,.35), 0 0 60px rgba(37,99,235,.18)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

/*=========================================
        OPTIONAL: SEMESTER CARD CLICK
=========================================*/

const semesters=document.querySelectorAll(".semester");

semesters.forEach((semester,index)=>{

semester.style.cursor="pointer";

semester.addEventListener("click",()=>{

alert(`Opening Semester ${index+1} Result`);

});

});