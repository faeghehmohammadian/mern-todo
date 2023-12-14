const API_URL=`http://localhost:8080`
const token=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMjU3NjAwOH0.q70339Cy4ah_uNBTpxfanqQPPV_swoNz-BaCxcVSxnY`
export default () => {
    return fetch(`${API_URL}/todos`, {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":'application/json'
    },
    mode:'cors'
})
    .then(response => response.json())
}