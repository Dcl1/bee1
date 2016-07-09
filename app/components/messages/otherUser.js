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
		marginTop: 4,
		marginBottom: 4,
		marginRight: 32
	},

	profImg: {
		flex: 1,
		width: 50,
		height: 50
	},

	convoBubble: {
		flex: 8,
		backgroundColor: '#f5f5f5',
		padding: 6,
		borderRadius: 6,
		justifyContent: 'center'
	}
});

module.exports = React.createClass({
	render: function(){
		return (
			<View style={styles.row}>
				<Image	
					resizeMode="contain"
					style={styles.profImg}
					source={require('image!Sammy')}
				/>
				<View style={styles.convoBubble}>
					<Text>
						{this.props.text}
					</Text>
				</View>
			</View>
		);
	}

});