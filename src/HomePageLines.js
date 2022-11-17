import React,{useState, useEffect} from "react";


export default function HomePageLines(){

const [lines, setLines]= useState([])

useEffect(()=>{
    fetch('http://localhost:8000/')
    .then(r=>r.json())
    .then(data=>setLines(data))
},[])



    return(
        <div>
            {lines.map((line)=>{
                return (
                    <div> 
                        <h3>{line.name}</h3>
                        <img src={line.image} alt={line.name} />
                        <img src={line.map_image} alt={line.name}    />
                        <p>{line.info}</p>
                    </div>
                )
            })}
        </div>
    )
}