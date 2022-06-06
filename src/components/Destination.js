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

      <div className="planet-box d-flex flex-column">
        <img src={images.png} alt={name} title={name} />

        <ul className='planet-list d-flex'>
          {planets.map((item, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)} className={`fun light-blue text-uppercase ${index === value && "white"}`}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <h2 className='planet-title'>{name}</h2>

        <p className='planet-description'>
          {description}
        </p>
      </div>

      <span className='planet-line'></span>

      <div className="planet-infos">
        <ul className="infos-list">
          <li className="infos-title">Avg. Distance <span className="infos-number">{distance}</span></li>
          <li className="infos-title">Est. travel time<span className="infos-number">{travel}</span></li>
        </ul>
      </div>

    </section>

  );
};

export default Destination;