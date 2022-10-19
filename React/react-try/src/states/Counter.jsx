import { useState } from "react";

function Counter(){
    const[count, setCount] = useState();
    let [hist, setHist] = useState([]);

    const getHist = () => {
        //setHist(currentHist => [...currentHist, Count])
         hist.push(parseInt(count)); //alt way
        console.log(hist);
    }

    const handleChange=(event)=>{
        console.log("EVENT:", event);
        const newCount = parseInt(event.target.value);
        setCount(newCount)
    }


    return(
        <>
        <input type = "number" value={count} onChange={handleChange}/>
        <button onClick = {()=>{setCount(parseInt(count)+1); getHist()}}>INCREMENT ONE</button>
        <button onClick = {()=>{setCount(parseInt(count)-1); getHist()}}>DECREMENT ONE</button>
        <button onClick = {()=>{setCount(parseInt(count)+5); getHist()}}>INCREMENT FIVE</button>
        <button onClick = {()=>{setCount(parseInt(count)-5); getHist()}}>DECREMENT FIVE</button>
        <button onClick = {()=>{setCount(parseInt(count)+10); getHist()}}>INCREMENT TEN</button>
        <button onClick = {()=>{setCount(parseInt(count)-10); setHist()}}>DECREMENT TEN</button>
        <button onClick = {()=>{setCount(0); hist = []}}>RESET</button>
        {/* {hist.map((hist => <p>{hist}</p>))} */}
        {/* <p> {...hist}</p> */}
        {/* <h2>History: </h2>
        <div>
            {
                Counter.hist.map(num => <p>{num}</p>)
            }
        </div> */}

        </>
        
    )
}

export default Counter;