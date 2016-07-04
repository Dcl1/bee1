import React from 'react';

import {
	View,	
	StyleSheet,
	Text,
	ListView,
	TouchableHighlight
} from 'react-native';


import EpisodeRow from './episodeRow.js';


module.exports = React.createClass({

	getInitialState: function(){
		var theData = [{"number": 1 , "title": "Welcome to Brookhaven"}, {"number": 2 , "title": "The Investigation"}];

			var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2 });
			return {
				dataSource: ds.cloneWithRows(theData),
				dataArray: theData
			};
	},

	render: function(){
		return (
			<View>
				<ListView
					automaticallyAdjustContentInsets={false}
					dataSource={this.state.dataSource}
					renderRow={this._renderRow}
					style={styles.listStyle}
				/>
			</View>
		);
	},


	_renderRow: function(rowData: string, sectionID: number, rowID: number) {
		return (
			<View style={styles.postCard}>
				<Text style={styles.titleArea}>
					{rowData.title}
				</Text>

				<View style={styles.confirmArea}>
					<EpisodeRow />
				</View>
			</View>
		);
	}

});



var styles = StyleSheet.create({
	listStyle: {
		flex: 1,
		flexDirection: 'column',
		padding: 0,
		margin: 0,
		height: 800
	},

	titleArea: {
		flex: 5
	},

	confirmArea: {
		flex: 1
	},

	postCard: {
		flex: 1,
		flexDirection: 'row',
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		backgroundColor: 'white'
	}

});











