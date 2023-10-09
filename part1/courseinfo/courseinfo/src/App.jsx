const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    console.log(props)
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <div>
          {props.part} {props.exercise}
        </div>
        <br />
      </div>
    )
  }

  const Content = (props) => {
    return (
      <>
        <Part part={part1.name} exercise={part1.exercises} />
        <Part part={part2.name} exercise={part2.exercises} />
        <Part part={part3.name} exercise={part3.exercises} />
      </>
    )
  }

  const Total = (props) => {
    return (
      <div> Number of exercises : {props.total}</div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />

    </div>
  )
}

export default App