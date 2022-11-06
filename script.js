let quote=document.querySelector(".quote-content");
let btn=document.querySelector("button");
let athor=document.querySelector(".name");
let speak=document.querySelector(".speech");
let copy=document.querySelector(".copy");
let twitter=document.querySelector(".twitter");
function getdone(e){
    e.target.classList.add("loading");
    e.target.innerText="loading Quote...";

    fetch("https://api.quotable.io/random").then((res)=>res.json()).then((result)=>{
        console.log(result);

        
        quote.innerText=result.content;
        athor.innerText=result.author;
        e.target.innerText="New Quote";
        e.target.classList.remove("loading");


    })
        
}

btn.addEventListener('click',getdone);
speak.addEventListener('click',()=>{
    let x=new SpeechSynthesisUtterance(`${quote.innerText} by ${athor.innerText}`);
    speechSynthesis.speak(x);


});

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerText);
});

twitter.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweetUrl, "_blank");
});