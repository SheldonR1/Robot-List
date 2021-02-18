//jshint esversion:6
import React, {Component} from "react";
import './App.css';
import {SearchBox, searchBox} from "./Components/searchBox/searchBox"
import {CardList} from "./Components/card-list/card_list"
import Footer from "./Components/footer/footer";




class App extends Component{
constructor(){
  super();
  this.state={users:[], searchfield:""};
}

componentDidMount() //function is called whenever this component is rendered
{
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>this.setState({users:data}));
}

handleChange=(e)=>
{
  this.setState({searchfield:e.target.value})
}
render(){

  const {users,searchfield}=this.state;
  const filteredUsers=users.filter(user=>user.name.toLowerCase().includes(searchfield.toLowerCase()))
  return(
    <div className="App">
    <h1>Robot List</h1>
    <SearchBox placeholder="search for users" handleChange={this.handleChange}/>
     <CardList users={filteredUsers} />
     <Footer />
    </div>
  );
}

}

export default App;
