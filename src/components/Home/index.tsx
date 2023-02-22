import mediaQuery from '@/hooks/mediaQuery';
import { SelectedPage } from '@/shared/types'


type Props = {
    setSelectedPage: (Value: SelectedPage) => void;
};

const Home = (props: Props) => {
    const isAboveMediumScreens = mediaQuery("(min-width:1060px)");
  return (
    //Home component desktop view    
    <div>
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
            <button className="btn bg-primary-100">Begin Therapy</button>
          </div>
        </div>
      </div>
      
      <div className="font-serif bg-gradient-to-r from-[#EFF0DB] to-[#FFFFFF]">
        <div className=" flex items-center justify-between mx-auto w-3/4">
          <div>
          <img src="src/assets/images/image1.jpg" className="my-20 max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className='mx-10'>
            <h1 className="text-center text-3xl font-bold">We are</h1>
            <p className="text-justify text-xl py-6"> a small very professional Therapy Centre, 
            we cater for the naturist client, ladies, gentlemen and couples are all welcome 
            by prior appointment only. We offer a genuine naturist massage based on a professional 
            Swedish Massage and also grooming therapies. <br/><br/>
            We are based in professional premises of the highest standard. We have beautiful 
            therapy rooms with sophisticated decor whilst being warm welcoming and very comfortable. 
            There are shower facilities. There is secure off- road parking for 4 vehicles on recorded CCTV camera for your convenience and peace of mind. 
            We open Mon to Fri we can offer some early evening appointments with enough notice. We are qualified and insured. Its best to call early mornings
            </p>
          </div>
        </div>
      </div>
    </div>
    

    
  )
};

export default Home