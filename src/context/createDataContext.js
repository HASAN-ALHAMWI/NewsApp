import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux';

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state] = useReducer(reducer, defaultValue)

        const boundActions = {}
        for (let key in actions) {
            const dispatch = useDispatch();
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }
    return { Context, Provider }
}