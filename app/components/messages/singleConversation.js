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




module.exports = React.createClass({


	getInitialState: function(){

		var msgs =[];
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(msgs),
			dataArray: msgs,
			episodeArray: [],
			currentEpisode: 0,
			currentStep: 0,
			currentConvo: 0
		};

	},

	grabArray: function(ee, stp){
		console.log( ee + " " + stp + " ");
	},


	componentWillMount: function(){
		var Episode = this.props.episode;
		var Step = this.props.step;
		var convoID = this.props.convoID;
		//console.log("This is the conversation ID ID : " + this.props.convoID);
		console.log("duh dude, wtf " + convoID)
		var ray = this.grabArray(Episode, Step);

		this.setState({
			currentEpisode: Episode,
			currentStep: Step,
			currentConvo: convoID
		});
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
					style={styles.inputArea}
				>
					<TouchableHighlight
						style={styles.inputButton}
						onPress={this._onPress}
					>
						<Text> This is an input </Text>
					</TouchableHighlight>
				</View>
				<View>
						<Text> This is the episode {this.state.currentEpisode} </Text>
						<Text> This is the current step {this.state.currentStep} </Text>
						<Text> This is the current conversation id {this.state.currentConvo} </Text>
				</View>
			</View>

		);
	},




	_renderRow: function(rowData: string, sectionID: number, rowID: number){
		return(
			<View>
				{ rowData.user == 1 ? <OtherUser text={rowData.text} source={require('image!Jeffy')} /> : <YouUser text={rowData.text} /> }
			</View>
		);
	},



	_onPress: function(){

		let firstRay = [{"user": 1, "text" : "Hello this is the first array"}];
		let secondRay = [{"user": 2, "text" : "Second Hello this is the second array"}];


		let ray = this.state.dataArray;
		Array.prototype.unshift.apply(ray, secondRay);
	   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
	   this.setState({
	      dataSource: ds.cloneWithRows(ray),
	 	});
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
		backgroundColor: 'white',
		justifyContent: 'center'
	},

	row: {
		padding: 4
	}

});













