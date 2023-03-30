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
            <IoIosArrowBack className="back-arrow" />
            {' '}
            <p>2023</p>
          </NavLink>
        </div>
        <div className="icons">
          <BiMicrophone />
          <AiOutlineSetting />
        </div>
      </nav>
      <h1>
        Crypto Market App
      </h1>
    </>
  );
}

export default Navbar;
