import { useState } from "react";
import Square from "./Square";


export default function Board() {

    const winnerLogic:Array<number[]> = [
        [0, 1 , 2],
        [3, 4 , 5],
        [6, 7 , 8],
        [0, 3 , 6],
        [1, 4 , 7],
        [2, 5 , 8],
        [0, 4 , 8],
        [6, 4 , 2]
        
    ]

    const [squares, setSquares]  = useState(Array<string>(9).fill('')) 

    const squareRowCol = Array(3).fill(0)

    const calculateWinner = (dataSquares:string[]) => {
        for (let i = 0; i < winnerLogic.length; i++) {
                        
            const [a, b, c]  = winnerLogic[i]

            if (dataSquares[a] || dataSquares[b] || dataSquares[c]){

                if (dataSquares[a] === dataSquares[b] && dataSquares[a] === dataSquares[c] ) {
                    setGameOver(true)
                    return `The winner is: '${dataSquares[a]}' Congrats!`
                }
            }                          
        }  
        
        if (allFilled(dataSquares)){
            setGameOver(true)
        }
        
        return '' 
    }

    const [xIsNext, setXIsNext]  = useState(true)

    const [notification, setNotification ]  = useState('')

    const [gameOver, setGameOver] = useState(false)

    const handleSquareClick = (index:number) => {

        if (squares[index] || gameOver) {
            return
        }
        
        const squaresNew =  squares.slice()

        squaresNew[index] = xIsNext ? 'X' : 'O'

        setXIsNext(!xIsNext)

        setSquares(squaresNew)

        setNotification(calculateWinner(squaresNew))        
    }

    const handleNewGame = () => {
        setSquares(Array<string>(9).fill(''))
        setGameOver(false)
        setNotification('')
        setXIsNext(true)
    }

    const allFilled = (squareData:string[]) => {
        return squareData.every(x => x !== "");
    }

    return (
    <div>
        <div className="flex justify-center">
            <div style={{width:'360px', height:'360px'}}>
    
                {
                    squareRowCol.map((_ ,indexRow) => 
                    <div key={indexRow} className="flex border-3border-gray-800 bg-slate-700 justify-center items-center">
                        
                        
                        {                
                            squareRowCol.map((_ ,indexCol) =>            
                            <Square 
                                key={indexCol} 
                                value= { ((indexRow * 3) + indexCol) }
                                text= { squares[((indexRow * 3) + indexCol)] }
                                onClick={handleSquareClick}
                            />
                            )
                        }  
                                                
                    </div> 
                    )
                }
            
            
            </div>


        </div>
        <div className="text-center mt-2">
            <div>   
                <span className="text-2xl">{ notification }</span>   
            </div>
            <div className="mt-5">
                { gameOver && <button onClick={handleNewGame} className="bg-gray-900 text-white p-2">New Game</button>}
            </div>
        </div>
        
    </div>
    )
}