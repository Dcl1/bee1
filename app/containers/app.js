import React, { Component } from 'react';
import {View, StatusBar} from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import * as reducers from '../reducers';

/* import app */
import BeeBabble from './beebabble';

/* import app */


import FBApp from '../firebase/fbApp';



const createStoreWithMiddleware = compose(applyMiddleware(thunk), devTools())(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


module.exports = React.createClass({

	componentWillMount: function(){

	   firebase.auth().signInAnonymously().catch(function(error){

	        var errorCode = error.code;
	        var errorMessage = error.message;

	        console.log(errorMessage);

	        //this.se
	    });

	},

	render: function(){
		return (

			<Provider store={store}>
				<BeeBabble />
			</Provider>

		);
	}



});



