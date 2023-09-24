import React from "react";
import { useState } from "react";

function Square({ value, onSquareClick }) {

  // Function to handle click event on square


  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);

  function handleClick(i) {
    const newSquares = squares.slice();
    if (newSquares[i] || calculateWinner(squares)) return;
    if (x) {
      newSquares[i] = "X";
    }
    else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setX(!x);
  }


  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!squares.includes(null)) {
    status = "Game Drawn!";
  }
  else {
    status = "Player Turn: " + (x ? "X" : "O");
  }




  return (
    <div className="center">
      
      <h1>Tic Tac Toe</h1>
      <div className="status">{status}</div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <div>
        <button className="reset" onClick={() => setSquares(Array(9).fill(null))}>Reset Game</button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}