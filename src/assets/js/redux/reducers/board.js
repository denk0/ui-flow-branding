const initialState = {
    tasks: [],
    statuses: []
}

export default function board(state = initialState, action) {
    switch (action.type) {
        case 'SET_TASKS':
        {
            return {...state, tasks: action.tasks};
        }
        case 'SET_STATUSES':
        {
            return {...state, statuses: action.statuses};
        }
        default: return state;
    }
}