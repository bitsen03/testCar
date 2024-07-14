import React, {useEffect, useState} from "react";
import Card from "./Card.jsx";

const AllCards = () => {
const [cards, setCards] = useState(null);
 
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://test.tspb.su/test-task/vehicles');
            const data = await response.json()

            fetch('', 
                {}
            )
            setCards(data)
        } catch(err){
            throw(err);
        }
    }
    fetchData();
}, []);

return (
   <dir className='sectionCards'>
        <div className="cards">
            {cards?.map((el) =><Card key={el.id}>{el}</Card>)}
        </div>
   </dir> 

);
}

export default AllCards;