import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';


import firebase from 'firebase';

var storage = firebase.storage();
var storageRef = storage.ref();


module.exports = React.createClass({

	getInitialState: function(){

		return {
			theUrl: 'https://firebasestorage.googleapis.com/v0/b/rnf-bee001.appspot.com/o/images%2Fgradients%403x.png?alt=media&token=f67968f3-d305-4786-93b2-41c5a5643c2d',
			active: false
		}
	},

	componentWillMount: function(){

		var _this = this;

		firebase.auth().onAuthStateChanged( function(user) {
			if(user) {
				_this.callUrl();
			}
		});

	},

	callUrl: function(){

		var _this = this;

		var mediaRef = storageRef.child(this.props.mediaurl);
		mediaRef.getDownloadURL().then(function(url) {
			_this.setState({
				theUrl: url,
				active: true
			});
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

	render: function(){

		return (
			<View style={styles.container}>


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

						<Image 
							source={{uri: this.state.theUrl }}
							style={styles.imgStyle}
						/>


					<View style={styles.actionArea} >
						<TouchableHighlight style={[styles.actionButton, {borderColor: '#FFB000'}]} >
							<Image 
								source={require('image!yellowstar')}
								style={styles.actionIcons}
							/>
						</TouchableHighlight>

						<TouchableHighlight style={[styles.actionButton, {borderColor: '#EE4735'}]} >
							<Image
								source={require('image!redcomment')}
								style={styles.actionIcons}
							/>
						</TouchableHighlight>
					</View>


					</View>

			</View>
		);
	}



});



var styles = StyleSheet.create({

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

	actionArea: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginRight: 8,
		marginLeft: 8,
		marginTop: 8

	},

	actionButton: {
		borderWidth: 0,
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 4,
		paddingBottom: 4,
		marginLeft: 8,
		marginBottom: 16,
		borderRadius: 4,
		justifyContent: 'flex-end'
	},

	actionIcons: {
		width: 16,
		height: 16
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


