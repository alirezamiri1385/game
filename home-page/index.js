const img =document.querySelectorAll('.img')
const parentclick =document.querySelector('#parentclick')
let point =10
const clid =document.querySelector('.texts')
clid.addEventListener('click', () =>{
   document.querySelector('.point').textContent=10
})
parentclick.addEventListener("click",(i)=>{
    const imge =document.querySelector(`.img-${Math.trunc(Math.random()*3)+1}`)
    imge.getAttribute("alt")
    img.forEach((w) => {w.classList.add('hidden')});
     const targetclick =i.target.closest('.imge').getAttribute("alt")
     imge.classList.remove('hidden')
     
  
     if (targetclick===imge.getAttribute("alt")) { }
     else{
        if (targetclick==='w') {(imge.getAttribute("alt")==='f')? point--: point++}
        else if (targetclick==='e') {(imge.getAttribute("alt")==='f')? point++ : point--}
        else if (targetclick==='f') {(imge.getAttribute("alt")==='e')? point-- : point++}
     }    
     
     document.querySelector('.point').textContent=point

     
})
