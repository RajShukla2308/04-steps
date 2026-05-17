import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){

  const [step,setStep] = useState(1);
  const [isOpen, setIsOpen]= useState(true);
  const [buttonName,setButtonName] = useState('Hide');

  function handlePrevious(){
      if(step <= 1)return;
      setStep((step)=> step - 1);
  }


  function handleNext(){
    if(step >= 3) return;
    setStep(step=> step + 1);
  }

  function handleShowHide(){
    if(isOpen){
      setIsOpen(s=> s = false);
      setButtonName('Show');
    }
    else{
      setIsOpen(s=> s = true);
      setButtonName('Hide');
    }
  }

  return (
  <div>
    <button onClick={handleShowHide}>{buttonName}</button>
    { isOpen ? 
    <div className="steps">

          <div className="numbers">
            <div className={step >= 1 ? 'active':''}>1</div>
            <div className={step >= 2 ? 'active':''}>2</div>
            <div className={step == 3 ? 'active':''}>3</div>
          </div>

          <p className="message">Step {step} : {messages[step-1]}</p>

          <div className="buttons">
            <button style={{backgroundColor: '#7950f2', color: '#fff'}}
            onClick={handlePrevious}
            >Previous</button>
            <button style={{backgroundColor:'#7950f2' , color:'#fff'}}
            onClick={handleNext}
            >Next</button>
          </div>
      
    </div> : <p>UI Hidden</p>}
  </div>)
}