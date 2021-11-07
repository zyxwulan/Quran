import React from 'react'
import Link from 'next/link'

export default function SurahCards(
    { show, number, title, meaning, arabic }
) {
    if (show == 'juz') {
        return (
            <Link href={`${number}`}>
                <a className="px-3 py-2 surah-card">
                    <div className="surah-card__juz">
                        <span className="mb-2 surah-title">{title}</span>
                        <div className="px-0 surah-text__juz">
                            <div className="surah-number">{number}</div>
                            <span className="mb-2 surah-meaning">{meaning}</span>
                        </div>
                    </div>
                    <div className="pt-3 surah-arabic">
                        <p>{arabic}</p>
                    </div>
                </a>
            </Link>
        )
    } else {
        return (
            <div className="col-lg-4 px-0 mx-auto surah-col">
                <Link href={`${number}`}>
                    <a className="px-3 py-1 surah-card">
                        <div className="surah-number">{number}</div>
                        <div className="surah-text">
                            <span className="surah-title">{title}</span>
                            <span className="mb-2 surah-meaning">{meaning}</span>
                        </div>
                        <div className="pt-3 surah-arabic">
                            <p>{arabic}</p>
                        </div>
                    </a>
                </Link>
            </div>
        )
    }
}
