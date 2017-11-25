import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import EventsAdapter from '../../adapters/EventsAdapter'

BigCalendar.momentLocalizer(moment);

export default class ClientCalendar extends React.Component {

    constructor(props, context) {
      super(props, context)
        this.state = {
          events: []
        }
    }


    componentWillReceiveProps(props) {
      EventsAdapter.getEvents(props.activeClient.id)
      .then(data => {
        this.setState({
          events: data
        })
      })
    }

    render() {
      return (
        <div>

          <div className="calendar-outter-container">
            <div className="calendar-inner-container">
              <BigCalendar
                popup
                selectable
                tep={60}
                culture='en-GB'
                // onSelectEvent={this.editEvent}
                // onSelectSlot={this.renderSlotInfo}
                events={this.state.events}
                views={['month', 'week', 'day', 'agenda']}/>
            </div>
          </div>
        </div>
      );
    }
  }
