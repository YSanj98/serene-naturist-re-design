import mediaQuery from '@/hooks/mediaQuery';
import { SelectedPage } from '@/shared/types'
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (Value: SelectedPage) => void;
};

const Home = (props: Props) => {
    const isAboveMediumScreens = mediaQuery("(min-width:850px)");
    const isBelowSmallScreens = mediaQuery("(max-width:850px)");
  return (
    //Main hero section
    <div>
      <div className="hero min-h-screen bg-[url('@/assets/images/hero.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <motion.div className="max-w-md" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },}}>
            <h1 className="mb-5 text-5xl xs:text-4xl font-bold">Welcome To Serene Naturist</h1>
            <p className="mb-5">
              This Website is dedicated to our Naturist clients,
              people following a naturist lifestyle,
              and who are looking for a genuine naturist massage therapy experience
            </p>
            <button className="btn transition ease-in-out delay-150 bg-primary-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#f39d1a] duration-300">Begin Therapy</button>
          </motion.div>
        </div>
      </div>

      {/*Mobile view*/}
      {isBelowSmallScreens && (
      <div className="text-primary-100 flex justify-center font-serif bg-[#f9f9f1]">
        <div className="w-5/6 mt-10">
          <h1 className="text-center text-3xl font-bold">We are</h1>
          <p className="px-2 text-justify text-xl py-6"> a small very professional Therapy Centre, 
              we cater for the naturist client, ladies, gentlemen and couples are all welcome 
              by prior appointment only. We offer a genuine naturist massage based on a professional 
              Swedish Massage and also grooming therapies.
          </p>
        </div>
      </div>
      )}
      
      {/*Desktop view*/}
      {isAboveMediumScreens && (
          <div className="font-serif bg-[#f9f9f1]">
            <div className="justify-items-stretch justify-between flex items-center">
              <img src="src/assets/images/image1.jpg" className="place-content-center my-10 mx-20 max-w-sm rounded-lg shadow-2xl" />
              <div className='text-primary-100 px-4'>
                <h1 className="text-center text-3xl font-bold pt-5 pb-5">We are</h1>
                <p className="text-justify text-xl py-6 px-6 font-medium"> a small very professional Therapy Centre, 
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
      )}
    </div>
    

    
  )
};

export default Home