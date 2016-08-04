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

		return {

		};
	},

	componentWillMount: function(){

		this._Episode = this.props.episode;
		this._ConvoId = this.props.convoID;

		// Create Store
		this._Key = String("E" + this._Episode + "CD" + this._ConvoId);	
		// End of Create Store

		this.maintainStore(this._Key);

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


	loadStartConvo: function(theStep) {
		console.log("LOADSTARTCONVO " + theStep);

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

	},


	getConvoFile: function(){

		switch(this._Episode) {
			case 1:
				return conversationOne.convo[this._ConvoId];
			case 2:
				return conversationTwo.convo[this._ConvoId];
			default:
				return conversationDefault.convo[this._ConvoId];

		};


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


	handleSend: function(){

		var Key = this._Key;
		var msgVar = this[Key];

		simpleStore.update( Key, {
			step: 8
		});
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
				//disabled={this.state.isPlayer ? false : true}
				disabled={false}

				//responseOne={this.state.responseUno}
				//responseTwo={this.state.responseDeuce}
				responseOne='Response Number One'
				responseTwo='Repsonse Number Two'
			/>
		);
	}

});




























