import React, { useCallback, useEffect } from 'react'
import DetailsNavbar from '../components/organisms/detailsNavbar'
import Navbar from '../components/organisms/navbar'
import { useState } from "react";
import Translations from '../components/organisms/translations';
import AudioControl from '../components/molecules/audioControl';
import Footer from '../components/organisms/footer'
import Buttons from '../components/atoms/ListButtons/buttons';
import Reading from '../components/organisms/reading';
import { useRouter } from 'next/router';
import { getAyat } from '../services/surah';

export default function SurahDetails() {
    const [toggleState, setToggleState] = useState(1);
    const { query, isReady } = useRouter();
    const [ayat, setAyat] = useState([]);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getAyatList = useCallback(async (id) => {
        const data = await getAyat(id);
        setAyat(data.verses);
    }, [getAyat]);

    useEffect(() => {
        if (isReady) {
            getAyatList(query.id);
        }
    }, [isReady, getAyatList]);

    return (
        <>
            <Navbar type="search" />
            <DetailsNavbar />
            <div className="container">
                <div className="container mt-3 content-box">
                    <div className="mx-auto mb-5 bloc-tabs">
                        {/* Translations Tab*/}
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            Translations
                        </button>

                        {/* Reading Tab */}
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            Reading
                        </button>

                        {/* Surah Info Tab */}
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            Surah Info
                        </button>
                    </div>

                    <div className="container mt-3 content-tabs__details">
                        {/* Translations */}
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <div className="row translations">
                                {ayat.map((item) => {
                                    return (
                                        <Translations
                                            surah={query.id}
                                            verse={item.number.inSurah}
                                            audio={item.audio.primary}
                                            reflect=""
                                            ayah={item.text.arab}
                                            text={item.text.transliteration.en}
                                            meaning={item.translation.id}
                                        />
                                    )
                                })}
                            </div>
                            <AudioControl src="" />
                        </div>

                        {/* Reading */}
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <div className="container text-center reading">
                                <Reading surah="In the Name of Allah—the Most Compassionate, Most Merciful.In the Name of Allah—the Most Compassionate, Most Merciful.In the Name of Allah—the Most Compassionate, Most Merciful.In the Name of Allah—the Most Compassionate, Most Merciful.v" page="" />
                            </div>
                        </div>

                        {/* Surah Info */}
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div className="row">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center mb-3">
                <Buttons text="Beginning of Surah" link="" />
                <Buttons text="Next Surah" link="" />
            </div>
            <Footer />
        </>
    )
}
