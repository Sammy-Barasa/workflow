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
        // make a copy of the request and make the request
       const cacheAndrunRequest=(initialRequest)=>{ 
           caches.open(CACHE_NAME).then((cache)=>{
                const requestClone = initialRequest.clone()
                cache.put(initialRequest,requestClone)
                return fetch(initialRequest)
        })
       }
        // if request is in cache return else make request
        caches.match(event.request).then((cachedResponse)=>{
            return cachedResponse||cacheAndrunReques(event.request)
        })
    )
})

// Activate the serviceWorker
self.addEventListener('activate',(event)=>{
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
            cacheNames.map((cache)=>{
                if(CACHE_NAME!==cacheNames){
                    return caches.delete(cache)
                }
            }
            )
        })
    )
})