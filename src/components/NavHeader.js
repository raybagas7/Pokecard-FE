import React from 'react';
import { Link } from 'react-router-dom';

const NavHeader = () => {
  // console.log(lists);
  return (
    <div className="nav-header">
      <header>
        <nav>
          <ul>
            {/*Will soon move the list into component*/}
            <Link to={'/'} className="hover:text-white">
              <li className="max-md:text-xxs">Home</li>
            </Link>
            <Link to={'/profile'} className="hover:text-white">
              <li className="max-md:text-xxs">Profile</li>
            </Link>
            <Link to={'/social'} className="hover:text-white">
              <li className="max-md:text-xxs">Social</li>
            </Link>
            <Link
              to={'/collections'}
              className="hover:text-white"
              title="Collections"
            >
              <li className="max-md:text-xxs">Manage Collections</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
