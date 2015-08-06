var board = [[0,0,0,0],[0,0,2,0],[0,0,0,0],[0,0,0,0]];

function runGame(){

    var toAddValue = 2;
    // new block is 4 10% of the time
    if (Math.floor(Math.random() * 10) == 0)
      toAddValue = 4;

    // where to add new block
    var openSpots = [];
    for (i = 0; i < board.length; i++)
      for (j = 0; j < board[i].length; j++)
        if (board[i][j] == 0)
          openSpots.push({x:i, y:j});  // here we record the i,j coordinates of the blank spaces in an array

    var index = Math.floor(Math.random() * openSpots.length);
    var luckySquare = openSpots[index];
    board[luckySquare.x][luckySquare.y] = toAddValue;


    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            var boardID = "r"+i+"c"+j;
            if (board[i][j]!=0) {
                document.getElementById(boardID).getElementsByTagName('div')[0].innerHTML = board[i][j];
            }
            else {
                document.getElementById(boardID).getElementsByTagName('div')[0].innerHTML = '';
            }
        }
    }

    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){
            var boardID = "r"+i+"c"+j;
            if (board[i][j] ==0){
                document.getElementById(boardID).style.background = "#5C5C3D";
            }
            else if(board[i][j] == 2){
                document.getElementById(boardID).style.background = "#f0e5da";
            }
            else if(board[i][j] == 4){
                document.getElementById(boardID).style.background = "#ede2c8";
            }
            else if(board[i][j] == 8){
                document.getElementById(boardID).style.background = "#feb578";
            }
            else if(board[i][j] == 16){
                document.getElementById(boardID).style.background = "#ff9962";
            }
            else if(board[i][j] == 32){
                document.getElementById(boardID).style.background = "#ff8060";
            }
            else if(board[i][j] == 64){
                document.getElementById(boardID).style.background = "#ff613c";
            }
            else if(board[i][j] == 128){
                document.getElementById(boardID).style.background = "#efd26d";
            }
            else if(board[i][j] == 256){
                document.getElementById(boardID).style.background = "#efd15c";
            }
            else if(board[i][j] == 512){
                document.getElementById(boardID).style.background = "#efcd4a";
            }
            else if(board[i][j] == 1024){
                document.getElementById(boardID).style.background = "#f0ca36";
            }
            else if(board[i][j] == 2048){
                document.getElementById(boardID).style.background = "#ccc0b3";
            }
            else{

            }
        }
    }
}

//show students an ascii conversion tool.
function printKey(e){

    e = e || window.event;

    if (e.keyCode == '40') {
        // down arrow
        for (j = 0; j < board.length; j++) {
            var list = [];
            for (i = 0; i < board.length; i++) {
                if (board[i][j]!=0) {
                    list.push(board[i][j]);
                }
            }

            for (x = list.length - 1; x > 0; x--) {
                if (list[x] == list[x - 1]) {
                    list.splice(x,1)
                    list[x - 1] += list[x - 1]
                    x--
                }
            }

            var padding = board.length - list.length;
            for (x = 0; x < padding; x++) {
                list.unshift(0);
            }

            for (var i = 0; i < board.length; i++){
                board[i][j] = list[i]
            }
        }
    }

    else if (e.keyCode == '38') {
        // up arrow
        for (j = 0; j < board.length; j++) {
            var list = [];

            for (i = 0; i < board.length; i++) {
                if (board[i][j]!=0) {
                    list.push(board[i][j]);
                }
            }

            for (i = 0; i < list.length - 1; i++) {
                if (list[i] == list[i + 1]) {
                    list.splice(i,1)
                    list[i] += list[i]
                }
            }

            var padding = board.length - list.length;
            for (i = 0; i < padding; i++) {
                list.push(0);
            }

            for (i = 0; i < board.length; i++){
                board[i][j] = list[i]
            }
        }
    }

    else if (e.keyCode == '37') {
        // left arrow
        for (i = 0; i < board.length; i++) {
            var list = [];

            for (j = 0; j < board.length; j++) {
                if (board[i][j]!=0) {
                    list.push(board[i][j]);
                }
            }

            for (x = 0; x < list.length - 1; x++) {
                if (list[x] == list[x + 1]) {
                    list.splice(x,1)
                    list[x] += list[x]
                }
            }

            var padding = board.length - list.length;
            for (x = 0; x < padding; x++) {
                list.push(0);
            }

            for (var j = 0; j < board.length; j++){
                board[i][j] = list[j]
            }
        }
    }
    else if (e.keyCode == '39') {
        // right arrow
        for (i = 0; i < board.length; i++) {
            var list = [];
            for (j = 0; j < board.length; j++) {
              if (board[i][j]!=0) {
                list.push(board[i][j]);
              }
            }

            for (x = list.length - 1; x > 0; x--) {
              if (list[x] == list[x - 1]) {
                list.splice(x,1)
                list[x - 1] += list[x - 1]
                x--
              }
            }

            var padding = board.length - list.length;
            for (x = 0; x < padding; x++) {
              list.unshift(0);
            }

            for (var j = 0; j < board.length; j++){
                board[i][j] = list[j]
            }
        }
    }
    else {
      return
    }
    runGame();
}
