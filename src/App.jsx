import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const Header = (props) => {

  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part course={props.course.parts[0]} />
      <Part course={props.course.parts[1]} />
      <Part course={props.course.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  console.log(props.course.name)
  return (
    <div>
      <p>
        {props.course.name} {props.course.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercies {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      {<Total course={course} />}
    </div>
  )
}

export default App
