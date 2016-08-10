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

import * as firebase from 'firebase';

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
			visible: []
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



		//this.checkData(this.props.episode);

		
		// this.setState({
		// 	dataSource: this.state.dataSource.cloneWithRows(this.props.dataArray)
		// });
		
	},

	componentDidUpdate: function(prevProps, prevState){

		//console.log("The prev " + this.prevProps.signed + " & " + "The current " + this.props.signed);

		var sign = this.props.signed;

		if(prevProps.signed !== this.props.signed && this.props.signed == true ) {
	
			this.checkData(this.props.episode);
		}

	},


	checkData: function(epi) {

		var _this = this;

		if(epi === 1) {
			FeedOne.feed.map(function(obj){

				_this.props.callarray(obj.user, obj.type, obj.postId, obj.caption, obj.media)
				
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


	},

	componentWillReceiveProps: function(nextProps){

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
					onChangeVisibleRows = { this.isScroll }
				/>
		);
	},

	isScroll: function(visible, changed){

		var visRow = Object.values(visible);

		visRow.map(function(obj){
			for( i in obj) {
				//console.log("visible key " + i, "visible obj " + obj[i]);
				//arr.push(i);
			}

		});


		var chanRow = Object.values(changed);

		chanRow.map(function(obj){
			for( i in obj ) {
				//console.log("changed " + i, obj[i])
				if(obj[i] == false ) {
					console.log("False Row: " + i);
				}
			}
		});

	},

	_renderSectionHeader: function(){
		return (
			<View style={styles.sectionHeader}>
				<PostButton />
			</View>
		);
	},


	componentWillReceiveProps: function(nextProps){
		
		if(nextProps.dataArray !== this.props.dataArray){
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(nextProps.dataArray)
			});
		}
	},

	_renderRow: function(rowData: string, sectionID: number, rowID: number) {


		return (
			<View>
				<Text> {rowID} </Text>
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
		//backgroundColor: '#717AEF',
		backgroundColor: 'white',
		marginBottom: 20,
		borderBottomWidth: 4,
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























