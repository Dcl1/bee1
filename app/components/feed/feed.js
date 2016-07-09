import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	ListView,
	TouchableHighlight
} from 'react-native';


import PostButton from './postButton.js';

module.exports = React.createClass({

	getInitialState: function(){
		var theData = [{"user": "ohoh", "text": "boo you too boo you too"}, {"user": "ohoh", "text": "boo you too boo you too"}, {"user": "ohoh", "text": "boo you too boo you too"}, {"user": "ohoh", "text": "boo you too boo you too"}];

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(theData),
			dataArray: theData
		};
	},


	render: function() {
		return (
			<View>
				<ListView
					dataSource={this.state.dataSource}
					renderRow = {this._renderRow}
					renderSectionHeader= {this._renderSectionHeader}
					style={styles.listStyle}
				/>
			</View>
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
			<TouchableHighlight style={styles.postCard}>
				<View>
					<Text> {rowData.user} </Text>
					<Text> {rowData.text} </Text>
				</View>
			</TouchableHighlight>
		);
	}

});



var styles = StyleSheet.create({
	listStyle: {
		flex: 1,
		flexDirection: 'column',
		padding: 0,
		margin: 0,
		height: 8000,
		marginTop: 66
	},

	sectionHeader: {
		marginBottom: 20, 
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 10
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























