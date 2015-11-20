import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './header';
import Repo from './repo';
import Sidebar from './sidebar';
import Main from './main';


//this App tag is being called down at the ReactDOM.render
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
      repos:[]
    };
  }

 componentDidMount() {
   var component = this;
   $.ajax("https://api.github.com/users/katebrock").then(function(response) {
     component.setState({user: response})
   });
   $.ajax("https://api.github.com/users/katebrock/repos").then(function(response) {
     component.setState({repos: response})
   });
 }

 render() {
   return (
     <div className="wrapper">
       <Header/>
       <Sidebar user = {this.state.user}/>
       <Main repos = {this.state.repos}/>
     </div>
   )
 }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

export default App;
