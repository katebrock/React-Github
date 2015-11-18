import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './header';
import Repo from './repo';
import Sidebar from './sidebar';
import Main from './main';



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
     <main>
       <Header/>
       <Sidebar user = {this.state.user}/>
       <Main repos = {this.state.repos}/>
     </main>
   )
 }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

export default App;
