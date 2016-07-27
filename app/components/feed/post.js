import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';

import LeftPost from './leftPost';
import RightPost from './rightPost';


var post = React.createClass({

	getInitialState: function(){
		return {
			urll : 'https://firebasestorage.googleapis.com/v0/b/rnf-bee001.appspot.com/o/images%2Fgradients%403x.png?alt=media&token=f67968f3-d305-4786-93b2-41c5a5643c2d',
		}
	},



	componentWillMount: function(){
		this.setState({
			urll: this.props.mediaurl
		});

	},



	componentWillUpdate: function(nextProps, nextState){
		if(nextProps.mediaurl !== this.props.mediaurl){
			this.setState({
				urll : this.props.mediaurl
			});
		}
	},

	render: function(){

		var id = this.props.orderId;
    	var _this = this;

		return (

			<View>
				{
					id % 2 == 0 ? 
					<LeftPost
						userName={this.props.userName}
						caption={this.props.caption}
						mediaSource={this.state.urll}
						
					/>
					: 
					<RightPost
						userName={this.props.userName}
						caption={this.props.caption}
						
					/>	
				}
				
			</View>
		);
	}
});






module.exports = post;














