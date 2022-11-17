import {  createSlice } from '@reduxjs/toolkit';


export interface Todo {
    id: string,
    text: string,
    completed: boolean,
}
export interface TodoState {
    value: Todo[],
    filter: boolean,
}

const initialState: TodoState = {
    value: [],
    filter: false
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
        changeFilter(state, action) {
            state.filter = action.payload
        }
    },


});


export const { addToList, toggleComplete, removeTodo, changeFilter } = todoSlice.actions;

export const userSelectValue = (state: RootState) => state.todo.value;


export default todoSlice.reducer;