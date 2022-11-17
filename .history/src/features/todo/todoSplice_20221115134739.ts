import {  createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface Todo {
    id: string,
    text: string,
    completed: boolean,
}
export interface TodoState {
    value: Todo[],
    filteredValue: 
}

const initialState: TodoState = {
    value: []
};


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToList: (state, action) => {
            state.value.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            });
        },
        toggleComplete(state, action) {
            const toggledTodo: any = state.value.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.value = state.value.filter(todo => todo.id !== action.payload.id);
        },
        checkedTodo(state, action) {
            state.value = state.value.filter(todo => todo.completed === true )
        }
    },


});


export const { addToList, toggleComplete, removeTodo, checkedTodo } = todoSlice.actions;

export const userSelectValue = (state: RootState) => state.todo.value;


export default todoSlice.reducer;
