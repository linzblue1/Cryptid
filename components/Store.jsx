import React from 'react'
import io from 'socket.io-client'
export const CTX = React.createContext();

const initState = {
    general: [
        { from: 'user1', msg: 'hello' },
        { from: 'user2', msg: 'u stink' },
        { from: 'user3', msg: 'some other words' }
    ],
    channel2: [
        { from: 'user1', msg: 'hello' }
    ]
}
const reducer = (state, action) => {
    const { from, msg, channel } = action.payload;
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [channel]: [
                    ...state[channel],
                    { from, msg }
                ]
            }
        default:
            return state
    }
}
let socket;

const sendChatAction = (value) => {
    socket.emit('chat message', value);
}



export const Store = (props) => {
    const [allChats, dispatch] = React.useReducer(reducer, initState)

    if (!socket) {
        socket = io(':3001')
        socket.on('chat message', function (msg) {
            dispatch({ type: 'RECEIVE_MESSAGE', payload: msg });
        })
    }


    const user = 'RandomUser'


    return (
        <CTX.Provider value={{ allChats, sendChatAction, user }}>
            {props.children}
        </CTX.Provider>
    )
}
