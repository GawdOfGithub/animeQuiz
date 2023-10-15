
import './App.css'
import QuizDisplay from './Componets/QuizDisplay'
import QuizComplete from './Componets/QuizComplete'
import { useAnime } from './Contexts/MainContext'
function App () {
  const {number,setNumber} = useAnime()
  return (
    <>
    <div className=''>
    { number<10 ? (<QuizDisplay/>):<QuizComplete/>}
    
    </div>
    
    
    </>
  )
}

export default App
