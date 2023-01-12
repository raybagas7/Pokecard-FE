import React from 'react';
import TradesUserContainer from '../components/Pokemon Trade Components/Full Trades/TradesUserContainer';
import TradeCardContainer from '../components/Pokemon Trade Components/Trade Card/TradeCardContainer';
import useQuery from '../hooks/useQuery';

function TradesPage() {
  let query = useQuery();
  const searched = query.get('trader_card_id');

  return searched ? (
    <TradeCardContainer cardId={searched} />
  ) : (
    <TradesUserContainer />
  );
}

export default TradesPage;
