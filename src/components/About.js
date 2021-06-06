import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='about'>
      <h2 className='about__title'>About</h2>
      <p className='about__text'>
        Hi, my name is Ivan Ćorković, I'm 25 years old and I come from
        Petrinja, Croatia.
      </p>
      <p className='about__text'>
        This is a simple random joke generator app that I made with
        React.js and it uses{' '}
        <a href='https://github.com/15Dkatz/official_joke_api'>
          this public API
        </a>{' '}
        to get the jokes. The API also actually has a lot more jokes
        than you might see generated here, but they belong to other
        categories, and since I made this for my portfolio and the
        target audience are potential employers and other fellow
        developers, I decided to only include the programming jokes.
        Hopefully you'll find some funny ones.
      </p>
      <p className='about__text'>
        Please keep in mind that the API only allows a maximum of 100
        requests in 15 minutes, so be careful not to laugh too much
        (if you do)! Also, you can make a contribution and write some
        of your own jokes for the API to generate. To see how, visit
        the API link mentioned above.
      </p>
      <Link to='/'>
        <button>Go back</button>
      </Link>
    </div>
  );
}

export default About;
