import * as types from '../actions/actionTypes';

const initialState = {
	step: 0,
	messages: []
};

export default function conversationreducer(state = initialState, action = {}) {
	switch(action.type) {
		case types.RETURNCONVERSATION:
			return {
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

		case types.CLEARCONVERSATION:
			console.log("The conversation was cleared");
			return {
				...state,
				messages: []
			}
		case types.SETCURRENTSTEP:
			console.log("Setting the current step " + action.step);
			return {
				...state,
				step: action.step
			}
		default:
			return state;
	}
}