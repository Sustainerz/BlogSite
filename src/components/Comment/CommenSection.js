import React from 'react'
import CommentComp from './Comments.js'
import './CommentSection.css'

function CommentsSection() {
  return (
    <div className="comments-section">
        <div className="comments-section-container">
            <h1>Comments (4)</h1>
            <div className="add-comment">
                <img src={require('../../images/User.png')} alt="" />
                <form action="">
                    <input type="text" placeholder="Type your comment..." />
                    <button> <i class="fa fa-paper-plane" aria-hidden="true"></i> </button>
                </form>
                
            </div>

            <CommentComp />
            <CommentComp />
            <CommentComp />
            <CommentComp />
        </div>
    </div>
  )
}

export default CommentsSection