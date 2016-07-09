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
		marginRight: 32,
		marginLeft: 8
	},

	profImg: {
		width: 50,
		height: 50
	},

	convoBubble: {
		marginLeft: 8,
		backgroundColor: '#f5f5f5',
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 12,
		paddingRight: 12,
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
					source={this.props.source}
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