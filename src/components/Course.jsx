import { useState } from "react"

const Course = ({ course }) => {
    console.log(course.parts)
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    console.log(total)
    return (
        <>
            <h2>{course.name}</h2>
            {course.parts.map(x =>
                <p key={x.id}>{x.name} <span>{x.exercises}</span></p>

            )}
            <p>total of {total} exercies</p>

        </>
    )
}

export default Course