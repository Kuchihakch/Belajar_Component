const more = document.querySelector('#more');
const info = document.querySelector('.card');
if(more && info){
    more.addEventListener('click',()=>{
        info.scrollIntoView({behavior:"smooth"})
    })
}
const homeTrigger = document.querySelector('#homeTrigger');
const home = document.querySelector('#home');
if(home){
    homeTrigger.addEventListener('click', (e)=>{
        e.preventDefault()
        home.scrollIntoView({behavior:"smooth"})
    })
}
const aboutTrigger = document.querySelector('#aboutTrigger');
const about = document.querySelector('.AboutMe');
if(about){
    aboutTrigger.addEventListener('click', (e)=>{
        e.preventDefault()
        about.scrollIntoView({behavior:"smooth"})
    })
}