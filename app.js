btn = document.querySelectorAll(".keys");
scr = document.querySelector(".screen")
btn.forEach(element => {
    element.onclick( () =>{
        scr.value = element.innerHTML;
    }
    )
});