import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();
  console.log(register);

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">enter your name</label>
          <input type="text" id="name" className="border" />
        </div>
        <div>
          <label htmlFor="email">enter your email</label>
          <input type="email" id="email" className="border" />
        </div>
        <div>
          <label htmlFor="password">enter your password</label>
          <input type="password" id="password" className="border" />
        </div>
        <button className="border">submit</button>
      </form>
    </>
  );
}

export default Form;
