const container = document.querySelector("#container");

const button = document.querySelector("#resize");

let gridSize = 16




function createGrid(size) {
    container.innerHTML = ""; // Clear the container
    for (let i = 0; i < size * size; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.width = `${100 / size}%`; // Set width to fill the container
        block.style.height = `${100 / size}%`; // Set height to fill the container
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "rgb(18, 93, 222)";
        });
        container.appendChild(block);
    }
}


// Initial grid creation
createGrid(gridSize);




// for (let i = 0; i < gridSize; i++) {
//     const block = document.createElement("div");
//     block.classList.add("block");
//     block.addEventListener("mouseover", () => {
//         block.style.backgroundColor = "rgb(18, 93, 222)";;
//     });
//     container.appendChild(block);
// }



button.addEventListener("click", () => {
   let newGridSize = parseInt(prompt("How many squares per side would you like? (1-100)"), 10);

    // for (let i = 0; i < gridSize; i++) {
    //     const block = document.createElement("div");
    //     block.classList.add("block");
    //     block.addEventListener("mouseover", () => {
    //         block.style.backgroundColor = "rgb(18, 93, 222)";;
    //     });
    //     container.appendChild(block);
    // }


    if (newGridSize > 100 || newGridSize < 1 || isNaN(newGridSize)) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        gridSize = newGridSize; // Update gridSize
        createGrid(gridSize); // Recreate the grid with the new size
    }
});




