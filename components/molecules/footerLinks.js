import React from 'react'

export default function FooterLinks(
    { title, link1, link2, link3, link4, link5, link6 }
) {
    return (
        <div className="col-lg-2 pt-0 px-0">
            <ul className="footer-list">
                <li className="fw-bold footer-links">{title}</li>
                <li className="footer-links">
                    <a href="" className="footer-links">{link1}</a>
                </li>
                <li className="footer-links">
                    <a href="" className="footer-links">{link2}</a>
                </li>
                <li className="footer-links">
                    <a href="" className="footer-links">{link3}</a>
                </li>
                <li className="footer-links">
                    <a href="" className="footer-links">{link4}</a>
                </li>
                <li className="footer-links">
                    <a href="" className="footer-links">{link5}</a>
                </li>
                <li className="footer-links">
                    <a href="" className="footer-links">{link6}</a>
                </li>
            </ul>
        </div>
    )
}
