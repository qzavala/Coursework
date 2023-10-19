const colors = ['red', 'blue', 'green'];

function addSquare(color){
const square = document.createElement('div');
square.classList.add('square');
square.classList.add(color);
document.body.appendChild(square);
}
// const square = document.createElement("div");
// square.classList.add('square');
// square.classList.add('red');

// const body = document.querySelector('body');
// document.body.appendChild(square);

setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 3)
   const color = colors[randomNumber];
    // addSquare(color[randomNumber])
    addSquare(color);
}, 1000)