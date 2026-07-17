/*=========================================
        TOTAL FEES COUNTER
=========================================*/

const totalPaid = document.getElementById("totalPaid");

if(totalPaid){

let current = 0;
const target = 425000;
const duration = 1800;
const step = target / (duration / 20);

const counter = setInterval(()=>{

current += step;

if(current >= target){

current = target;
clearInterval(counter);

}

totalPaid.innerHTML =
"₹" + Math.floor(current).toLocaleString("en-IN");

},20);

}

/*=========================================
        PROGRESS BAR ANIMATION
=========================================*/

const progress = document.querySelector(".progress-fill");

if(progress){

progress.style.width = "0%";

setTimeout(()=>{

progress.style.width = "89%";
progress.style.transition = "1.5s ease";

},300);

}

/*=========================================
        PAYMENT STATUS CHART
=========================================*/

const paymentCanvas = document.getElementById("paymentChart");

if(paymentCanvas){

new Chart(paymentCanvas,{

type:"doughnut",

data:{

labels:[

"Paid",
"Pending"

],

datasets:[{

data:[89,11],

backgroundColor:[

"#10B981",
"#EF4444"

],

borderWidth:0,

hoverOffset:10

}]

},

options:{

responsive:true,

cutout:"72%",

plugins:{

legend:{

position:"bottom",

labels:{

color:"#CBD5E1",
padding:20,
font:{
size:14
}

}

}

}

}

});

}

/*=========================================
        YEARLY PAYMENT TREND
=========================================*/

const trendCanvas = document.getElementById("trendChart");

if(trendCanvas){

new Chart(trendCanvas,{

type:"line",

data:{

labels:[

"2021",
"2022",
"2023",
"2024",
"2025",
"2026"

],

datasets:[{

label:"Fees Paid",

data:[

65000,
68000,
70000,
72000,
85000,
18000

],

borderColor:"#7C3AED",

backgroundColor:"rgba(124,58,237,.18)",

fill:true,

borderWidth:4,

pointRadius:5,

pointHoverRadius:8,

tension:.4

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

x:{

ticks:{

color:"#CBD5E1"

},

grid:{

display:false

}

},

y:{

ticks:{

color:"#CBD5E1",

callback:function(value){

return "₹"+(value/1000)+"K";

}

},

grid:{

color:"rgba(255,255,255,.08)"

}

}

}

}

});

}

/*=========================================
        CARD FADE ANIMATION
=========================================*/

const cards = document.querySelectorAll(
".card,.stat,.history-item,.transaction,.receipt-card,.summary-box"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
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

card.style.boxShadow=
"0 0 25px rgba(124,58,237,.30),0 0 55px rgba(37,99,235,.18)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

/*=========================================
        DOWNLOAD BUTTONS
=========================================*/

const buttons = document.querySelectorAll(".receipt-card button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

button.innerHTML="Preparing...";

setTimeout(()=>{

button.innerHTML="Download PDF";

},1500);

});

});

/*=========================================
        PAYMENT STATUS COLORS
=========================================*/

document.querySelectorAll(".pending").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="scale(1.08)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="scale(1)";

});

});

document.querySelectorAll(".paid").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="scale(1.08)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="scale(1)";

});

});

/*=========================================
        PAGE LOADED
=========================================*/

window.addEventListener("load",()=>{

console.log("Fees Dashboard Loaded Successfully");

});