import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <body>
        <header>
          <h1>{this.props.name}</h1>
          <section className="head">
            <a href="#">
              <span className="octicon octicon-mark-github"></span>
            </a>
            <input className="search" type="search" placeholder="Search GitHub" value=""></input>
            <nav className="navlinks">
              <a href="#">Pull requests</a>
              <a href="#">Issues</a>
              <a href="#">Gist</a>
            </nav>
            <nav className="icons">
              <a href="#">
                <span className="octicon octicon-bell"></span>
              </a>
              <a href="#">
                <span className="octicon octicon-plus"></span>
                <span className="octicon octicon-triangle-down"></span>
              </a>
              <a href="#">icon
                <span className="octicon octicon-triangle-down"></span>
              </a>
            </nav>
          </section>
        </header>
    </body>
    )
  }
}

export default Header;
