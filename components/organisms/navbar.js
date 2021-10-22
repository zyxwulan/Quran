import React from 'react'
import Image from 'next/image'
import Languages from '../atoms/ListLanguages/languages'
import ListMenu from '../atoms/ListMenu/ListMenu'
import ListSites from '../atoms/ListSites/ListSites'
import SearchBar from '../molecules/searchBar'

export default function Navbar(
    { type }
) {
    if (type == 'search') {
        return (
            // Navbar with Search bar
            <div className="container-fluid px-0 py-0 nav-box">
                <div className="container">
                    <nav className="navbar navbar-expand-lg py-0">
                        <div className="container">
                            <div className="mx-auto toggle-icon">
                                <a className="btn my-auto toggle-icon" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">
                                    <Image src="/icons/toggle.svg" width={23} height={23} />
                                </a>
                            </div>
                            <div className="offcanvas offcanvas-start text-white px-3 py-4" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="px-0 mx-0">
                                        <ListMenu icon="/icons/home-menu.png" menu="Home" />
                                        <ListMenu icon="/icons/mobile-menu.png" menu="Mobile Apps" />
                                        <ListMenu icon="/icons/donate-menu.png" menu="Donations" />
                                        <ListMenu icon="/icons/about-menu.png" menu="About Us" />
                                        <ListMenu icon="/icons/help-menu.png" menu="Help" />
                                        <ListMenu icon="/icons/dev-menu.png" menu="Developers" />
                                        <ListMenu icon="/icons/about-menu.png" menu="Privacy" />
                                    </ul>
                                    <h5 className="offcanvas-title" id="offcanvasLabel2">Related Sites</h5>
                                    <ul className="px-0 mx-0">
                                        <ListSites link="https://quranicaudio.com/" text="Quranaudio.com" />
                                        <ListSites link="https://sunnah.com/" text="Sunnah.com" />
                                        <ListSites link="https://salah.com/" text="Salah.com" />
                                        <ListSites link="https://legacy.quran.com/" text="Legacy Quran.com" />
                                        <ListSites link="https://corpus.quran.com/" text="Corpus.Quran.com" />
                                        <ListSites link="https://quranreflect.com/" text="QuranReflect.com" />
                                    </ul>
                                </div>
                            </div>
                            <a className="navbar-brand" href="#"><strong>Quran</strong>.com</a>

                            {/* Search Bar */}
                            <div className="navbar-search">
                                <SearchBar width="full" />
                            </div>

                            {/* Language Options */}
                            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <select className="form-select lang-options" aria-label="Default select ">
                                    <option value="en" selected>English</option>
                                    <Languages value="ur" lang="اردو" />
                                    <Languages value="ar" lang="العربية" />
                                    <Languages value="bn" lang="বাংলা" />
                                    <Languages value="ru" lang="русский" />
                                    <Languages value="fa" lang="فارسی" />
                                    <Languages value="fr" lang="Français" />
                                    <Languages value="id" lang="Indonesia" />
                                    <Languages value="it" lang="Inglese" />
                                    <Languages value="nl" lang="Dutch" />
                                    <Languages value="pt" lang="Português" />
                                    <Languages value="sq" lang="Shqip" />
                                    <Languages value="th" lang="ภาษาไทย" />
                                    <Languages value="tr" lang="Türkçe" />
                                    <Languages value="zh-CN" lang="简体中文" />
                                    <Languages value="zh-TW" lang="繁體中文" />
                                </select>
                                <div className="mode text-center my-0 text-white">
                                    <div className="mode-icons">
                                        <div className="mode-icon text-center">
                                            <Image src="/icons/light.png" width={15} height={15} />
                                        </div>
                                        <div className="mode-icon text-center">
                                            <Image src="/icons/dark.png" width={15} height={15} />
                                        </div>
                                    </div>
                                    <small className="mt-1 mode-text">Mode</small>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )

    } else {
        return (
            <div className="container-fluid px-0 py-0 nav-box">
                <div className="container">
                    <nav className="navbar navbar-expand-lg py-0">
                        <div className="container">
                            <div className="mx-auto toggle-icon">
                                <a className="btn my-auto toggle-icon" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">
                                    <Image src="/icons/toggle.svg" width={23} height={23} />
                                </a>
                            </div>
                            <div className="offcanvas offcanvas-start text-white px-3 py-4" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="px-0 mx-0">
                                        <ListMenu icon="/icons/home-menu.png" menu="Home" />
                                        <ListMenu icon="/icons/mobile-menu.png" menu="Mobile Apps" />
                                        <ListMenu icon="/icons/donate-menu.png" menu="Donations" />
                                        <ListMenu icon="/icons/about-menu.png" menu="About Us" />
                                        <ListMenu icon="/icons/help-menu.png" menu="Help" />
                                        <ListMenu icon="/icons/dev-menu.png" menu="Developers" />
                                        <ListMenu icon="/icons/about-menu.png" menu="Privacy" />
                                    </ul>
                                    <h5 className="offcanvas-title" id="offcanvasLabel2">Related Sites</h5>
                                    <ul className="px-0 mx-0">
                                        <ListSites link="https://quranicaudio.com/" text="Quranaudio.com" />
                                        <ListSites link="https://sunnah.com/" text="Sunnah.com" />
                                        <ListSites link="https://salah.com/" text="Salah.com" />
                                        <ListSites link="https://legacy.quran.com/" text="Legacy Quran.com" />
                                        <ListSites link="https://corpus.quran.com/" text="Corpus.Quran.com" />
                                        <ListSites link="https://quranreflect.com/" text="QuranReflect.com" />
                                    </ul>
                                </div>
                            </div>
                            <a className="navbar-brand" href="#"><strong>Quran</strong>.com</a>
                            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <select className="form-select lang-options" aria-label="Default select ">
                                    <option value="en" selected>English</option>
                                    <Languages value="ur" lang="اردو" />
                                    <Languages value="ar" lang="العربية" />
                                    <Languages value="bn" lang="বাংলা" />
                                    <Languages value="ru" lang="русский" />
                                    <Languages value="fa" lang="فارسی" />
                                    <Languages value="fr" lang="Français" />
                                    <Languages value="id" lang="Indonesia" />
                                    <Languages value="it" lang="Inglese" />
                                    <Languages value="nl" lang="Dutch" />
                                    <Languages value="pt" lang="Português" />
                                    <Languages value="sq" lang="Shqip" />
                                    <Languages value="th" lang="ภาษาไทย" />
                                    <Languages value="tr" lang="Türkçe" />
                                    <Languages value="zh-CN" lang="简体中文" />
                                    <Languages value="zh-TW" lang="繁體中文" />
                                </select>
                                <div className="mode text-center my-0 text-white">
                                    <div className="mode-icons">
                                        <div className="mode-icon text-center">
                                            <Image src="/icons/light.png" width={15} height={15} />
                                        </div>
                                        <div className="mode-icon text-center">
                                            <Image src="/icons/dark.png" width={15} height={15} />
                                        </div>
                                    </div>
                                    <small className="mt-1 mode-text">Mode</small>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}