import {createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();
// data를 context에 담고있음(component처럼 쓰임)

// data를 가지고 보여주고 있는 우산역할(부모 우산 컴포넌트)
export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    // darkmode인지 아닌지 기억하는 상태 / 초기값은 다크모드가 아닌 상태. 
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    }
    
    useEffect(()=>{
        const isDark = 
            localStorage.theme === "dark" || 
            (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches);
        //다크모드상태를 변수 isDark에 넣어줌
        setDarkMode(isDark);//다크모드인지 아닌지 내부상태 업데이트
        updateDarkMode(isDark);
    }, []) //처음 로딩될때만 작동함

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
} 
// 컨텍스트(DarkModeContext)에는 내장 프로퍼티 provider가 있음
// DarkModeContext.Provider를 통해 value값 설정

// Hook생성
export const useDarkMode = () => useContext(DarkModeContext);

// 다크모드가 true일때 제일 상위 element에 dark class를 넣어줌


 /* https://tailwindcss.com > docs > darkmode 중간에 있는 상태유지 부분에서 복사
    제일 처음 마운트(로딩) 될 때 최종 상태가 다크모드인지 아닌지 판단하고 그대로 초기값 설정
 */
function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
    else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}
