'use strict'

import React, { Component } from 'react';
import {
	TabBarIOS,
	Text,
	StyleSheet,
	StatusBar,
	Image,
	View
} from 'react-native';

import Feed from './feed';
import MsgList from './messages';
import Profile from './profile';
import Start from './start';
//import SingleConversation from '../components/messages/singleConversation';
import Conversation from './conversation';

import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';
import * as AppActions from '../actions/appActions';
 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';


const RouterWithRedux = connect()(Router);


class HomeTabIcon extends React.Component {

	componentWillMount(){

		this.styles={
			selected: {
				opacity: 1
			},
			unselected: {
				opacity: 0.24
			}
		};
	}


	render() {
		var url = this.props.srce

      return (
           // <Text style={this.props.selected ? this.styles.selected : this.styles.unselected }>{this.props.title}</Text>
           <Image source={require('image!home')} style={this.props.selected ? this.styles.selected : this.styles.unselected } />
        );
	}
}

class MessagesTabIcon extends React.Component {

	componentWillMount(){
		this.styles={
			selected: {
				opacity: 1
			},
			unselected: {
				opacity: 0.24
			}
		};
	}


	render() {
		var url = this.props.srce

      return (
           // <Text style={this.props.selected ? this.styles.selected : this.styles.unselected }>{this.props.title}</Text>
           <Image source={require('image!messages')} style={this.props.selected ? this.styles.selected : this.styles.unselected } />
        );
	}
}

class ProfileTabIcon extends React.Component {

	componentWillMount(){
		this.styles={
			selected: {
				opacity: 1
			},
			unselected: {
				opacity: 0.24
			}
		};
	}


	render() {
		var url = this.props.srce

      return (
           // <Text style={this.props.selected ? this.styles.selected : this.styles.unselected }>{this.props.title}</Text>
           <Image source={require('image!profile')} style={this.props.selected ? this.styles.selected : this.styles.unselected } />
        );
	}
}



module.exports = React.createClass({

	getInitialState: function() {
		return {
			selectedTab: 'feedTab'
		};
	},

	componentWillMount: function(){

		var _this = this;


	   firebase.auth().signInAnonymously().catch(function(error){

	   		console.log("Inside of app container, calling anonymous sign in ");

	        var errorCode = error.code;
	        var errorMessage = error.message;

	        console.log(errorMessage);
	        
	    });



	},



	backCall: function(){
		//console.log('I guess onBack has to be called from the router')
		Actions.pop()
	},



	render: function() {

		console.log("New: " + this.props.isNew);

		return (

			<RouterWithRedux
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitle}
			>
			<Scene key="roots">
				<Scene 
					key="maintabs" 
					tabs={true} 
					tabBarStyle={styles.container} 
					selector={ this.props.isNew ? "Start" : "Home"}
				>
					<Scene key="Start" component={Start} hideTabBar={true} hideNavBar={true} />
					<Scene key="Home" title="Brookhaven Wall" icon={HomeTabIcon}  component={Feed}   />
					<Scene key="Messages" title="Messages" icon={MessagesTabIcon} >
						<Scene key="MsgList" title="Messages" component={MsgList} passProps={true}  />
						<Scene key="SingleConvo" title="" component={Conversation} hideTabBar={true} onBack={this.backCall} />
					</Scene>
					<Scene key="Profile" title="Profile" icon={ProfileTabIcon} component={Profile} />
				</Scene>
			</Scene>
			</RouterWithRedux>
		);
	}

});



var styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderTopWidth: 2
	},
	tabIcon: {
		backgroundColor: 'pink'
	},
	navBar: {
		backgroundColor: '#717AEF',
		borderColor: 'black',
		borderBottomWidth: 0
	},
	navTitle: {
		//color: '#717AEF',
		color: 'white',
		fontWeight: 'bold'
	}

});















