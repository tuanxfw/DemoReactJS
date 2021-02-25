var INITIAL_STATE = {
    name: 'Luat',
    age: 18
};
 
export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'getData':
            return {...state,oke: 'oke'}
        default:
            return state
    }
}