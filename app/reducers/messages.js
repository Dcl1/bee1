import * as types from '../actions/actionTypes';


export default function messagereducer(state = [], action = {}) {
	switch(action.type){
		case types.UPDATEMESSAGELIST:
			return [
				...state,
				{
					user: action.user,
					id: action.id,
					text: action.text
				}
			];
		default: 
			return state;
	}
}