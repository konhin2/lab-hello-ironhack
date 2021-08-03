import React from 'react'
import Element from './Element'

export default function Elements() {
    return (
        <>
            <Element 
                name="Declarative"
                description="React makes it painless to create interactive UIs."
                picture='/images/icon1.png'
            />
            <Element 
                name="Components"
                description="Build encapsulated components that manage their state."
                picture='/images/icon2.png'
            />
            <Element 
                name="Single-Way"
                description="A set of immutable values are passed to the component's."
                picture='/images/icon3.png'
            />
            <Element 
                name="JSX"
                description="Statically-typed, designed to run on modern browsers."
                picture='/images/icon4.png'
            />
        </>
    )
}
