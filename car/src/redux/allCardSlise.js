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
        removeCards: (state, {payload}) => {
            const {id, index} = payload;
            state.cards[id].splice(index, 1)
        },
        updateCards: (state, {payload}) => {
            const {id, values} = payload;
            Object.entries(values).forEach(([key, value]) => state.cards[id][key] = value)
        },
    }
})

export const selectCards = state => state.allCard.cards;
export const selectTasksId = (state, id) => state.task.task[id];
export const selectCompletTasksId = (state, id, index) => state.task.task[id][index].completeTask
export const {addCards, removeCards, updateCards } = cardSlice.actions;
export default cardSlice.reducer;