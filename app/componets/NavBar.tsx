"use client"
import { BRAND_NAME } from '@/utilty/constants'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [navColor, setNavColor] = useState("");
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setNavColor("bg-white bg-opacity-10 shadow-lg");
        }
        else {
            setNavColor("");
        }
    };
    return (
        <div className={`navbar transition ease-in-out fixed p-5 z-10   ${navColor}`}>
            <a className="cursor-pointer font-bold transition lg:text-5xl md:text-4xl sm:text-2xl text-xl  normal-case text-orange-800 md:pl-20 ">{BRAND_NAME}</a>
        </div>
    )
}

export default NavBar