
// button to call prompt and ask for number of squares
let numberSquares = 8;
const containerSquares = document.querySelector(".container");

createSquares(8);

const btn_createGrid = document.querySelector("#create-grid");
    btn_createGrid.addEventListener("click", ()=>{
       numberSquares =   +prompt("number of squares per side");
      console.log(typeof (numberSquares));
      createSquares(numberSquares);
    })
// create hover effect when the mouse hover on top of each square it will fill with color the square
// randomize the RBGA values with each interactio
// implement progressive darkening effect by 10% reaching full black.


function createSquares(numberSquares){
    let totalsquares = numberSquares * numberSquares;
    // calculate the size of each square as size of width (960px in this case)
    let sizeSquare = 960 / numberSquares;
    console.log(sizeSquare);

   
    for(let i = 0; i<totalsquares; i++) {
        const newSquare = document.createElement("div");
            newSquare.style.width = sizeSquare+"px";
            newSquare.style.height = sizeSquare+"px";
            newSquare.innerText= i;
            containerSquares.appendChild(newSquare);
   
    }
}
