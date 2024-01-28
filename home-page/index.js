const img =document.querySelectorAll('.img')
const parentclick =document.querySelector('#parentclick')
let point =10
parentclick.addEventListener("click",(i)=>{
    const imge =document.querySelector(`.img-${Math.trunc(Math.random()*3)+1}`)
    imge.getAttribute("alt")
    img.forEach((w) => {w.classList.add('hidden')});
     const targetclick =i.target.closest('.imge').getAttribute("alt")
     imge.classList.remove('hidden')
     if (targetclick===imge.getAttribute("alt")) {(document.querySelector('body').style.backgroundColor="yellow")}
     else{
        if (targetclick==='w') {(imge.getAttribute("alt")==='f')? point--&&( document.querySelector('body').style.backgroundColor="red"): point++&&( document.querySelector('body').style.backgroundColor="green")}
        else if (targetclick==='e') {(imge.getAttribute("alt")==='f')? point++&&( document.querySelector('body').style.backgroundColor="green") : point--&&( document.querySelector('body').style.backgroundColor="red")}
        else if (targetclick==='f') {(imge.getAttribute("alt")==='e')? point--&&( document.querySelector('body').style.backgroundColor="red"): point++&&( document.querySelector('body').style.backgroundColor="green")}
     }    
     document.querySelector('.point').textContent=point
})
