import React, { useState } from 'react';
import "./App.css";
import questionjson from "./questions.json";


export const Practice = () => {

    const [currentQuestion,setCurrentQuestion] = useState(0);
    if(currentQuestion < questionjson.length -1) console.log(questionjson.length -1)
  return (
    <div>
      <div className='quiz-app'>
          <div className="score-section" style={{display:"none"}}>
          <h2>Your Score : 4/4</h2>
          <button>Restart</button>
        </div>
       <div className="question-section">
         <h2>Question - 1</h2>
         <p>{questionjson[currentQuestion].question}</p>
         <div className="options">
            {questionjson[currentQuestion].options.map((items,index)=>(
                <button key={index}>{items}</button>
            ))}
           {/* <button>Option-1</button>
           <button>Option-2</button>
           <button>Option-3</button>
           <button>Option-4</button> */}
         </div>
         <div className="rimer">TimeLeft : <span>10s</span></div>
     </div>
     </div>
    </div>
  )
}
