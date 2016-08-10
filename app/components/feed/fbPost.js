import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';

import ImagePost from './posts/imagePost';
import TextPost from './posts/textPost';
import VideoPost from './posts/videoPost';


module.exports = React.createClass({

	getInitialState: function(){
		return {

		}
	},

	componentWillMount: function() {
		//console.log(this.props.type);
	},

	componentDidUpdate: function( prevProps, prevState){
		// if( prevProps.type !== this.props.type){
		// 	console.log(prevProps.type);
		// }
	},

	componentWillUnmount: function(){
		console.log("fbPost UNMOUNTED");
	},

	callType: function(){


		var typ = this.props.type;

		if (typ === 'image') {
			return (
				<ImagePost
					userName = {this.props.userName}
					caption = {this.props.caption}
					mediaurl = {this.props.mediaurl}
				/>
			)

		} else if (typ === 'text') {
			return (
				<TextPost
					caption = {this.props.caption}
					userName = {this.props.userName}
				/>
			);

		} else if (typ === 'video') {
			
			//console.log("VIDEO VIDEO");
			return (
				<VideoPost
					mediaurl = {this.props.mediaurl}
					userName = {this.props.userName}
					caption = {this.props.caption}
				/>
			);
			

		} else {
			return (
				<View>

				</View>
			);
		}
			



	},


	render: function(){

		var pos = this.callType(this.props.type);

		return (
			
			this.callType()
			//<View>
			//	<Text> Hello {this.props.userName} </Text>
			//</View>
		);
	}

});












