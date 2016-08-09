import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';

import ImagePost from './posts/imagePost';

module.exports = React.createClass({

	getInitialState: function(){
		return {

		}
	},

	componentWillMount: function() {
		console.log(this.props.type);
	},

	componentDidUpdate: function( prevProps, prevState){
		// if( prevProps.type !== this.props.type){
		// 	console.log(prevProps.type);
		// }
	},

	callType: function(typ){


		if (typ === 'image') {
			return (
				<ImagePost
					userName = {this.props.userName}
					caption = {this.props.caption}
					mediaurl = {this.props.mediaurl}
					type = {this.props.type}
				/>
			)

		} else {
			return (
				<ImagePost
					caption = "This is not an image post"
				/>
			);

		}

			



	},


	render: function(){

		return (
			this.callType(this.props.type)
		);
	}

});












