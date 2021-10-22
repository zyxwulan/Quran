import React from 'react'
import Image from 'next/image'

function SearchBar(
    { width }
) {
    if ( width == 'full') {
        return (
            <>
            <div className="mx-auto px-2 search-bar">
                <form className="d-flex ">
                    <input className="form-control me-0 bg-transparent search-form" type="search" placeholder='Search "Noah"' aria-label="Search" />
                    <button className="btn px-2 py-0 search-btn" type="submit" id="search">
                        <Image src="/icons/search.svg" width={15} height={15} />
                    </button>
                </form>
            </div>
            </>
        )

    } else {
        return (
            <>
            <div className="mx-auto px-2 search-bar__home">
                <form className="d-flex ">
                    <input className="form-control me-0 bg-transparent search-form" type="search" placeholder='Search "Noah"' aria-label="Search" />
                    <button className="btn px-2 py-0 search-btn" type="submit" id="search">
                        <Image src="/icons/search.svg" width={15} height={15} />
                    </button>
                </form>
            </div>
            </>
        )

    }
}

export default SearchBar;