import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  }

  const fetchData = async () => {
    try{
      setLoading(true)
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false)
    }catch(err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  if(loading) {
    return <main className="title">
      <Loading />
    </main>
  }

  if(tours.length === 0) {
    return <main className="title">
    <h3>No Tours Avaliable</h3>
     <button className="btn" onClick={() => fetchData()}>refresh</button>
    </main>
  }

  return <main className="title">
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App
