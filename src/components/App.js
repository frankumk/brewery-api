import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { connect } from "react-redux";


class App extends Component{
  constructor(){
    super();
    this.state={
      breweries: [],
      beers: []
    }
  }

  async componentDidMount(){
    const breweries = (await axios.get('https://sandbox-api.brewerydb.com/v2/breweries/?key=513cbbb6b212de0c532077e16ac448da')).data;
    this.setState({breweries})
    console.log(breweries);
  }
 
    render(){
    
    return (
          <div id= "main">
            <button>Breweries</button>
            <button>Beers</button>
          </div>
    );
  }
}

export default connect(null,null)(App)