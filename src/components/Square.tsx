
interface Props {
    value:number;
    text?:string;
    onClick?: (index:number) => void;
    isWinner?: boolean
}   

export default function Square({ text ,value, onClick}:Props){

    return (
        <button onClick={ () => onClick && onClick(value)} 
            className= {
                `w-full border border-gray-500 font-bold ${text === 'X' ? 'text-cyan-300' : 'text-yellow-600'}`                 
            }
            style={{height: '120px'}}>
                <span className="text-7xl">{text}</span>
        </button>
    )
}