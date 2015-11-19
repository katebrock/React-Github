import React from 'react';
import ReactDOM from 'react-dom';
import Repo from './repo';

class Main extends React.Component {
  render() {
    // return (
    //   <main>
    //    <section className="article">
    //      <section className="githubtabs">
    //        <div className="contributions"><span className="octicon octicon-diff-added">Contributions</span></div>
    //        <div className="repositories"><span className="octicon octicon-repo">Repositories</span></div>
    //        <div className="publicactivity"><span className="octicon octicon-rss">Public Activity</span></div>
    //      </section>
    //    <a href className= "editprofile" type="button" name="editprofile" value="Edit Profile"><span className="octicon octicon-pencil"></span>Edit profile</a>
    //      <section className="reposinfo">
    //        <input className="searchbar" text="" name="name" value="Find a repository...">
    //        <input className="searchbutton" type="button" name="name" value="Search">
    //        <nav className="repolinks">
    //        <span className="all"> All</span>
    //          <a href="#">Public</a>
    //          <a href="#">Private</a>
    //          <a href="#">Sources</a>
    //          <a href="#">Forks</a>
    //          <a href="#">Mirrors</a>
    //        </nav>
    //    <a href className="newbutton" type="button" name="name" value="New"><span className="octicon octicon-repo"></span>New</a>
    //      </section>
    //    </section>
    //    </main>
    // )
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
