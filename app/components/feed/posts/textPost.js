import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';

module.exports = React.createClass({

	render: function(){
		return (
			<View style={styles.container} >

				<View style={styles.card}>


					<Text style={styles.captionStyle}>
						{this.props.caption}
					</Text>

					<View style={styles.caption}>
						<View style={styles.nameContainer}>
							<Image 
								source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} 
								style={styles.userImage}
							/> 
							<Text
								style={styles.nameStyle}
							> 
								{this.props.userName} 
							</Text>
						</View>
					</View>


				</View>

			</View>
		);
	}

});


var styles = StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: 'column',
		marginBottom: 16
	},

	userImage: {
		width: 16,
		height: 16,
		borderRadius: 8
	},

	card: {
		marginLeft: 8,
		marginRight: 8,
		borderTopWidth: 1,
		borderColor: '#CDCDCD',
		backgroundColor: 'white'
	},

	actionArea: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginRight: 8,
		marginLeft: 8,
		marginTop: 8
	},

	actionButton: {
		borderWidth: 0,
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 4,
		paddingBottom: 4,
		marginLeft: 8,
		marginBottom: 8,
		borderRadius: 4,
		justifyContent: 'flex-end'
	},

	actionIcons: {
		width: 16,
		height: 16
	},

	userArea: {
		padding: 8
	},

	captionStyle: {
		fontWeight: 'bold',
		fontSize: 48,
		marginTop: 16,
		marginBottom: 16
	},

	nameContainer: {
		borderWidth: 2,
		width: 130,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	nameStyle: {
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 6,
		paddingBottom: 6,
		fontWeight: 'bold',
		fontSize: 10
	}

});






























