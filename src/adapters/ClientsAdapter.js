const path = 'http://localhost:3000/api/v1/clients'
export default class ClientsAdapter {


}

let headers = () => {
  const token = localStorage.getItem('token')
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
}
