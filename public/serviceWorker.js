const CACHE_NAME= "v1"
const urlsToCache=[
    '/',
    'index.html',
    'logo1_192.png',
    'logo1_512.png',
    'logo1.png',
    'logo2.png'
]

const self=this

// install serviceWorker Event
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            console.log('opened cache')
            return cache.addAll(urlsToCache)
        })
    )
})

// listen for requests
self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)||fetch(event.request)
    )
})

// Activate the serviceWorker
self.addEventListener('activate',(event)=>{
    
})