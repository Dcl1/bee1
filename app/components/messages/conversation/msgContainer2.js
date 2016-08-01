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

import conversationOne from '../../../data/epiOne/conversations/conversations';

import {Actions} from 'react-native-router-flux'

var STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight;


module.exports = React.createClass({

	getInitialState: function(){

		this._currentStep;
		
		this._isMounted = false;
		this._messages = [];

		return {
			messages: this._messages,
			isLoadingEarlierMessages: false,
			typingMessage: '',
			allLoaded: false
		};
	},


	componentWillMount: function(){

		this._currentStep = this.props.step;

		var Episode = this.props.episode;
		//var Step = this.props.step;
		var convoID = this.props.convoID;

		this.checkConvo(Episode, convoID);

		//Actions.refresh();

	},

	checkConvo: function(Episode, convoID) {

		

		var _this = this;
		var subArray=[];
		var startStep = 0;

		function checkEpi(EE) {
			switch(EE) {
				case 1:
					return conversationOne.convo;
				case 2:
					return conversationTwo.convo;
				default:
					return conversationDefault.convo;

			}
		}

		var convoArray = checkEpi(Episode);
		var startStep = convoArray[convoID].startStep;

		console.log("This is the start step "  + startStep);

		this.props.setcurrentstep(startStep);
		var selectedConvo = convoArray[convoID].conversation;
		
		for (var i = 0; i <= startStep ; i++){
			subArray.push(
				selectedConvo[i]
			);
		}

		subArray.map(function(obj){
			let uni = Math.round(Math.random() * 10000);
			_this.props.returnconversation(obj.option, obj.user, obj.text, obj.position, uni);
		});


	},




	componentDidMount: function(){

		this._isMounted = true;

		


		// setTimeout(() => {
		// 	if(this._isMounted == true) {
		// 		this.setState({
		// 			typingMessage: 'React-Bot is typing a message...',
		// 		});
		// 	}
		// }, 3000 );

		// setTimeout(() => {
		// 	if(this._isMounted == true) {
		// 		this.setState({
		// 			typingMessage: '',
		// 		});
		// 	}
		// }, 6000 );

		//setTimeout(() => {
			// if(this._isMounted == true) {
				// let obj =({
				// 	text: 'Hello Awesome Developer',
				// 	name: 'React-Bot',
				// 	image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
				// 	position: 'left',
				// 	date: new Date(),
				// 	uniqueId: Math.round(Math.random() * 1000)
				// });

				// let uni = Math.round(Math.random() * 10000);
				// this.props.returnconversation("false", obj.name, obj.text, obj.position, obj.uniqueId);
			// }
		//}, 7000)
		

	},

	checkNextMessage: function(){
		console.log("The current step is "  + this.props.step);
		this._currentStep = this.props.step;
		var nextStep = this._currentStep + 1;
		console.log("That means the next step is " + nextStep);

	},

	componentDidUpdate: function(){
		this.checkNextMessage();
	},

	componentWillUnmount() {

		this._isMounted = false;
		this.props.clearconversation();
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
		if(this._isMounted == true) {

			this._messages = messages;

			// append the message
			this.setState({
				messages: messages
			});
		}
	},

	handleSend: function(message = {}) {
		// Your logic here
		// Send message.text to your server

		message.uniqueId = Math.round(Math.random() * 10000);
		//this.setMessages(this._messages.concat(message));

		this.props.returnconversation(message.option, message.user, message.text, message.position, message.uniqueId);

		setTimeout(() => {
			this.setMessageStatus(message.uniqueId, 'Seen');
		}, 1000);

    	// if you couldn't send the message to your server :
    	// this.setMessageStatus(message.uniqueId, 'ErrorButton');

	},

	//handleReceive(message = {}) {
    	// make sure that your message contains :
    	// text, name, image, position: 'left', date, uniqueId
    //	this.setMessages(this._messages.concat(message));
	//},


	componentWillReceiveProps: function(nextProps){

	

		var messages = [];
		nextProps.convoArray.map(function(obj){

			var imgURL = obj.position == 'left' ? {uri: 'https://facebook.github.io/react/img/logo_og.png'} : null; 
	
			messages.push(
				{
					text: obj.text,
					name: obj.user,
					position: obj.position,
					image: imgURL,
					date: new Date(2016, 0 ,1, 20, 0),
					uniqueId: obj.uniqueId
				}
			);
		});	


		if(nextProps.convoID !== this.props.convoID) {
			this.props.clearconversation();

			var Episode = nextProps.episode;
			var Step = nextProps.step;
			var convoID = nextProps.convoID;

			this.checkConvo(Episode, convoID, Step);
		} 
		var _this = this;

		if(nextProps.convoArray !== this.props.convoArray ) {
			this.setMessages(messages)
		} 

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
				disabled={false}


			/>
		);
	}

});





























