import mediaQuery from '@/hooks/mediaQuery';
import { SelectedPage } from '@/shared/types'
import hero from "@/assets/images/hero.jpg";

type Props = {
    setSelectedPage: (Value: SelectedPage) => void;
};

const Home = (props: Props) => {
    const isAboveMediumScreens = mediaQuery("(min-width:1060px)");
  return (
    
    <div className="hero min-h-screen bg-[url('@/assets/images/hero.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome To Serene Naturist</h1>
            <p className="mb-5">
              This Website is dedicated to our Naturist clients, 
              people following a naturist lifestyle, 
              and who are looking for a genuine naturist massage therapy experience
            </p>
            <button className="btn bg-primary-100">Get Started</button>
          </div>
        </div>
    </div>
    
  )
}

export default Home