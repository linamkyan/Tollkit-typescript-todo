import { useEffect, useState} from 'react';
import styles from './Todo.module.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
    addToList,
    changeFilter,
    deleteState,
    checkedAll,
    uncheckedAll,
} from '../todo/todoSplice';



export function Todo() {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<any>('');
    const { value: userValue} = useAppSelector(state => state.todo)

    const [isChecked, setIsChecked] = useState<boolean>(() => userValue.every(item => item.completed))
    const [isUnChecked, setIsUnChecked] = useState<boolean>(() => userValue.every(item => !item.completed))



    const handleAddToDoList = () => {
        if(value.trim().length) {
            dispatch(addToList(value));
            setValue('');
        }
    }
    
    const handleShowFilter = (showType: "checked" | "unChecked" | "All") => {
        dispatch(changeFilter(showType))
    }

    const handleDeleteAllToDoList = () => {
        dispatch(deleteState(value));
    }

    const handleCheckAllToDoList = () => {
        dispatch(checkedAll());
    }
    const handleUncheckAllToDoList = () => {
        dispatch(uncheckedAll());
    }

    useEffect(() => {
        setIsChecked(userValue.every(item => item.completed))
        setIsUnChecked(userValue.every(item => !item.completed))
    }, [userValue])

    return (
        <div>
               <h1>ToDo list</h1>
                <h3>You have {userValue.length} items!!!</h3>
               <div className={styles.all_btns}>
                   <input type="text" value={value} placeholder='Enter your plans...' onChange={(e) => setValue(e.target.value)} />
                   <button className={styles.add_btn} onClick={handleAddToDoList}>Add + </button>
                   <button className={styles.only_checks_btn} onClick={() => handleShowFilter("checked")} disabled={!userValue.length}>Show only checked </button>
                   <button className={styles.only_unchecks_btn} onClick={() => handleShowFilter("unChecked")} disabled={!userValue.length}>Show only unchecked </button>
                   <button className={styles.show_all} onClick={() => handleShowFilter("All")} disabled={!userValue.length}>Show All</button>
                   <button className={styles.delete_all} onClick={handleDeleteAllToDoList} disabled={!userValue.length}>Delete All</button>
                   <button className={styles.check_all} onClick={handleUncheckAllToDoList} disabled={isUnChecked}>Uncheck All</button>
                   <button className={styles.uncheck_all} onClick={handleCheckAllToDoList} disabled={isChecked}>Check All</button>
               </div>
        </div>
    );
}
