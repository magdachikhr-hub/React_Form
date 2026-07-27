import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
            {...register("username", {
              required: "name is empty, please enter your name",
              minLength: {
                value: 2,
                message: "name must be min 2 characters",
              },
            })}
          />
          {errors.username && (
            <p className="text-[red]">{errors.username.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">enter your email</label>
          <input
            type="email"
            id="email"
            className="border"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <p className="text-[red]">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">enter your password</label>
          <input
            type="password"
            id="password"
            className="border"
            {...register("password", {
              required: "password is empty",
              minLength: {
                value: 8,
                message: "password is too short",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message: "make stronger password",
              },
            })}
          />
          {errors.password && (
            <span className="text-[red]">{errors.password.message}</span>
          )}
        </div>
        <button className="border">submit</button>
      </form>
    </>
  );
}

export default Form;
