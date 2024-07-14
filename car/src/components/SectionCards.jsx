import React from "react";
import AllCards from "./AllCards.jsx";
import MyMapComponent from "./modal/Map.jsx";

const SectionCards = () => {
return (
    <section className="cards-car">
        <div className="container">
          <AllCards></AllCards>
        </div>
        <div className="qwe">
        <MyMapComponent></MyMapComponent>
        </div>
    </section>
);
}

export default SectionCards;