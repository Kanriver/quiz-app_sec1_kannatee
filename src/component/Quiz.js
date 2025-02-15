import { useContext, useEffect, useState } from "react";
import QuestionsData from "../data/QuestionsData";
import { DataContext } from "../App";


const Quiz=()=>{
    const [current, setCurrent] = useState(0)
    const [selectChoice,setSelectChioce] = useState("")
    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice !==""){
            if(selectChoice===QuestionsData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }

    const nextQuestion=()=>{
        setSelectChioce("")
        if(current===QuestionsData.length-1){
            setAppState("score")
        }else{
            setCurrent(current+1)
        }
    }
    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChioce("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChioce("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChioce("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChioce("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz;