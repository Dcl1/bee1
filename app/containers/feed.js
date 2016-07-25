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

		this._feedData = [];		

		this.state = {
			currentEpisode: 0
		}
	}

	componentWillMount(){

		const { state } = this.props;
		var epi = state.app.episode;
		this.setState({
			currentEpisode: epi
		});	

		this.checkData(epi);
	}

	checkData(ee) {

		switch(ee){
			case 1:
				this._feedData = FeedOne.feed
			case 2:

			default:

		}		


	}

	render() {
		const { state, actions } = this.props;

		return (

			<Feed
				dataArray={this._feedData}
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