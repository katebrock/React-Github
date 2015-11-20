import React from 'react';
import ReactDOM from 'react-dom';

class Repo extends React.Component {
  render() {
    return (
      <main>
        <li>
          <article>
            <div className="left">
              <h1 className="title">{this.props.name}</h1>
              <span className="updated">{this.props.updated}</span>
            </div>
            <div className="right">
              <a className="star" href="#">{this.props.star}</a>
                <span className="octicon octicon-star"></span>
              <a className="fork" href="#">{this.props.fork}</a>
                <span className="octicon octicon-git-branch"></span>
            </div>
          </article>
        </li>
      </main>
    )
  }
}

export default Repo;
