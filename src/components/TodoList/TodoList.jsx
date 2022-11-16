//todo아이템의 상태를 저장해서 다시 열었을때도 그대로
import React, {useEffect, useState} from 'react';
import {AddTodo} from '../AddTodo/AddTodo';
import { Todo } from '../Todo/Todo';
import styles from "./TodoList.module.css";


export default function TodoList({filter}) {
//미리 입력해둔 todos가 아니라 이미 저장된 값을 가져옴
  const [todos, setTodos]=useState(readTodoFromLocalStorage()
  //코드가 너무 길어져서 함수로 만들었음. 
    /* {
      id : "123",
      text : "장보기",
      status : "active"
    },
    {
      id : "456",
      text : "유산소운동",
      status : "active"
    },
    {
      id : "127",
      text : "콘서트 보러 가기",
      status : "active"
    } */
  );//status는 나중에 진행중 / 완료 구분을 위해

  const handleAdd = (todo) => {
    setTodos(
      [...todos,
      todo]
    )
  }

  const handelUpdate = (updated) => {
    setTodos(todos.map(item =>(
      item.id === updated.id ? updated : item
      )));
  }

  const handelDelete = (deleted) => {
    setTodos(todos.filter(item => (
      item.id !== deleted.id
    )))
  }

  const filtered = getFilteredItems(todos, filter);
  //필터링해주는 함수 실행. 

  //todos가 업데이트 될때 적용
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  //객체나 배열을 JSON 문자열로 변환해서 localStorage에 저장
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
        <Todo 
          key = {item.id}
          todo = {item}
          onUpdate = {handelUpdate}
          onDelete = {handelDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd = {handleAdd}/>
    </section>
  )
  
  /* 
    localStorage에 저장된todos를 가져와서 object형식으로 변환, 
    없으면 빈배열 
  */
  function readTodoFromLocalStorage(){
    const todos = localStorage.getItem("todos")
    return todos ? JSON.parse(todos) : [];
  }

  function getFilteredItems(todos, filter){
    if(filter === "all"){
      return todos;
    }
    return todos.filter(todo => todo.status === filter)
  }
  
}

