
import './App.css'
import QuizDisplay from './Components/QuizDisplay'
import QuizComplete from './Components/QuizComplete'
import QuizStart from './Components/QuizStart'
import { useAnime } from './Contexts/MainContext'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App () {
  const {number,setNumber,start,setStart} = useAnime()
  console.log(start)
  return (
    <>
   
    <div className='flex flex-col justify-center items-center'>
    <Header/>
   {start && (<QuizStart/>) }
    {(!start) && ((number<10) ? (<QuizDisplay/>):<QuizComplete/>)}
    <Footer/>
    </div>
    
    
    </>
  )
}

export default App
