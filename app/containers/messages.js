'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import MessageList from '../components/messages/msgList3';
/* import actions */
import * as AppActions from '../actions/appActions'; 
import * as MessageActions from '../actions/messageAction';
/* import actions */

import epiOneMsgList from '../data/epiOne/messageList.json';
import epiTwoMsgList from '../data/epiTwo/messageList.json';

import { connect } from 'react-redux';






class MessageContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { state, actions } = this.props;
		//const messages = getMessages(state.app.episode);
		//console.log(messages);
		return (
			<MessageList
				episode={state.app.episode}
				msgArray={state.messages}
				{...actions}
			/>
		);
	}

}


export default connect(state => ({
		state: state
	}), 
	(dispatch) => ({
		actions: bindActionCreators(Object.assign({}, MessageActions, AppActions ), dispatch)
	})
)(MessageContainer);





