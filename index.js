//  0) grass
//  1) humanoid
const JSON_entities = [
    {
        "entityName": "grass",
        "color": "rgb(103, 163, 57)"
    },
    {
        "entityName": "humanoid",
        "color": "rgb(204, 144, 114)"
    }
];
console.table(JSON_entities)

const gridMap = document.querySelector(".map_grid");

CreateGame();


function CreateGame() {
    //Build the grid of cells
    let howManyColumns = HowManyColumns(gridMap);
    let howManyRows = HowManyRows(gridMap);

    let totalCellsToCreate = howManyColumns*howManyRows;

    for (let i = 0; i < totalCellsToCreate; i++) {
        createCell();
    }
    console.log(`Map grid created. Total Cells: ${totalCellsToCreate}, (${howManyColumns} columns and ${howManyRows} rows)`);
    
}


function createCell() {
    let newCell = document.createElement("div");
    newCell.className = "game_cell";

    newCell.addEventListener("click", (actualCell) => {
        actualCell = actualCell.target;
        convertCell(actualCell, 1)
    });

    convertCell(newCell, 0)
    let DOMsettedCell = gridMap.appendChild(newCell);    

}

//#####################################################
//MAKE FUNCTIONS: THEY ONLY RETURN A CONFIGURATED ENTITY
//#####################################################

function convertCell(cell, entityId) {
    cell.style.backgroundColor = JSON_entities[entityId].color
    cell.setAttribute("entityId", `${entityId}`)
}

///////////////////////////
//GENERAL PURPOSE FUNCTIONS
///////////////////////////
function HowManyColumns(grid) {
    let gridColumnsString = getComputedStyle(grid).gridTemplateColumns;
    let spaceCharCounter = 0;

    if (gridColumnsString.length > 0 && gridColumnsString !== "none") {
        spaceCharCounter = 1;
        for (let i = 0; i < gridColumnsString.length; i++) {
            if (gridColumnsString[i] == " ") {
                spaceCharCounter++;
            }
        }
    }
    return spaceCharCounter;
}

function HowManyRows(grid) {
    let gridRowsString = getComputedStyle(grid).gridTemplateRows;
    let spaceCharCounter = 0;

    if (gridRowsString.length > 0 && gridRowsString !== "none") {
        spaceCharCounter = 1;
        for (let i = 0; i < gridRowsString.length; i++) {
            if (gridRowsString[i] == " ") {
                spaceCharCounter++;
            }
        }
    }
    return spaceCharCounter;
}
