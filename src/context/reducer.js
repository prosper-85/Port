const reducer = ( state, action ) =>
{
 if ( action.type === 'LIGHT_MODE' )
 {
  return { ...state, darkMode: false }
 }

 if ( action.type === 'DARK_MODE' )
 {
  return { ...state, darkMode: true }
 }


 throw new Error( 'no matching action type' )
}

export default reducer