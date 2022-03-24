import React from 'react'

export default function Loader() {
  return (
    <div style={{width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="preloader-wrapper active">
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
        <h5>
          Loading...
        </h5>
    </div>
  )
}
