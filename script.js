let menuBars = document.querySelector('#menuBars');
let nav = document.querySelector('nav');


let showNav = false;
menuBars.onclick=()=>{
    showNav = !showNav;
    if(showNav){
        nav.classList.add('moveNav');
    } else{
        nav.classList.remove('moveNav');
    }
}