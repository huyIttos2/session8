const VALUE_EMPTY = 1;
const VALUE_X = 2;
const VALUE_O = 3;
const DEFAULT_COLS = 10;
const DEFAULT_ROWS = 10;
const DEFAULT_CELL_SIZE = 40;
function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.value = VALUE_EMPTY;
    this.getHtml = function(){
        var top = x * DEFAULT_CELL_SIZE;
        var left = y * DEFAULT_CELL_SIZE;
        var cellHtml = '<div ' +
            'id="cell-'+x+'-'+y+'" onclick="" class="cell" style="position: absolute;' +
            ' width: '+ DEFAULT_CELL_SIZE+'px;' +
            ' height:'+ DEFAULT_CELL_SIZE+'px; ' +
            'left:'+ left+'px; ' +
            'top:'+ top+'px;' +
            ' line-height: '+ DEFAULT_CELL_SIZE+'px;">' +
            '</div>';
        return cellHtml;
    };
    this.draw = function () {

    }
}
function GameBoard(rows, cols, elementId) {
    this.rows = rows;
    this.cols = cols;
    this.elementId = elementId;
    this.cells = [];
    this.draw = function () {
        var gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for(var i = 0; i < this.rows; i++){
            var row = [];
            this.cells.push(row);
            for(var j = 0; j < this.cols; j++){
                var cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
        }
    }
}



    let gameBoard = new GameBoard(12, 12, "game-board");
    gameBoard.draw();


