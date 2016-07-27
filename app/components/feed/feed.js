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
import Post from './post';

/* data */
import FeedOne from '../../data/epiOne/feed/feed.json';
/* data */



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

		this.checkData(this.props.episode);
		// this.setState({
		// 	dataSource: this.state.dataSource.cloneWithRows(this.props.dataArray)
		// });
		
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
		if(nextProps.dataArray !== this.props.dataArray){
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(nextProps.dataArray)
			});
		}
	},

	_renderRow: function(rowData: string, sectionID: number, rowID: number) {

		console.log(rowData.user);

		return (
			<View>
				<Post
					userName = {rowData.user}
					caption = {rowData.caption}
					orderId = {rowData.postid}
					mediaurl = {rowData.url}
				/>
			</View>

		);
	}

});



var styles = StyleSheet.create({

	container: {
		backgroundColor: 'white'

	},	
	listStyle: {
		backgroundColor: 'white',
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























