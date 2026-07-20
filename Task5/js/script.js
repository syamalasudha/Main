/*==================================================
                    LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 600);

    }

});

/*==================================================
                THEME TOGGLE
==================================================*/

const themeBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeBtn) {

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    }

}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

}

/*==================================================
                CUSTOM CURSOR
==================================================*/

const cursor = document.querySelector(".cursor");

const blur = document.querySelector(".cursor-blur");

if (cursor && blur) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

        blur.style.left = e.clientX + "px";

        blur.style.top = e.clientY + "px";

    });

}

/*==================================================
                HEADER EFFECT
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(10,15,30,.92)";

        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "rgba(15,23,42,.75)";

    }

});

/*==================================================
                SCROLL TO TOP
==================================================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==================================================
                SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*==================================================
                SCROLL REVEAL
==================================================*/

const revealElements = document.querySelectorAll(
".featured,.categories,.trending,.why-us,.testimonials,.newsletter,.footer,.blogs-page,.article,.about,.contact"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.15
});

revealElements.forEach(section=>{

    section.classList.add("reveal");

    revealObserver.observe(section);

});

/*==================================================
                ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-180;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY>=sectionTop &&
           window.scrollY<sectionTop+sectionHeight){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/*==================================================
            READING PROGRESS BAR
==================================================*/

const progressBar=document.querySelector(".reading-progress");

window.addEventListener("scroll",()=>{

    if(!progressBar) return;

    const scrollTop=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-
                 document.documentElement.clientHeight;

    const progress=(scrollTop/height)*100;

    progressBar.style.width=progress+"%";

});

/*==================================================
            NEWSLETTER FORM
==================================================*/

const newsletter=document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=newsletter.querySelector("input").value.trim();

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(pattern.test(email)){

showToast("✅ Successfully Subscribed!");

newsletter.reset();

}else{

showToast("❌ Enter a valid Email");

}

});

}

/*==================================================
                TOAST MESSAGE
==================================================*/

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},400);

},2500);

}

/*==================================================
                COUNTER ANIMATION
==================================================*/

const counters=document.querySelectorAll(".stat h3");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let count=0;

const speed=target/80;

function update(){

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==================================================
            CARD HOVER EFFECT
==================================================*/

const cards=document.querySelectorAll(

".featured-card,.blog-card,.feature-card,.category-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/18;

const rotateY=(rect.width/2-x)/18;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});

/*==================================================
                MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if(menuBtn && navMenu){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("show");

        menuBtn.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navMenu.classList.remove("show");

            menuBtn.classList.remove("active");

        });

    });

}

/*==================================================
                FAQ ACCORDION
==================================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question=item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach(i=>{

            if(i!==item){

                i.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*==================================================
                BLOG SEARCH
==================================================*/

const searchInput=document.querySelector(".search-bar input");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const cards=document.querySelectorAll(".blog-card,.featured-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

/*==================================================
                DEBOUNCE
==================================================*/

function debounce(fn,delay){

let timer;

return(...args)=>{

clearTimeout(timer);

timer=setTimeout(()=>{

fn(...args);

},delay);

};

}

/*==================================================
                KEYBOARD SHORTCUT
==================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="/" && searchInput){

e.preventDefault();

searchInput.focus();

}

});

/*==================================================
            LOCAL STORAGE (LIKES)
==================================================*/

const likeButtons=document.querySelectorAll(".like-btn");

likeButtons.forEach((btn,index)=>{

const key="like-"+index;

if(localStorage.getItem(key)){

btn.classList.add("liked");

}

btn.addEventListener("click",()=>{

btn.classList.toggle("liked");

if(btn.classList.contains("liked")){

localStorage.setItem(key,"true");

showToast("❤️ Added to Favorites");

}else{

localStorage.removeItem(key);

showToast("💔 Removed from Favorites");

}

});

});

/*==================================================
            IMAGE LAZY ANIMATION
==================================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

imageObserver.unobserve(entry.target);

}

});

});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="translateY(30px)";

img.style.transition=".8s";

imageObserver.observe(img);

});

/*==================================================
            PERFORMANCE
==================================================*/

window.addEventListener(

"scroll",

debounce(()=>{

console.log("Optimized Scroll");

},60)

);

/*==================================================
        SERVICE WORKER (PWA)
==================================================*/

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("service-worker.js")

.then(()=>{

console.log("Service Worker Registered");

})

.catch(err=>{

console.log(err);

});

});

}

/*==================================================
                PAGE FADE
==================================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition=".5s";

document.body.style.opacity="1";

});

/*==================================================
            CONSOLE MESSAGE
==================================================*/

console.log("%cWelcome to InkFlow 🚀",

"color:#6C63FF;font-size:20px;font-weight:bold;");

console.log("Designed & Developed by Syamala Sudha");

/*==================================================
                END OF FILE
==================================================*/