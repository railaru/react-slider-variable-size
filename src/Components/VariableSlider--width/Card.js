import React from 'react'

export default function Card(props) {
  return (
    <a href={props.link} className='card'>
        <div className='card__inner'>
            <img className='card__img' src={props.img} alt='' />
            <div className='card__title'>{props.title}</div>
            <div className='card__category'>{props.category}</div>
        </div>        
    </a>
  )
}
