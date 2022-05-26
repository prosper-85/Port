import './alart.scss'
import React, { useEffect } from 'react';

export const Alart = ( { type, msg, removeAlart, formRef } ) =>
{
 useEffect( () =>
 {
  const timeout = setTimeout( () =>
  {
   removeAlart()
  }, 3000 );
  return () => clearTimeout( timeout );
 }, [ formRef, removeAlart ] )
 return (
  <p className={`alart alart-${ type }`}>{msg}</p>
 );
}
