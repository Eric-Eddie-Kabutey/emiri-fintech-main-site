import React from 'react';
import InfiniteScroller from './infinite-scroller';

const ScrollingCards = () => {
  // We'll create an array to represent the cards.
  // This makes it easy to replace with real data later.
  // This could be replace by any data in the feature
  const cardData = [
    { id: 1, width: 'w-98' }, // A narrower card
    { id: 2, width: 'w-98' }, // A wider card
    { id: 3, width: 'w-98' }, // A wider card
    { id: 4, width: 'w-98' }, // A narrower card
    { id: 5, width: 'w-98' },
    { id: 6, width: 'w-98' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      {/* We can set the speed directly here. A higher number is slower. */}
      <InfiniteScroller speed={20}>
        {cardData.map((card) => (
          <div
            key={card.id}
            // flex-none is important to prevent flexbox from shrinking the cards
            className={`flex-none h-72 rounded-xl bg-[#EAEFEC] ${card.width}`}
          >
            {/* 
              Card content will go here later.
              For now, it's an empty, styled container.
            */}
          </div>
        ))}
      </InfiniteScroller>
    </section>
  );
};

export default ScrollingCards;