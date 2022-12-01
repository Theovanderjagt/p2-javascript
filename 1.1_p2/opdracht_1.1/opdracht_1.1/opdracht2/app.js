let colors = ["green" , "red" , "blue" ]

function changeColors() {
    let randomColors = Math.floor( Math.random() * 3 );
    document.body.style.backgroundColor = colors[randomColors];
}

setInterval(changeColors, 1000)