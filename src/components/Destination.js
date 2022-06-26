import { React, useState } from 'react';
import './../styles/destination.css';
import data from './../datas/data.json';

const Destination = () => {

  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)
  const { name, images, description, distance, travel } = planets[value]


  return (
    
    <section className="destination d-flex">

      <h1 className='text-uppercase white'><span className='title-number'>01</span> pick your destination</h1>
      <img src={images.png} alt={name} title={name} />

       <div className="planet-box d-flex flex-column">

        <ul className='planet-list d-flex'>
          {planets.map((item, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)} className={`light-blue text-uppercase ${index === value && "white border-bottom"}`}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <h2 className='white text-uppercase'>{name}</h2>

        <p className='light-blue'>
          {description}
        </p>

      </div>

      <span className='planet-line'></span>

      <div className="planet-infos light-blue d-flex text-uppercase">
        <p>Avg. Distance <span className="infos-number white">{distance}</span></p>
        <p>Est. travel time <span className="infos-number white">{travel}</span></p>
      </div>

    </section>

  );
};

export default Destination;