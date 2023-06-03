import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import Form from "../Form";
import inputs from "@/shared/formData";

type Props = {
  setSelectedPage: (Value: SelectedPage) => void;
  values: {
    name: string;
    email: string;
    appointmentDate: string;
  };
};



const ContactUs = (props: Props) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    appointmentDay: "",
    massage:"",

  });

const handleSubmit = (e: 
  { preventDefault: () => void; }
  ) => {
    e.preventDefault();
  };

const onChange = (e: 
  { target: { name: string; value: string; }; }
  ) => {
  setValues(
    { ...values, [e.target.name]: e.target.value }
    );
};

  return (
    <div className="flex items-center justify-center w-ful mb-20">
      <div className="flex items-center justify-center bg-gradient-to-r from-[#a8a8b8] via-[#c6c6c6] to-[#a8a8b8] w-3/5 rounded-lg mb-20">
        <div className="flex items-center justify-center">
          <form action="#" method="POST" onSubmit={handleSubmit} className="">
            <h1 className="text-center text-[30px] text-primary-100 font-semibold mt-10 mb-10">BOOK AN APPOINMENT</h1>
            {inputs?.map((input) => (
              <Form 
                key={input.id}
                {...input}
                value={input.name}
                onChange={onChange}
              />
            ))}
            <div className="flex items-center justify-center mb-4">
              <button className="btn transition ease-in-out delay-150 bg-primary-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#f39d1a] duration-300">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
