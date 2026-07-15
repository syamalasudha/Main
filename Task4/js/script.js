

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},800);

});




document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});




const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-150;

if(pageYOffset>=top){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});




const scrollBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.classList.add("show");

}else{

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});



const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(

".about-card,.project-card,.timeline-item,.contact-card,.product,.task,.section-header"

).forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});



const counters=document.querySelectorAll(".stats h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const el=entry.target;

const target=parseInt(el.innerText);

let count=0;

const speed=target/60;

const update=()=>{

count+=speed;

if(count<target){

if(el.innerText.includes("%")){

el.innerText=Math.floor(count)+"%";

}else{

el.innerText=Math.floor(count)+"+";

}

requestAnimationFrame(update);

}else{

if(el.innerText.includes("%")){

el.innerText=target+"%";

}else{

el.innerText=target+"+";

}

}

};

update();

counterObserver.unobserve(el);

}

});

});

counters.forEach(c=>counterObserver.observe(c));




const fills=document.querySelectorAll(".fill");

const skillObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.transform="scaleX(1)";
skillObserver.unobserve(entry.target);

}

});

});

fills.forEach(fill=>{

fill.style.transformOrigin="left";
fill.style.transform="scaleX(0)";
fill.style.transition="1.4s ease";

skillObserver.observe(fill);

});




const cursor=document.querySelector(".cursor");
const blur=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

blur.style.left=e.clientX-150+"px";
blur.style.top=e.clientY-150+"px";

});

document.querySelectorAll("a,button").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("active");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("active");

});

});




const form=document.getElementById("contactForm");

form.addEventListener("submit",e=>{

e.preventDefault();

const btn=form.querySelector("button");

btn.innerHTML="Message Sent ✔";

btn.disabled=true;

setTimeout(()=>{

form.reset();

btn.innerHTML='<i class="fas fa-paper-plane"></i> Send Message';

btn.disabled=false;

},2500);

});




window.addEventListener("mousemove",e=>{

document.querySelectorAll(".blob").forEach((blob,index)=>{

const speed=(index+1)*15;

blob.style.transform=

`translate(${e.clientX/speed}px,${e.clientY/speed}px)`;

});

});




const profile=document.querySelector(".profile-card");

profile.addEventListener("mousemove",e=>{

const rect=profile.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;
const rotateX=(rect.height/2-y)/18;

profile.style.transform=

`perspective(1000px)
rotateY(${rotateY}deg)
rotateX(${rotateX}deg)`;

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform=

"perspective(1000px) rotateY(0) rotateX(0)";

});



document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.08),
var(--card))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="var(--card)";

});

});


