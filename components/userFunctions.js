import axios from "axios";
import {myApi} from './api';





<<<<<<< HEAD

export const signup = (newUser) => {
    return axios 
    .post("localhost:3001/users/signup", {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    },myApi)
   
    .then(response => {
        console.log("User is now registered")
    })
=======
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
>>>>>>> 7b28b816ab90129fa3b4e4272446dab27ef795d4

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

