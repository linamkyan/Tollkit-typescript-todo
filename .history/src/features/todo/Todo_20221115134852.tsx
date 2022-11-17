import { useState } from 'react';
import styles from './Todo.module.css';

import { useAppDispatch } from '../../app/hooks';

import {
    addToList,
    checkedTodo,
} from '../todo/todoSplice';



export function Todo() {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<any>('');


    const handleAddToDoList = () => {
        if(value.trim().length) {
            dispatch(addToList(value));
            setValue('');
        }
    }
    const handleFilterToDoList = () => {
        dispatch(changeFilter(value));
    }


    return (
        <div>
            <div>
                <h1>ToDo list</h1>
                <input type="text" value={value} placeholder='Enter your plans...' onChange={(e) => setValue(e.target.value)} />
                <button className={styles.add_btn} onClick={handleAddToDoList}>Add + </button>
                <button className={styles.only_checks_btn} onClick={handleFilterToDoList} >Show only checks </button>
                <button className={styles.delete_all} >Delete All</button>
                <button className={styles.show_all}>Show All</button>
            </div>
        </div>
    );
}
