import React from 'react'
import SearchItems from '../atoms/PopularSearches/popularSearches'

export default function PopularSearches() {
    return (
        <div className="container mt-5 px-5 popularSearches-box">
            <h6 className="popularSearches-title">Popular Searches</h6>
            <div className="px-0 popularSearch-list">
                <SearchItems surah="Ayatul Kursi" />
                <SearchItems surah="Surah Yaseen" />
                <SearchItems surah="Surah Al Mulk" />
                <SearchItems surah="Surah Ar-Rahman" />
                <SearchItems surah="Surah Al Waqi'ah" />
                <SearchItems surah="Surah Al Kahf" />
                <SearchItems surah="Surah Al Muzzammil" />
            </div>
        </div>
    )
}
