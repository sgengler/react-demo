import React, { Component } from 'react';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      day: 'Monday',
    }

  }

  onChange(e) {

    this.setState({
      title: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      title: '',
    })

    this.props.addEvent({
      title: this.state.title,
      day: this.state.day,
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          placeholder="add event"
          type="text"
          value={this.state.title}
          onChange={e => this.onChange(e)}
        />

        <select
          value={this.state.day}
          onChange={e => this.setState({ day: e.target.value })}
        >
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
      </form>
    )
  }
}

export default EventForm;
