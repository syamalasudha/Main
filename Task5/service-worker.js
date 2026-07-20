const CACHE_NAME = "inkflow-v1";

const FILES = [

"/",

"/index.html",

"/blogs.html",

"/article.html",

"/about.html",

"/contact.html",

"/css/style.css",

"/js/script.js"

];

self.addEventListener("install",(event)=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(FILES);

})

);

});

self.addEventListener("fetch",(event)=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});

self.addEventListener("activate",(event)=>{

event.waitUntil(

caches.keys().then(keys=>{

return Promise.all(

keys.map(key=>{

if(key!==CACHE_NAME){

return caches.delete(key);

}

})

);

})

);

});