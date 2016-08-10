import React, { Component } from 'react';
import {
	View,
	StatusBar
} from 'react-native';

import * as AppActions from '../actions/appActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import BeeBabble from './beebabble';


class BeeContainer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { state, actions } = this.props;

		return (
			<BeeBabble 
				isNew={state.app.new}
			/>
		);
	}

}

export default connect(state => ({
		state: state
	}),
	(dispatch) => ({
		actions: bindActionCreators(Object.assign({}, AppActions), dispatch)
	})
)(BeeContainer);