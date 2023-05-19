btn = document.querySelectorAll(".keys");
scr = document.querySelector(".screen")
btn.forEach((element,index) => {
    if(index == 0){
        element.addEventListener("click", ()=>{
            scr.value = "";
        })
    }
    else if(index == 2){
        element.addEventListener("click", ()=>{
            let str = scr.value
            let str2 = ""
            for(let i = 0;i<str.length-1;i++){
                str2 += str[i];
            }
            scr.value = str2
        })
    }
    else if(index == 19){
        element.addEventListener("click", ()=>{
            scr.value = eval(scr.value)
        })
    }
    else{
        element.addEventListener("click", ()=>{
            scr.value += element.innerHTML;
        })
    }
});
// btn[6].addEventListener("click")