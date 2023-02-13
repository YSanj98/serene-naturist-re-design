import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className="navbar fixed top-0 z-30 justify-between bg-base-100 py-6 text-primary-100">
        <div className="${flexBetween} mx-auto w-5/6 ">
          {/*Temporary Header*/}
          <div className="flex-1">
            <a className="btn-ghost btn text-2xl normal-case">Serene Naturist</a>
          </div>
          <div className="${flexBetween} space-x-6 text-m">
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
      </div>
    </nav>
  );
};

export default Navbar;

/* Right side   
<div className="${flexBetween} w-full">
<div className="${flexBetween}  gap-8 text-sm">
    <p>Home</p>
    <p>About Us</p>
    <p>Services</p>
    <p>Contact Us</p>
</div>             
<div className="${flexBetween}  gap-8">
    <p className="">Sign In</p>
    <button className="">Become a member</button>
</div>  
</div>   
*/
