import axios from "axios";



const options = {
    credentials: "include",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },

};

export const signup = (newUser) => {
    return axios
        .post("http://localhost:3001/users/signup", {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        }, options)

        .then(response => {
            console.log("User is now registered")
        })

}

export const login = (user) => {
    return axios
        .post("users/login", {
            username: user.username,
            password: username.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

