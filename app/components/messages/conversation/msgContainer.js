'use strict';

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

import GiftedMessenger  from 'react-native-gifted-messenger';


var STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight;


module.exports = React.createClass({

	getInitialState: function(){
		
		this.isMounted = false;
		this._messages = this.getInitialMessages();

		return {
			messages: this._messages,
			isLoadingEarlierMessages: false,
			typingMessage: '',
			allLoaded: false
		};
	},

	componentDidMount: function(){

		console.log("Status Bar Height " + STATUS_BAR_HEIGHT);

		this._isMounted = true;

			setTimeout(() => {
				this.setState({
					typingMessage: 'React-Bot is typing a message...',
				});
			}, 3000 );

			setTimeout(() => {
				this.setState({
					typingMessage: '',
				});
			}, 6000 );

			setTimeout(() => {
				this.handleReceive({
					text: 'Hello Awesome Developer',
					name: 'React-Bot',
					image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
					position: 'left',
					date: new Date(),
					uniqueId: Math.round(Math.random() * 1000)
				});
			}, 7000)
	},

	componentWillUnmount() {
		this._isMounted = false;
	},

	getInitialMessages: function() {
		return [
			{
				text: 'Are you building a chat app?',
				name: 'React-Bot',
				image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
				position: 'left',
				date: new Date(2016, 0 ,1, 20, 0),
				uniqueId: Math.round(Math.random() * 10000)
			}, {
				text: 'This is a touchable phone number 0606006060 parsed by taskrabbit/react-native-parsed-text',
				name: 'Awesome Developer',
				image: null,
				position: 'right',
				date: new Date(2016, 0, 2, 12, 0),
				uniqueId: Math.round(Math.random() * 10000)
			}
		];
	},

	setMessageStatus: function(uniqueId, status) {
		let messages = [];
		let found = false;

		for (let i = 0; i < this._messages.length; i ++) {
			if (this._messages[i].uniqueId === uniqueId) {
				let clone = Object.assign({}, this._messages[i]);
				clone.status = status;
				messages.push(clone);
				found = true;
			} else {
				messages.push(this._messages[i]);
			}
		}

		if (found === true) {
			this.setMessages(messages);
		}
	},

	setMessages: function(messages) {
		this._messages = messages;

		// append the message
		this.setState({
			messages: messages
		});
	},


	handleSend: function(message = {}) {
		// Your logic here
		// Send message.text to your server

		message.uniqueId = Math.round(Math.random() * 10000);
		this.setMessages(this._messages.concat(message));

		setTimeout(() => {
			this.setMessageStatus(message.uniqueId, 'Seen');
		}, 1000);

    	// if you couldn't send the message to your server :
    	// this.setMessageStatus(message.uniqueId, 'ErrorButton');

	},

	handleReceive(message = {}) {
    	// make sure that your message contains :
    	// text, name, image, position: 'left', date, uniqueId
    	this.setMessages(this._messages.concat(message));
	},

	render: function(){
		return (
			<GiftedMessenger

				ref={(c) => this._GiftedMessenger = c}

				style={{
					marginTop: 66 + STATUS_BAR_HEIGHT,
					//bubbleRight: {
					//	marginLeft: 70,
					//	backgroundColor: '#007aff',
					//},
				}}

				autoFocus={false}
				messages={this.state.messages}
				handleSend={this.handleSend}

				maxHeight={Dimensions.get('window').height - Navigator.NavigationBar.Styles.General.NavBarHeight - STATUS_BAR_HEIGHT}

				senderName= 'Awesome Developer'
				senderImage={null}
				displayNames={true}

				parseText={true}

				typingMessage={this.state.typingMessage}
			/>
		);
	}

});
