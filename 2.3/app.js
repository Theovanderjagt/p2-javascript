let block = document.getElementById("div");
let vertical = 0;
let position = 0;
window.addEventListener("keydown", function(event){
    if(event.key == "d") {
    position = position + 50;
    block.style.left = position + "px";

    }


    if(event.key == "a") {
        position = position - 50;
        block.style.left = position + "px";
      
        
    }
    if(event.key == "s") {
       vertical = vertical + 50;
        block.style.top = vertical + "px";
        
    }
    if(event.key == "w") {
       vertical = vertical - 50;
       block.style.top = vertical + "px";
        
    }

})