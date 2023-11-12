import { useState } from "react"

const Course = (props) => {

    return (
        <>
            {props.courses.map(x =>
                <div key={x.id}>
                    <h2>{x.name}</h2>
                    {x.parts.map(y =>
                        <div key={y.id}>
                            <p >{y.name} {y.exercises}</p>
                        </div>)}

                </div>)}
        </>
    )
}

export default Course