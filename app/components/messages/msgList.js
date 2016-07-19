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
import epiTwoMsgList from '../../data/epiTwo/messageList.json';

module.exports = React.createClass({


	getInitialState: function(){
		var theData = [{"user" : "bad", "id" : 0,"text" : "guy"}, {"user" : "", "id" : 0 ,"text" : ""}];

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(theData),
			dataArray: theData
		};
	},


	increaseEpisode: function(){
		this.props.updateepisode();
		//console.log("Current Current " + this.props.episode);
		this.checkEpisode(this.props.episode);
	},

	checkEpisode: function(epi){
		console.log("X on the hat, this epi is " + epi)
		switch(epi){
			case 1:
				this.setState({dataSource: this.state.dataSource.cloneWithRows(
					epiOneMsgList.msgList[0].messages
				)});
				break;
			case 2:
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(
						epiTwoMsgList.msgList[0].messages
					)
				});
				break;
			default: 
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(
						[]
					)
				});
		}
	},


	componentWillMount: function(){
		this.checkEpisode(this.props.episode);
	},


	render: function(){

		//console.log(this.props.episode);
		//console.log(this.state.dataSource);
		

		return (
			<View style={styles.container}>
				<ListView
					style={styles.msgList}
					enableEmptySections={true}
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
			<TouchableHighlight style={styles.postCard} onPress={Actions.SingleConvo.bind(this, {convoo: rowData.id})}>
				<View>
					<Text>
						{this.state.userName}
					</Text>
					<Text> {rowData.user} </Text>
					<Text> {rowData.text} </Text>
					<Text> {rowData.id} </Text>
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












