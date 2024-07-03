import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';

const Events = () => {

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8282/events');
      const jsonData = await response.json();
      setEventList(jsonData);
    })();
  }, []);

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;
