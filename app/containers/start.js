'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight
} from 'react-native';
import { bindActionCreators } from 'redux';

import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';


module.exports = React.createClass({

	getInitialState: function(){

		return {
			ended: false
		};
	},

	componentWillMount: function(){

	},

	onEnd: function(){
		this.setState({
			ended: true
		});
	},

	render: function(){
		return (
			<View
				style={styles.container}
			>
				<Video
					source={{uri: "https://firebasestorage.googleapis.com/v0/b/rnf-bee001.appspot.com/o/videos%2Fmotors_1.mp4?alt=media&token=062b729b-0262-46ac-a461-92eac3253b54"}}
					style={styles.backgroundVideo}
					volume={0.2}
					resizemode="cover"
					onEnd={this.onEnd}
				/>
				{
					this.state.ended ? 
					<TouchableHighlight
						style={styles.startButton}
						onPress={() => Actions.Home()}
					>
						<Text style={styles.textStyle}>  PRESS BUTTON </Text>
					</TouchableHighlight>
					:
					<View>

					</View>

				}



			</View>
		);
	}

});



var styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: 'black',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	textStyle: {
		color: 'white'
	},

	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},

	startButton: {
		padding: 10,
		backgroundColor: '#EE4735',
		marginBottom: 30
	}



});

















