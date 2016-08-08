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

import GiftedMessenger from 'react-native-gifted-messenger';
import conversationOne from '../../../data/epiOne/conversations/conversations';
var simpleStore = require('react-native-simple-store');
var STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight;


module.exports = React.createClass({

	getInitialState: function(){

		this._Key;
		this._Episode;
		this._ConvoId;
		this._CurrentStep;
		this._messages;

		return {
			isPlayer: false	
		};
	},

	componentWillMount: function(){

		this._messages = this.props.convoArray;
		this._Episode = this.props.episode;
		this._ConvoId = this.props.convoID;

		// Create Store
		this._Key = String("E" + this._Episode + "CD" + this._ConvoId);	
		// End of Create Store

		this.maintainStore(this._Key);

	},

	componentDidMount: function(){

		

	},


	maintainStore: function(key){

		var msgVar = this[key];
		var _this = this;

		simpleStore.get(key).then( (msgVar) => {

			if( msgVar !== null ) {
				//key exists
				simpleStore.get( key )
				.then( msgVar => {
					var theStep = msgVar.step;
					_this.loadStartConvo(theStep);
				})

			} else {
				//eventually grab a default step
				
				var file = _this.getConvoFile();
				let defaultStep = file.startStep;
				//eventually grab a default step
				// key does not exist
				simpleStore.save( key, {
					step: defaultStep
				})
				.then(() => simpleStore.get( key ))
				.then( msgVar => {
					// msgVar.step
					var theStep = msgVar.step;
					_this.loadStartConvo(theStep);
				})
				.catch(error => {
					console.log(error.message)
				});

			}

		});

	},


	checkNextMessage: function(){

		console.log("THIS IS THE CURRENT STEP " + this._CurrentStep);
		var nextStep = this._CurrentStep + 1;
		console.log("THIS IS THE NEXT STEP " + nextStep);

		var file = this.getConvoFile();

		if(nextStep < file.conversation.length ) {

			var user = file.conversation[nextStep].user;
			if(user.toUpperCase() !== 'PLAYER') {
				this.setState({
					isPlayer: false
				});

				this.renderNextMessage(nextStep);
			} else {
				this.setState({
					isPlayer: true
				});
			}	
		}

	},


	renderNextMessage: function(next) {

		var file = this.getConvoFile();
		var obj = file.conversation[next];


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


		// Work with the simple store
		var Key = this._Key;
		var msgVar = this[Key];

		simpleStore.update( Key, {
			step: next
		});
		// End work with the simple store

	},

	loadStartConvo: function(theStep) {
		console.log("LOADSTARTCONVO " + theStep);

		this._CurrentStep = theStep;
		var _this = this;
		var subArray = [];
		var file = this.getConvoFile();

		for(var i = 0; i <= theStep ; i++ ){
			//console.log(file.conversation[i].text);
			subArray.push(
				file.conversation[i]
			);
		}

		subArray.map(function(obj){
			let uni = Math.round(Math.random() * 10000);
			_this.props.returnconversation(obj.option, obj.user, obj.text, obj.position, uni);
		});

		this.checkNextMessage();

	},


	getConvoFile: function(){

		switch(this._Episode) {
			case 1:
				console.log(conversationOne.convo[this._ConvoId]);
				return conversationOne.convo[this._ConvoId];
			case 2:
				return conversationTwo.convo[this._ConvoId];
			default:
				return conversationDefault.convo[this._ConvoId];

		};


	},

	componentDidUpdate: function(prevProps, prevState){

		// if(prevProps.convoArray !== this.props.convoArray ){
		// 	this.checkNextMessage();
		// }


	},


	componentWillReceiveProps: function(nextProps){


		


		if(nextProps.convoID !== this.props.convoID){

			this.props.clearconversation();

			this._Episode = nextProps.episode;
			this._ConvoId = nextProps.convoID;
			// Create Store
			this._Key = String("E" + this._Episode + "CD" + this._ConvoId);	
			// End of Create Store
			this.maintainStore(this._Key);
		}



	},

	componentWillUnmount: function(){
		this.props.clearconversation();
	},


	handleSend: function( message = {}){

		// var Key = this._Key;
		// var msgVar = this[Key];

		// simpleStore.update( Key, {
		// 	step: 8
		// });
		var _this = this;
		var Key = this._Key;
		var nextStep = this._CurrentStep + 1;

		this.setState({
			isPlayer: false
		});

		message.uniqueId = Math.round(Math.random() * 10000);
		this.setMessages(this._messages.concat(message));

		this.props.returnconversation(message.option, message.user, message.text, message.position, message.uniqueId);

		setTimeout(() => {
			_this.props.increasestep();
			this.setMessageStatus(message.uniqueId, 'Seen');
		}, 1000);

		// store update
		simpleStore.update( Key, {
			step: nextStep
		});
		// end of store update

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

	setMessages(messages) {
	    this._messages = messages;

	    // append the message
	    // this.setState({
	    //   messages: messages,
	    // });
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
				//messages={this.state.messages}
				messages={this.props.convoArray}
				handleSend={this.handleSend}

				maxHeight={Dimensions.get('window').height - Navigator.NavigationBar.Styles.General.NavBarHeight - STATUS_BAR_HEIGHT}

				senderName= 'Awesome Developer'
				senderImage={null}
				displayNames={true}

				parseText={true}

				typingMessage={this.state.typingMessage}
				disabled={this.state.isPlayer ? false : true}
				//disabled={false}

				//responseOne={this.state.responseUno}
				//responseTwo={this.state.responseDeuce}
				responseOne='Response Number One'
				responseTwo='Repsonse Number Two'
			/>
		);
	}

});




























