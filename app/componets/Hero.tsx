import { HERO_CONETENT } from '@/utilty/constants'
import React from 'react'

const Hero = () => {
    return (
        <div className="hero place-items-stretch min-h-screen" style={{ backgroundImage: 'url(/images/heroImage.jpg)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content justify-start text-white text-opacity-70 ml-2 md:ml-20 ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">{HERO_CONETENT}</p>
                    <button className="btn bg-orange-800 hover:bg-orange-950 border-none">View Catalog</button>
                </div>
            </div>
        </div>
    )
}

export default Hero