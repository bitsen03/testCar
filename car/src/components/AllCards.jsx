import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card.jsx';
import { selectCards, addCards } from '../redux/allCardSlise.js';

const AllCards = () => {
  const objCard = useSelector(selectCards);
  const dispatch = useDispatch();
  const [sortedCards, setSortedCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://test.tspb.su/test-task/vehicles');
        const data = await response.json();
        dispatch(addCards(data));
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setSortedCards(Object.values(objCard));
  }, [objCard]);

  const sortByYear = useCallback(() => {
    setSortedCards((prevCards) => 
      [...prevCards].sort((a, b) => +a.year - +b.year)
    );
  }, []);

  const sortByPrice = useCallback(() => {
    setSortedCards((prevCards) => 
      [...prevCards].sort((a, b) => +a.price - +b.price)
    );
  }, []);

  return (
    <div>
      <div className="sort">
        <div className="sort-btn" onClick={sortByYear}>
          <a>New Car</a>
        </div>
        <div className="sort-btn" onClick={sortByPrice}>
          <a>Cheap Car</a>
        </div>
      </div>
      <div className="sectionCards">
        <div className="cards">
          {sortedCards?.map((el) => (
            <Card key={el.id}>{el}</Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCards;
