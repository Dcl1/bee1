import * as types from './actionTypes';

export function returnconversation(option, user, text, position, uniqueId){
	return {
		type: types.RETURNCONVERSATION,
		option,
		user,
		text,
		position,
		uniqueId
	}
}

export function clearconversation(){
	return {
		type: types.CLEARCONVERSATION
	}
}

export function setcurrentstep(stepp) {
	console.log(" SOMETHINGS IS SETTING A STEP");
	return {
		type: types.SETCURRENTSTEP,
		stepp
	}
}

export function increasestep(){
	return {
		type: types.INCREASESTEP,
	}
}


export function setstep(key, defaultStep){
	return {
		type: types.SETSTEP,
		key,
		defaultStep
	}
}