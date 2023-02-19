import mediaQuery from "@/hooks/mediaQuery";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const isAboveMediumScreens = mediaQuery("(min-width:1060px)");
  const [IsMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBarBackground = isTopOfPage ? "" : "bg-red-100";

  return (
    <nav>
      <div className="${navBarBackground} navbar fixed top-0 z-30 justify-between bg-base-100 py-6 text-primary-100">
        <div className="flex items-center justify-between mx-auto w-5/6 ">
          {/*Temporary Header*/}
          <div className="flex-1">
            <a className="btn-ghost btn text-4xl normal-case">Serene Naturist</a>
          </div>
          {/* Navbar responsive */}
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
              {/* Mobile view toggle button */}
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && IsMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-10 mr-12">
            <button onClick={() => setIsMenuToggled(!IsMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl text-white">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
