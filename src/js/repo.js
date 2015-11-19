import React from 'react';
import ReactDOM from 'react-dom';

class Repo extends React.Component {
 render() {
   return (
    <main>
     <li>
       <article>
        <div>
          <h1 className="title">{this.props.name}</h1>
          <span className="updated">{this.props.updated}</span>
       </div>
      </article>
     </li>
   </main>
   )
 }
}

export default Repo;
