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

var simpleStore = require('react-native-simple-store');

import {Actions} from 'react-native-router-flux'

var STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight;




module.exports = React.createClass({

	getInitialState: function(){

		//this._currentStep;
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
			responseDeuce: '',
			currentStep: 0
		};
	},


	componentWillMount: function(){

		//this._currentStep = this.props.step;
		var _this = this;

		this._episode = this.props.episode;
		//var Step = this.props.step;
		this._convoID = this.props.convoID;

		var thefile = this.getConvoFile(this._episode, this._convoID);
		var startStep = thefile.startStep;
		var thisKey = String("E" + this._episode + "CD" + this._convoID);


		getStore(thisKey, start);

		function getStore(key, callback) {
			_this.maintainStore(key, startStep);
			callback();
		}

		function start(){
			_this.startConvo(_this._convoID);
		}

	},



	maintainStore: function(key, defaultStep){

		var msgVar = this[key];
		var _this = this;

		simpleStore.get(key).then((msgVar) => {
			if(msgVar !== null) {
				//key exists
				console.log("THERE APPEARS TO BE A STORE");

				var msgVar = this[key]

				simpleStore.get( key )
				.then( msgVar => {
					var theStep = msgVar.step;
					console.log("Yes store: APPARENTLY THE STEP IS " + theStep);
					//_this._currentStep = theStep;
					_this.props.setcurrentstep(4);
					_this.setState({
						currentStep: 4
					});
				
				})
				.catch(error => {
					console.log(error.message)
				});
			} else {
				//key does not exist

				console.log("KEY DOESN'T EXIST");

				simpleStore.save( key, {
					step: defaultStep
				})
				.then(() => simpleStore.get( key ))
				.then( msgVar => {
					console.log("NO store: APPARENTLY THE STEP IS " + msgVar.step);
					//_this._currentStep = msgVar.step;
					_this.props.setcurrentstep(msgVar.step);
					_this.setState({
						currentStep: msgVar.step
					});
	
				})
				.catch(error => {
					console.log(error.message)
				});


			}
		});

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

		console.log("You are inside of startConvo " + this.state.currentStep);
		var startStep = this.state.currentStep;

		
		
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

		var _this = this;


		this.setState({
			currentStep: _this.props.step
		});

		var nextStep = this.state.currentStep + 1;

		var convoArray = this.getConvoFile(this._episode, this._convoID);

		if(nextStep < convoArray.conversation.length ) {

			var user = convoArray.conversation[nextStep].user;

			if(user.toUpperCase() !== 'PLAYER') {
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
			}
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
		var _this = this;

		this.setState({
			isPlayer: false
		});

		message.uniqueId = Math.round(Math.random() * 10000);

		this.props.returnconversation(message.option, message.user, message.text, message.position, message.uniqueId);

		setTimeout(() => {
			_this.props.increasestep();
			this.setMessageStatus(message.uniqueId, 'Seen');
		}, 1000);
	},

	componentWillUpdate: function(nextProps, nextState){
		if(nextState.currentStep !== this.state.currentStep){
			this.setState({
				currentStep: nextState.currentStep
			});

			this.startConvo(this._convoID);
		}
	},


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





























