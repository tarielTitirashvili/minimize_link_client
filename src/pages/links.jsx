import React, { useContext, useState } from 'react'
import AuthContext from '../context/authContext'
import { useHttp } from '../Hooks/http.hooks'
import { useNavigate } from 'react-router-dom'

export default function Links() {
  const navigate = useNavigate()
  const {token} = useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = useState('')
  async function pressHandler(event) {
    console.log(token)
    if(event.key==='Enter'){
      try{
        const data = await request('api/links/generate', 'POST',{from: link},{Authorization: `Bearer ${token}`})
        console.log(data)
        navigate(`/details/${data.link._id}`)
      }catch(e){

      }
    }
  }
  return (
    <div className='row'>
      <div className="col s8 offset-s2">
      <div className="input-field">
        <input 
          value={link}
          onChange={(e)=>setLink(e.target.value)}
          placeholder="Enter Link" 
          id="link" 
          type="text"
          onKeyDown={pressHandler}
        />
        <label className="active" htmlFor="link">email</label>
      </div>
      </div>
    </div>
  )
}
