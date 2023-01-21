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
            <li className="max-md:text-xxs">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="max-md:text-xxs">
              <Link to={'/profile'}>Profile</Link>
            </li>
            <li className="max-md:text-xxs">
              <Link to={'/social'}>Social</Link>
            </li>
            <li className="max-md:text-xxs">
              <Link to={'/collections'} title="Collections">
                Manage Collections
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
