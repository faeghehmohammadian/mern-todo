import { API_URL, token } from "./config"

export default () => {
    return fetch(`${API_URL}/todos`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        },
        mode: 'cors'
    })
        .then(response => response.json())
}