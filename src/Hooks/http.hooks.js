import { useCallback, useState } from "react"

export const useHttp = ()=>{
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method='get', body=null, headers={})=>{
    if(body){
      body = JSON.stringify(body)
      headers['Content-Type'] = 'application/json'
    }
    try{
      setLoading(true)
      const response = await fetch(`${url}`,{method, body, headers})
      const data = await response.json()
      if(!response.ok){
        throw new Error(data.errors? data.errors[0].msg: data.message || 'something went wrong')
      }
      setLoading(false)
      return data
    }catch(e){
      setLoading(false)
      setError(e.message)
      throw e
    }
  },[])
  const clearError = useCallback(()=> setError(null),[])
  return {loading, request, error, clearError}
}