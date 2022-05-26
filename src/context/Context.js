import React, { useState, useContext, useReducer, Children } from 'react'
import reducer from "./reducer";


const AppContext = React.createContext()


const initialState = {
 darkMode: false
}


const AppProvider = ( { children } ) =>
{
 const [ state, dispatch ] = useReducer( reducer, initialState )


 const light = () =>
 {
  dispatch( { type: "LIGHT_MODE" } )
 }

 const dark = () =>
 {
  dispatch( { type: "DARK_MODE" } )
 }

 return (
  <AppContext.Provider value={{ ...state, light, dark }}>
   {children}
  </AppContext.Provider>
 )
}

export const useGlobalContext = () =>
{
 return useContext( AppContext )
}

export { AppContext, AppProvider }
