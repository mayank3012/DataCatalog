"use client"
import { BRAND_NAME } from '@/utilty/constants'
import Link from 'next/link';
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [navColor, setNavColor] = useState("");
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setNavColor("bg-black bg-opacity-60 shadow-lg");
        }
        else {
            setNavColor("");
        }
    };
    return (
        <div className={`navbar transition ease-in-out fixed p-5 z-10   ${navColor}`}>
            <Link href="/" className="cursor-pointer font-bold transition lg:text-5xl md:text-4xl sm:text-2xl text-xl  normal-case text-orange-800 md:pl-20 ">{BRAND_NAME}</Link>
        </div>
    )
}

export default NavBar