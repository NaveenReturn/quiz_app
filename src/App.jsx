import { useEffect, useState } from 'react'
import './App.css'

import questionsjson from "./questions.json";

function App() {

  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [score,setCoure] = useState(0);
  const [showScore,setScore] = useState(false);
  const [timer,setTimer] = useState(10);

  const handleAnswerClick = (selection)=>{
     if(selection == questionsjson[currentQuestion].answer){
      setCoure((prev)=>prev+1)
     }
     if(currentQuestion < questionsjson.length -1){
         setCurrentQuestion((prevQues)=> prevQues +1);
         setTimer(10);
     }else{
       setScore(true)
     }
  }
  console.log(questionsjson.length)
   useEffect(()=>{
       let intervel;
       if(timer > 0 && !showScore){
        intervel = setInterval(()=>{
            setTimer((prevTimer) =>prevTimer -1)
        },1000)
       }else{
        clearInterval(intervel);
        setScore(true)
       }

       return ()=> clearInterval(intervel)
   },[timer,showScore])

   const handleRestart = ()=>{
       setCurrentQuestion(0);
       setCoure(0)
       setScore(0)
       setTimer(10)
   }

  return (
    <>
     <div className='quiz-app'>
         {showScore ?(
          <div className="score-section" >
          <h2>Your Score : {score}/{questionsjson.length}</h2>
          <button onClick={handleRestart}>Restart</button>
        </div>
         ):(         
         <div className="question-section">
         <h2>Question {currentQuestion + 1}</h2>
         <p>{questionsjson[currentQuestion].question}</p>
         <div className="options">
          {questionsjson[currentQuestion].options.map((items,index)=>(
            <button key={index} onClick={()=>handleAnswerClick(items)}>{items}</button>
          ))}
           {/* <button>Option-1</button>
           <button>Option-2</button>
           <button>Option-3</button>
           <button>Option-4</button> */}
         </div>
         <div className="rimer">TimeLeft : <span>{timer}s</span></div>
     </div>)}


     </div>
    </>
  )
}

export default App
