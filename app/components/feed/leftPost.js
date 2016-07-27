import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';





module.exports = React.createClass({

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
				marginBottom: 75,
				marginLeft: 16,
				marginRight: 16
			},

			mainArea: {
				flex: 2,
				flexDirection: 'row'
			},
			bigPortion: {
				borderTopWidth: 0,
				flex: 5,
				paddingTop: 10
				
			},
			metaArea:{
				marginBottom: 5
			},
			mediaArea:{
				backgroundColor: 'lightgrey',
				shadowColor: "#000000",
		    	shadowOpacity: 0.3,
		    	shadowRadius: 2,
		    	shadowOffset: {
		      		height: 3,
		      		width: 2
		    	}
			},
			smallPortion: {
				flex: 1,
				flexDirection: 'column',
				paddingRight: 4,
				paddingTop: 20
			},
			actionContainer: {
				flex: 1,
				borderRadius: 8,
				alignItems: 'center'
			},
			actionSpacer:{
				flex: 2
			},
			actionIcon:{
				resizeMode: 'cover',
				marginTop: 10
			},
			img: {
				width: 100,
				height: 100
			},
			userName: {
				fontWeight: 'bold',
				fontSize: 16,
				marginTop: 2,
				marginBottom: 2
			},
			caption: {
				fontWeight: '100',
				fontSize: 14
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
			//console.log("Shit isn't the same")
		}

	},

	setHeight: function(){
		return {
			height: this.state.width
		};
	},

	setWidth: function(){
		return {
			width: this.state.width
		};
	},

	render: function(){

		var mediaSrc = this.props.mediaSource;
		//console.log(mediaSrc);

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
						<View 
							style={this.styles.actionSpacer}
						/>
						<TouchableHighlight
							style={this.styles.actionContainer}
						>
							<Image 
								 source={require('image!journal')}
								 style={this.styles.actionIcon}
							/>
						</TouchableHighlight>
						<TouchableHighlight
							style={this.styles.actionContainer}
						>
							<Image 
								 source={require('image!like')}
								 style={this.styles.actionIcon}
							/>
						</TouchableHighlight>
						<TouchableHighlight
							style={this.styles.actionContainer}
						>
							<Image 
								 source={require('image!comment')}
								 style={this.styles.actionIcon}
							/>
						</TouchableHighlight>
						<View 
							style={this.styles.actionSpacer}
						/>
					</View>
					<View
						style={this.styles.bigPortion}
					>
						<Text
							style={this.styles.userName}
						> 
							{this.props.userName} 
						</Text>
						<Text
							style={this.styles.caption}
						> 
							{this.props.caption} 
						</Text>
						<View
							onLayout={(event) => {this.setDim(event.nativeEvent.layout)}}
							style={Object.assign({}, this.styles.mediaArea, this.setHeight())}
						>
							<Image
								source={{ uri: mediaSrc}}
								style={Object.assign({}, this.setHeight(), this.setWidth())}
							/>	
						</View>
					</View>

					
				</View>
			</View>
		);
	}
});

