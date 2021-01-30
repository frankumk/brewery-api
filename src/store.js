import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import {logger} from 'redux-logger'
import thunk from "redux-thunk";

export const getBreweries = (breweries) => {
    return {
      type: 'GET_BREWERIES',
      breweries
    };
  };

  export const _getBreweries = () => {
    return async(dispatch) => {
        const breweries = (await axios.get('/breweries')).data;
        dispatch(getBreweries(breweries));
      }
  };

const breweriesReducer = (state = {}, action='GETSOME')=>{
    // if (action.type === 'GET_BREWERIES'){
    //     return action.breweries;
    //   }
    return state;
}

export default breweriesReducer