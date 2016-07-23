import * as types from '../actions/actionTypes';

const initialState = {
	messages: []
};

export default function conversationreducer(state = [], action = {}) {
	switch(action.type) {
		case types.RETURNCONVERSATION:
			return [
				...state,
				{
					option: action.option,
					user: action.user,
					text: action.text,
					uniqueId: action.uniqueID,
					position: action.position
				}
			];
		case types.CLEARCONVERSATION:
			return [

			]
		default:
			return state;
	}
}