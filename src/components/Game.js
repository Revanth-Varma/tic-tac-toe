import React,{ useState} from "react";
import Board from "./Board";
import "./Game.css";

const initialBoard = Array(9).fill(null);
const Game = ()=>{
    const [board, setBoard] = useState(initialBoard);
    const [currentPlayer,setCurrentPlayer] = useState("X");
    const [winner,setWinner] = useState();
    const [winningCells,setWinningCells] = useState([]);

    const handleClick = (cellIndex)=>{
        if(board[cellIndex] || winner) return;
        const newBoard = [...board];
        newBoard[cellIndex] = currentPlayer;
        setBoard(newBoard);
        checkWinner(newBoard);
        setCurrentPlayer(currentPlayer==='X'?'O':'X');
    }
    const checkWinner = (board)=>{
        const winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for(let condition of winningConditions){
            const [a,b,c] = condition;
            if(board[a] && board[a]===board[b] && board[a]===board[c]){
                setWinningCells([a,b,c]);
                setWinner(board[a]);
                return;
            }
            if(board.every(cell=> cell!==null)){
                setWinner("Draw");
            }
        }
    }
    const handleReset = ()=>{
        setBoard(initialBoard);
        setCurrentPlayer('X');
        setWinner(null);
        setWinningCells([]);
    }

    return <div className="game-container">
        <div>
            <h1 className="title">Tic-<span>Tac</span>-Toe</h1>
        </div>
        <div>
        {
            winner?winner==="Draw"?<p>It's a Draw!</p>:winner==="X"?<p>Player 1 Wins!</p>:<p>Player 2 Wins</p>:<p>Current Player : <span>'{currentPlayer}'</span></p>
        }
        </div>
        <Board board={board} winningCells={winningCells} handleCellClick={handleClick}/>
        <div>
            <button className="rst-btn" onClick={handleReset}>Reset</button>
        </div>
    </div>
}

export default Game;
