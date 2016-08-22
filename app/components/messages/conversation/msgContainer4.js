'user strict';

import React, { Component } from 'react';
import {
	Linking,
	Platform,
	ActionSheetIOS,
	Dimensions,
	View,
	Text,
	Navigator
} from 'react-native';

import GiftedMessenger from 'react-native-gifted-messenger';
import conversationOne from '../../../data/epiOne/conversations/conversations';
var simpleStore = require('react-native-simple-store');
var STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight;


module.exports = React.createClass({

	getInitialState: function(){
		return {

		};
	},


	componentWillMount: function(){

	},


	render: function(){
		return (
			<GiftedMessenger

				ref={(c) => this._GiftedMessenger = c}

				style={{
					marginTop: 66 + STATUS_BAR_HEIGHT,
				}}

				autoFocus={false}

				// This is where the array of messages are added
				messages={[]}
				// This is the end of where the array of messages are added

				// This is where the function to handle send is placed
				handleSend={this.handleSend}
				// This is the end of where the end of the array of messages are added

				maxHeight={Dimensions.get('window').height - Navigator.NavigationBar.Styles.General.NavBarHeight - STATUS_BAR_HEIGHT}
				senderName = ''
				senderImage={null}
				displayNames={true}

				parseText={true}

				// This is where the typing message befare and after the sent message is placed
				typingMessage={this.state.typingMessage}
				// This is the end of where the typing message before and after the sent message is placed

				// Can the player type or not type
				disabled={this.state.isPlayer ? false : true}

				responseOne="Standard text for the first response"
				responseTwo="Standard text for the send response"
			/>
		);
	}

});

































