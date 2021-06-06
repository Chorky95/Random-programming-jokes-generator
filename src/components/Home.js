import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Home() {
  const url =
    'https://official-joke-api.appspot.com/jokes/programming/ten';

  const [data, setData] = useState([]);

  const request = async (url) => {
    const data = await fetch(url);
    const response = await data.json();
    setData(response);
  };

  useEffect(() => {
    request(url);
  }, []);

  return (
    <div className='setups'>
      <h3 className='subtitle'>
        Every time this page renders, 10 random programming jokes are
        displayed, click on one to get the punchline.
      </h3>
      <ul className='jokes'>
        {data.map((data) => {
          return (
            <li key={data.id}>
              <div className='joke'>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={{
                    pathname: '/punchline',
                    state: {
                      id: data.id,
                      setup: data.setup,
                      punchline: data.punchline,
                    },
                  }}
                >
                  <h2 className='joke__setup'>{data.setup}</h2>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Link to='/about'>
        <button>About</button>
      </Link>
    </div>
  );
}

export default Home;
