import React, {
	Component,
} from 'react';
import {
	View,
	Text,
	Image,
	TouchableHighlight,
	StyleSheet
} from 'react-native';


module.exports = React.createClass({

	getInitialState: function(){

		return {

		};

	},

	render: function(){
		return (
			<TouchableHighlight
				style={styles.button}
				onPress={this.props.onPress}
			>
				<View
					style={styles.row}
				>
					<View
						style={styles.profileContainer}
					>
						<Image
							source={require('image!Jeffy')}
							style={styles.image}
						/>
					</View>

					<View
						style={styles.textContainer}
					>
						<Text
							style={styles.userName}
						> 
							{this.props.user}
						</Text>
						<Text
							style={styles.text}
						> 
							{this.props.text} 
						</Text>
					</View>

					<View
						style={styles.arrowContainer}
					>
						<Image
							source={require('image!rightArrow')}
			
						/>
					</View>
				</View>
			</TouchableHighlight>
		);
	}


});


var styles = StyleSheet.create({

	button: {
		backgroundColor: 'white',
		paddingLeft: 8,
		paddingRight: 8
	},
	image:{
		width: 50,
		height: 50,
		borderWidth: 2,
		borderColor: 'black',
		marginRight: 14
	},
	row: {
		flexDirection: 'row',
		paddingTop: 18,
		paddingBottom: 28
	},
	userName: {
		fontWeight: 'bold'
	},
	text: {
		fontWeight: '100',
		marginTop: 8
	},
	profileContainer: {
		flex: 1
	},
	textContainer: {
		marginTop: 2,
		flex: 4
	},
	arrowContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center'
	}

});















