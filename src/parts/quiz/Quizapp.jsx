import React,{useState} from 'react'
 import './Quizapp.css'
const Quizapp = () => {
    const quizData = [
        {
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
    ];
    const [input, setinput] = useState({ answer:"" , a:false, b:false, c:false, d:false });
    const [qn, setqn] = useState(0);
  const getanswer=(e)=>{
    setinput({...input ,
        [e.target.name]: e.target.value,
       [ e.target.value]:true
      });
  }
  const [score, setscore] = useState(0);
  const nextQn = () => {
    if (quizData[qn].correct === input.answer) {
      setscore(score + 1);
    }else if(input.answer==="") return;
    setqn(qn + 1);
    setinput({ answer:"" , a:false, b:false, c:false, d:false } )
  };
  return (
    <>
    <div class="quiz-container" id="quiz">
     
      <div class="quiz-header">{qn<=3?<>
        <h2 id="question">{quizData[qn].question}</h2>
        <ul>
          <li>
            <input type="radio" name="answer" id="a" class="answer" value="a"  checked={input.a} onChange={getanswer} />
            <label for="a" id="a_text">{quizData[qn].a}</label>
          </li>

          <li>
            <input type="radio" name="answer" id="b" class="answer" value="b" checked={input.b} onChange={getanswer}/>
            <label for="b" id="b_text">{quizData[qn].b}</label>
          </li>

          <li>
            <input type="radio" name="answer" id="c" class="answer" value="c" checked={input.c} onChange={getanswer}/>
            <label for="c" id="c_text">{quizData[qn].c}</label>
          </li>

          <li>
            <input type="radio" name="answer" id="d" class="answer" value="d" checked={input.d} onChange={getanswer}/>
            <label for="d" id="d_text">{quizData[qn].d}</label>
          </li>
        </ul>
        </>:<><h2>You answered {score}/4 questions correctly</h2>
        {(score>=2)?<h1 style={{color:"green"}}>pass</h1>
        :<h1 style={{color:"red"}}>fail</h1>}</>
        }
      </div>
      {qn<=3?
      <button id="submit"
      onClick={nextQn}
       >Submit </button>: <button  onClick={()=>window.location.reload() 
       }
        >Reload </button>}
    </div>
    </>
  )
}

export default Quizapp