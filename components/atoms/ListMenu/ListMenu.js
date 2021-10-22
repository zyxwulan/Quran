import React from 'react'
import Image from 'next/image'

export default function ListMenu(
    {icon, menu}
) {
    return (
        <>
        <li className="menu-list">
            <Image src={icon} width={20} height={20} />
            <a href="" className="menu-items">{menu}</a>
        </li>
        </>
    )
}
