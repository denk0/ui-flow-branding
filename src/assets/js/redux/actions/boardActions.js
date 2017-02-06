import {API_BASE_URL} from '../../constants';

export function setTasks(tasks) {
    return {tasks, type: 'SET_TASKS'};
}

export function setStatuses(statuses) {
    return {statuses, type: 'SET_STATUSES'};
}

export function fetchTasks() {
    var init = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };

    var request = new Request(API_BASE_URL + 'tasks', init);

    return dispatch => (
        fetch(request)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(setTasks(json._embedded.tasks))
            })
    )
}

export function fetchStatuses() {
    var init = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };

    var request = new Request(API_BASE_URL + 'taskStatuses', init);

    return dispatch => (
        fetch(request)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(setStatuses(json._embedded.taskStatuses))
            })
    )
}
