import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      company: "tech",
    },
  });

  const submit = (data) => {
    console.log(data);
    reset();
  };
  const password = watch("password");
  console.log(password);

  const isRobot = watch("robot");
  console.log(isRobot);

  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="mt-18.75 mb-13.5 text-[48px] w-143.25 tracking-[-0.37px] leading-14 text-center text-[#36536B] font-normal">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <form onSubmit={handleSubmit(submit)} className="w-111.25 h-124.75 ">
          <div className="flex flex-col ">
            {/* <label htmlFor="name" className="text-[15px]">
              enter your name
            </label> */}
            <input
              type="text"
              id="name"
              className="border-b border-b-[#91A2B1] focus:outline-none pl-2 pb-4"
              placeholder="Name"
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
            {/* <label htmlFor="email" className="text-[15px]">
              enter your email
            </label> */}
            <input
              type="email"
              id="email"
              className="border-b border-b-[#91A2B1] focus:outline-none pl-2 pb-4 pt-2"
              placeholder="Email Address"
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
            {/* <label htmlFor="company" className="text-[15px]">
              enter your company name
            </label> */}
            <input
              type="text"
              id="company"
              className="border-b border-b-[#91A2B1] focus:outline-none pl-2 pb-4 pt-2"
              placeholder="Company Name"
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
            {/* <label htmlFor="title" className="text-[15px]">
              enter the title
            </label> */}
            <input
              type="text"
              id="title"
              className="border-b border-b-[#91A2B1] focus:outline-none pl-2 pb-4 pt-2"
              placeholder="Title"
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
            {/* <label htmlFor="message" className="mb-6 text-[15px] ">
              enter a message
            </label> */}
            <input
              type="message"
              id="message"
              className="border-b border-b-[#91A2B1] focus:outline-none pl-2 pb-14 pt-2"
              placeholder="Message"
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
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "password is required",
                validate: (text) => {
                  console.log(text);
                  return text.includes("@") || "please include @";
                },
              })}
              className="border-b border-b-[#91A2B1] focus:outline-none pl-2 pb-4 pt-2"
            />
            {errors.password && (
              <p className="text-[red] text-[12px]">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword">confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "confirmPassword is required",
                validate: (text) => {
                  return text === password || "password doesn't match";
                },
              })}
              className="border-b border-b-[#91A2B1] focus:outline-none pl-2 pb-4 pt-2"
            />
            {errors.confirmPassword && (
              <p className="text-[red] text-[12px]">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="mt-6 flex items-center gap-6.5">
            <div className="relative w-6 h-6">
              <input
                type="checkbox"
                id="checkbox"
                className="peer w-6 h-6 appearance-none bg-[#C0CBD5] checked:bg-[#BA4270]"
              />
              <span className="absolute inset-0 hidden items-center justify-center peer-checked:flex pointer-events-none">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.06055 6.03415L4.2335 9.20711L12.3799 1.06067"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </div>
            <label
              htmlFor="checkbox"
              className="w-69.25 text-[15px] leading-6.25 tracking-[-0.12px] text-[#36536B]"
            >
              Stay up-to-date with company announcements and updates to our API
            </label>
          </div>
          <div className="relative flex gap-2">
            <input
              type="checkbox"
              {...register("robot", {})}
              id="robot"
              className="peer w-6 h-6 appearance-none bg-[#C0CBD5] checked:bg-[#BA4270]"
            />
            <span className="absolute inset-0 hidden items-center justify-center peer-checked:flex pointer-events-none">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.06055 6.03415L4.2335 9.20711L12.3799 1.06067"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </span>
            <label htmlFor="robot">i am not a robot</label>
          </div>
          {isRobot && <div>find only busses</div>}
          <button
            type="submit"
            className="w-38 h-12 bg-transparent border border-[#36536B] rounded-3xl mt-6 hover:bg-[#36536B] hover:text-white text-[15px] font-bold text-[#36536B] tracking-[-0.12px]"
          >
            submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
