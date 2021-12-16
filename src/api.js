export function apiCall(){
    const endpoint = 'https://randomuser.me/api/'
    return fetch(endpoint, {mode:'cors'}).then(res=>res.json())
}