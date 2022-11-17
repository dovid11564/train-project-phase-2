import React,{useState, useEffect} from "react";


export default function HomePageLines(){

const [lines, setLines]= useState([])

useEffect(()=>{
    fetch('http://localhost:3000/linesInformation')
    .then(r=>r.json())
    .then(data=>setLines(data))
},[])



    return(
        <div>
            {lines.map((line)=>{
                return (
                    <div> 
                        <h3>{line.line}</h3>
                        <img className='metro-image'src={line.image} alt={line.line} />
                        <img className='metro-map'src={line.map_image} alt={line.name}    />
                        <p>{line.info}</p>
                    </div>
                )
            })}
        </div>
    )
}