const img =document.querySelectorAll('.img')
const parentclick =document.querySelector('#parentclick')
parentclick.addEventListener("click",(i)=>{
    const imge =document.querySelector(`.img-${Math.trunc(Math.random()*3)+1}`)
    imge.classList.add('hidden')
    imge.getAttribute("alt")
    img.forEach((w) => {w.classList.add('hidden')});
     const targetclick =i.target.closest('.imge').getAttribute("alt")
     
        
        if (targetclick===imge.getAttribute("alt")) {
            console.log('hello')
        }
})