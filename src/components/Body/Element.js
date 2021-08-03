import React from 'react'

export default function Elementx(params) {
    return (
        <div className="singleElement">
            <img src={params.picture}/>
            <h3>{params.name}</h3>
            <p>{params.description}</p>
        </div>
    )
}
