import React from 'react';
import ReactDOM from 'react-dom';


class Sidebar extends React.Component {
 render() {
   return (
     <div className="main">
     <aside>
      <img className="avatar" src={this.props.user.avatar_url}/>
      <span className="name">{this.props.user.name}</span>
      <span className="username">{this.props.user.login}</span>
      <div className="localjoin">
        <span className="octicon octicon-location"></span>
        <span className="location">{this.props.user.location}</span>
        <span className="octicon octicon-clock"></span>
        <span className="joined">Joined on Oct. 4, 2015</span>
      </div>
      <section className="followinginfo">
        <span className="followers">{this.props.user.followers}</span>
        <span className="collaborators">{this.props.user.public_gists}</span>
        <span className="following">{this.props.user.following}</span>
      </section>
      <section className="followinginfotwo">
        <span className="followtwo">Followers</span>
        <span className="star">Starred</span>
        <span className="followthree">Following</span>
      </section>
     </aside>
   </div>
   )
 }
}

export default Sidebar;
