import { createReducer } from '@reduxjs/toolkit';

export const questionReducer = createReducer({}, builder => {
    builder
    .addCase('RECIEVE_QUESTIONS', (state, action) => {
        state = action.payload
    })
    .addCase('RECIEVE_QUESTION', (state, action) => {
        state[action.payload._id] = action.payload
    })
    .addCase('REMOVE_QUESTION', (state, action) => {
       return state.delete(action.payload._id)
    })
    // .addDefaultCase(state => state)
});