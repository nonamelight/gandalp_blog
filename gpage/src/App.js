
import './App.css';
import Elecbook from './components/Elecbook';
import LogoProfileLayout from './view/LogoProfileLayout';
import {useState, useEffect, createContext, useContext} from 'react'
const ResponsiveContext = createContext();
export function ResponsiveProvider({children}){
  const IS_MOBILE = !matchMedia('screen and (min-width: 768px)').matches;
  const [isMobile, setIsMobile] = useState(IS_MOBILE);

  const handleResize = ()=>{
    if(window.innerWidth < 768){
      setIsMobile(true);
    }else{
      setIsMobile(false);
    }
  }
  useEffect(()=>{
    window.addEventListener('resize',handleResize);    
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[])

  return <ResponsiveContext.Provider value={{isMobile}}>{children}</ResponsiveContext.Provider>;
}
export function useResponsiveApi(){
  return useContext(ResponsiveContext);
} 
function App() {

  return (
    
    <>
    <ResponsiveProvider>      
        <LogoProfileLayout></LogoProfileLayout>
    </ResponsiveProvider>
   
    </>
  );
}

export default App;
