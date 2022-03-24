import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LinkCard from '../components/LinkCard'
import Loader from '../components/Loader'
import AuthContext from '../context/authContext'
import { useHttp } from '../Hooks/http.hooks'

export default function Details() {
  const {request, loading} = useHttp()
  const {token} = useContext(AuthContext)
  const [link, setLink] = useState(null)
  const params = useParams()
  async function getLinkData(id) {
    try{
      const data = await request(`/api/links/${id}`, 'GET', null, {Authorization: `Bearer ${token}`})
      setLink(data)
      console.log(data)
    }catch(e){}
  }
  useEffect(()=>{
    getLinkData(params.id)
  },[token, params.id])

  return (
    <>
    {
      !loading&&link?<LinkCard link={link}/>:<Loader />
    }
    </>
  )
}
