import React from 'react'
import EventsAdapter from '../../adapters/EventsAdapter'
import CalendarCheckBox from './CalendarCheckBox'

export default class CalendarCheckBoxes extends React.Component {

  constructor() {
    super()
    this.state = {
      categories: []
    }
  }

  componentWillReceiveProps(props) {
    EventsAdapter.getCategories(props.activeClientId)
    .then((data) => {
      this.setState({
        categories:data
      })
    })
  }


  render() {
    return(
      <div>
        <form>
          <div className="checkbox-container">
            <input className="checkbox" type="checkbox" id="all" />
            <label for="all">All</label>
              {this.state.categories.map ((category, i) => {
                if(category !== null ) {
                  return <CalendarCheckBox category={category} key={i} />
                }
              })
          }
        </div>
      </form>
      </div>

    )
  }
}
