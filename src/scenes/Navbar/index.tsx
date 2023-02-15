import mediaQuery from "@/hooks/mediaQuery";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";


type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
  const isAboveMediumScreens = mediaQuery("(min-width:768px)");
  const [IsMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className="navbar fixed top-0 z-30 justify-between bg-base-100 py-6 text-primary-100">
        <div className="flex items-center justify-between mx-auto w-5/6 ">
          {/*Temporary Header*/}
          <div className="flex-1">
            <a className="btn-ghost btn text-2xl normal-case">Serene Naturist</a>
          </div>
          
          {isAboveMediumScreens ? (
            <div className="flex items-center justify-between space-x-6 text-m">
            <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} 
            />
            <Link 
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} 
            />
            <Link 
                page="About Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} 
            />
            <Link 
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} 
            />
          </div> 
          ) : (
            <button className="rounded-full bg-primary-100 p-2" onClick={()=> setIsMenuToggled(!IsMenuToggled)}>
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
