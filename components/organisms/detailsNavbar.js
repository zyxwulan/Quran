import React from 'react'
import DetailsDropdown from '../molecules/detailsDropdown'

export default function DetailsNavbar() {

    return (
        <div className="details-navbar">
            <div className="container details-navbar__contain">
                {/* Dropdown Menu */}
                <div className="navbar-dropdown">
                    <DetailsDropdown type="surah" />
                    <DetailsDropdown type="verse" />
                </div>

                {/* Settings Button */}
                <div className="btn btn-secondary px-auto py-auto settings-btn">
                    <a href="">Settings</a>
                </div>
            </div>
        </div>
    )
}
