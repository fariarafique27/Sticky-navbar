const navbarEL=document.querySelector(".navbar");
const bottomEl=document.querySelector(".bottom-container");
console.log(bottomEl.offsetTop);
console.log(navbarEL.offsetHeight);
window.addEventListener("scroll" , ()=>{

if
(window.scrollY > bottomEl.offsetTop-navbarEL.offsetHeight-51){
 navbarEL.classList.add ("active");
}
  else{
    navbarEL.classList.remove("active");
  }
})
