import React, { useState } from 'react';
import OfferContainer from '../components/Pokemon Offer Components/OfferContainer';
import { getAllOfferUserRefresh } from '../utils/network-data';

function OffersPage() {
  const [offerCards, setOfferCards] = useState();
  const [initializing, setInitializing] = useState(true);
  React.useEffect(() => {
    getAllOfferUserRefresh().then(({ error, data, message }) => {
      try {
        setOfferCards(data);
        setInitializing(false);
      } catch (e) {
        console.log(message);
      }
    });
  }, []);

  if (initializing) {
    return (
      <section className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="relative inline-flex">
            <span className="absolute top-0 right-0 -mt-16 -mr-14 flex h-32 w-32">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex h-32 w-32 rounded-full bg-yellow-500"></span>
            </span>
          </span>
        </div>
      </section>
    );
  }

  // console.log(offerCards);

  return (
    <section>
      <OfferContainer offerCards={offerCards} />
    </section>
  );
}

export default OffersPage;
