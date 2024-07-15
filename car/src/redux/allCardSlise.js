import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cards: {},
};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCards: (state, {payload}) => {
            payload.forEach((el) => state.cards[el.id] = el)
        },
        removeCard: (state, {payload}) => {
            const {id} = payload;
            delete state.cards[id]
        },
        updateCard: (state, {payload}) => {
            const {id, values} = payload;
            Object.entries(values).forEach(([key, value]) => state.cards[id][key] = value)
        },
    }
})

export const selectCards = state => state.allCard.cards;
export const selectTasksId = (state, id) => state.task.task[id];
export const selectCompletTasksId = (state, id, index) => state.task.task[id][index].completeTask
export const {addCards, removeCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;