import React from 'react'
import logo from "/direccion-ip (2).png"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="flex justify-around items-center bg-[#23272f] h-[120px] shadow-lg p-3 mt-[60px]">
            <img src={logo} width={40} alt="" />
            <Link to={"/"}><p className='text-letracardgrande'>Home</p></Link>

        </div>
    )
}
