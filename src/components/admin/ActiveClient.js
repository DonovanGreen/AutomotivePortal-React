import React from 'react'
import UsersAdapter from '../../adapters/UsersAdapter'

export default class ActiveClient extends React.Component {

  constructor() {
    super()
    this.state = {
      activeClient: []
    }
  }

  componentDidMount() {
    UsersAdapter.getClient(this.props.activeClient)
    .then((data) => {
      this.setState({
        activeClient: data
      })
    })
  }

  componentWillReceiveProps(props) {
    UsersAdapter.getClient(props.activeClient)
    .then((data) => {
      debugger
      this.setState({
        activeClient: data
      })
    })
  }

  render() {
    return(
      <div>
        {this.state.activeClient.company}
      </div>
    )
  }


}
