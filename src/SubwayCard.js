import React from 'react';


export default function SubwayCard({info}){
    return (
        <div>
            <h2>{info.name}</h2>
            <div>
                <img src={info.image} alt={info.name}/>
            </div>
            <p>{info.info}</p>
        </div>
    )
}