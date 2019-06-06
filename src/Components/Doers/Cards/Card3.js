import React from 'react'

export default function Card3(props) {

    const { link, link_additional, img, text1, text2 } = props

    return (
        <div className='card-3-container'>
            <a href={link} className='card-3'>
                <div className='card-3__img-container dark-overlay-1-holder overflow-hidden'>
                    <div className="dark-overlay-1"></div>
                    <img src={img} alt="" className="card-3__img" />
                </div>
                <div className="card-3__text-1 font-2">
                    {text1}
                </div>
            </a>
            <a href={link_additional} className='card-3__additional-link-1 color-2 font-1'>
                {text2}
            </a>
        </div >
    )
}
