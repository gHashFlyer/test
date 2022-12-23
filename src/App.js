// testing only 
import React, {useState, useEffect} from "react";

function App() {

  const [phase, setPhase] = useState("pending"); // pending, play, score

  const [alpha, setAlpha] = useState(false)
  const [beta, setBeta] = useState(false)

  const [alphaPlay, setAlphaPlay] = useState(0)
  const [betaPlay, setBetaPlay] = useState(0)
  
  const [alphaScore, setAlphaScore] = useState(0)
  const [betaScore, setBetaScore] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const handleStart = () =>{

    setPhase("play")
    setAlpha(false)
    setBeta(false)
    setAlphaPlay(0)
    setBetaPlay(0)
    setShowScore(false)
  }

  const handleAlpha = () =>{
    setAlpha(true)
    setAlphaPlay(Math.random())
  }

  // Beta plays
  useEffect(() => {

    // alpha played
    if(alpha && !beta){
      setBetaPlay(Math.random())
      setBeta(true)
    }

    // both have played
    if(alpha && beta){
      setPhase('score')
      if(alphaPlay > betaPlay){
        setAlphaScore(alphaScore+1)
        setShowScore("Alpha Won")
      }else{
        setBetaScore(betaScore+1)
        setShowScore("Beta Won")
      }
    }
  
  }, [alpha, beta]);

  const handleReset = () =>{
    setPhase('pending')
  }

  // ...
  return (

    <div>
      {phase==='pending' && <div><button onClick={handleStart}>PLAY</button> | A .. {alphaScore} | B .. {betaScore}</div>}
      {<div><h3>Phase: {phase}</h3></div>}
      <hr />
      {phase==='play' && !alpha && <h3><button onClick={handleAlpha}>PLAY</button></h3> }
     
      <h3>ALPHA: {alphaPlay}</h3>
      <h3>BETA: {betaPlay}</h3>
      
      { phase==='score' && <div> {showScore} | <button onClick={handleReset}>RESET</button></div> }

    </div>
  );
}

export default App;
