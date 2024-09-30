
let numberSquares = 8;
const containerSquares = document.querySelector(".container");

createSquares(8);

const btn_createGrid = document.querySelector("#create-grid");
    btn_createGrid.addEventListener("click", ()=>{
       numberSquares =   +prompt("number of squares per side");
      clearSquares();
      createSquares(numberSquares);
    })

function createSquares(numberSquares){
    let totalsquares = numberSquares * numberSquares;
    // calculate the size of each square as size of width (960px in this case)
    let sizeSquare = 960 / numberSquares;
  
    for(let i = 0; i<totalsquares; i++) {
        const newSquare = document.createElement("div");
            newSquare.style.width = sizeSquare+"px";
            newSquare.style.height = sizeSquare+"px";
            containerSquares.appendChild(newSquare);
            let mouseOverFunction = function() {
               this.style.background = randomRGBA();
               console.log("hover")
            }
            newSquare.onmouseover = mouseOverFunction;
    }
}

function clearSquares() {
    while (containerSquares.lastElementChild) {
        containerSquares.removeChild(containerSquares.lastElementChild);
      }
}

const squares = document.querySelectorAll('.container>div');
console.log(squares);


function randomRGBA() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random()).toFixed(2); // Alpha value between 0 and 1 with 2 decimal places
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
// create hover effect when the mouse hover on top of each square it will fill with color the square
// randomize the RBGA values with each interactio
// implement progressive darkening effect by 10% reaching full black.

