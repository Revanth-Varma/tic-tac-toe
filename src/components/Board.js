import React from "react";
import "./board.css";

const Board = (props)=>{

    const {board, winningCells, handleCellClick} = props;
    return <div className="board">
        {
            board.map((cellValue,ind)=>{
                return <div className={`cells ${winningCells.includes(ind)?`winning`:` `} ${cellValue}`} onClick={()=>handleCellClick(ind)}>
                    {cellValue}
                </div>
            })
        }
    </div>
}

export default Board;
