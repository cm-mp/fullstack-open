import React from 'react';

const Header = ({ course }) => {
  for (let i = 0; i < course.length; i++) {
    return (
      <div>
        <h2>{course}</h2><hr />
      </div>
    )
  }
}

export default Header;