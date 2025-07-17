const toggler = document.querySelector('.card2');
if(toggler){
    toggler.addEventListener('click',()=> alert('Coming Soon!'))
}
const more = document.querySelector('#more');
const info = document.querySelector('.card');
if(more && info){
    more.addEventListener('click',()=>{
        info.scrollIntoView({behavior:"smooth"})
    })
}