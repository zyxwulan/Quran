import React from 'react'
import Image from 'next/image'

export default function SitesCards(
    { title, text, link }
) {
    return (
        <div className="col-lg-4 px-2 sites-card__box">
            <a href={link} className="text-white sites-card">
                <div className="sites-card__img">
                    <Image src="/images/sites-card.jpg" width={500} height={300} />
                </div>
                <h5 className="sites-card__title">{title}</h5>
                <p className="sites-card__text">{text}</p>
            </a>
        </div>
    )
}
