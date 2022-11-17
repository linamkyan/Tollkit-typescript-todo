import {useEffect, useMemo} from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { toggleComplete, removeTodo } from "../features/todo/todoSplice";
import styles from './TodoList.module.css';


const TodoList = (): JSX.Element => {
    const dispatch = useDispatch();
    const { value, filter } = useAppSelector(state => state.todo)

    const userValue = useMemo( () => {
        switch(filter) {
            case "All": 
                return value;
            case "checked":
                return value.filter(list => list.completed);
            case "unChecked": 
                return value.filter(list => !list.completed);
        }
    }, [value, filter])


    return (
        <table className={styles.table}>
            <tbody>
            {userValue?.map((user, id) => (
              <tr key={id} className={styles.rowTr}>
                  <td>
                      <input
                          type='checkbox'
                          checked={user.completed}
                          onChange={() => dispatch(toggleComplete(user))}
                      />
                  </td>
                  <td>{user.text}</td>
                  <td>
                      <span className={styles.delete} onClick={() => dispatch(removeTodo(user))}>&times;</span>
                  </td>
               </tr>
             ))}
            </tbody>
        </table>
    )
}

export default TodoList