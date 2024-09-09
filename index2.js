const JSON_ENTITIES = [
    {
        entityId: 0,
        entityName: "humanoid",
        cellColor: "rgb(204, 144, 114)",
    },
];

const JSON_ENVIRONMENTALS = [
    {
        envId: 0,
        envName: "grass",
        cellColor: "rgb(103, 163, 57)",
    },
];

class GameSystem {
    constructor() {
        this.mapElements = [];
        return;
    }

    addCell_toMapElements(cell) {
        this.mapElements.push(cell);
        return true;
    }
}

class GameMap {
    constructor(howManyColumns, howManyRows, gameSystemUsed) {
        const newGameMap = document.createElement("div");
        const mapClassName = "game_map";
        const howManyCells = howManyColumns * howManyRows;

        newGameMap.className = mapClassName;
        newGameMap.style.gridTemplateColumns = `repeat(${howManyColumns}, 1fr)`;
        newGameMap.style.gridTemplateRows = `repeat(${howManyRows}, 1fr)`;

        for (let i = 0; i < howManyCells; i++) {
            this.#MakeCell(newGameMap, gameSystemUsed)
         }

        document.body.appendChild(newGameMap);
        return null;
    }

    #MakeCell(map_onDom, gameSystemUsed) {
        const newCell = document.createElement("div");
        newCell.addEventListener("click", (actualCell)=>{
            this.ConvertCell_toEntity(actualCell, 0)
        });

        if(gameSystemUsed.addCell_toMapElements(newCell)){
            map_onDom.appendChild(newCell)
        }
    }

    ConvertCell_toEntity(cell, entityId){
        
    }

    Get_cell(){
        return
    }

    get howManyColumns(){
        return getComputedStyle(this).gridTemplateColumns
    }
    get howManyRows(){
        return getComputedStyle(this).gridTemplateRows
    }
}

class EntityList {
    constructor() {
        this.newArray = [];

        return;
    }

    newEntity() {
        this.newArray.push();
    }
}

class Entity {
    constructor(entityId) {
        this.entityId = entityId;
    }
}

class EnvironmentalCell {
    constructor(envId) {
        return;
    }
}

function MainGame() {
    const gameSystem = new GameSystem();
    const gameMap = new GameMap(5, 5, gameSystem);
    const entityList = new EntityList();
}

MainGame();
