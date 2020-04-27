import axios from "axios";

const signup = (newUser) => {
    return axios 
    .post("users/signup", {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    })
    .then(response => {
        console.log("User is now registered")
    })

}

const login = (user) => {
    return axios 
    .post("users/login", {
        username: user.username,
        password:username.password
    })
    .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
    })
    .catch(err => {
        console.log(err)
    })
}

export default {signup, login}