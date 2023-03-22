import { useState } from "react";

//Careful to surround useState in brackets, it changes the import if you don't

import validateInfo from "./validateInfo";

const UseForm = () => {
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "",
    cardType: "",
    cardExpiration: "",
    cardSecurityCode: "",
    cardPostalCode: "",
    focus: "",
  });
  const [errors, setErrors] = useState({});

  //Rather than use the Vanilla JS (?) form listed in the library ( this.setState({ focus: e.target.name }) )
  //Example uses the React useState hook to achieve the same thing

  const handleFocus = (e) => {
    //declare two variables as the target input field
    const { name, value } = e.target;

    setValues({
      //Here the spread operator puts all the values into the state prop
      ...values,
      //??? (this line focuses the user on the field?)
      [name]: value,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,

      //??? (this line changes the value of the field?)
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //Prevent the default submission behaviour
    e.preventDefault();

    //Run the validate info methods on the values of the form
    setErrors(validateInfo(values));
  };

  return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default UseForm;
