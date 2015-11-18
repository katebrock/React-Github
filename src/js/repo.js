import React from 'react';
import ReactDOM from 'react-dom';

class Repo extends React.Component {
 render() {
   return (
     <li>
       <h1>{this.props.name}</h1>
       <span className="updated">{this.props.updated}</span>
     </li>
   )
 }
}

export default Repo;
