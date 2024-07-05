let turn=1;
// 1 is O and -1 is X
let board=[[0,0,0],[0,0,0],[0,0,0]];
let win=0;
let lose=0;

function pos(pos) {
    let i=Math.floor((pos-1)/3);
    let j=(pos-1)%3;
    if(board[i][j]==0) {
        board[i][j]=turn;
        document.getElementById("pos_"+pos).innerText= (turn==1?'O':'X');
        turn*=-1;
    }
    checkWinner();
}

function checkWinner() {
    let winner=0;
    for(let i=0;i<3;i++) {
        if(board[i][0]==board[i][1] && board[i][1]==board[i][2]) {
            winner=board[i][0];
        }
        if(board[0][i]==board[1][i] && board[1][i]==board[2][i]) {
            winner=board[0][i];
        }
    }
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2]) {
        winner=board[0][0];
    }
    if(board[0][2]==board[1][1] && board[1][1]==board[2][0]) {
        winner=board[0][2];
    }
    if(winner!=0) {
        if(winner==1) {
            alert('O wins');
            win++;
        }
        else {
            alert('X wins');
            lose++;
        }

        reset();
    }
    else {
        let flag=true;
        for(let i=0;i<3;i++) {
            for(let j=0;j<3;j++) {
                if(board[i][j]==0) {
                    flag=false;
                    break;
                }
            }
        }
        if(flag) {
            alert('Match Draw');
            reset();
        }
    
    }
}

function reset() {
    document.getElementById("score_board").innerText= win + " : " + lose;
    board=[[0,0,0],[0,0,0],[0,0,0]];
    for(let i=1;i<=9;i++) {
        document.getElementById("pos_"+i).innerText= '';
    }
    turn=1;
}