/*=========================================
            IMAGE CAROUSEL
=========================================*/

const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
];

const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.querySelectorAll(".dot");

let current = 0;

function updateSlider(index){

    slider.style.opacity = "0";

    setTimeout(() => {

        slider.src = images[index];

        slider.style.opacity = "1";

    },200);

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[index].classList.add("active");

}

next.addEventListener("click",()=>{

    current++;

    if(current >= images.length){

        current = 0;

    }

    updateSlider(current);

});

prev.addEventListener("click",()=>{

    current--;

    if(current < 0){

        current = images.length - 1;

    }

    updateSlider(current);

});

dots.forEach(dot=>{

    dot.addEventListener("click",()=>{

        current = Number(dot.dataset.slide);

        updateSlider(current);

    });

});

let autoSlide = setInterval(()=>{

    current++;

    if(current >= images.length){

        current = 0;

    }

    updateSlider(current);

},3500);

document.querySelector(".carousel-container")
.addEventListener("mouseenter",()=>{

    clearInterval(autoSlide);

});

document.querySelector(".carousel-container")
.addEventListener("mouseleave",()=>{

    autoSlide = setInterval(()=>{

        current++;

        if(current >= images.length){

            current = 0;

        }

        updateSlider(current);

    },3500);

});

/*=========================================
            WEATHER API
=========================================*/

const city = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const weather = document.getElementById("weatherResult");

async function getWeather(){

    const cityName = city.value.trim();

    if(cityName === ""){

        weather.innerHTML = `

            <i class="fa-solid fa-circle-exclamation"></i>

            <h3>Enter City Name</h3>

            <p>Please type a city.</p>

        `;

        return;

    }

    weather.innerHTML = `

        <i class="fa-solid fa-spinner fa-spin"></i>

        <h3>Loading...</h3>

    `;

    try{

        const geo = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
        );

        const geoData = await geo.json();

        if(!geoData.results){

            weather.innerHTML = `

                <i class="fa-solid fa-location-dot"></i>

                <h3>City Not Found</h3>

            `;

            return;

        }

        const place = geoData.results[0];

        const api = await fetch(

            `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`

        );

        const data = await api.json();

        weather.innerHTML = `

            <i class="fa-solid fa-cloud-sun"></i>

            <h3>${place.name}</h3>

            <p><strong>Temperature :</strong> ${data.current.temperature_2m}°C</p>

            <p><strong>Humidity :</strong> ${data.current.relative_humidity_2m}%</p>

            <p><strong>Wind :</strong> ${data.current.wind_speed_10m} km/h</p>

        `;

    }

    catch{

        weather.innerHTML = `

            <i class="fa-solid fa-triangle-exclamation"></i>

            <h3>Unable to Fetch Data</h3>

        `;

    }

}

searchBtn.addEventListener("click",getWeather);

city.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        getWeather();

    }

});

/*=========================================
        NAVBAR EFFECT
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(255,255,255,.85)";
        header.style.boxShadow="0 15px 30px rgba(0,0,0,.08)";

    }

    else{

        header.style.background="rgba(255,255,255,.55)";
        header.style.boxShadow="none";

    }

});

/*=========================================
        SCROLL ANIMATION
=========================================*/

const cards = document.querySelectorAll(".floating");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(80px)";
    card.style.transition=".8s";

    observer.observe(card);

});

/*=========================================
        HERO CARD EFFECT
=========================================*/

const glass = document.querySelector(".glass-card");

document.addEventListener("mousemove",(e)=>{

    if(!glass) return;

    let x = (window.innerWidth/2 - e.clientX)/40;
    let y = (window.innerHeight/2 - e.clientY)/40;

    glass.style.transform =
    `translate(${x}px,${y}px)`;

});

/*=========================================
        BUTTON HOVER
=========================================*/

document.querySelectorAll(".btn,.nav-btn")
.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

/*=========================================
        FOOTER YEAR
=========================================*/

const copy = document.querySelector(".copyright");

if(copy){

    copy.innerHTML =
    `© ${new Date().getFullYear()} TechVerse | All Rights Reserved.`;

}