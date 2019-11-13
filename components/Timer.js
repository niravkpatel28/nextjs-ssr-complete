//functional component to render timer 
import React,{ useState , useEffect } from 'react';


function Timer(){
    const [seconds,setSeconds] = useState(0);
    
    useEffect(()=>{
        console.log('useEffect called',seconds)
        let timerId= setInterval(()=>{
            return setSeconds(seconds =>seconds+1);
        },1000)
        console.log('Timer Set (timer id)',timerId);

        return function cleanUp(){
            console.log('Timer Cleared (timer id)',timerId)
            clearInterval(timerId);
        }
    });

    return(
        <>
            <p> Minutes : Seconds </p>
            <p> {Math.floor((seconds)/60)} : {seconds%60}</p>
        </>

    )
}

export default Timer 