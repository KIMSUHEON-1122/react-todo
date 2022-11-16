/* 
https://react-icons.github.io/react-icons/
*/

import React from 'react';
import { TfiTrash } from 'react-icons/tfi';
import styles from "./Todo.module.css"

export const Todo = ({todo, onUpdate, onDelete}) => {
  const {id, text, status} = todo;
  const handleChange = (e) => {
    //받아온것 X. 이 컴포넌트 내부에서만 사용.
    const status = e.target.checked ? "completed" : "active";
    onUpdate({...todo, status});
  }

  const handleDelete = () => {
    onDelete(todo)
  }
  return (
    <li className={styles.todo}>
        <input
        className={styles.checkbox}
        id = {id}
        type="checkbox"
        checked = {status==="completed"}
        onChange = {handleChange}/>
        <label 
        className={styles.text}
        htmlFor = {id}>{text}</label>
        {/* label만 클릭해도 체크박스가 선택되게.  */}
        <span className={styles.icon}>
            <button
            className={styles.button} 
            onClick={handleDelete}>
                <TfiTrash/>
            </button>
        </span>
    </li>
  )
}
