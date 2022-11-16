import React, {useState} from 'react'
import TodoList from './components/TodoList/TodoList'
import Header from './components/header/Header'
import "./index.css"
import { DarkModeProvider } from './components/context/DarkModeContext'


// 어떤 필터가 있는지 component 밖에서 정의
const filters = ["all","active","completed"];

const App = () => {
  const [filter, setFilter] = useState(filters[0]); 
  //초기값으로 필터중에 all로 시작
  return (
    <>
    <DarkModeProvider>
      <Header 
        filters = {filters} 
        filter = {filter} 
        onFilterChange = {setFilter}/>
        <TodoList filter = {filter}/>
    </DarkModeProvider>
    </>
    
  )
}

export default App