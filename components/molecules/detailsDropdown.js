import React from 'react'
import ListDetails from '../atoms/ListDetails/listDetails'
import SearchBar from './searchBar'

export default function DetailsDropdown(
    { type }
) {
    if ( type == 'surah' ) {
        return (
            <>
                <div className="px-3 dropdown border-end detailsDropdown">
                    <button class="dropdown-toggle py-2 details-toggle" type="button" id="dropdownMenuDetails" data-bs-toggle="dropdown" aria-expanded="false">
                        Surah
                    </button>
                    <ul class="pb-1 pt-2 px-1 mt-3 border-secondary dropdown-menu" aria-labelledby="dropdownMenuDetails">
                        <SearchBar width="full" />
                        <ListDetails number="1" title="Al-Fatihah" arabic="الفاتحة" meaning="The Opener" />
                        <ListDetails number="1" title="Al-Fatihah" arabic="الفاتحة" meaning="The Opener" />
                    </ul>
                </div>
            </>
        )
    } else if ( type == 'verse' ) {
        return (
            <>
                <div className="px-3 dropdown detailsDropdown">
                    <button class="dropdown-toggle py-2 details-toggle" type="button" id="dropdownMenuDetails" data-bs-toggle="dropdown" aria-expanded="false">
                        Verse
                    </button>
                    <ul class="pb-1 pt-2 px-1 mt-3 border-secondary dropdown-menu" aria-labelledby="dropdownMenuDetails">
                        <SearchBar width="full" />
                        <ListDetails type="verse" number="1" />
                    </ul>
                </div>
            </>
        )
    }

}
