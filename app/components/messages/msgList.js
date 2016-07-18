import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	ListView,
	TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';


import epiOneMsgList from '../../data/epiOne/messageList.json';

module.exports = React.createClass({


	getInitialState: function(){
		var theData = [{"user" : "fred", "id" : 1 ,"text" : "cmon man"}, {"user" : "helio", "id" : 2 ,"text" : "zoom zoom"}];

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(theData),
			dataArray: theData
		};
	},


	componentWillMount: function(){
		console.log('This is the message list component');
	},



	increaseEpisode: function(){
		this.props.updatelist(4);
	},


	render: function(){

		console.log(this.props.episode);

		return (
			<View style={styles.container}>
				<ListView
					style={styles.msgList}
					automaticallyAdjustContentInsets={false}
					dataSource={this.state.dataSource}
					renderRow = {this._renderRow}
					renderSectionHeader={this._renderSectionHeader}
				/>
			</View>
		);
	},


	_renderSectionHeader: function(){

		return (
			<TouchableHighlight onPress={this.increaseEpisode}>
				<Text> Increase Episode  </Text>
			</TouchableHighlight>
		);
	},



	_renderRow: function(rowData: string, sectionID: number, rowID: number ) {
		return (
			<TouchableHighlight style={styles.postCard} onPress={Actions.SingleConvo} >
				<View>
					<Text>
						{this.state.userName}
					</Text>
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
		marginTop: 66
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












