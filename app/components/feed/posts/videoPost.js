import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';

import Video from 'react-native-video';
import firebase from 'firebase';
import FbApp from '../../../firebase/fbApp';

var storage = firebase.storage();
var storageRef = storage.ref();


module.exports = React.createClass({

	getInitialState: function(){

		this.theLink;

		return {
			theUrl: '',
			active: false
		}

	},

	componentWillMount: function(){

		var _this = this;


		firebase.auth().onAuthStateChanged( function(user) {

			if(user) {
				_this.callUrl();
			} else {

			}

		});

	},

	callUrl: function(){

		var _this = this;

		var mediaRef = storageRef.child('videos/test1.mp4');
		mediaRef.getDownloadURL().then(function(url){
			console.log(url);
			_this.setState({
				theUrl: url,
				active: true
			});
			//_this.theLink = url


		}).catch(function(error){
		  switch (error.code) {
		    case 'storage/object_not_found':
		    	console.log("File doesn't exist");
		      // File doesn't exist
		      break;

		    case 'storage/unauthorized':
		    	console.log("User doesn't have permission to access the object");
		      // User doesn't have permission to access the object
		      break;

		    case 'storage/canceled':
		    	console.log("User canceled the upload");
		      // User canceled the upload
		      break;

		    case 'storage/unknown':
		    	console.log("Unknown error occurred, inspect the server response");
		      // Unknown error occurred, inspect the server response
		      break;
		  }
		});


	},

	componentWillUnmoun: function(){
		console.log("WHY IS THIS UNMOUNTING???");
	},

	


	render: function(){


		return (
			<View style={styles.container}>
				<View style={styles.card}>
					<Text> This is the VIDEO </Text>
					{
						this.state.active == true ?
						<Video
							style={styles.video}
							source = {{uri: this.state.theUrl }}
						/>
						:
						<Image 
							source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} 
							style={styles.video}
						/> 

					}


				</View>
			</View>	
		);
	}

});





var styles =StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: 'column',
		marginBottom: 16
	},

	card: {
		marginLeft: 8,
		marginRight: 8,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#CDCDCD',
		backgroundColor: 'white'
	},

	video: {
		flex: 1,
		height: 240
	}

});



















