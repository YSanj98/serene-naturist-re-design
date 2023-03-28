import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Services';
import AboutUs from './components/About us';


function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = ()=> {
      if (window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.screenY !==0) 
      setIsTopOfPage(false);
      }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" app">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}  
      />
      <Home setSelectedPage={setSelectedPage} />
      <Service setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
function handleScroll(this: Window, ev: Event) {
  throw new Error('Function not implemented.');
}

