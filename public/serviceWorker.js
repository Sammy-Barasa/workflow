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

// Activate the serviceWorker
self.addEventListener('activate',(event)=>{
    console.log("Ready!!!")
    // event.waitUntil(
    //     caches.keys().then((cacheNames)=>{
    //         cacheNames.map((cache)=>{
    //             if(CACHE_NAME!==cacheNames){
    //                 return caches.delete(cache)
    //             }
    //         }
    //         )
    //     })
    )
})

// listen for requests
self.addEventListener('fetch',(event)=>{
    event.respondWith(
        //  make the request and make a copy of the  result
       const cacheAndrunRequest=(initialRequest)=>{
           fetch(initialRequest).then((res)=>{
           caches.open(CACHE_NAME).then((cache)=>{
                const resClone = res.clone()
                cache.put(initialRequest,resClone)
                )
            return res
           }
        })
       }
        // if request is in cache return else make request
        caches.match(event.request).then((cachedResponse)=>{
            return cachedResponse||cacheAndrunReques(event.request)
            })
        )  
})

