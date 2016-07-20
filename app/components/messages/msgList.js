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
		var theData = [{"user" : "bad", "id" : 0,"text" : "guy"}, {"user" : "boony", "id" : 0 ,"text" : "boony boony bonny"}];

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(theData),
			dataArray: theData
		};
	},




	checkEpisode: function(epi){

		var _this = this;
		//console.log("X on the hat, this epi is " + epi)
		switch(epi){
			case 1:
				var jsonArray = epiOneMsgList.msgList[0].messages;
				jsonArray.map(function(obj){
					_this.props.updatemessagelist(obj.user, obj.convoID, obj.text );
				});
				
				break;
			case 2:
				var jsonArray = epiTwoMsgList.msgList[0].messages;
				jsonArray.map(function(obj){
					_this.props.updatemessagelist(obj.user, obj.convoID, obj.text );
				});

				break;
			default: 
				break;
		}
	},


	componentWillMount: function(){
		this.checkEpisode(this.props.episode);
	},


	render: function(){

		//var Arr = this.props.msgArray;
		//this.setState({
		//	dataArray: Arr
		//});

		//console.log(this.state.dataArray);
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
	},

	increaseEpisode: function(){
		this.props.updateepisode();	
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












