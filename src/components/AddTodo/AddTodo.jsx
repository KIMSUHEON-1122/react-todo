import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'

/* 
https://www.npmjs.com/package/uuid 
자동으로 고유 key값을 생성시켜줌 
*/
export const AddTodo = ({onAdd}) => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => { //form고유의 submit기능이 작동되면 일어남.
        e.preventDefault(); //button 누르면 새로고침 되는 기본속성을 막아줌.
        if(text.trim().length<1) {//trim() - 빈 부분을 잘라줌
            setText('') //submit버튼 누른 후 input창을 초기화
            return; 
            /* 입력된것이 없을때는handlesubmit이 빠져나감
            space 공백은 걸러내지 못함 */
        }
        onAdd({id : uuidv4() , text:text.trim(), status : "active"});
        setText('') //submit버튼 누른 후 input창을 초기화

       
    }

    const onEnterPress = (e) => {
        if(e.key === "Enter"){
            handleSubmit();
        }
    }

  return (
    <form onSubmit={handleSubmit} className = {styles.form}>
        <input 
        className={styles.input}
        type="text" 
        placeholder='ADD TODO!'
        value = {text}
        onChange = {handleChange} //변경될때마다 handleChange호출
        onKeyPress = {onEnterPress}
        />
        <button className={styles.button}>Add</button>
    </form>
  )
}
