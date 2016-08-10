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

const UIManger = require('NativeModules').UIManager;



var storage = firebase.storage();
var storageRef = storage.ref();


module.exports = React.createClass({

	getInitialState: function(){

		this.theLink;

		return {
			theUrl: 'https://facebook.github.io/react/img/logo_og.png',
			active: false,
			play: false
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

		var mediaRef = storageRef.child(this.props.mediaurl);
		mediaRef.getDownloadURL().then(function(url){
			//console.log(url);
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

	componentWillUnmount: function(){
		console.log("WHY IS THIS UNMOUNTING???");
	},

	onPress: function(){
		this.state.play ? 
		this.setState({
			play: false
		}) :
		this.setState({
			play: true
		});
	},


	render: function(){

		// const handle = React.findNodeHandle(this.refs.myElement);

		// UIManager.measureLayoutRelativeToParent(
		// 	handle,
		// 	(e) => {console.error(e)},
		// 	(x, y, w, h) => {
		// 		console.log("offset", x, y, w, h);
		// });

		var pause = require('image!pauseBtn');
		var play = require('image!playBtn');

		return (
			<View style={styles.container}
				ref='myElement'
			>
				<View style={styles.card}>

					<View style={styles.caption}>
						<View style={styles.nameContainer}>
							<Image 
								source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} 
								style={styles.userImage}
							/> 
							<Text
								style={styles.nameStyle}
							> 
								{this.props.userName} 
							</Text>
						</View>
						<Text style={this.props.caption !== "" ? styles.captionStyle : {}}> {this.props.caption} </Text>

					</View>


					{
						this.state.active == true ?
						<TouchableHighlight
							onPress={this.onPress}
						>
							<View>

								<Video
									style={styles.video}
									source = {{uri: this.state.theUrl }}
									repeat={true}
									paused={this.state.play ? false : true}
									muted={this.state.play ? false : true}
									volume={1.0}
								/>
								<Image
									source= {this.state.play ? pause : play }
									style={styles.videoActionIcon}
								/>
							</View>
						</TouchableHighlight>
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

	userImage: {
		width: 16,
		height: 16,
		borderRadius: 8,
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
	},

	videoActionIcon: {
		width: 40,
		height: 40,
		position: 'absolute',
		bottom: 36,
		right: 16,
		opacity: 0.9
	},

	caption: {
		padding: 8
	},

	captionStyle: {
		fontWeight: '200',
		fontSize: 12,
		marginTop: 16,
		marginBottom: 16
	},

	nameContainer: {
		borderWidth: 0,
		width: 130,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	nameStyle: {
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 6,
		paddingBottom: 6,
		fontWeight: 'bold',
		fontSize: 12
	},

	imgStyle:{
		flex: 1,
		height: 170
	}

});



















