import {apikey} from "./../apiinfo";

/* 

These scripts are designed to only be used while configuring the site.

*/

export function generateToken(){
    

    fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apikey}`)
    .then(res => res.json()).then(res => authenticate(res.request_token));

    function authenticate(token){
        window.location.replace(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/movieapp`)
    }

}

export function parseUrl(){
    let location = window.location.href;
    let url = new URL(location);

    let token = url.searchParams.get("request_token");
    let xrc = new XMLHttpRequest();
    xrc.open("POST", `https://api.themoviedb.org/3/authentication/session/new?api_key=${apikey}`);
    xrc.setRequestHeader("Content-Type", "application/json");

    xrc.onload = () => {
        console.log(xrc.response);
        let parsed = JSON.parse(xrc.response)
        sessionStorage.setItem("session_id", parsed.session_id)
    }

    let requestBody = {
        request_token: token
    }

    xrc.send(JSON.stringify(requestBody));
}

export function printStorage(){
    let data = sessionStorage.getItem("session_id");
    console.log(data);
    let url = `https://api.themoviedb.org/3/account/{account_id}/lists?api_key=${apikey}&session_id=${data}`
    fetch(url).then(res => res.json()).then(console.log)
}
