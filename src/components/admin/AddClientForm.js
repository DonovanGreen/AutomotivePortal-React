import React from 'react'

export default class AddClientForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      company: "",
      firstname: "",
      lastname: "",
      password: "",
      username:"",
      admin:false
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
    let newClient = this.state
    this.props.addClient(newClient)
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h4> Add Client </h4>
        <input name="company" type="text" onChange={this.handleChange} placeholder="Company"/>
        <input name="firstname" type="text" onChange={this.handleChange} placeholder="First Name"/>
        <input name="lastname" type="text" onChange={this.handleChange} placeholder="Last Name"/>
        <input name="email" type="text" onChange={this.handleChange} placeholder="Email"/>
        <input name="username" type="text" onChange={this.handleChange} placeholder="Username"/>
        <input name="password" type="password" onChange={this.handleChange} placeholder="Password"/>
        <button type="submit">Add</button>
      </form>
    )
  }

}
