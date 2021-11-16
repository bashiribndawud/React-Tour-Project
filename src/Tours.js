import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return <>
  {
    tours.map((tour) => {
      // console.log(tour)
      return <Tour id={tour.id} {...tour} removeTour={removeTour}/>
    })
  }

  </>
};

export default Tours;
