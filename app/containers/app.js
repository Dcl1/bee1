import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import * as reducers from '../reducers';

/* import app */
import BeeBabble from './beebabble';

/* import app */

const createStoreWithMiddleware = compose(applyMiddleware(thunk), devTools())(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


module.exports = React.createClass({


	render: function(){
		return (
			<Provider store={store}>
				<BeeBabble />
			</Provider>
		);
	}



});



