import React from 'react'

function Slide(props) {
  return (
    <div className='variable-slider__slide'>
        <div className='variable-slider__slide__inner'>
            <img className='variable-slider__slide__img' src={props.img} alt='' />
            <div className='variable-slider__slide__description'>{props.description}</div>
        </div>        
    </div>
  )
}

export default Slide
