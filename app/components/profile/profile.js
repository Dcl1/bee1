import React from 'react';

import {
	View,
	StyleSheet,
	Text,
	Image,
	ListView,
	TouchableHighlight
} from 'react-native';


import Episodelist from './episodeList';

module.exports = React.createClass({


	_border: function(x) {
		return {
			borderWidth: 4,
			borderColor: x
		}
	},



	render: function(){
		return (
			<View style={styles.container}>
				<View style={styles.topSection}>
					<View style={styles.profileRow}>
						<View style={styles.profileImg}>
						</View>
						<Text style={styles.profileInfo}>
							This is the profile information
						</Text>
					</View>
				</View>
			

				<View style={styles.episodeSwitcher} >
					<Episodelist />

				</View>
			</View>
		);
	}

});


var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 70
	},

	topSection: {
		flex: .2,
		backgroundColor: 'red'
	},

	profileRow: {
		flexDirection: 'row',
		flex: 1,
		borderBottomColor: 'grey'
	},

	profileImg: {
		flex: 0.33,
		backgroundColor: 'purple'
	},

	profileInfo: {
		flex: 0.666
	},

	episodeSwitcher: {
		flex: .8,
		paddingTop: 10
	}

});
















