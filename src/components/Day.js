import React from 'react';

function Day(props) {

  let events = null;

  return (
    <div>
      <h2>{props.day.name}</h2>

      {!!props.events.length &&
        <ul>
          {props.events.map((event, index) => (
            <li key={index}>{event.title}</li>
          ))}
        </ul>
      }

      {!props.events.length &&
        <p>No events</p>
      }
    </div>
  )
}

export default Day;
