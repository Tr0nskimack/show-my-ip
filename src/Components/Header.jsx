import React from "react";
import logo from "/direccion-ip (2).png"
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-cardgrande h-[80px] p-3">
      <div>
        <Link to={"/"} className="flex gap-2 items-center text-[17px] text-letracardgrande">
          <img src={logo} width={40} alt="" />
          <h1>TuIp</h1>
        </Link>

      </div>
    </header>
  );
};
