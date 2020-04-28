import axios from "axios";






// const options = {
//     credentials: "include",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//     },

// };

export const signup = (newUser) => {
    return axios
        .post("http://localhost:3001/users/signup", {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        })

        .then(response => {
            console.log("User is now registered")
        })

}

export const login = (user) => {
    return axios
        .post("users/login", {
            username: user.username,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

