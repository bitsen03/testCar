import React, {useEffect, useState} from "react";
import Card from "./Card.jsx";

const AllCards = () => {
const [cards, setCards] = useState(null);
 
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://test.tspb.su/test-task/vehicles');
            const data = await response.json()
            setCards(data)
        } catch(err){
            throw(err);
        }
    }
    fetchData();
}, []);

const sortByYear = () => {
    if (!cards) return; 
    const sortedCards = [...cards].sort((a, b) => +a.year - +b.year);
    setCards(sortedCards);
  };

  const sortByPrice = () => {
    if (!cards) return; 
    const sortedCards = [...cards].sort((a, b) => +a.price - +b.price);
    setCards(sortedCards);
  };
  const sortBy = () => {
    if (!cards) return; 
    const sortedCards = [...cards].sort((a, b) => a.price + b.price);
    setCards(sortedCards);
  };

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
    <dir className='sectionCards' onClick={sortByYear}>
        <div className="cards">
            {cards?.map((el) =><Card key={el.id}>{el}</Card>)}
        </div>
   </dir> 
</div>
);
}

export default AllCards;