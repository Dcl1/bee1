import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	ListView,
	TouchableHighlight
} from 'react-native';



module.exports = React.createClass({


	getInitialState: function(){
		var theData = [{"user" : "fred", "text" : "cmon man"}, {"user" : "helio", "text" : "zoom zoom"}];

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(theData),
			dataArray: theData
		};
	},


	render: function(){
		return (
			<View style={styles.container}>
				<ListView
					style={styles.msgList}
					dataSource={this.state.dataSource}
					renderRow = {this._renderRow}
					renderSectionHeader={this._renderSectionHeader}
				/>
			</View>
		);
	},

	_renderRow: function(rowData: string, sectionID: number, rowID: number ) {
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
	container: {
		flex: 1,
		flexDirection: 'column'
	},

	msgList: {
		marginTop: 70
	},

	postCard: {
		flex: 1,
		flexDirection: 'column',
		padding: 15,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'grey'
	}

});












