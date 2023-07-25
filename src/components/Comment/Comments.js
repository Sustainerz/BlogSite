import React from 'react'
import './Comments.css'

export default function Comments() {
  return (
    <div className='comment'>
        <div className="comment-container">
            <div className="comment-upper">
                <div className='comment-upper-left'>
                    <img src={require('../../images/User.png')} alt="" />
                    <p>Shanza</p>
                </div>
                <div className='comment-upper-right'>
                    <p>2d ago</p>
                </div>
            </div>
            <div className="comment-lower">
                <p>I loved it.</p>
            </div>
        </div>
    </div>
  )
}