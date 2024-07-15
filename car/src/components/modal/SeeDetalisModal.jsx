import MyMapComponent from './MapComponent.jsx'
import React, { useMemo } from "react";

const SeeDetalisModal = ({setModalActive, modalActive, children}) => {
    const {color, latitude, longitude, model, name, price, year} = children;
    const options = useMemo(
      () => ({
        center: [latitude, longitude],
        zoom: 13,
      }),
      [latitude, longitude]
    );

    const closeModal = () => {
        setModalActive(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={!modalActive ? 'unActive modal' : 'modal'} onClick={closeModal}>
            <div className="modal_content"  onClick={stopPropagation}>
            <div className="info-card modal-info">
                <p>Model: {model}</p>
                <p>Car: {name}</p>
                <p>Year: {year}</p>
                <p>Color: {color}</p>
                <p>price: ${price}</p>
            </div>
            <MyMapComponent width={400} height={400} options={options}/>
            </div>
        </div>
    );
}

export default SeeDetalisModal;