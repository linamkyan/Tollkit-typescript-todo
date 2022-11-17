import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { userSelectValue, toggleComplete, removeTodo } from "../features/todo/todoSplice";
import styles from './TodoList.module.css';


const TodoList = (): JSX.Element => {
    const dispatch = useDispatch();
    const { value, filter } = useAppSelector(state => state.todo)

    
    
    const userValue = value.filter(list => list.completed)

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