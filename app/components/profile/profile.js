import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	Image,
	ListView,
	TouchableHighlight
} from 'react-native';


import Episodelist from './episodeList';

module.exports = React.createClass({

	getInitialState: function() {
		return{
			sampleData: {},
			sampleName: '',
			profPic: ''
		};
	},

	_border: function(x) {
		return {
			borderWidth: 4,
			borderColor: x
		}
	},

	componentWillMount: function(){
		var theJSON = require('../../data/users.json');
		//console.log(theJSON);
		var name = theJSON.users[0].user.name;
		var pic = theJSON.users[0].user.pic;
		this.setState({
			sampleData: theJSON,
			profPic: pic
		});
	},

	_seeData: function(){
		console.log(this.state.sampleData);
		console.log(this.state.profPic);
		var jso = this.state.sampleData;
		var name = jso.users[0].user.name
		this.setState({
			sampleName: name
		});
	},


	render: function(){


		return (
			<View style={styles.container}>
				<View style={styles.topSection}>
					<View style={styles.profileRow}>
						<View style={styles.profileImg}>
							<Image 
								resizeMode="contain"
								source={require('image!Sammy')}
							/>
						</View>
						<Text style={styles.profileInfo}>
							This is the profile information
						</Text>
					</View>
				</View>
			
				<View>
					<Text>
						{this.state.sampleName}
					</Text>
					<TouchableHighlight onPress={() => this.props.updateepisode()}>
						<Text> Press </Text>
					</TouchableHighlight>
				</View>

				<View style={styles.episodeSwitcher} >
					<Episodelist />

				</View>
			</View>
		);
	}

});


var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 70
	},

	topSection: {
		flex: .2,
		backgroundColor: 'red'
	},

	profileRow: {
		flexDirection: 'row',
		flex: 1,
		borderBottomColor: 'grey'
	},

	profileImg: {
		flex: 0.33,
		backgroundColor: 'purple'
	},

	profileInfo: {
		flex: 0.666
	},

	episodeSwitcher: {
		flex: .8,
		paddingTop: 10
	}

});
















