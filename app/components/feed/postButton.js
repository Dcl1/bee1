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


	setVisibile: function(visible){
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
								<Text>
									Send
								</Text>
							</TouchableHighlight>
						</View>

						<View style={styles.cancelContainer}>
							<TouchableHighlight
								onPress={this.setVisibile.bind(this,false)}
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
			selectedQuestion: false
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
					<Text style={styles.quoteText}>
						What's on your mind?
					</Text>
			</TouchableHighlight>
		);
	},



	render: function(){
		return (
			
			this.state.start ? this.startState() : <CreateModal ref={(r)=> {r.setVisibile(true)}} />
			
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
		backgroundColor: 'slategrey',
		paddingTop: 10,
		paddingBottom: 14,
		paddingLeft: 5,
		paddingRight: 5,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 2
	},

	questionButton: {
		backgroundColor: 'slategrey',
		paddingTop: 10,
		paddingBottom: 14,
		paddingLeft: 5,
		paddingRight: 5,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 2,
		marginBottom: 10
	},

	quoteText: {
		color: 'white'
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














