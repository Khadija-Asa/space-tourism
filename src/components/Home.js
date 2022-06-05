import React from 'react';
import './../styles/home.css';

const Home = () => {
  return (

      <section className='home d-flex text-center light-blue'>

        <div className="text-box">

          <h1 className='text-uppercase'>
            so, you want to travel to <br/>
            <span className='box-word'>space</span>
          </h1>

          <p className='light-blue'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
          Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>

        </div>

        <div className="home-button pt-5">

          <button className='text-uppercase dark-blue'>
            explore
          </button>
          
        </div>

      </section>
    
  );
};

export default Home;