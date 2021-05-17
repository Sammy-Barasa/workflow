const CACHE_NAME= "v81"
const urlsToCache=[
    '/',
    'index.html',
    'maskable_icon_x192.png.png',
    'maskable_icon (1).png',
    'contactplaceholder.jpg',
    'favicon.ico'
]

let token ={}
let headers = {
    'Accept':'application/json',
    'Content-Type':'application/json',
    'X-Requested-With': 'XMLHttpRequest'
}

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
        self.clients.claim())
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

 self.addEventListener('message',(event) =>{
    if(event.data && event.data.type==="TOK"){
        token['refresh'] = event.data.message
        // headers["X-CSRFToken"] = event.data.message.csrf

       return token
    }
    if(event.data && event.data.type==="CSR"){
        headers["X-CSRFToken"] = event.data.message

       return headers
    }
   })

self.addEventListener('periodicsync', event => {
  if (event.tag === 'refresh-token') {
    event.waitUntil(
        RefreshToken(token.refresh)
        );
  }
});





const RefreshToken = async (accessToken)=>{
   
    console.log(accessToken)
   await fetch("https://work-record-manager.herokuapp.com/auth/token/refresh/",{method:"POST",body:JSON.stringify({
  "refresh": accessToken}),headers:headers})
            .then(async (response) => {
                // console.log(response.data)
                // console.log(response.status)
                console.log('status',response.status)
                let res = await response.json()
                console.log('token',res.access)
            }).catch((error) => {
                console.log(error)
                
            })
}
