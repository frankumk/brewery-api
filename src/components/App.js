import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux"


class App extends Component{
  constructor(){
    super();
    this.state={
      breweries: [],
      randomBeer: {},
      display: 'breweries'
    }

    this.clickBreweries = this.clickBreweries.bind(this)
    this.clickRandom = this.clickRandom.bind(this)
  }

  clickBreweries(){
    this.setState({display: 'breweries'})
  } 
  async clickRandom(){
    const randomBeer = (await axios.get('/api/beer/random')).data.data;
    this.setState({display: 'randomBeer', randomBeer})
  }

  async componentDidMount(){
    const breweries = (await axios.get('/api/breweries')).data.data;
    const randomBeer = (await axios.get('/api/beer/random')).data.data;
    this.setState({breweries,randomBeer})
    console.log(this.state.randomBeer);
  }
 
    render(){
    
    return (
      <div className="container">
          <div id= "main">
            <nav>
              <button onClick={()=>this.clickBreweries()}>Breweries</button>
              <button onClick={()=>this.clickRandom()}>Random Beer</button>
            </nav>

            {
              this.state.display === 'breweries'?
                    this.state.breweries.map(brewery=>{
                      return( <h4 key={brewery.id}>{ brewery.name }</h4> )
                    })
                  :
                  <div id="random-beer-display">
                    <h1>{this.state.randomBeer.name}</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/GravityTap.jpg" alt="beer"></img>
                  </div>
            }
          </div>
      </div>
    );
  }
}


export default connect(null,null)(App)