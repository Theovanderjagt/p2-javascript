//let colors = ["green" , "red" , "blue" ]

//function changeColors() {
    //let randomColors = Math.floor( Math.random() * 3 );
   // document.body.style.backgroundColor = colors[randomColors];
//}

//setInterval(changeColors, 1000)

let output = document.getElementById("para");
let input = document.getElementById("input")

let shop = [];

function addproduct(){
let product = input.value;
console.log(product);

shop.push(product)

output.innerText = shop;
}

