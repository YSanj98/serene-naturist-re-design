import mediaQuery from "@/hooks/mediaQuery";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";
import logo from "@/assets/images/serene-logo.png"


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage}: Props) => {
  const isAboveSmallScreens = mediaQuery("(min-width:850px)");
  const [IsMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className="${navBarBackground} navbar fixed top-0 z-30 justify-between bg-base-100 py-4 text-primary-100 bg-gradient-to-r from-[#EFF0DB] to-[#FFFFFF]">
        <div className="flex items-center justify-between mx-auto w-[90%] ">
          {/*Header*/}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-24 h-24" />
            <a href="" className="font-medium text-[32px] xs:text-2xl normal-case">Serene Naturist</a>
          </div>
          {/* Navbar responsive */}
          {isAboveSmallScreens ? (
            <div className="flex items-center justify-between space-x-6 text-m font-bold">
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
              page="Prices"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Us"
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
      {!isAboveSmallScreens && IsMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gradient-to-r from-[#EFF0DB] to-[#FFFFFF] drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-10 mr-12">
            <button onClick={() => setIsMenuToggled(!IsMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-20 text-2xl text-primary-100 font-bold">
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
              page="Prices"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Us"
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
