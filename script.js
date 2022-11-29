let cells = document.querySelectorAll('.cell');
let message = document.getElementById('message');
let turn = "x";
let isEnd = false;
let winningConditins = [
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];


function checkWin(){
    let turnClass = 'fill-' + turn

    let isWon = winningConditins.some(function(winningConditins){

        let winning = winningConditins.every(function(index){
            return cells[index].classList.contains(turnClass);
        });

        if(winning){
            for(let j = 0 ; j < winningConditins.length ; j++){
                cells[winningConditins[j]].classList.add("highlight");
            }
        }

        return winning;
    });
      return isWon;  
    }


function checkDraw(){
    filledCount = 0;
    for(let i = 0;i < cells.length; i++){
        let cell = cells[i];
        if(
            cell.classList.contains("fill-x") || 
            cell.classList.contains("fill-o") 
        )
        filledCount++;
    }
    if(filledCount == 9) return true;
    else return false;
}


for(let i = 0;i < cells.length; i++){
    cells[i].addEventListener("click",function(e){
        if(isEnd) return;
        let cell = e.target;
        cell.classList.add("fill-" + turn);

        if(checkWin()){

            message.innerHTML = turn.toUpperCase() + "Barande Shod!";
            isEnd = true;

        }else if(checkDraw()){
            message.innerHTML = "Bazi Mosavi Ast";
            isEnd = true;
        }else {
        if(turn === "x") turn = "o";
        else turn ="x"; 
        message.innerHTML ="Nobate "+ turn.toUpperCase() +" Ast";
        }



    },{once : true})
}