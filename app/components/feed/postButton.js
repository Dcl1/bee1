import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableHighlight,
	Modal
} from 'react-native';


var CreateModal = React.createClass({
	getInitialState(){
		return {
			modalVisible: false
		}
	},


	setVisible: function(visible){
		this.setState({
			modalVisible: visible
		});
	},


	render: function(){
		return (
			<View>
				<Modal
					animationType='slide'
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {this._setModalVisible(false)}}
				>
					<View style={styles.modalBackgroundStyle}>
						<View style={styles.questionContainer}>
							<TouchableHighlight style={styles.questionButton}>
								<Text style={styles.quoteText}>
									Question One
								</Text>
							</TouchableHighlight>
							<TouchableHighlight style={styles.questionButton}>
								<Text style={styles.quoteText}>
									Question Two
								</Text>
							</TouchableHighlight>
						</View>
						<View>
							<TouchableHighlight>
								<Text style={styles.quoteText}>
									Send
								</Text>
							</TouchableHighlight>
						</View>

						<View style={styles.cancelContainer}>
							<TouchableHighlight
								onPress={this.setVisible.bind(this,false)}
							>
								<Image 
									source={require('image!CancelWhite')} 
									style={styles.cancelImg}

								/>
							</TouchableHighlight>
						</View>
					</View>




				</Modal>	
			</View>
		);
	}


});


module.exports = React.createClass({

	getInitialState: function(){
		return {
			start: true,
			selectedQuestion: false,
			makeModalVis: true
		};
	},

	_clicked: function(){
		this.setState({
			start: false
		})
	},

	startState: function(){
		return (
			<TouchableHighlight style={styles.quoteButton} onPress={this._clicked}>
				<View
					style={styles.quoteItem}
				>
					<Text style={styles.quoteText}>
						Whats on your mind?
					</Text>
					<View
						style={styles.quoteImageContainer}
					>
						<Image
							style={styles.quoteImage}
							source={require('image!microphone')}
						/>
					</View>
				</View>
			</TouchableHighlight>
		);
	},



	render: function(){
		return (
			this.state.start ? this.startState() : <CreateModal ref={(r)=> {r.setVisible(true)}}/>	
		);
	}

});

var styles = StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: 'column'
	},

	cancelContainer: {
		alignItems: 'center',
		marginTop: 150
	},

	cancelImg: {
		width: 20,
		height: 20,
		resizeMode: 'contain'
	},

	questionContainer: {
		borderStyle: 'solid',
		borderColor: 'darkgrey',
		borderWidth: 2,
		paddingTop: 4,
		marginTop: 60
	},

	quoteButton: {
		backgroundColor: '#212559',
		marginTop: 12,
		marginBottom: 6,
		marginLeft: 8,
		marginRight: 8,
		borderWidth: 0,
		borderRadius: 6
	},

	quoteItem: {
		flexDirection: 'row'
	},

	questionButton: {
		backgroundColor: 'slategrey',
		paddingTop: 4,
		paddingBottom: 4,
		paddingLeft: 5,
		paddingRight: 5,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 2,
		marginBottom: 10
	},

	quoteText: {
		flex: 4,
		color: '#717AEF',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 8
	},
	quoteImageContainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: 8
		
	},
	quoteImage: {

	},

	questionArea: {
		flex: 1,
		padding: 10
	},

	confirmButton: {
		flex: 1,
		marginTop: 50
	},

	modalBackgroundStyle: {
		backgroundColor: 'rgba(0,0,0,0.84)',
		height: 3000
	}

});














