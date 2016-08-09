import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	ListView,
	TouchableHighlight,
	StatusBar
} from 'react-native';


import PostButton from './postButton.js';
//import Post from './post';
import FbPost from './fbPost';

/* data */
import FeedOne from '../../data/epiOne/feed/feed.json';
/* data */

import firebase from 'firebase';
import FbApp from '../../firebase/fbApp';
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();


module.exports = React.createClass({

	getInitialState: function(){
		var theData = [];

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(theData),
			dataArray: theData,
		};
	},

	componentWillMount: function(){

		var _this = this;

	   	firebase.auth().onAuthStateChanged( function(user) {

	   		if(user) {
	   			_this.props.signin();

	   		} else {
	   			console.log("User is signed out");
	   		}

	   	});



		this.checkData(this.props.episode);

		
		// this.setState({
		// 	dataSource: this.state.dataSource.cloneWithRows(this.props.dataArray)
		// });
		
	},

	componentDidUpdate: function(prevProps, prevState){

		var sign = this.props.signed;

		if(prevProps.signed !== this.props.signed && this.props.signed == true ) {
			this.checkData(this.props.episode);
		}

	},


	checkData: function(epi) {

		var _this = this;

		if(epi === 1) {
			FeedOne.feed.map(function(obj){
				var mediaRef = storageRef.child(obj.media);
				mediaRef.getDownloadURL().then(function(url){
					_this.props.callarray(obj.user, obj.type, obj.postId, obj.caption, url)
				}).catch(function(error){
					//console.log(error.message)
				});

				
			});
		} else if (epi === 2) {
			FeedOne.feed.map(function(obj){
				_this.props.callarray(obj.user, obj.type, obj.postId, obj.caption, obj.media)
			});
		} else {
			console.log("what episode are you looking for called from component feed");
		}

	},

	componentWillUnmount: function(){

		console.log("Feed component will Unmount");

	},

	componentWillReceiveProps: function(nextProps){

		//console.log("Signed in " + this.props.signed);

		if(nextProps.dataArray !== this.props.dataArray) {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(nextProps.dataArray)
			});
		}

	},

	render: function() {
		return (

				<ListView
					dataSource={this.state.dataSource}
					renderRow = {this._renderRow}
					renderSectionHeader= {this._renderSectionHeader}
					enableEmptySections={true}
					style={styles.listStyle}
				/>
		);
	},

	_renderSectionHeader: function(){
		return (
			<View style={styles.sectionHeader}>
				<PostButton />
			</View>
		);
	},


	componentWillReceiveProps: function(nextProps){

		//console.log("Signed in " + this.props.signed);
		
		if(nextProps.dataArray !== this.props.dataArray){
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(nextProps.dataArray)
			});
		}
	},

	_renderRow: function(rowData: string, sectionID: number, rowID: number) {


		return (
			<View>
				<FbPost 
					userName = {rowData.user}
					caption = {rowData.caption}
					mediaurl = {rowData.url}
					type = {rowData.mediatype}
				/>
			</View>

		);
	}

});



var styles = StyleSheet.create({

	container: {
		backgroundColor: 'grey'

	},	
	listStyle: {
		backgroundColor: '#F6F6F6',
		marginTop: 64
	},

	sectionHeader: {
		backgroundColor: 'black',
		marginBottom: 20,
		borderBottomWidth: 3,
		borderColor: '#FF978C',
	    shadowColor: "#000000",
	    shadowOpacity: 0.2,
	    shadowRadius: 1,
	    shadowOffset: {
	      height: 2,
	      width: 0
	    }
	},

	postCard: {
		flex: 1,
		flexDirection: 'column',
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		backgroundColor: 'white'
	}

});























