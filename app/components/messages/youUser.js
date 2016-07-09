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
		marginRight: 8,
		justifyContent: 'flex-end'
	},

	profImg: {

		width: 50,
		height: 50
	},

	convoBubble: {
		
		backgroundColor: '#87cefa',
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 12,
		paddingRight: 12,
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