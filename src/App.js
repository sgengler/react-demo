import React, { Component } from 'react';
import Day from './components/Day';
import EventForm from './components/EventForm';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'my title',
      days: [
        {name: 'Sunday'},
        {name: 'Monday'},
        {name: 'Tuesday'},
        {name: 'Wednesday'},
        {name: 'Thursday'},
        {name: 'Friday'},
        {name: 'Saturday'},
      ],
      events: [],
    }

  }

  updateTitle = () => {
    this.setState({
      title: 'new title',
    })
  }

  addEvent = (event) => {

    this.setState({
      events: [
        ...this.state.events,
        event,
      ]
    })
  }

  render() {

    const days = this.state.days.map((day, index) => (
      <li key={index}>
        <Day day={day}
          events={this.state.events.filter(event => event.day === day.name)} />
      </li>
    ));

    const events = this.state.events.map((event, index) => (
      <li key={index}>
        {event.title} {event.day}
      </li>
    ))


    return (
      <div>

        <EventForm addEvent={this.addEvent}/>

        <ul>
          {days}
        </ul>

        <ul>
          {events}
        </ul>
      </div>
    );
  }
}


export default App;
