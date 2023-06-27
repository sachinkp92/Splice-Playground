let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputEl = document.getElementById("startIndexInput");
let deleteCountInputEl = document.getElementById("deleteCountInput");
let itemToAddInputEl = document.getElementById("itemToAddInput");
let spliceBtnEl = document.getElementById("spliceBtn");
let updatedArrayEl = document.getElementById("updatedArray");

spliceBtnEl.onclick = function spliceArray() {
    let startIndex = startIndexInputEl.value;
    let deleteCount = deleteCountInputEl.value;
    let itemToAdd = itemToAddInputEl.value;
    if (itemToAdd === "") {
        arr.splice(parseInt(startIndex), parseInt(deleteCount));
    } else {
        arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
    }
    const stringifiedArr = JSON.stringify(arr);
    updatedArrayEl.textContent = stringifiedArr;
}