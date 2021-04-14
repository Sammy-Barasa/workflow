const CACHE_NAME= "v60"
const urlsToCache=[
    '/',
    'index.html',
    'maskable_icon_x192.png.png',
    'maskable_icon (1).png',
    'contactplaceholder.jpg',
    'favicon.ico'
]

const self=this

// install serviceWorker Event
self.addEventListener('install',(event)=>{
    self.skipWaiting()
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            console.log('opened cache')
            return cache.addAll(urlsToCache)
        })
    )
})

// Activate the serviceWorker
self.addEventListener('activate',(event)=>{
    console.log("Ready!!!")
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
           return Promise.all(cacheNames.map(
               // eslint-disable-next-line array-callback-return
               (cacheName)=>{
                if(CACHE_NAME!==cacheName){
                    return caches.delete(cacheName)
                }
            }
            ))
        })
    )   
})


// listen for requests
self.addEventListener('fetch',(event)=>{
    
    event.respondWith(
        
        // if request is in cache return else make request
        caches.match(event.request).then((cachedResponse)=>{
            if (cachedResponse){
                return cachedResponse
            }
            return fetch(event.request).then((res)=>{
                // checkof we receive a valid response
                if(!res.ok||!res||res.type !=='basic'){
                    return res
                }
                let responseToCache = res.clone()
                caches.open(CACHE_NAME).then((cache)=>{
                    cache.put(event.request, responseToCache)
                })
                return res
            })
            })
        )  
})

