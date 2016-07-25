'use strict'

import React, { Component } from 'react';
import {
	TabBarIOS,
	Text,
	StyleSheet,
	StatusBar
} from 'react-native';

import Feed from './feed';
import MsgList from './messages';
import Profile from './profile';
//import SingleConversation from '../components/messages/singleConversation';
import Conversation from './conversation';

import { Router, Scene } from 'react-native-router-flux';

import { connect } from 'react-redux';

const RouterWithRedux = connect()(Router);


class TabIcon extends React.Component {
	render() {
      return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
	}
}


module.exports = React.createClass({

	getInitialState: function() {
		return {
			selectedTab: 'feedTab'
		};
	},

	render: function() {
		return (

			<RouterWithRedux
				navigationBarStyle={styles.navBar}
				titleStyle={styles.navTitle}
			>
			<Scene key="roots">
				<Scene key="maintabs" tabs={true} style={styles.container} >
					<Scene key="Home" title="Home" icon={TabIcon} component={Feed}  initial={true} />
					<Scene key="Messages" title="Messages" icon={TabIcon}  >
						<Scene key="MsgList" title="Messages" component={MsgList} passProps={true}  />
						<Scene key="SingleConvo" title="" component={Conversation} hideTabBar={true}  />
					</Scene>
					<Scene key="Profile" title="Profile" icon={TabIcon} component={Profile} />
				</Scene>
			</Scene>
			</RouterWithRedux>
		);
	}

});



var styles = StyleSheet.create({
	container: {
		backgroundColor: 'aliceblue'
	},
	navBar: {
		backgroundColor: 'black'
	},
	navTitle: {
		color: 'white'
	}

});



















