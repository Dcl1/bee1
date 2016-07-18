'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import MessageList from '../components/messages/msgList';
/* import actions */
import * as MessageActions from '../actions/messageAction';
/* import actions */


/* import JSONs*/
import epiOneMsgList from '../data/epiOne/messageList.json';
/* import JSOns */



import { connect } from 'react-redux';


class MessageContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		console.log("Message List Mounted");
	}

	render() {
		const { state, actions } = this.props;

		return (
			<MessageList
				episode={state.messages.episode}
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





