const path = 'http://localhost:3000/api/v1/events'
export default class EventsAdapter {

  static getEvents(activeClient){
    return fetch('http://localhost:3000/api/v1/events/get_active_client_events', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
       user_id: activeClient
     })
    })
    .then( resp => resp.json())
    .then(data => {
      data.map((data) => {
        data.start = new Date(data.start)
        data.end = new Date(data.end)
      })
      return data
    })
  }

  static getCategories(activeClient) {
    debugger
    return fetch('http://localhost:3000/api/v1/events/get_categories', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
       user_id: activeClient
     })
    })
    .then( resp => resp.json())

  }

  static addEvent(event, start, end, userId) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        title: event.title,
        allDay: event.allDay,
        category: event.category,
        start: start,
        end: end,
        user_id: userId,
        type: "social"
      })
    })
    .then( resp => resp.json())
    .then(data => {
        data.start = new Date(data.start)
        data.end = new Date(data.end)
        return data
    })
  }

}

let headers = () => {
  const token = localStorage.getItem('token')
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
}
