import React from "react";


const Footer = ()=>{
    return (
        <footer className="bg-[#00477B] text-white py-6 text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Binary. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer