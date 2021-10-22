import React from 'react'
import FooterLinks from '../molecules/FooterLinks'

export default function Footer() {
    return (
        <div className="container-fluid py-5 px-5 footer">
            <div className="container mx-5 px-5">
                <div className="row">
                    <FooterLinks title="Navigate" link1="About Us" link2="Help" link3="Feedback" link4="Developers" link5="Download" link6="Privacy" />
                    <FooterLinks title="Useful Sites" link1="Quranicaudio.com" link2="Salah.com" link3="Sunnah.com" link4="Legacy Quran.com" link5="Corpus.Quran.com" link6="QuranReflect.com" />
                    <FooterLinks title="Other links" link1="Sitemap" link2="Surah Yaseen (يس)" link3="Ayat Al-Kursi (آية الكرسي)" link4="Surah Al-Kahf (الكهف)" />
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4 px-2">
                        <p className="footer-desc">Quran.com is a Sadaqah Jariyah. We hope to make it easy for everyone to read, study, and learn The Noble Quran. The Noble Quran has many names including Al-Quran Al-Kareem, Al-Ketab, Al-Furqan, Al-Maw'itha, Al-Thikr, and Al-Noor.</p>
                        <p className="footer-desc">© 2021 <span className="copyright">Quran.com</span> . All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
