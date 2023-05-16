btn = document.querySelectorAll(".keys");
scr = document.querySelector(".screen")
btn.forEach((element,index) => {
    if(index == 0){
        element.addEventListener("click", ()=>{
            let str = scr.value;
        })
    }
    else if(index == 2){
        let str = scr.value
        element.addEventListener("click", ()=>{
            
        })
    }
    else{
        element.addEventListener("click", ()=>{
            scr.value += element.innerHTML;
        })
    }
});
// btn[6].addEventListener("click")