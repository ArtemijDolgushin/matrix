const container = document.querySelector(".container");
const matrix = document.querySelector(".matrix");
const remakeButton = document.querySelector(".remakeButton");
const resetButton = document.querySelector(".resetButton");
const inputButton = document.querySelector(".inputButton");
remakeButton.addEventListener("click", remakeSketchField);
resetButton.addEventListener("click", resetSketchField);
inputButton.addEventListener("click", showInput);

function remakeSketchField(){
    const number = getDimension();
    const itemList = document.querySelectorAll(".form");
    const itemNumber = itemList.length;
    for (let i=0;i<itemNumber;i++) matrix.removeChild(matrix.lastChild);
    createInputMatrix(number);
}
function resetSketchField(){
    const itemList = document.querySelectorAll(".form");
    const itemNumber = itemList.length;
    for (let i=0;i<itemNumber;i++) matrix.removeChild(matrix.lastChild);
    createInputMatrix(itemNumber);
}
function getDimension(){
    let dimension=0;
    for (;;){
        dimension= +window.prompt("Please specify the dimension of the sketch field (max. 5)", "");
        if (dimension<6) break;
        alert("The maximum size of dimension is 5");
    }
    return dimension;
}

function createInputMatrix(matrixSize) {
    for (let i = 0; i < matrixSize; i++) {
        const form = document.createElement("form");
        form.setAttribute("class","form");
        for (let j =0; j<matrixSize; j++){
            const input = document.createElement("input");
            input.setAttribute("class", "input");
            form.appendChild(input);
        }
        form.style.gridTemplateColumns = `repeat(${matrixSize}, auto)`;
        matrix.appendChild(form);
    }
    matrix.style.gridTemplateRows = `repeat(${matrixSize}, auto)`;
    matrix.style.width = `${matrixSize*30}px`;
    matrix.style.height = `${matrixSize*30}px`;
}

function readInputMatrix(){
    const matrixSize=document.forms.length;
    const matrix=[];
    for(let i=0;i<matrixSize;i++){
        matrix[i]=[];
        for(let j=0;j<matrixSize;j++){
            const value= +document.forms[i][j].value;
            if (isNaN(value)){
                alert("Please enter only number values.");
                return;
            }
            matrix[i][j]= value;
        }
    }
    return matrix;
}

function showInput(){
    console.log(readInputMatrix());
}
createInputMatrix(3);