import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

class Sidebar extends React.Component {
 render() {
   return (
     <Header name={this.props.user.name} />
   )
 }
}

export default Sidebar;
