import React from 'react'

export default function Card(props) {
  return (
    <a href={props.link} className='card-2'>
      <div className='card-2__inner'>
        <img className='card-2__img' src={props.img} alt='' />
        <div className='card-2__title'>{props.title}</div>
        <div className='card-2__category'>{props.category}</div>
      </div>
    </a>
  )
}
