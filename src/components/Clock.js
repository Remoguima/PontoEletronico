import React,{ useEffect, useState} from "react";
import "./Clock.css";

function Clock(){
    const [clockState, setClockState] = useState()

    useEffect(()=>{

        setInterval(() => {
            const date=new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);

    },[])
    

    
    
    return <div style={{fontSize: "5rem", margin: "0px", color: "#44fa07"}}>{clockState}</div>
}

export default Clock