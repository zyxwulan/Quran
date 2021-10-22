import React from 'react'
import SitesCards from '../molecules/sitesCards'

export default function OtherSites() {
    return (
        <div className="container">
            <div className="px-2 row">
                <SitesCards title="Salah" text="Search prayer times for any location" link="https://salah.com/" />
                <SitesCards title="Sunnah" text="The Hadith of Prophet Muhammad (ﷺ)" link="https://sunnah.com/" />
                <SitesCards title="Noble Quran in audio" text="Learning & listening at the same time" link="https://quranicaudio.com/" />
            </div>
        </div>
    )
}
