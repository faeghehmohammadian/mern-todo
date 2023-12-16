import { API_URL, token } from "./config"

export default (password) => {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },

        body: JSON.stringify({
            password,
        })
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Loging failed')
            }
        })
}
