import MyMapComponent from './MapComponent.jsx'
import React, { useMemo, useState} from "react";
import { useDispatch } from 'react-redux';
import { updateCard, removeCard } from '../../redux/allCardSlise.js';
import { FaTrash } from "react-icons/fa6";

const SeeDetalisModal = ({setModalActive, modalActive, children}) => {
    const dispatch = useDispatch();
    const {color, latitude, id, longitude, model, name, price, year} = children;
    const [modelI, setModel] = useState(model);
    const [nameI, setName] = useState(name);
    const [priceI, setPrice] = useState(price);
    const [colorI, setColor] = useState(color);
    const [yearI, setYear] = useState(year);

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

    const handleUpdateCard = () => {
        const newValue = {model: modelI, name: nameI, price: priceI, year: yearI, color: colorI}
        dispatch(updateCard({values: newValue, id}))
        setModalActive(false);
    }

    const handleDeleteCard = () => {
        dispatch(removeCard({id}));
    }

    return (
        <div className={!modalActive ? 'unActive modal' : 'modal'} onClick={closeModal}>
            <div className="modal_content"  onClick={stopPropagation}>
            <div className="info-card modal-info">
                <p>Model: <input className='inputModal' placeholder={modelI} onChange={(e) => setModel(e.target.value)}></input></p>
                <p>Car: <input className='inputModal' placeholder={nameI} onChange={(e) => setName(e.target.value)}></input></p>
                <p>Year: <input className='inputModal' placeholder={yearI} onChange={(e) => setYear(e.target.value)}></input></p>
                <p>Color: <input className='inputModal' placeholder={colorI} onChange={(e) => setColor(e.target.value)}></input></p>
                <p>Price: <input className='inputModal' placeholder={priceI} onChange={(e) => setPrice(e.target.value)}></input></p>
                <button className='sort-btn padd' onClick={handleUpdateCard}>Update</button>
                <button className='delete-card' onClick={handleDeleteCard}><FaTrash /></button>
            </div>
            <MyMapComponent width={400} height={400} options={options}/>
            </div>
        </div>
    );
}

export default SeeDetalisModal;