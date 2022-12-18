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
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/profile'}>Profile</Link>
            </li>
            <li>
              <Link to={'/project'}>Project</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
