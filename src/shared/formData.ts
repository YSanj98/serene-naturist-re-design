const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "Full Name should be 3-16 characters and shouldn't include any special character!",
      label: "Full Name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "appointmentDay",
      type: "date",
      placeholder: "Appointment Date",
      label: "Appointment Date",
    },   
    {
      id: 4,
      name: "massage",
      type: "text",
      placeholder: "Requests or Requirements",
      label: "Massage",
    },
  ];

  export default inputs
