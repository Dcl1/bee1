import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	ListView,
	TouchableHighlight
} from 'react-native';

import epiOneMsgList from '../../data/epiOne/messageList.json';
import epiTwoMsgList from '../../data/epiTwo/messageList.json';

import { Actions } from 'react-native-router-flux';

import MsgRow from './msgRow';

module.exports = React.createClass({

	getInitialState: function(){
		var theData = [];
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2 });
		return {
			dataSource: ds.cloneWithRows(theData),
			dataArray: theData
		};
	},


	componentWillMount: function(){
		this.checkData(this.props.episode);
	},

	checkData: function(epi){

		var _this = this;

		if(epi === 1) {
			epiOneMsgList.msgList[0].messages.map(function(obj){
				//console.log("mmm " + obj.cid)
				_this.props.updatemessagelist(obj.user, obj.cid, obj.text)
			});
		} else if (epi === 2) {
			_this.props.clearmessagelist()
		} else if (epi === 3) {
			_this.props.clearmessagelist()
			epiTwoMsgList.msgList[0].messages.map(function(obj){
				_this.props.updatemessagelist(obj.user, obj.cid, obj.text)
			});
		} else {
			console.log("nothing here");
		}
	},


	buttonPress: function(){
		this.props.updatemessagelist("bobby", 1, "go bobby go bobby");
	},

	componentWillReceiveProps (nextProps){

		if(nextProps.episode !== this.props.episode) {
			this.checkData(nextProps.episode)
		}

		if(nextProps.msgArray !== this.props.msgArray ){
			this.setState({
				dataArray: nextProps.msgArray,
				dataSource: this.state.dataSource.cloneWithRows(nextProps.msgArray)
			})
		}
	},


	render: function(){
		return (
			<View style={styles.container}>
				<View
					style={styles.listStyle}
				>
				<ListView
					automaticallyAdjustContentInsets={false}
					enableEmptySections={true}
					dataSource={this.state.dataSource}
					renderRow={this._renderRow}
					
				/>
				</View>
			</View>
		);
	},

	_renderRow: function(rowData: string, sectionID: number, rowID: number) {

		//console.log("convoID " + rowData.user + " & " + rowData.convoID + " & " + rowData.text);

		return (

			<MsgRow
				onPress={() => Actions.SingleConvo({cid: rowData.convoID})}
				user = {rowData.user}
				convoID = {rowData.convoID} 
				text = {rowData.text} 
			/>


		);
	}

});




var styles = StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#F8F8F8'
	},

	listStyle: {
		paddingTop: 60,
		paddingBottom: 80,
		marginTop: 10,
		marginBottom: 10,
		borderBottomWidth: 0,
		borderColor: 'black',
		backgroundColor: 'white',
	},





});






















