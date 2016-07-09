import React from 'react';
import {
	View,
	Text,
	ListView,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import InvertibleScrollView from 'react-native-invertible-scroll-view';

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



module.exports = React.createClass({


	getInitialState: function(){


		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		return {
			dataSource: ds.cloneWithRows(msgs),
			dataArray: msgs,
			num : 1
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
				onPress={this._onPress}
				style={styles.button}>
				<Text>Add a row </Text>
			</TouchableHighlight>
		);
	},

	_renderRow: function(rowData: string, sectionID: number, rowID: number){
		return <Text key={rowID} style={styles.row}>{rowData.text} </Text>
	},


	_onPress: function(){
		let ray = this.state.dataArray;
		//let oldnum = this.state.num;
		//let newnum = oldnum + 1;

		let addRay = [{"user": 1, "text" : "Hello"}];
		
		Array.prototype.unshift.apply(ray, addRay);

		console.log(ray);


		//this.setState({
		//	num : newnum
		//});

		//console.log("hello there" + this.state.num + "");
		//msgs.push({"user": 1, "text" : "Hello"});
	   // var rows = msg;
	    // It's important to keep row IDs consistent to avoid extra rendering. You
	    // may need to reverse the list of row IDs so the so that the inversion
	    // will order the rows correctly.
	    //var rowIds = rows.map((row, index) => index).reverse();
	   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
	   this.setState({
	      dataSource: ds.cloneWithRows(ray),
	 	});
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













