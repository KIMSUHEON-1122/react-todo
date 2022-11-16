import React from 'react'
import styles from "./Header.module.css";
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useDarkMode} from "../context/DarkModeContext";
//만들어놓은 hooks을 가져옴

export default function Header({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle}
      onClick = {toggleDarkMode}>
        {!darkMode &&< HiOutlineMoon />}
        {darkMode &&< HiOutlineSun />}
      </button>
        <ul className={styles.filters}>
            {filters.map((value, index) => (
                <li key = {index}>
                    <button 
                      className = {
                        `${styles.filter} 
                        ${filter === value && styles.selected}`
                      }
                      onClick={()=> onFilterChange(value)}
                    >
                      {value}
                    </button>
                </li>
            ))}
        </ul>
    </header>
  )
}
