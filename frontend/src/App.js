import {Component} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import TopUsers from "./components/TopUsers";
import TrendingPost from "./components/TrendingPost";
import Feed from "./components/Feed";

import "./App.css"

class App extends Component{
  render(){
    return(<BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<TopUsers/>}/>
      <Route path="/trending-posts" exact element={<TrendingPost/>}/>
      <Route path="/feed" exact element={<Feed/>}/>
    </Routes>
        
    </BrowserRouter>)
  }
}

export default App;
