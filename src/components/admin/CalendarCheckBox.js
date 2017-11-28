import React from 'react'

export default class CalendarCheckBox extends React.Component {

  render() {
    return(
      <span>
         <input className="checkbox" type="checkbox" id={this.props.category} />
         <label for={this.props.category}>{this.props.category}</label>
       </span>
    )
  }
}
