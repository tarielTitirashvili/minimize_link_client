import { useState, useEffect, useCallback } from 'react';
import { LOCAL_STORAGE_NAME } from '../utils/constants';

export const useAuth = () =>{
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [ready, setReady] = useState(false)
  const authInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME))

  useEffect(()=>{
    if(authInfo && authInfo.token!==null){
      login(authInfo.token, authInfo.userId)
    }
    setReady(true)
  })

  const login=useCallback((jwtToken, id)=>{
    setToken(jwtToken)
    setUserId(id)
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify({token: jwtToken, userId: id}))
  },[])

  const logOut=useCallback(()=>{
    setToken(null)
    setUserId(null)
    localStorage.removeItem(LOCAL_STORAGE_NAME)
  },[])
  
  return{ login, logOut, token, userId, ready}
}