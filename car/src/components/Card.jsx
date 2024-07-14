import React, {useState} from "react";
import SeeDetalisModal from "./modal/SeeDetalisModal";

const Card = ({children}) => {
    const { model, name, price, year} = children;
    const [modalActive, setModalActive] = useState(false);
    const fullNameCar = `${name} ${year}`;

    const openModal = () => {
        setModalActive(true);
    }

    return (
        <div className="card">
            <div className="info-card">
                <p className="name_card">{model}</p>
                <p className="name_card">{fullNameCar}</p>
                <p className="full-prace-car">starting from ${price}</p>
            </div>
            <p className="details_card" onClick={openModal}>see details</p>
            <SeeDetalisModal modalActive={modalActive} setModalActive={setModalActive}>{children}</SeeDetalisModal>
        </div>
    );
}

export default Card;