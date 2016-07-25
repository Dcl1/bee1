import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';


var RightPost = React.createClass({

	getInitialState: function(){

		return {
			width: 0
		}

	},

	componentWillMount(){

		this.styles= {
			container: {
				flex: 1,
				flexDirection: 'column',
				marginBottom: 25,
				marginLeft: 8,
				marginRight: 8
			},

			mainArea: {
				flex: 2,
				flexDirection: 'row'
			},
			bigPortion: {
				borderTopWidth: 4,
				flex: 4,
				paddingTop: 10
				
			},
			metaArea:{
				marginBottom: 5
			},
			mediaArea:{
				backgroundColor: 'lightgrey'
			},
			smallPortion: {
				flex: 1
			}
		};

	},

	setDim: function(e){;
		this.setState({
			width: e.width
		})
	},

	componentWillReceiveProps: function(nextProps, nextStates) {

		if(nextStates.width !== this.state.width){
			console.log("Shit isn't the same")
		}

	},

	setWidth: function(){
		return {
			height: this.state.width
		};
	},

	render: function(){
		return (
			<View
				style={this.styles.container}
			>
						
				<View
					style={this.styles.mainArea}
				>
					<View
						style={this.styles.bigPortion}
					>
						<Text> {this.props.userName} </Text>
						<Text> {this.props.caption} </Text>
						<View
							onLayout={(event) => {this.setDim(event.nativeEvent.layout)}}
							style={Object.assign({}, this.styles.mediaArea, this.setWidth())}
						>
							<Text> Media </Text>
						</View>
					</View>

					<View
						style={this.styles.smallPortion}
					>
						<TouchableHighlight>
							<Image 
								 source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
							/>
						</TouchableHighlight>
						<TouchableHighlight>
							<Text> 100 </Text>

						</TouchableHighlight>
						<TouchableHighlight>
							<Text> 100 </Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
});




var LeftPost = React.createClass({

	getInitialState: function(){

		return {
			width: 0
		}

	},

	componentWillMount(){

		this.styles= {
			container: {
				flex: 1,
				flexDirection: 'column',
				marginBottom: 25,
				marginLeft: 8,
				marginRight: 8
			},

			mainArea: {
				flex: 2,
				flexDirection: 'row'
			},
			bigPortion: {
				borderTopWidth: 4,
				flex: 4,
				paddingTop: 10
				
			},
			metaArea:{
				marginBottom: 5
			},
			mediaArea:{
				backgroundColor: 'lightgrey'
			},
			smallPortion: {
				flex: 1
			}
		};

	},

	setDim: function(e){;
		this.setState({
			width: e.width
		})
	},

	componentWillReceiveProps: function(nextProps, nextStates) {

		if(nextStates.width !== this.state.width){
			console.log("Shit isn't the same")
		}

	},

	setWidth: function(){
		return {
			height: this.state.width,
			width: this.state.width
		};
	},

	render: function(){
		return (
			<View
				style={this.styles.container}
			>
						
				<View
					style={this.styles.mainArea}
				>
					<View
						style={this.styles.smallPortion}
					>
						<TouchableHighlight>
							<Image 
								 source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
							/>
						</TouchableHighlight>
						<TouchableHighlight>
							<Text> 100 </Text>

						</TouchableHighlight>
						<TouchableHighlight>
							<Text> 100 </Text>
						</TouchableHighlight>
					</View>
					<View
						style={this.styles.bigPortion}
					>
						<Text> {this.props.userName} </Text>
						<Text> {this.props.caption} </Text>
						<View
							onLayout={(event) => {this.setDim(event.nativeEvent.layout)}}
							style={Object.assign({}, this.styles.mediaArea, this.setWidth())}
						>
							<Image
								source={require('image!TestTwo')}
								style={Object.assign({}, this.setWidth())}
							/>	
						</View>
					</View>

					
				</View>
			</View>
		);
	}
});



var post = React.createClass({

	componentWillReceiveProps: function(){

	},

	render: function(){

		var id = this.props.orderId;

		return (

			<View>
				{
					id % 2 == 0 ? 
					<LeftPost
						userName={this.props.userName}
						caption={this.props.caption}
						mediaSrc={this.props.mediaSrc}
					/>
					: 
					<RightPost
						userName={this.props.userName}
						caption={this.props.caption}
						mediaSrc={this.props.mediaSrc}
					/>	
				}
				
			</View>
		);
	}
});





module.exports = post;














