import React from 'react'
import { Link } from "react-router-dom";
function NotFound() {
    return (
        <main className="shadow-lg grid place-self-center mt-20 py-20 w-3/4 mx-auto text-grey bg-slate-400  justify-center text-center">
            <p className="text-7xl pt-3 m-3">😮404😮</p>
            <p className="text-lg  m-2">There's nothing here!</p>
            <Link className="btn btn-accent text-2xl" to="/">
                🏡Home
            </Link>
        </main>
    )
}

export default NotFound