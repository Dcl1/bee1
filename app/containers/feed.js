'user strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Feed from '../components/feed/feed.js';

import * as FeedActions from '../actions/feedActions';
import * as AppActions from '../actions/appActions';

import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';

/* Check the data */
import FeedOne from '../data/epiOne/feed/feed.json';
/* Check the data */





class FeedContainer extends Component {

	constructor(props) {
		super(props);

	}



	render() {
		const { state, actions } = this.props;
		return (

			<Feed
				dataArray={state.feed}
				episode={state.app.episode}
				{...actions}
			/>

		);
	}
}



export default connect(state => ({
		state: state
	}), 
	(dispatch) => ({
		actions: bindActionCreators(Object.assign({}, AppActions, FeedActions), dispatch)
	})
)(FeedContainer);












