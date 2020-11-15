import {apikey, listId} from "./../apiinfo";

export async function dataFetcher(dataHandler, screenHandler, trendHandler){
    let baseUrl, items, captionImage, obj;
    let apiData = [];
    let index = 0;
    let size = "w500";
    
    await fetch(`https://api.themoviedb.org/3/configuration?api_key=${apikey}`).then(res => res.json()).then(res => {
        baseUrl = res.images.base_url;
    });

    await fetch(`https://api.themoviedb.org/3/list/${listId}?api_key=${apikey}`).then(res => res.json()).then(res => {
        items = res.items;
        captionImage = res;
    })

    items.forEach(element => {
        if (index < 8){
            obj = {
                url: baseUrl + size + element.poster_path,
                title: element.original_title,
                rating: element.vote_average,
                overview: element.overview
            }
            apiData.push(obj);
        }


    });
    dataHandler(apiData);
    screenHandler(1);

    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apikey}`).then(res => res.json())
    .then(res => {
        let movieObj = res.results;
        let arrayObj = [];
        movieObj.forEach(element => {
            let path = element.poster_path;
            element.image_path = baseUrl + size + path;
            arrayObj.push(element);
        });
        trendHandler(movieObj)});

}

export function screenHandler(screen){
    /*
    
    This function is reponsible for smooth scroll between different components of the application

    */
    
    const currenPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const duration = 1000;
    const startTime = Date.now();
    const endPosition = screen * windowHeight;
    const distance = endPosition - currenPosition;

    smoothScrollTo();
    
    function smoothScrollTo(){
        
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const percentTime = elapsedTime / duration;

        if (elapsedTime < duration) {
            window.scrollTo(0, currenPosition + (distance * min(1, ease(percentTime))));
            window.requestAnimationFrame(smoothScrollTo);

        } else {
            window.scrollTo(0, windowHeight * screen);
        }

        function min(a,b){
            return a < b ? a : b;
        }

        function ease(t){
            return t * t;
        }
        
    }
}

export function wheelHandler(e, handler){
    e.preventDefault();
    
    const jumbotron = document.getElementById("jumbo-cont");
    jumbotron.onwheel = (e) => {
        if (e.deltaY > 0) {
            handler("increment");
        } else {
            handler("decrement");
        }
    }
}

export const paginationReducer = (state, action) => {
    switch (action){
        case "increment":
            if (state < 3) {
                return state + 1;
            } else {
                return state;
            }
            
        case "decrement":
            if (state == 0) {
                return state;
            } else{
                return state - 1;
            }
            
        default:
            return state;
    }
}
