import mediaQuery from '@/hooks/mediaQuery';
import { SelectedPage } from '@/shared/types'
import hero from "@/assets/imgs/hero.jpg";

type Props = {
    setSelectedPage: (Value: SelectedPage) => void;
};

const Home = (props: Props) => {
    const isAboveMediumScreens = mediaQuery("(min-width:1060px)");
  return (
    
    <div>
        <img className='w-full' alt='hero-image' src={hero} />

    </div>
    
  )
}

export default Home