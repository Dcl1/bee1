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
			dataArray: theData
		};
	},

	componentWillMount: function(){

		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(this.props.dataArray)
		})
		
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


	_renderRow: function(rowData: string, sectionID: number, rowID: number) {


		return (


			<View>
				<Post
					userName = {rowData.user}
					caption = {rowData.caption}
					orderId = {rowData.postId}
					mediaSrc={rowData.media}
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
		marginBottom: 20, 
		backgroundColor: '#717AEF',
		paddingBottom: 10,
		paddingTop: 10
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























