type State = {
    count: number
}

type Action = any & {
    type?: 'increment' | 'decrement'
}

export function reducer (state: State, action: Action){
	switch(action.type){
		case 'increment':
			return {count: state.count + 1}
		case 'decrement':
			return {count: state.count - 1}
		default:
			return state
	}
}