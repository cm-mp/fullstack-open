import React from 'react';
import Header from './header'
import Total from './total'


const Content = ({ parts }) => {
  console.log(parts)

  return (
    <div>
      {parts.map((parts) => (
        <Part key={parts.id} parts={parts} />
      ))}
    </div>
  )

};

const Part = ({ parts }) => {

  return (
    <div>
      <p>{parts.name} : {parts.exercises}</p>
    </div>
  )
};




const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total part={course.parts} />
    </div>
  )
};

export default Course;