import React from 'react'

export default function CompanyComment({comment}) {
  return (
    <div className='company-comment'>
        <div className='company-comment__header'>
            <img className='company-comment__header-img' src={comment.img} alt='Profile photo'></img>
            <div className='company-comment__header-info'>
                <a className='company-comment__header-info__name' href="#">{comment.title}</a>
                <p className='company-comment__header-info__subtitle'>{comment.subtitle}</p>
            </div>
        </div>
        <p className='company-comment__message'>{comment.message}</p>
    </div>
  )
}
