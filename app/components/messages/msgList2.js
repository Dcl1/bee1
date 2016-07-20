import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	ListView,
	TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';



module.exports = React.createClass({

	getInitialState: function(){
		var theData = [];
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(theData),
			dataTest: theData
		};
	},

	componentWillMount: function(){
		this.checkData(this.props.episode);

	},

	componentDidMount: function(){
		
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(this.props.msgArray),
			dataTest: this.props.msgArray
		});
		console.log(">>" + this.state.dataTest);
	},

	


	checkData: function(epi){
		if(epi === 1) {
			this.props.updatemessagelist("bobby", 1, "go bobby go bobby");
		} else {
			console.log("nothing here");
		}
	},

	//shouldComponentUpdate: function(nextProps, nextState){
	//	console.log(nextProps.currentArray !== this.props.currentArray);
	//	return nextProps.currentArray !== this.props.currentArray;
	//},

	buttonPress: function(){
		this.props.updatemessagelist("bobby", 1, "go bobby go bobby");
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(this.props.msgArray),
			dataTest: this.props.msgArray
		});
		console.log(">>" + this.state.dataTest);
	},



	render: function(){

		var sample = this.props.msgArray;
		var length = sample.length;


		return (
			<View style={styles.topMargin}>
				<TouchableHighlight
					onPress={ () => this.buttonPress() }
				>
					<Text> Press This </Text>
				</TouchableHighlight>
				<Text> {this.props.episode} </Text>
				<View>
					<Text> {length} </Text>
				</View>
				<ListView
					automaticallyAdjustContentInsets={false}
					enableEmptySections={true}
					dataSource={this.state.dataSource}
					renderRow={this._renderRow}
				/>
			</View>
		);
	},


	_renderRow: function(rowData: string, sectionID: number, rowID: number) {
		return (
			<TouchableHighlight
				style={styles.button}
			>
				<View>
					<Text> hmm </Text>
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

	topMargin: {
		marginTop: 100,
		backgroundColor: 'red'
	},

	button: {
		padding: 20,
		backgroundColor: 'blue'
	}


});