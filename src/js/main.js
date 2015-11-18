import React from 'react';
import ReactDOM from 'react-dom';
import Repo from './repo';

class Main extends React.Component {
  render() {
    var repos = this.props.repos.map(function(data) {
      return (
        <Repo key={data.id} name={data.name} updated={data.updated_at}/>
      )
    });
    return (
      <ul>
        {repos}
      </ul>
    )
  }
}

export default Main;
