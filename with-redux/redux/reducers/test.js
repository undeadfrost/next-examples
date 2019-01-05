import {TEST} from '../actions/test'

const initState = {
	foo: '110'
}

export default (state = {foo: '666'}, action) => {
	switch (action.type) {
		case 'FOO':
			console.log({...state, foo: action.payload})
			return {...state, foo: action.payload};
		default:
			return state
	}
};
