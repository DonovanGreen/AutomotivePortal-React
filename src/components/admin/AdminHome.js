import React from 'react'
import SideNavigation from './SideNavigation'

export default class AdminHome extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: {},
      activeClient: ""
    }
  }


  render() {
    return(
      <div>
        Admin Home
        {this.props.currentUser.firstname}
        <button className="waves-effect waves-light btn" onClick={this.props.logOut}> LogOut </button>
        <SideNavigation />
      </div>
    )
  }


}
