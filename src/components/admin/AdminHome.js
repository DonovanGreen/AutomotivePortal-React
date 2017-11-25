import React from 'react'
import ClientNavigation from './ClientNavigation'
import ActiveClient from './ActiveClient'
import UsersAdapter from '../../adapters/UsersAdapter'
import AddClientForm from './AddClientForm'
import '../../css/admin.css'
import AdminHomeScreen from './AdminHomeScreen'

export default class AdminHome extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: {},
      activeClient: null,
      clients: [],
      addClientDropdown: false
    }
  }

  componentWillMount() {
    UsersAdapter.getClients()
    .then((clients) => {
      this.setState({
        clients: clients
      })
    })
  }

  setActiveClient = (clientId) => {
    this.setState({
      activeClient: clientId
    })
  }

  addClient = (newClient) => {
    UsersAdapter.addClient(newClient)
    .then((newClientData) => {
      this.setState({
        clients: [...this.state.clients, newClientData]
      })
    })
  }

  toggleDropdown = () => this.setState({addClientDropdown: !this.state.addClientDropdown})


  render() {
    return(
      <div className="row">
        <div className="col l3 m3 side-navigation">
          {this.props.currentUser.firstname}
          <button className="waves-effect waves-light btn" onClick={this.props.logOut}> LogOut </button>
          <div className="nav-header">
            <h6>CLIENTS </h6>
            <button onClick={this.toggleDropdown}><i className="fa fa-plus" aria-hidden="true"></i></button>
          </div>
          {this.state.addClientDropdown ?
            <AddClientForm addClient={this.addClient} />
            : null }
          <ClientNavigation setActiveClient={this.setActiveClient} clients={this.state.clients} />
        </div>
        <div className="col l9 m9">
          {this.state.activeClient === null ?
            <AdminHomeScreen /> :
            <ActiveClient activeClient={this.state.activeClient} />
          }
        </div>
      </div>
    )
  }


}
