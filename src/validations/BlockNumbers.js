import { number } from "yup";

export const handleKeyDown = (e) => {
  //   console.log(e.key);
  if (/[0-9]/.test(e.key)) {
    console.log("number");
    e.preventDefault();
  }
};

export const handlePaste = (e) => {
  console.log(e.target.value);
  const pastedValue = e.clipboardData.getData("text");
  if (/[0-9]/.test(pastedValue)) {
    console.log("its number");

    e.preventDefault();
  }
};
