import React from 'react'

export default function ListDetails(
    { type, number, title, arabic, meaning }
) {
    if ( type == 'verse' ) {
        return (
            <>
            <li>
                <a class="dropdown-item" href="#">
                    <div className="details-item">
                        <div className="details-number">{number}</div>
                        <div className="mt-3 details-text">
                            <p className="details-text__title">Verse {number}</p>
                        </div>
                    </div>
                </a>
            </li>
            </>
        )

    } else {
        return (
            <>
            <li>
                <a class="dropdown-item" href="#">
                    <div className="details-item">
                        <div className="details-number">{number}</div>
                        <div className="mt-3 details-text">
                            <p className="details-text__title">{title}</p>
                            <p className="details-text__arabic">{arabic}</p>
                        </div>
                        <div className="details-meaning">{meaning}</div>
                    </div>
                </a>
            </li>
            </>
        )
    }
}
