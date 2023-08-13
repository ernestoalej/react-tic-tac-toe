import Board from "./components/Board"


const App = () => { 
  return (
    <div className="container p-4">
      <h1 className="text-center text-xl md:text-2xl text-gray-700">Tic Tac Toe Game in React</h1>
          <Board />
    </div>
  )
 }


 export default App