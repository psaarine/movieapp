export function dataFetcher(dataHandler, screenHandler){
    
    
    
    dataHandler({lol: "kek"});
    screenHandler(1);
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

    console.log(distance);
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


