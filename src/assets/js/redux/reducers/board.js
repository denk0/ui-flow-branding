const initialState = {
    applications: [],
}

export default function board(state = initialState, action) {
    switch (action.type) {
        case 'SET_APPLICATIONS':
        {
            return {...state, applications: action.applications};
        }
        default: return state;
    }
}