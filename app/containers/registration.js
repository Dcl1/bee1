'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	StatusBar,
	TouchableHighlight
} from 'react-native';


import { Actions } from 'react-native-router-flux';
import Sound from 'react-native-sound';

var whoosh = new Sound('cMino.mp3', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		console.log('failed to load the sound', error );
	} else {
		console.log('duration in seconds: ' + whoosh.getDuration() + 
			'number of channels: ' + whoosh.getNumberOfChannels());
	}
});

module.exports = React.createClass({

	getInitialState: function(){
		return {

		};
	},

	componentDidMount: function(){

		whoosh.play((success) => {
			if (success) {
				console.log('sucessfully finished playing');
			} else {
				console.log('playback failed due to audio decodings errors');
			}
		});

		whoosh.setVolume(0.5);


		// setTimeout(() => {
		// 	whoosh.stop();
		// }, 3000);

	},

	selected: function(){

		Actions.BackStory();
		whoosh.stop();

	},

	render: function(){


		return  (
			<View
				style={styles.container}
			>
				<StatusBar
					barStyle="light-content"
				/>
				<Text>
					Choose which character to play as!
				</Text>

				<TouchableHighlight
					style={styles.card}
					onPress={this.selected}
				>
					<View style={styles.cardContent}>
						<Image 
							style={styles.image}
							source={{uri: "https://firebasestorage.googleapis.com/v0/b/rnf-bee001.appspot.com/o/profiles%2FClaire.jpg?alt=media&token=4e9a06f7-ff09-4e9a-a29d-bd761fd2f3c1"}}
						/>
						<Text>
							Taylor
						</Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight
					style={styles.card}
					onPress={this.selected}
				>
					<View style={styles.cardContent}>
						<Image 
							style={styles.image}
							source={{uri: "https://firebasestorage.googleapis.com/v0/b/rnf-bee001.appspot.com/o/profiles%2FRichy.jpeg?alt=media&token=f46bbd9a-0918-4845-8488-ad5e0233b2ad"}}
						/>
						<Text>
							Jamie
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}

});


var styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#717AEF',
		justifyContent: 'center',
		paddingBottom: 88,
		paddingTop: 24
	},
	card: {
		flex: 1,
		backgroundColor: 'white',
		marginLeft: 8,
		marginRight: 8,
		marginTop: 32,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	    shadowColor: "#000000",
	    shadowOpacity: 0.8,
	    shadowRadius: 2,
	    shadowOffset: {
	      height: 1,
	      width: 0
	    }

	},
	cardContent: {
		flexDirection: 'row',
		padding: 10
	},

	image: {
		width: 100,
		height: 100,
		marginRight: 20
	}

});





































