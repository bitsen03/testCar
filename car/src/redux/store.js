import { configureStore } from '@reduxjs/toolkit';
import allCarSlise from './allCardSlise.js';

const store = configureStore({
    reducer: {
        allCard: allCarSlise,
    },
});

export default store;
  