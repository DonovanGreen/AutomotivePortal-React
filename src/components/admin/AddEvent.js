import React from 'react'

export default class AddEvent extends React.Component {

  constructor() {
      super()
      this.state = {
        title: "",
        allDay: null
      }
    }

    handleChange = (e) => {
      let property = e.target.name
      let value = e.target.value
      this.setState({
        [property]: value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      let event = this.state
      let start = this.props.slotData.start.toLocaleString()
      let end = this.props.slotData.end.toLocaleString()
      debugger
      this.props.addEvent(event, start, end)
    }

    handleToggle = (e) => {
      if(e.target.value == "on"){
        this.setState({
          allDay:true
        })
      }
    }


  render(){
    return(
      <div>
        <p>Add an event to {this.props.slotData.start.toLocaleString()}</p>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
              <input onChange={this.handleChange} name="title" placeholder="Title" required/>
          </div>
          <div className="align-left">
              <div className="switch">
                 <label>
                  All Day
                   <input onChange={this.handleToggle} type="checkbox"/>
                   <span className="lever"></span>
                 </label>
               </div>
            </div>
            <button className="waves-effect waves-light btn"> Submit </button>
          </form>
      </div>
    )
  }
}
