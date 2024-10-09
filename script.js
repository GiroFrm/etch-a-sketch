
let numberSquares = 8;
const containerSquares = document.querySelector(".container");

createSquares(8);

const btn_createGrid = document.querySelector("#create-grid");
const btn_clrearSquares = document.querySelector("#clear-grid");

    btn_createGrid.addEventListener("click", ()=>{
       numberSquares =   +prompt("number of squares per side");
      clearSquares();
      createSquares(numberSquares);
    })
    
    btn_clrearSquares.addEventListener('click', ()=> {
       setDefaultSquaresColor();
    })

function createSquares(numberSquares){
    if (numberSquares <= 0) {
        console.error('Number of squares should be greater than zero.');
        return;
    }
    let totalsquares = numberSquares * numberSquares;
    // calculate the size of each square as size of width (960px in this case)
    let sizeSquare = calculateSquareSize(numberSquares);
  
    for(let i = 0; i<totalsquares; i++) {
        const newSquare = createSquare(sizeSquare);
        containerSquares.appendChild(newSquare);
    }
}

function createSquare(size) {
    const square = document.createElement("div");
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.onmouseover = changeColorOnHover;
    return square;
}

function changeColorOnHover() {
    this.style.background = randomRGBA();
}

function calculateSquareSize(numberSquares) {
    return 960 / numberSquares;
}

function clearSquares() {
    while (containerSquares.lastElementChild) {
        containerSquares.removeChild(containerSquares.lastElementChild);
      }
}

function randomRGBA() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random()).toFixed(2); // Alpha value between 0 and 1 with 2 decimal places
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function setDefaultSquaresColor() {
    const squares = containerSquares.children;
    Array.from(squares).forEach(square => {
    square.style.backgroundColor="#FFF";
    });
}

