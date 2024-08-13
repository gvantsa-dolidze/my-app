import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      message,
    });
  };
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  return (
    <form
      action="submit"
      className="flex flex-col sm:w-96 gap-5 border p-5 rounded-md border-gray-700 shadow-xl"
    >
      <Input
        id="first_name"
        placeholder="First Name"
        name="first_name"
        label="Enter your First Name:"
        type="text"
        value={firstName}
        onChange={handleInputChange(setFirstName)}
      />
      <Input
        id="last_name"
        placeholder="Last Name"
        name="last_name"
        label="Enter your Last Name:"
        type="text"
        value={lastName}
        onChange={handleInputChange(setLastName)}
      />
      <Input
        id="email"
        placeholder="Email"
        name="email"
        label="Enter your Email:"
        type="email"
        value={email}
        onChange={handleInputChange(setEmail)}
      />
      <TextArea
        id="text_area"
        placeholder="Wrote your massage here..."
        name="massage"
        label="Leave your message here:"
        value={message}
        onChange={handleInputChange(setMessage)}
      />
      <Button text="Submit" styles="secondary" onclick={submitForm} />
    </form>
  );
};

export default Form;
