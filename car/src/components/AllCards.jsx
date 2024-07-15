import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card.jsx";
import { selectCards, addCards } from "../redux/allCardSlise.js";

const AllCards = () => {
  const objCard = useSelector(selectCards);
  const cards = Object.values(objCard) 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://test.tspb.su/test-task/vehicles');
        const data = await response.json();
        dispatch(addCards(data));
      } catch(err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [dispatch]);

  const sortByYear = useCallback(() => {
    if (!cards) return;
    const sortedCards = [...cards].sort((a, b) => +a.year - +b.year);
  }, [cards]);

  const sortByPrice = useCallback(() => {
    if (!cards) return;
    const sortedCards = [...cards].sort((a, b) => +a.price - +b.price);
  }, [cards]);

  return (
    <div>
      <div className="sort">
        <div className="sort-btn" onClick={sortByYear}>
          <a>Old Car</a>
        </div>
        <div className="sort-btn" onClick={sortByPrice}>
          <a>Cheap Car</a>
        </div>
      </div>
      <div className='sectionCards'>
        <div className="cards">
          {cards?.map((el) => (
            <Card key={el.id}>{el}</Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCards;
