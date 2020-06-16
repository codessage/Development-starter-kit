import 'whatwg-fetch';

export function getUsers() {
    return get('users');
}

function get(url) {
    return fetch(url).then(onSuccess, onError)
}

function onSuccess(data) {
    return data.json();
}

function onError(err) {
    console.log(err);
}
