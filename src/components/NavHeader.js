import React from 'react';

const NavHeader = ({ lists }) => {
  console.log(lists);
  return (
    <div className="nav-header">
      <header>
        <nav>
          <ul>
            {/*Will soon move the list into component*/}
            {lists.map((list) => (
              <li key={list.value}>
                <a target={list.tar} rel={list.rel} href={list.href}>
                  {list.value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
