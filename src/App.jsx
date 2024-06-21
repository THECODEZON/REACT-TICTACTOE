
import { useState } from 'react';
import './App.css'


function calculatewinner(squares){
  const winningCombination=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],
    [1,4,7],
    [2,5,8],

    [,4,8],
    [2,4,6],

  ];

  for(let i=0;i<winningCombination.length;i++){
    const[a,b,c]=winningCombination[i];

    if(squares[a] && squares[a] ==squares[b] && squares[a] ==squares[c]){
      return squares[a];
    }
  }
  return null;
}



function Square({value,onSquareClick}){
  console.log('value',value);
   

 
//  console.log(`Square rendered` )
  return <button onClick={onSquareClick} className='square'>
    {" "}
    {value}{" "}
  </button>
}


function Board(){
  // console.log(`Board rendered` )
   
  const[squares,setSquares]=useState(Array(9).fill(null));
  const[xisNext,setXisNext]=useState(true);

  function handleClick(i){
      //  alert(i)
      if(squares[i]){
        return;
      }

       const updatedSquare = squares.slice();
       if(xisNext){
       updatedSquare[i]='X';
       setXisNext(false)
       }else{
        updatedSquare[i]='O';
        setXisNext(!xisNext);
       }


       setSquares(updatedSquare);
  }

  return(
   <>

    <div className="board-row">
    <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
    <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
    <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
     </div>
    <div className="board-row">
       <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
       <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
       <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
     </div>
    <div className="board-row">
    <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
    <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
    <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
     </div>
   </>
  )
}


function App() {
  // console.log(`App rendered` )
return(
  <div style={{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
  }}>
    <h1>Tic Tac Toe</h1>
    <Board/>
  
  </div>
)
 }

export default App
