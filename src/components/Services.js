import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from '../components/Title';
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          'Dolore non id ad aliquip amet duis commodo incididunt deserunt nulla.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Dolore non id ad aliquip amet duis commodo incididunt deserunt nulla.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          'Dolore non id ad aliquip amet duis commodo incididunt deserunt nulla.',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Dolore non id ad aliquip amet duis commodo incididunt deserunt nulla.',
      },
    ],
  };

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className='service'>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
