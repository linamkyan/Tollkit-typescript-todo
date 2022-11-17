import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface Todo {
    id: string,
    text: string,
    completed: boolean,
}
export interface TodoState {
    value: Todo[],
    filter: "checked" | "unChecked" | "All",
}

const initialState: TodoState = {
    value: [],
    filter: 'All',
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
        changeFilter(state, action: PayloadAction<"checked" | "unChecked" | "All">) {
            state.filter = action.payload
        },
        deleteState(state, action) {
            state.value = []
        },
        checkedAll(state) {
            const filtered = state.value.filter(todo => todo.completed !== true);
            filtered.forEach(list => list.completed = !list.completed)
        },
        uncheckedAll(state) {
            const filtered = state.value.filter(todo => todo.completed === true);
            filtered.forEach(list => list.completed = !list.completed)
        }
    },


});


export const { addToList, toggleComplete, removeTodo, changeFilter, deleteState, checkedAll, uncheckedAll } = todoSlice.actions;

export const userSelectValue = (state: RootState) => state.todo.value;


export default todoSlice.reducer;
