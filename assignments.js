/*=========================================
        OVERALL CIRCLE PROGRESS
=========================================*/

const progressCircle = document.querySelector(".progress");

if(progressCircle){

const radius = 80;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;

const percentage = 76;

const offset = circumference - (percentage/100) * circumference;

setTimeout(()=>{

progressCircle.style.strokeDashoffset = offset;

},300);

}

/*=========================================
        SUBJECT PROGRESS ANIMATION
=========================================*/

const fills = document.querySelectorAll(".fill");

fills.forEach(fill=>{

const width = fill.style.width;

fill.style.width="0";

setTimeout(()=>{

fill.style.width=width;

},500);

});

/*=========================================
        CARD STAGGER ANIMATION
=========================================*/

const cards = document.querySelectorAll(".card,.stat,.assignment,.subject");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(35px)";

setTimeout(()=>{

card.style.transition="all .6s ease";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*120);

});

/*=========================================
        SEARCH ASSIGNMENTS
=========================================*/

const searchInput=document.querySelector(".search input");

const assignments=document.querySelectorAll(".assignment");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

assignments.forEach(item=>{

const text=item.innerText.toLowerCase();

if(text.includes(value)){

item.style.display="flex";

}

else{

item.style.display="none";

}

});

});

}

/*=========================================
        HOVER GLOW EFFECT
=========================================*/

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 25px rgba(124,58,237,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.4)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .6s linear";

ripple.style.pointerEvents="none";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=========================================
        RIPPLE KEYFRAME
=========================================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);