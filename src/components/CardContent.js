import React from 'react';

const CardContent = ({ imageUrl }) => {
  /*imageSoon*/
  return (
    <div className="flex-row">
      <div className="box first">
        <img src="./images/jumboront-white-gold.png" alt="images" />
      </div>
      <div className="box second">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada
          sapien felis, a vestibulum nisl accumsan quis. Fusce lorem metus,
          hendrerit interdum mi eu, sodales aliquet est. Maecenas accumsan,
          tortor at egestas maximus, libero augue consectetur ex, ut venenatis
          diam dolor id ipsum. Aenean id lacinia lectus. Cras lacus ligula,
          laoreet ac ligula eget, mollis fringilla metus. Vestibulum pharetra
          risus ac felis suscipit, eu porta turpis lobortis. Nulla vel dolor nec
          dolor bibendum lobortis. Aliquam porta est vitae nisi volutpat, quis
          placerat justo feugiat. Morbi pulvinar erat est, vehicula iaculis urna
          eleifend vitae. Quisque eu egestas leo, quis ultricies sem. Morbi
          lobortis augue tellus, eu hendrerit nisi auctor id. Mauris tempor
          lorem ut rhoncus tempus. Nam ultrices in massa eu faucibus.
        </p>
      </div>
    </div>
  );
};

export default CardContent;
