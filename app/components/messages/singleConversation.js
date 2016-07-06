import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';


module.exports = React.createClass({
	render: function(){
		return (
			<View style={styles.center}>
				<Text>
					Go go gadget
				</Text>
			</View>
		);
	}
});


var styles = StyleSheet.create({
	center: {
		alignSelf: 'center'
	}
});