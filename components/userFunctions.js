import axios from "axios";
import {myApi} from './api';






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

}

export const login = (user) => {
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

