import { useState } from "react";

function TrueFalse(){
    const [btn, setBtn] = useState(false);
    return(
        <> 
        <p>Value:</p>
        {
            btn?<p>TRUE</p>:<p>FALSE</p>
        }
        <button onClick ={()=> setBtn(current=>!current)}> CLICK </button>
        </>
    )
}

export default TrueFalse;