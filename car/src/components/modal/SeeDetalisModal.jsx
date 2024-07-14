import React from "react"

const SeeDetalisModal = ({setModalActive, modalActive, children}) => {
    const {color, id, latitude, longitude, model, name, price, year} = children;

    const closeModal = () => {
        setModalActive(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={!modalActive ? 'unActive modal' : 'modal'} onClick={closeModal}>
            <div className="modal_content"  onClick={stopPropagation}>
            <div className="info-card">
                <p>Model: {model}</p>
                <p>Car: {name}</p>
                <p>Year: {year}</p>
                <p>Color: {color}</p>
                <p>price: ${price}</p>
            </div>
            </div>
        </div>
    );
}

export default SeeDetalisModal;