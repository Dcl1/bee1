'use strict';


import React, {Component} from 'react';
import {bindActionCreators} from 'redux';


/* import actions */
import * as MessageActions from '../actions/messageAction';
/* import actions */

import { connect } from 'react-redux';


class MessageContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { state, actions } = this.props;
		var MessageList =require('../components/messages/msgList');

		return (
			<MessageList
				{...state}
				{...actions}
			/>
		);
	}

}


export default connect(state => ({
		state: state
	}), 
	(dispatch) => ({
		actions: bindActionCreators(MessageActions, dispatch)
	})
)(MessageContainer);