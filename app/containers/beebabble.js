'use strict'

import React, { Component } from 'react';
import {
	TabBarIOS,
	StyleSheet
} from 'react-native';

import Feed from '../components/feed/feed';
import MsgList from '../components/messages/msgList';
import Profile from '../components/profile/profile';

import { Router, Scene } from 'react-native-router-flux';


module.exports = React.createClass({

	getInitialState: function() {
		return {
			selectedTab: 'feedTab'
		};
	},

	render: function() {
		return (
			<TabBarIOS
				tintColor="#0BDD97"
				barTintColor="#f1f1f1"
				key="TabBar"
			>

				<TabBarIOS.Item
					title="Feed"
					icon={require('../img/castle-icon.png')}
					selected={this.state.selectedTab === 'feedTab'}
					onPress = { () => {
						this.setState({
							selectedTab: 'feedTab'
						});
					}}
				>
					<Feed />
				</TabBarIOS.Item>

				<TabBarIOS.Item
					title="Messages"
					icon={require('../img/castle-icon.png')}
					selected={this.state.selectedTab === 'msgTab'}
					onPress = { () => {
						this.setState({
							selectedTab: 'msgTab'
						});
					}}
				>
					<MsgList />
				</TabBarIOS.Item>


				<TabBarIOS.Item
					title="Profile"
					icon={require('../img/castle-icon.png')}
					selected={this.state.selectedTab === 'profileTab'}
					onPress = { () => {
						this.setState({
							selectedTab: 'profileTab'
						});
					}}

				>
					<Profile />
				</TabBarIOS.Item>

			</TabBarIOS>
		);
	}

});























