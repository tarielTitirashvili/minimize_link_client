import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import AuthContext from '../context/authContext'
import { useHttp } from '../Hooks/http.hooks'


export default function Links() {
  const [links, setLinks] = useState([])
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const getLinks = async () => {
    try{
      const data = await request('/api/links', 'GET', null, {Authorization: `Bearer ${token}`})
      console.log(data[0])
      setLinks(data)
    }catch(e){}
  }
  useEffect(()=>{
    getLinks()
  }, [token])
  if(loading)return <Loader />
  if(links.length===0)return <h3>links not found</h3>
  return (
    <div style={{padding:'0 2rem'}}>
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>original link</th>
            <th>short link</th>
            <th>open</th>
          </tr>
        </thead>
      {
        links.map((link, index)=>{
          return <tbody>
            <tr>
              <td>{index+1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={link.to}>open</Link>
              </td> 
            </tr>
          </tbody>
        })
      }
      </table>
    </div>
  )
}
