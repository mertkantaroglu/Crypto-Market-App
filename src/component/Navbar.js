import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="back-icon">
          <NavLink to="/">
            <IoIosArrowBack className="back-arrow" /> 2023
          </NavLink>
        </div>
        <div className="icons">
          <BiMicrophone />
          <AiOutlineSetting />
        </div>
      </nav>
      <div>Crypto Market App <br />Top 100 Coins</div>
    </>
  );
}

export default Navbar;
