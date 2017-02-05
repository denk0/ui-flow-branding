export function setApplications(applications) {
    return {applications, type: 'SET_APPLICATIONS'};
}

export function fetchApplications() {
    var init = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };

    var request = new Request('http://localhost:8090/api/applications', init);

    return dispatch => (
        fetch(request)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatch(setApplications(json._embedded.applications))
            })
    )
}
