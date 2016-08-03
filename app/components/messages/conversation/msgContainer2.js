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
		this._episode;
		this._convoID;
		
		this._isMounted = false;
		this._messages = [];

		return {
			messages: this._messages,
			isLoadingEarlierMessages: false,
			typingMessage: '',
			allLoaded: false,
			isPlayer: false,
			responseUno: '',
			responseDeuce: ''
		};
	},


	componentWillMount: function(){

		this._currentStep = this.props.step;

		this._episode = this.props.episode;
		//var Step = this.props.step;
		this._convoID = this.props.convoID;

		this.startConvo(this._convoID);


		//console.log("THE EPISODE " + this._episode);
		var thefile = this.getConvoFile(this._episode, this._convoID);
		var startStep = thefile.startStep;
		//console.log("This is the start step " + startStep);
		//console.log("This is the current step " + this._currentStep);

		var thisKey = String("E" + this._episode + "CD" + this._convoID);
		console.log("This is the KEY " + thisKey);
		//this.props.setstep();

	},

	getConvoFile: function(Episode, ConvoID){

		switch(Episode) {
			case 1:
				return conversationOne.convo[ConvoID];
			case 2:
				return conversationTwo.convo[ConvoID];
			default:
				return conversationDefault.convo[ConvoID];

		};


	},

	startConvo: function(convoID) {

		var _this = this;
		var subArray=[];
		var startStep = 0;


		var selectedConvo = this.getConvoFile(this._episode, convoID);
		var startStep = selectedConvo.startStep;

		//console.log("This is the start step "  + startStep);

		this.props.setcurrentstep(startStep);
		//var selectedConvo = convoArray[convoID].conversation;
		
		for (var i = 0; i <= startStep ; i++){
			subArray.push(
				selectedConvo.conversation[i]
			);
		}

		subArray.map(function(obj){
			let uni = Math.round(Math.random() * 10000);
			_this.props.returnconversation(obj.option, obj.user, obj.text, obj.position, uni);
		});


	},




	componentDidMount: function(){

		this._isMounted = true;

		this.checkNextMessage();
	},


	checkNextMessage: function(){
		//console.log("The current step is "  + this.props.step);
		var _this = this;
		this._currentStep = this.props.step;
		var nextStep = this._currentStep + 1;
		//console.log("That means the next step is " + nextStep);


		var convoArray = this.getConvoFile(this._episode, this._convoID);

		//console.log("Before user " + convoArray[this._convoID].conversation[nextStep]);

		if(nextStep < convoArray.conversation.length ) {

			var user = convoArray.conversation[nextStep].user;
			//console.log("Got the user of the next step " + user);

			if(user.toUpperCase() !== 'PLAYER') {
				//console.log("This is not a player, so here is the nextstep " + nextStep);
				this.setState({
					isPlayer: false,
					responseUno: '',
					responseDeuce: ''
				});

				this.renderNextMessage(nextStep);
			} else {
				

				this.setState({
					isPlayer: true,
					responseUno: convoArray.conversation[nextStep].text
				});
				//console.log("I guess it's a player");
			}
			// for (var i = nextStep; i <= convoArray.length; i ++) {

			// } 

		}



	},

	renderNextMessage: function(next) {

		var convoArray = this.getConvoFile(this._episode, this._convoID);
		var obj = convoArray.conversation[next];


		setTimeout(() => {
			if(this._isMounted == true) {

				this.setState({
					typingMessage: 'Typing a message...',
				});
			}
		}, 400 );

		setTimeout(() => {

			if(this._isMounted == true) {
				this.setState({
					typingMessage: '',
				});
			}
		}, 1500 );


		setTimeout(() => {
			let uni = Math.round(Math.random() * 10000);
			this.props.returnconversation(obj.option, obj.user, obj.text, obj.position, uni);
			setTimeout(() => {
				this.props.increasestep();
			}, 500);
			
		}, Math.random() * (4000 - 1200) + 1200 );

		
	},


	componentDidUpdate: function(prevProps, prevState){

		//console.log("This is  " + prevProps.step);
		//console.log("This is current Props " + this.props.step);

		if(prevProps.step !== this.props.step ) {
			this.checkNextMessage();
		}
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
		var _this = this;

		this.setState({
			isPlayer: false
		});

		message.uniqueId = Math.round(Math.random() * 10000);
		//this.setMessages(this._messages.concat(message));

		this.props.returnconversation(message.option, message.user, message.text, message.position, message.uniqueId);

		setTimeout(() => {
			_this.props.increasestep();
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

			this.startConvo(convoID);
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
				disabled={this.state.isPlayer ? false : true}

				responseOne={this.state.responseUno}
				responseTwo={this.state.responseDeuce}

			/>
		);
	}

});





























