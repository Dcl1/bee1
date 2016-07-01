import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight
} from 'react-native';

module.exports = React.createClass({

	render: function(){
		return (
			<View style={styles.container}>
				<Text>
					This is the profile
				</Text>
			</View>
		);
	}

});


var styles = StyleSheet.create({
	container: {
		marginTop: 250
	}

});