import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { bindActionCreators } from 'redux';

import Profile from '../components/profile/profile';

/* import actions */
import * as AppActions from '../actions/appActions';
//import * as ProfileActions from '../actions/profileActions';

/* import actions */

import { connect } from 'react-redux';


class ProfileContainer extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		const { state, actions } = this.props;

		return (
			<View>
				<StatusBar
					barStyle="light-content"
				/>
				<Profile
					{...actions}
				/>
			</View>
		);
	}
}

export default connect(state => ({
		state: state
	}),
	(dispatch) => ({
		actions: bindActionCreators(AppActions, dispatch)
	})
)(ProfileContainer);