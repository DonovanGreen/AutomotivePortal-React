import React from 'react'

export default class ClientNavigationItem extends React.Component {



  handleClick = () => {
    this.props.setActiveClient(this.props.client.id)
  }


  render() {
    return(
      <div>
        <button onClick={this.handleClick} className="waves-effect waves-light btn">{this.props.client.company}</button>
      </div>
    )
  }
}
