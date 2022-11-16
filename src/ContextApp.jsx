import React, { useContext } from 'react';
import "./ContextApp.css";
import { DarkModeContext, DarkModeProvider} from './DarkModeContext';

const ContextApp = () => {
  return (
    <>
    <Header></Header>
        <Main></Main>   
    <Footer></Footer>    
    </>
  )
}
function Header(){
    return <header className='header'>HEADER</header>
}

function Main(){
    return(
    <main>
        + Main +
        <Profile></Profile>
        <Products></Products>
    </main>)
}

function Profile(){
    return(
        <>
            <div>Profile</div>
            <User></User>
        </>
        
    )
}

function User(){
    return (
    <div>user</div>
    )
}

function Products(){
    return (
        <>
            <DarkModeProvider>
                <div>-products</div>
                <ProductDetail></ProductDetail> 
            </DarkModeProvider>
        </>
    );
}

function ProductDetail(){
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    return (
        <div>
            --ProductDetail
        <p>DarkMode : 
            {darkMode ? (
            <span style={{backgroundColor:"black", color : "white"}}>darkMode</span>
            ) : (
                "lightMode"
            )}
        </p>
        <button onClick={()=>toggleDarkMode()}>Toggle</button>
        </div>
    )
}

function Footer(){
    return(
        <div className="footer">footer</div>
    )
}
export default ContextApp