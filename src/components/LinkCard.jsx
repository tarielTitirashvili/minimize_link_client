import React from 'react'

export default function LinkCard({link}) {
  return (
    <div className='container'>
      <div className="row">
        <div className="col s9 m9">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Link</span>
              <div>
                <span>your Link: </span> <span ><a target={'_blank'} href={link.to} rel="noreferrer">{link.to}</a></span>
              </div>
              <div>
                <span>clicks: </span><span>{link.clicks}</span>
              </div>
              <div>
                <span>creation date: </span><span>{new Date(link.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
