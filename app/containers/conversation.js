'use strict';

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import SingleConversation from '../components/messages/singleConversation';

import * as ConversationActions from '../actions/conversationActions';
import * as AppActions from '../actions/appActions';


import { connect } from 'react-redux';

class ConversationContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log(this.props.cid);
	}


	render() {
		const { state, actions } = this.props;
		var cID = this.props.cid;
		
		

		return (
			<SingleConversation
				convoArray={state.conversation}
				step={state.conversation.step}
				episode={state.app.episode}
				convoID={cID}
				{...actions}
			/>
		);
	}

}

export default connect(state => ({
		state: state
	}),
	(dispatch) => ({
		actions: bindActionCreators(Object.assign({}, AppActions, ConversationActions), dispatch)
	})
)(ConversationContainer);