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
		if(epi === 1) {
			this.props.updatemessagelist("bobby", 1, "go bobby go bobby");
		} else {
			console.log("nothing here");
		}
	},


	buttonPress: function(){
		this.props.updatemessagelist("bobby", 1, "go bobby go bobby");
	},

	componentWillReceiveProps (nextProps){
		console.log("nextProps " + nextProps.msgArray);

		if(nextProps.msgArray !== this.props.msgArray ){
			this.setState({
				dataArray: nextProps.msgArray,
				dataSource: this.state.dataSource.cloneWithRows(nextProps.msgArray)
			})
		}
	},


	render: function(){
		return (
			<View style={styles.topMargin}>
				<TouchableHighlight
					onPress={ () => this.buttonPress() }
				>
					<Text> Press This </Text>
				</TouchableHighlight>
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
					<Text> hmmm </Text>
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
		marginTop: 80,
		backgroundColor: 'grey'
	},


	button: {
		padding: 20,
		backgroundColor: 'lightblue',
		marginTop: 20
	}

});
