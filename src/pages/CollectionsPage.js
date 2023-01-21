import React from 'react';
import { getOwnerCardsRefresh } from '../utils/network-data';
import CollectedCardsContainer from '../components/Pokemon Collected Card/CollectedCardsContainer';

const CollectionsPage = () => {
  const [initializing, setInitializing] = React.useState(true);
  const [ownedCards, setOwnedCards] = React.useState([]);

  React.useEffect(() => {
    getOwnerCardsRefresh().then(({ error, data, message }) => {
      // console.log('home ownedcard', error, data, message);
      try {
        setOwnedCards(data);
        setInitializing(false);
        console.log('get collections', data);
      } catch (e) {
        console.log(e);
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

  return (
    <div>
      <div className="mt-5">
        <CollectedCardsContainer ownedCards={ownedCards} doFlip={true} />
      </div>
    </div>
  );
};

export default CollectionsPage;
