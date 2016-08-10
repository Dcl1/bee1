'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';



module.exports = React.createClass({

	getInitialState: function(){

		return {

		};
	},

	componentWillMount: function(){

	},

	render: function(){
		return (
			<View>
				<Text> This is the start screen </Text>
			</View>
		);
	}

});
