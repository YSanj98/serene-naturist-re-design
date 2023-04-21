import mediaQuery from "@/hooks/mediaQuery";
import { SelectedPage } from "@/shared/types";
import ServiceList from "../ServiceList";
import shavingImage from "@/assets/images/img-shaving.jpeg";
import coupleImage from "@/assets/images/img-couple.jpg";
import therapyRoomImage from "@/assets/images/img-therapy room.jpg";
import massageImage from "@/assets/images/img-massage.jpg";


type Props = {
  setSelectedPage: (Value: SelectedPage) => void;
}

const Service = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = mediaQuery("(min-width:850px)");
  const isBelowSmallScreens = mediaQuery("(max-width:850px)");
  return (

    //mobile view service component
    <div className="mt-20 w-full">
      <h1 className="text-center text-2xl font-medium pb-10 "> Not just only therapy center </h1>
    {isBelowSmallScreens && (
      <><div className="flex justify-center items-center text-[#ffffff] mb-10 mx-5">
          <ServiceList image={massageImage} serviceTitle="Massage" description="Our therapists are fully qualified Federation Members, who have trained in,
                amongst other things, Swedish Body Massage and Aromatherapy, also Indian Head Massage and Reflexology.
                full body, takes 2 hours plus, depending on exactly what is required.
                Hot stones and Infra red or Nova sonic equipment can also be incorporated into the naturist massage at no extra cost" />
        </div>
        <div className="flex justify-center items-center text-[#ffffff] mb-10 mx-5">
          <ServiceList image={therapyRoomImage} serviceTitle="Therapy Room" description="Relax in comfort and style, beauty, comfortable the therapy rooms.
                  we have 3 different rooms for the best naturist massage experience,
                  all decorated with calming colours and objects.
                  You receive a warm welcome and be offered a drink immediately,
                  your consultation also spends time  tailor making your therapy to
                  suit you, you will be offered a choice of oils creams and lotions, and inclusion
                  of face, hands and feet and heat treatment." />
        </div>
        <div className="flex justify-center items-center text-[#ffffff] mb-10 mx-5">
          <ServiceList image={shavingImage} serviceTitle="Shaving" description="Ladies and gentleman have
                  trimmed and pruned and shaped and shaved
                  all body hair are for ages
                  but this is where the naturist comes into his/her own.
                  once you start to shave it seems you can't stop
                  Be careful, before you know where you are you may
                  have turned into a smoothie!" />
        </div>
        <div className="flex justify-center items-center text-[#ffffff] mb-10 mx-5">
          <ServiceList image={coupleImage} serviceTitle="Couple" description="A naturist massage together can be a
                  wonderful way to affirm your closeness,
                  or to rekindle a romantic flame by
                  taking the time out to do some thing lovely
                  and relaxing together. it is a special and
                  a memorable way to celebrate a special occasion.
                  i often see my self as a catalyst a
                  sort of a cupid figure, allowing and showing a couple
                  how to massage, how to nature and be tender with each other" />
        </div></>
    )}
          {/* Desktop View */}
          {isAboveMediumScreens && (
          <div className=" justify-center px-20 gap-10 grid grid-cols-1">
            <div className="flex justify-around gap-5">
              <ServiceList image={massageImage} serviceTitle="Massage" description="Our therapists are fully qualified Federation Members, who have trained in,
                amongst other things, Swedish Body Massage and Aromatherapy, also Indian Head Massage and Reflexology.
                full body, takes 2 hours plus, depending on exactly what is required.
                Hot stones and Infra red or Nova sonic equipment can also be incorporated into the naturist massage at no extra cost" />
              <ServiceList image={therapyRoomImage} serviceTitle="Therapy Room" description="Relax in comfort and style, beauty, comfortable the therapy rooms.
                we have 3 different rooms for the best naturist massage experience,
                all decorated with calming colours and objects.
                You receive a warm welcome and be offered a drink immediately,
                your consultation also spends time  tailor making your therapy to
                suit you, you will be offered a choice of oils creams and lotions, and inclusion
                of face, hands and feet and heat treatment." />
            </div>
            <div className="flex justify-around gap-5">
              <ServiceList image={shavingImage} serviceTitle="Shaving" description="Ladies and gentleman have
                trimmed and pruned and shaped and shaved
                all body hair are for ages
                but this is where the naturist comes into his/her own.
                once you start to shave it seems you can't stop
                Be careful, before you know where you are you may
                have turned into a smoothie!" />
              <ServiceList image={coupleImage} serviceTitle="Couple" description="A naturist massage together can be a
                wonderful way to affirm your closeness,
                or to rekindle a romantic flame by
                taking the time out to do some thing lovely
                and relaxing together. it is a special and
                a memorable way to celebrate a special occasion.
                i often see my self as a catalyst a
                sort of a cupid figure, allowing and showing a couple
                how to massage, how to nature and be tender with each other" />
            </div>
          </div>
          )}
    </div>
  )};

export default Service;

