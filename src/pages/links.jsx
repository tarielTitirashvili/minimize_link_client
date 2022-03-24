import React, { useContext, useState } from 'react'
import Loader from '../components/Loader'
import AuthContext from '../context/authContext'
import { useHttp } from '../Hooks/http.hooks'


export default function Links() {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  if(loading)return <Loader />
  return (
    <div className='row'>
    </div>
  )
}
