import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();
  console.log(register);

  const submit = (data) => {
    console.log(data);
    console.log(data.username);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">enter your name</label>
          <input
            type="text"
            id="name"
            className="border"
            {...register("username")}
          />
        </div>
        <div>
          <label htmlFor="email">enter your email</label>
          <input
            type="email"
            id="email"
            className="border"
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="password">enter your password</label>
          <input
            type="password"
            id="password"
            className="border"
            {...register("password")}
          />
        </div>
        <button className="border">submit</button>
      </form>
    </>
  );
}

export default Form;
