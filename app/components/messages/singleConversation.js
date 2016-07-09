import React from 'react';
import {
	View,
	Text,
	ListView,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import InvertibleScrollView from 'react-native-invertible-scroll-view';


module.exports = React.createClass({

	getInitialState: function(){
		var msgs =[
			{"user": 1, "text" : "Hello"},
			{"user": 1, "text" : "Hello Zooommming Low"},
			{"user": 2, "text" : "Hi dude"},
			{"user": 1, "text" : "Hell sdo"},
			{"user": 2, "text" : "Hellodsfs 877"},
			{"user": 1, "text" : "Hxc xello"},
			{"user": 2, "text" : "45454Hello"},
			{"user": 2, "text" : "1231Hello"},
			{"user": 1, "text" : "dsfdscHello"},
			{"user": 1, "text" : "Hellfsdfso"},
			{"user": 2, "text" : "Hefsdfsdllo"},
			{"user": 1, "text" : "Hello"}
		];

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(msgs)
		};

	},

	render: function(){
		return (
			<ListView
				renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
				dataSource={this.state.dataSource}
				renderHeader={this._renderHeader}
				renderRow={this._renderRow}
				style={styles.container}
			/>
		);
	},


	_renderHeader: function(){
		return (
			<TouchableHighlight
				onPress={this._onPress()}
				style={styles.button}>
				<Text>Add a row </Text>
			</TouchableHighlight>
		);
	},

	_renderRow: function(rowData: string, sectionID: number, rowID: number){
		return <Text key={rowID} style={styles.row}>{rowData.text} </Text>
	},


	_onPress: function(){
		
	}


});


var styles = StyleSheet.create({
	containers: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},

	button: {
		padding: 20,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'black'
	},

	row: {
		padding: 4
	}

});













