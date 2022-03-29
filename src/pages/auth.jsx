import React, { useContext, useEffect, useState } from 'react'
import Loader from '../components/Loader';
import { useHttp } from '../Hooks/http.hooks'
import { useMassage } from '../Hooks/message.hooks'
import AuthContext from './../context/authContext';

export default function Auth() {
  const auth = useContext(AuthContext)
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  const message = useMassage()
  useEffect(()=>{
    message(error)
    clearError()
  }, [error, message, clearError])

  const registerHandler = async ()=>{
    try{
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    }catch(e){}
  }

  const loginHandler = async ()=>{
    try{
      const data = await request('/api/auth/login', 'POST', {...form})
      message(data.message)
      auth.login(data.token, data.userId)
    }catch(e){}
  }

  const changeHandler=event=>{
    setForm({...form, [event.target.name]: event.target.value})
  }

  if(loading)return <Loader />
  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <h1>
          Minimize Link
        </h1>
        <div className="card teal darken-3">
          <div className="card-content white-text">
            <span className="card-title">authentication</span>
            <div className='card-action'>
              <div>
                <div className="input-field">
                  <input 
                    value={form.email}
                    onChange={changeHandler}
                    placeholder="email" 
                    name='email'
                    id="email" 
                    type="email" 
                    className='yellow-input'
                  />
                  <label className="active" htmlFor="email">email</label>
                </div>
                <div className="input-field">
                  <input 
                    value={form.password}
                    onChange={changeHandler}
                    placeholder="password"
                    name='password' 
                    id="password" 
                    type="password" 
                    className='yellow-input'
                  />
                  <label className="active" htmlFor="password">password</label>
                </div>
              </div>
              <button 
                onClick={loginHandler}
                className='btn yellow darken-4'
                disabled={loading}
                style={{marginRight:'15px'}} 
              >
                login
              </button>
              <button 
                onClick={registerHandler} 
                disabled={loading}
                className='btn gray lighten-1 black-text'
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
