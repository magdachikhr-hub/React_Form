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
      <main className="flex flex-col items-center bg-[#EDF3F8] min-h-screen">
        <h1 className="mt-18.75 mb-13.5 text-[48px] w-143.25 tracking-[-0.37px] leading-14 text-center text-[#36536B] font-normal">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <form onSubmit={handleSubmit(submit)} className="w-111.25 h-124.75 ">
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-[15px]">
              enter your name
            </label>
            <input
              type="text"
              id="name"
              className="border-b focus:outline-none pl-2"
              {...register("username", {
                required: "name is empty, please enter your name",
                minLength: {
                  value: 2,
                  message: "name must be min 2 characters",
                },
              })}
            />
            {errors.username && (
              <p className="text-[red] text-[12px]">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-[15px]">
              enter your email
            </label>
            <input
              type="email"
              id="email"
              className="border-b focus:outline-none pl-2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-[red] text-[12px] ">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col ">
            <label htmlFor="company" className="text-[15px]">
              enter your company name
            </label>
            <input
              type="text"
              id="company"
              className="border-b focus:outline-none pl-2"
              {...register("company", {
                required: "company name is empty",
              })}
            />
            {errors.company && (
              <span className="text-[red] text-[12px]">
                {errors.company.message}
              </span>
            )}
          </div>
          <div className="flex flex-col  ">
            <label htmlFor="title" className="text-[15px]">
              enter the title
            </label>
            <input
              type="text"
              id="title"
              className="border-b focus:outline-none pl-2"
              {...register("title", {
                required: "title is empty, please enter your title",
                minLength: {
                  value: 2,
                  message: "title must be min 2 characters",
                },
              })}
            />
            {errors.title && (
              <p className="text-[red] text-[12px]">{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col ">
            <label htmlFor="message" className="mb-6 text-[15px] ">
              enter a message
            </label>
            <input
              type="message"
              id="message"
              className="border-b focus:outline-none pl-2"
              {...register("message", {
                required: "message is empty, please enter your title",
                minLength: {
                  value: 18,
                  message: "message must be min 18 characters",
                },
              })}
            />
            {errors.message && (
              <p className="text-[red] text-[12px]">{errors.message.message}</p>
            )}
          </div>
          <div className="mt-6">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              Stay up-to-date with company announcements and updates to our API
            </label>
          </div>
          <button className="w-38 h-12 bg-transparent border border-[#36536B] rounded-3xl mt-6">
            submit
          </button>
        </form>
      </main>
    </>
  );
}

export default Form;
