import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import EventsAdapter from '../../adapters/EventsAdapter'
import Modal, {closeStyle} from 'simple-react-modal'
import AddEvent from './AddEvent'

BigCalendar.momentLocalizer(moment);

export default class ClientCalendar extends React.Component {

    constructor(props, context) {
      super(props, context)
        this.state = {
          events: [],
          modalOpen:false,
          slotData: null
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

    renderAddEvent = (slotInfo) => {
      // console.log(slotInfo.start.toLocaleString)
      this.setState({
        modalOpen: true,
        slotData: slotInfo
      })
    }

    addEvent = (event, start, end) => {
      EventsAdapter.addEvent(event,start, end, this.props.activeClient.id)
      .then((data) => {
        this.setState({
          modalOpen: false,
          slotData: null,
          events: [...this.state.events, data]
        })
      })
    }

    close = () => {
      this.setState({
        modalOpen:false,
        slotData: null
      })
    }

    render() {
      return (
        <div>
          {this.state.modalOpen ?
            <Modal
              closeOnOuterClick={true}
              show={this.state.modalOpen}
              onClose={this.close}
               >
                 <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
                 <AddEvent slotData={this.state.slotData} addEvent={this.addEvent} />
            </Modal>
              : null}
          <div className="calendar-outter-container">
            <div className="calendar-inner-container">
              <BigCalendar
                popup
                selectable
                tep={60}
                culture='en-GB'
                // onSelectEvent={this.editEvent}
                onSelectSlot={this.renderAddEvent}
                events={this.state.events}
                views={['month', 'week', 'day', 'agenda']}/>
            </div>
          </div>
        </div>
      );
    }
  }
