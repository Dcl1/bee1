import React from 'react';
import {
	View,
	Text,
	ListView,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import OtherUser from './otherUser';
import YouUser from './youUser';

import InvertibleScrollView from 'react-native-invertible-scroll-view';

import conversationOne from '../../data/epiOne/conversations/conversations';


module.exports = React.createClass({


	getInitialState: function(){

		var msgs =[];
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(msgs),
			dataArray: msgs
		};

	},

	componentWillMount: function(){
		var Episode = this.props.episode;
		var Step = this.props.step;
		var convoID = this.props.convoID;
		
		
		this.checkConvo(Episode, convoID, Step);
	},

	checkConvo: function(Episode, convoID, Step) {

		var _this = this;

		function checkEpi(EE) {
			switch(EE) {
				case 1:
					return conversationOne.convo;
				case 2:
					return conversationTwo.convo;
				default:
					return conversationDefault.convo;
			}
		}

		
		var convoArray = checkEpi(Episode);

		//console.log(convoArray);
		console.log("convoID is: " + convoID);
		var selectedConvo = convoArray[convoID].conversation;
		//console.log(selectedConvo);
		selectedConvo.map(function(obj){
			//console.log(obj.option, obj.user, obj.text);
			_this.props.returnconversation(obj.option, obj.user, obj.text );
		});

	},
	
	componentWillReceiveProps: function(nextProps){
		if(nextProps.convoArray !== this.props.convoArray) {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(nextProps.convoArray)
			})	
		} else {
			
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(nextProps.convoArray)
			})	
			console.log("I guess this isn't working")
		}
	},

	componentWillUnmount: function(){
		console.log("It UNMOUNTED!")
		this.props.clearconversation();
	},

	render: function(){

		return (
			<View
				style={styles.container}
			>
				<ListView
					renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
					dataSource={this.state.dataSource}
					renderHeader={this._renderHeader}
					renderRow={this._renderRow}
					enableEmptySections={true}
					style={styles.list}
				/>
				<View
					//style={styles.inputArea}
				>
					<TouchableHighlight
						style={styles.inputButton}
						onPress={this._onPress}
					>
						<Text> This is an input </Text>
					</TouchableHighlight>
				</View>
				<View>
						<Text> This is the episode {this.props.episode} </Text>
						<Text> This is the current step {this.props.step} </Text>
						<Text> This is the current conversation id {this.props.convoID} </Text>
				</View>
			</View>

		);
	},




	_renderRow: function(rowData: string, sectionID: number, rowID: number){
		return(
			<View>
				{ rowData.user == 'player' ?  <YouUser text={rowData.text} /> : <OtherUser text={rowData.text} source={require('image!Jeffy')} /> }
			</View>
		);
	},



	_onPress: function(){
		this.props.returnconversation(false, "Baily", "Go go gadget" );
	}


});


var styles = StyleSheet.create({
	containers: {
		backgroundColor: 'black',
		flex: 1,
		padding: 0,
		margin: 0
	},

	list: {
		backgroundColor: '#F5FCFF',
		height: 400
	},

	inputArea: {
		backgroundColor: 'red',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0
	},

	inputButton: {
		backgroundColor: 'red',
		justifyContent: 'center'
	},

	row: {
		padding: 4
	}

});













