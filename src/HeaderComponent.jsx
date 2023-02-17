import React from 'react'
import { Link } from "react-router-dom";
function HeaderComponent() {
    return (

        <nav className="fixed top-0 z-10 w-full px-6 py-4 bg-gray-800 text-white">
            <div className="flex justify-between max-w-4xl mx-auto">
                <Link className='text-xl font-bold' to="/"> Home</Link>
                <Link className='px-4 py-2 hover:bg-gray-700' to="/about"> About</Link>
            </div>
        </nav>

    )
}

export default HeaderComponent