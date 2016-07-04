import React from 'react';

import {
	View,
	StyleSheet,
	TouchableHighlight
} from 'react-native';


module.exports = React.createClass({


	getInitialState: function(){
		return {
			selected: false
		};
	},

	_selectedColor: function(x){
		return {
			width: 20,
			height: 20,
			backgroundColor: x
		};
	},

	_clicked: function(){
		this.setState({
			selected: true
		})
	},

	render: function(){
		return (
			<TouchableHighlight onPress={this._clicked}>
				<View style={ this.state.selected ? this._selectedColor('green') : this._selectedColor('grey')}>

				</View>
			</TouchableHighlight>
		);
	}

});