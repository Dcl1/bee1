import React, { Component } from 'react';
import {View, StatusBar} from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import * as reducers from '../reducers';

/* import app */
import BeeBabble from './beebabble';
//import BeebabbleContainer from './beebabbleContainer';

/* import app */


import FBApp from '../firebase/fbApp';
import * as firebase from 'firebase';


const createStoreWithMiddleware = compose(applyMiddleware(thunk), devTools())(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


module.exports = React.createClass({

	componentWillMount: function(){



	},

	render: function(){
		return (

			<Provider store={store}>
				<BeeBabble />
			</Provider>

		);
	}

});



