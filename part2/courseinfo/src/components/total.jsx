import React from 'react';

const Total = ({ part }) => {
  var totalCourses = part.reduce(function (acc, part) {
    return acc + part.exercises;
  }, 0)
  return (
    <div><hr /><i>Total : {totalCourses}</i><hr /></div>
  )
}

export default Total;