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
			<View style={styles.container}>


					<View style={styles.card}>

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
							<Text style={this.props.caption !== "" ? styles.captionStyle : {}}> {this.props.caption} </Text>

						</View>

						<Image 
							source={{uri: this.props.mediaurl}} 
							style={styles.imgStyle}
						/>


					<View style={styles.actionArea} >
						<TouchableHighlight style={[styles.actionButton, {borderColor: '#FFB000'}]} >
							<Image 
								source={require('image!yellowstar')}
								style={styles.actionIcons}
							/>
						</TouchableHighlight>

						<TouchableHighlight style={[styles.actionButton, {borderColor: '#EE4735'}]} >
							<Image
								source={require('image!redcomment')}
								style={styles.actionIcons}
							/>
						</TouchableHighlight>
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
		borderRadius: 8,
	},

	card: {
		marginLeft: 8,
		marginRight: 8,
		borderTopWidth: 1,
		borderBottomWidth: 1,
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
		marginBottom: 16,
		borderRadius: 4,
		justifyContent: 'flex-end'
	},

	actionIcons: {
		width: 16,
		height: 16
	},

	caption: {
		padding: 8
	},

	captionStyle: {
		fontWeight: '200',
		fontSize: 12,
		marginTop: 16,
		marginBottom: 16
	},

	nameContainer: {
		borderWidth: 0,
		width: 130,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	nameStyle: {
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 6,
		paddingBottom: 6,
		fontWeight: 'bold',
		fontSize: 12
	},

	imgStyle:{
		flex: 1,
		height: 170
	}

});


