import React from 'react';
import {
	View,
	Image,
	Text,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 6,
		marginBottom: 6,
		marginLeft: 32,
		marginRight: 16
	},

	profImg: {
		flex: 1,
		width: 50,
		height: 50
	},

	convoBubble: {
		flex: 8,
		backgroundColor: '#87cefa',
		padding: 6,
		borderRadius: 6,
		justifyContent: 'center'
	},

	convoText: {
		textAlign: 'right'
	}

});

module.exports = React.createClass({
	render: function(){
		return (
			<View style={styles.row}>
				<View style={styles.convoBubble}>
					<Text style={styles.convoText}>
						{this.props.text}
					</Text>
				</View>
			</View>
		);
	}

});