'use strict'

import React, { Component } from 'react';
import {
	TabBarIOS,
	Text,
	StyleSheet
} from 'react-native';

import Feed from '../components/feed/feed';
import MsgList from '../components/messages/msgList';
import Profile from '../components/profile/profile';

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
			<RouterWithRedux>
			<Scene key="roots">
				<Scene key="maintabs" tabs={true} style={styles.container} >
					<Scene key="Feed" title="Feed" icon={TabIcon} component={Feed}  initial={true} />
					<Scene key="MsgList" title="Messages" icon={TabIcon} component={MsgList}  />
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
	}

});


















