/*=========================================
        LOGIN CHECK
=========================================*/

if(localStorage.getItem("isLoggedIn") !== "true"){

    window.location.href = "login.html";

}

/*=========================================
        PERFORMANCE CHART
=========================================*/

const chartCanvas = document.getElementById("performanceChart");

if(chartCanvas){

new Chart(chartCanvas,{

type:"line",

data:{

labels:["S1","S2","S3","S4","S5","S6","S7"],

datasets:[{

label:"CGPA",

data:[8.10,8.35,8.52,8.71,8.90,9.02,9.18],

borderColor:"#38BDF8",

backgroundColor:"rgba(56,189,248,.15)",

fill:true,

tension:.4,

pointRadius:5,

pointHoverRadius:8

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"#ffffff"

}

}

},

scales:{

x:{

ticks:{color:"#CBD5E1"},

grid:{color:"rgba(255,255,255,.08)"}

},

y:{

beginAtZero:false,

ticks:{color:"#CBD5E1"},

grid:{color:"rgba(255,255,255,.08)"}

}

}

}

});

}

/*=========================================
        SEARCH
=========================================*/

const search=document.querySelector(".search input");

if(search){

search.addEventListener("keyup",function(e){

if(e.key==="Enter"){

alert("Searching for: "+this.value);

}

});

}

/*=========================================
        THEME BUTTON
=========================================*/

const themeBtn=document.querySelector(".theme-btn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

alert("Dark Theme Enabled");

});

}

/*=========================================
        HERO BUTTONS
=========================================*/

const primary=document.querySelector(".primary");

if(primary){

primary.addEventListener("click",()=>{

document.querySelector(".dashboard-grid").scrollIntoView({

behavior:"smooth"

});

});

}

const secondary=document.querySelector(".secondary");

if(secondary){

secondary.addEventListener("click",()=>{

window.location.href="timetable.html";

});

}

/*=========================================
        AI BUTTON
=========================================*/

const aiBtn=document.querySelector(".ai-button");

if(aiBtn){

aiBtn.addEventListener("click",()=>{

alert("AI Assistant will be available soon.");

});

}

/*=========================================
        CARD ANIMATION
=========================================*/

const cards=document.querySelectorAll(".card,.stat,.glass");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".8s";

observer.observe(card);

});

/*=========================================
        QUICK ACCESS HOVER
=========================================*/

document.querySelectorAll(".quick-grid a").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateY(-8px) scale(1.05)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateY(0) scale(1)";

});

});

/*=========================================
        LOGOUT
=========================================*/

const logout=document.getElementById("logoutBtn");

if(logout){

logout.addEventListener("click",function(e){

e.preventDefault();

localStorage.removeItem("isLoggedIn");

window.location.href="login.html";

});

}

/*=========================================
        PAGE READY
=========================================*/

console.log("KTU Dashboard Loaded Successfully");