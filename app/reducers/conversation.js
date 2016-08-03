import * as types from '../actions/actionTypes';

const initialState = {
	currStep: 0,
	messages: []
};

var simpleStore = require('react-native-simple-store');


function getStep(key, defaultStep){

	console.log("TYPE OF CHECK: " + typeof key);

	function checkStore(k){
		return simpleStore.get(k) !== null
	}

	console.log( checkStore(key) );
	console.log("Inside getStep: We are now playing this game " + key + " " + defaultStep);

}




export default function conversationreducer(state = initialState, action = {}) {
	switch(action.type) {
		case types.RETURNCONVERSATION:
			return {
				...state,
				messages: [
					...state.messages,
					{
						option: action.option,
						user: action.user,
						text: action.text,
						uniqueId: action.uniqueID,
						position: action.position,
						uniqueId: action.uniqueId
					}

				]
			};
		case types.INCREASESTEP:
			return {
				...state,
				currStep: state.currStep += 1
			};
		case types.CLEARCONVERSATION:
			//console.log("The conversation was cleared");
			return {
				...state,
				messages: []
			};
		case types.SETCURRENTSTEP:
			//console.log("Setting the current step " + action.stepp);
			return {
				...state,
				currStep: action.stepp
			};
		case types.SETSTEP:

			//console.log("We are now playing this game " + action.key + " " + action.defaultStep);
			getStep(action.key, action.defaultStep);

			// return {

			// };
		default:
			return state;
	}
}















