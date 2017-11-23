import React from 'react'
import ClientNavigationItem from './ClientNavigationItem'

const ClientNavigation = (props) => {
  return (
    <div>
      <ul>
        {props.clients.map((client) => {
          return <ClientNavigationItem setActiveClient={props.setActiveClient} client={client} />
        })}
      </ul>
    </div>
  );
};

export default ClientNavigation;
