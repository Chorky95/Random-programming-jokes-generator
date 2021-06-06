import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function PunchLine() {
  let data = useLocation();
  return (
    <div>
      <div className='joke'>
        <h2 className='joke__setup'>{data.state.setup}</h2>
      </div>
      <div className='joke__punchline'>
        <h3>{data.state.punchline}</h3>
      </div>
      <Link to='/'>
        <button>Go back</button>
      </Link>
    </div>
  );
}

export default PunchLine;
