import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	ListView,
	TouchableHighlight
} from 'react-native';


module.exports = React.createClass({

	render: function(){
		return (
			<View style={styles.container}>
				<Text>
					These are direct messages
				</Text>
			</View>
		);
	}
});


var styles = StyleSheet.create({
	container: {
		marginTop: 50
	}

});